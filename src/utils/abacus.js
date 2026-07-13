/**
 * 17-rod soroban-style abacus: 1 heaven bead (5) + 4 earth beads (1) per rod.
 * Earth beads act as a contiguous stack from the beam: click inactive bead s moves beads 0..s
 * toward the beam; click active bead s moves beads s..3 away. Heaven bead toggles alone.
 * Beads: squashed ellipse + radial depth + horizontal multiply taper + elliptical gloss + rim.
 */

function UIElement(x, y, width, height, type, ref) {
  this.x = x;
  this.y = y;
  this.x2 = x + width;
  this.y2 = y + height;
  this.type = type;
  this.ref = ref;
}

function Bead() {
  this.x = 0;
  this.y = 0;
  this.targetY = 0;
  this.inactiveY = 0;
  this.activeY = 0;
  this.value = 1;
  this.active = false;
  this.rod = 0;
  this.slot = 0;
  this.uniqueID = -1;
}

function AbacusCtrl() {
  this.numRods = 17;
  this.beadPerRod = 5;
  this.heavenIdx = 4;
  this.nodes = [];

  this.m = {
    frame: 14,
    rodPitch: 44,
    beadW: 32,
    beadH: 24,
    dividerY: 0,
    logicalW: 800,
    logicalH: 420,
  };

  this.applyLayout = function (logicalW, logicalH) {
    const frame = this.m.frame;
    const innerW = Math.max(200, logicalW - 2 * frame);
    const rodPitch = innerW / this.numRods;
    const beadW = Math.min(46, Math.max(22, rodPitch + 1));
    const beadH = Math.round(beadW * 0.9);

    const beamThickness = 5;
    const gapAboveBeam = Math.round(beadH * 0.72);
    const heavenInactiveTop = frame;
    const dividerY = heavenInactiveTop + beadH + gapAboveBeam;
    const earthTravel = Math.round(beadH * 0.82);
    const earthGap = 0;

    const stackBase = dividerY + beamThickness + earthTravel;
    const lastEarthTop = stackBase + 3 * (beadH + earthGap);
    const earthContentBottom = lastEarthTop + beadH;
    const bottomPad = frame;
    const logicalHNeeded = earthContentBottom + bottomPad;

    this.m.logicalW = logicalW;
    this.m.logicalH = logicalHNeeded;
    this.m.rodPitch = rodPitch;
    this.m.beadW = beadW;
    this.m.beadH = beadH;
    this.m.dividerY = dividerY;
    this.m.beamThickness = beamThickness;
    this.m.earthTravel = earthTravel;
    this.m.earthGap = earthGap;

    let id = 0;
    if (this.nodes.length !== this.numRods * this.beadPerRod) {
      this.nodes.length = 0;
      for (let rod = 0; rod < this.numRods; rod++) {
        for (let slot = 0; slot < this.beadPerRod; slot++) {
          const b = new Bead();
          b.rod = rod;
          b.slot = slot;
          b.value = slot === this.heavenIdx ? 5 : 1;
          b.uniqueID = id++;
          this.nodes.push(b);
        }
      }
    }

    for (let rod = 0; rod < this.numRods; rod++) {
      const cx = frame + rod * rodPitch + rodPitch / 2;
      const x = cx - beadW / 2;

      for (let slot = 0; slot < this.beadPerRod; slot++) {
        const node = this.nodes[rod * this.beadPerRod + slot];
        node.x = x;

        if (slot === this.heavenIdx) {
          node.inactiveY = heavenInactiveTop;
          node.activeY = dividerY - beadH;
        } else {
          const k = slot;
          node.inactiveY = stackBase + k * (beadH + earthGap);
          node.activeY = node.inactiveY - earthTravel;
        }

        node.targetY = node.active ? node.activeY : node.inactiveY;
        node.y = node.targetY;
      }
    }
  };

  this.init = function (logicalW, logicalH) {
    this.applyLayout(logicalW, logicalH);
  };

  this.getBeadsCount = () => this.nodes.length;

  this.activated = function (nodeId) {
    const node = this.nodes[nodeId];
    if (node.slot === this.heavenIdx) {
      node.active = !node.active;
      node.targetY = node.active ? node.activeY : node.inactiveY;
      return;
    }
    const rod = node.rod;
    const s = node.slot;
    const base = rod * this.beadPerRod;
    if (!node.active) {
      for (let k = 0; k <= s; k++) {
        const b = this.nodes[base + k];
        b.active = true;
        b.targetY = b.activeY;
      }
      for (let k = s + 1; k < 4; k++) {
        const b = this.nodes[base + k];
        b.active = false;
        b.targetY = b.inactiveY;
      }
    } else {
      for (let k = s; k < 4; k++) {
        const b = this.nodes[base + k];
        b.active = false;
        b.targetY = b.inactiveY;
      }
    }
  };

  this.tickAnimation = function (factor) {
    const f = factor == null ? 0.32 : factor;
    let moving = false;
    for (let i = 0; i < this.nodes.length; i++) {
      const b = this.nodes[i];
      const dy = b.targetY - b.y;
      if (Math.abs(dy) < 0.45) {
        b.y = b.targetY;
      } else {
        b.y += dy * f;
        moving = true;
      }
    }
    return moving;
  };

  this.getRodValue = function (rod) {
    let v = 0;
    const base = rod * this.beadPerRod;
    if (this.nodes[base + this.heavenIdx].active) v += 5;
    for (let k = 0; k < 4; k++) {
      if (this.nodes[base + k].active) v += 1;
    }
    return v;
  };
}

/** Biconvex bead silhouette: ellipse with vertical squash (wider than tall, ~0.78–0.82 aspect). */
function beadShapePath(ctx, cx, cy, rx, ry) {
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
}

function Abacus(parentDivId) {
  const abacusCtrl = new AbacusCtrl();
  let canvas = null;
  let uiElements = [];
  let onResize = null;
  let onClick = null;
  let onMove = null;
  let onLeave = null;
  let rafId = null;
  let hoverRef = null;
  let dpr = 1;

  const DPR_CAP = 2;

  const measureLogicalSize = () => {
    const parent = document.getElementById(parentDivId);
    const maxW = parent ? Math.max(320, parent.clientWidth - 24) : 800;
    const logicalW = Math.floor(maxW);
    const logicalH = 420;
    return { logicalW, logicalH };
  };

  const stopRaf = () => {
    if (rafId != null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  const drawFrame = () => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const lw = abacusCtrl.m.logicalW;
    const lh = abacusCtrl.m.logicalH;
    const m = abacusCtrl.m;
    const frame = m.frame;
    const dividerY = m.dividerY;
    const beamThickness = m.beamThickness ?? 3;
    const innerLeft = frame;
    const innerRight = lw - frame;
    const innerTop = frame;
    const innerBottom = lh - frame;

    ctx.clearRect(0, 0, lw, lh);

    const frameGrad = ctx.createLinearGradient(0, 0, 0, lh);
    frameGrad.addColorStop(0, "#262b31");
    frameGrad.addColorStop(0.55, "#14181d");
    frameGrad.addColorStop(1, "#0d1014");
    ctx.fillStyle = frameGrad;
    ctx.fillRect(0, 0, lw, lh);

    ctx.fillStyle = "#eef1f4";
    ctx.fillRect(innerLeft, innerTop, innerRight - innerLeft, innerBottom - innerTop);

    ctx.strokeStyle = "#07090c";
    ctx.lineWidth = 1.4;
    ctx.strokeRect(0.7, 0.7, lw - 1.4, lh - 1.4);
    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.lineWidth = 1;
    ctx.strokeRect(2.4, 2.4, lw - 4.8, lh - 4.8);

    ctx.strokeStyle = "#1b2026";
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(innerLeft, innerTop);
    ctx.lineTo(innerRight, innerTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(innerLeft, innerBottom);
    ctx.lineTo(innerRight, innerBottom);
    ctx.stroke();

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 5.2;
    for (let rod = 0; rod < abacusCtrl.numRods; rod++) {
      const cx = frame + rod * m.rodPitch + m.rodPitch / 2;
      ctx.beginPath();
      ctx.moveTo(cx, innerTop);
      ctx.lineTo(cx, innerBottom);
      ctx.stroke();
    }

    ctx.fillStyle = "#000000";
    ctx.fillRect(innerLeft, dividerY, innerRight - innerLeft, beamThickness);
    ctx.fillStyle = "rgba(255,255,255,0.16)";
    ctx.fillRect(innerLeft, dividerY, innerRight - innerLeft, 1);

    const dotCy = dividerY + beamThickness / 2;
    const dotR = Math.max(1.8, Math.min(2.8, m.beadH * 0.09));
    ctx.fillStyle = "#c7cdd4";
    const markerRods = [2, 5, 8, 11, 14]; // 3rd, 6th, 9th, 12th, 15th (1-based)
    for (let i = 0; i < markerRods.length; i++) {
      const rod = markerRods[i];
      if (rod >= abacusCtrl.numRods) continue;
      const cx = frame + rod * m.rodPitch + m.rodPitch / 2;
      ctx.beginPath();
      ctx.arc(cx, dotCy, dotR, 0, Math.PI * 2);
      ctx.fill();
    }

    uiElements.length = 0;
    const bw = m.beadW;
    const bh = m.beadH;
    const beadStroke = "#4a261f";

    for (let i = 0; i < abacusCtrl.getBeadsCount(); i++) {
      const b = abacusCtrl.nodes[i];
      const x = b.x;
      const y = b.y;
      const isHover = hoverRef === i;

      const cx = x + bw / 2;
      const cy = y + bh / 2;
      const rxMax = bw / 2 - 0.85;
      const ryMax = bh / 2 - 0.65;
      const aspect = 0.92;
      let rx = Math.max(1.6, rxMax);
      let ry = rx * aspect;
      if (ry > ryMax) {
        ry = Math.max(1.2, ryMax);
        rx = Math.min(rxMax, ry / aspect);
      }

      ctx.save();

      ctx.shadowColor = "rgba(0,0,0,0.2)";
      ctx.shadowBlur = isHover ? 12 : 8;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = isHover ? 4 : 3;

      const hiLite = "#C96A3A";
      const midTone = "#B5532C";
      const edgeDeep = b.active ? "#7B321A" : "#8D3A1F";

      const body = ctx.createRadialGradient(
        cx - rx * 0.46,
        cy - ry * 0.52,
        Math.min(rx, ry) * 0.06,
        cx + rx * 0.06,
        cy + ry * 0.18,
        Math.max(rx, ry) * 1.12
      );
      body.addColorStop(0, isHover ? "#DA7D4D" : hiLite);
      body.addColorStop(0.32, midTone);
      body.addColorStop(0.62, b.active ? "#9E4524" : "#A94A27");
      body.addColorStop(1, edgeDeep);

      beadShapePath(ctx, cx, cy, rx, ry);
      ctx.fillStyle = body;
      ctx.fill();

      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;

      const taper = ctx.createLinearGradient(cx - rx, cy, cx + rx, cy);
      taper.addColorStop(0, "rgba(92,40,20,0.74)");
      taper.addColorStop(0.38, "rgba(255,255,255,0.14)");
      taper.addColorStop(0.5, "rgba(255,255,255,0.28)");
      taper.addColorStop(0.62, "rgba(255,255,255,0.14)");
      taper.addColorStop(1, "rgba(92,40,20,0.74)");
      beadShapePath(ctx, cx, cy, rx, ry);
      ctx.fillStyle = taper;
      ctx.globalCompositeOperation = "multiply";
      ctx.globalAlpha = isHover ? 0.62 : 0.52;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      const rim = ctx.createLinearGradient(cx - rx, cy, cx + rx, cy);
      rim.addColorStop(0, "rgba(112,47,23,0.34)");
      rim.addColorStop(0.5, "rgba(255,255,255,0)");
      rim.addColorStop(1, "rgba(112,47,23,0.34)");
      beadShapePath(ctx, cx, cy, rx, ry);
      ctx.fillStyle = rim;
      ctx.globalCompositeOperation = "soft-light";
      ctx.globalAlpha = 0.55;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      ctx.save();
      beadShapePath(ctx, cx, cy, rx, ry);
      ctx.clip();

      const gx = cx - rx * 0.38;
      const gy = cy - ry * 0.42;
      const grx = rx * 0.42;
      const gry = ry * 0.34;
      const gloss = ctx.createRadialGradient(gx, gy, 0, gx + grx * 0.35, gy + gry * 0.25, Math.max(grx, gry) * 1.1);
      gloss.addColorStop(0, isHover ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.42)");
      gloss.addColorStop(0.4, "rgba(255,255,255,0.14)");
      gloss.addColorStop(1, "rgba(255,255,255,0)");

      ctx.fillStyle = gloss;
      ctx.beginPath();
      ctx.ellipse(gx + grx * 0.35, gy + gry * 0.28, grx, gry, -0.28, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      beadShapePath(ctx, cx, cy, rx, ry);
      ctx.strokeStyle = isHover ? "rgba(32,18,14,0.88)" : "rgba(45,24,20,0.92)";
      ctx.lineWidth = isHover ? 1.35 : 1.15;
      ctx.stroke();

      beadShapePath(ctx, cx, cy, rx * 0.985, ry * 0.985);
      ctx.strokeStyle = "rgba(255,255,255,0.12)";
      ctx.lineWidth = 0.75;
      ctx.stroke();

      ctx.restore();

      uiElements.push(new UIElement(x, y, bw, bh, 0, i));
    }
  };

  const loop = () => {
    const moving = abacusCtrl.tickAnimation(0.3);
    drawFrame();
    if (moving) {
      rafId = requestAnimationFrame(loop);
    } else {
      rafId = null;
    }
  };

  this.destroy = function () {
    stopRaf();
    if (onResize) {
      window.removeEventListener("resize", onResize);
      onResize = null;
    }
    if (canvas) {
      if (onClick) canvas.removeEventListener("click", onClick);
      if (onMove) canvas.removeEventListener("mousemove", onMove);
      if (onLeave) canvas.removeEventListener("mouseleave", onLeave);
    }
    onClick = null;
    onMove = null;
    onLeave = null;
    canvas = null;
    uiElements.length = 0;
    hoverRef = null;
    const parent = document.getElementById(parentDivId);
    if (parent) parent.innerHTML = "";
  };

  this.update = function () {
    drawFrame();
  };

  this.init = function () {
    const parent = document.getElementById(parentDivId);
    if (!parent) return;

    parent.innerHTML = "";

    const { logicalW, logicalH } = measureLogicalSize();
    abacusCtrl.init(logicalW, logicalH);

    canvas = document.createElement("canvas");
    dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
    canvas.width = Math.floor(abacusCtrl.m.logicalW * dpr);
    canvas.height = Math.floor(abacusCtrl.m.logicalH * dpr);
    canvas.style.width = `${abacusCtrl.m.logicalW}px`;
    canvas.style.height = `${abacusCtrl.m.logicalH}px`;
    canvas.className =
      "abacus-canvas max-w-full cursor-pointer rounded-lg border border-black/40 shadow-md";
    canvas.style.display = "block";
    canvas.style.margin = "0 auto";
    canvas.style.background = "#111418";
    canvas.setAttribute("role", "img");
    canvas.setAttribute("aria-label", "Interactive 17-rod abacus — click beads to move them");

    parent.appendChild(canvas);

    const toLogical = (e) => {
      const rect = canvas.getBoundingClientRect();
      const dprLocal = Math.min(window.devicePixelRatio || 1, DPR_CAP);
      const sx = canvas.width / rect.width;
      const sy = canvas.height / rect.height;
      return {
        x: ((e.clientX - rect.left) * sx) / dprLocal,
        y: ((e.clientY - rect.top) * sy) / dprLocal,
      };
    };

    onClick = (e) => {
      if (!canvas) return;
      const { x: lx, y: ly } = toLogical(e);
      for (let i = uiElements.length - 1; i >= 0; i--) {
        const el = uiElements[i];
        if (lx > el.x && lx < el.x2 && ly > el.y && ly < el.y2) {
          abacusCtrl.activated(el.ref);
          stopRaf();
          rafId = requestAnimationFrame(loop);
          break;
        }
      }
    };

    onMove = (e) => {
      if (!canvas) return;
      const { x: lx, y: ly } = toLogical(e);
      let hit = null;
      for (let i = uiElements.length - 1; i >= 0; i--) {
        const el = uiElements[i];
        if (lx > el.x && lx < el.x2 && ly > el.y && ly < el.y2) {
          hit = el.ref;
          break;
        }
      }
      if (hit !== hoverRef) {
        hoverRef = hit;
        drawFrame();
      }
    };

    onLeave = () => {
      hoverRef = null;
      drawFrame();
    };

    canvas.addEventListener("click", onClick);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    onResize = () => {
      const { logicalW, logicalH } = measureLogicalSize();
      abacusCtrl.applyLayout(logicalW, logicalH);
      dpr = Math.min(window.devicePixelRatio || 1, DPR_CAP);
      canvas.width = Math.floor(abacusCtrl.m.logicalW * dpr);
      canvas.height = Math.floor(abacusCtrl.m.logicalH * dpr);
      canvas.style.width = `${abacusCtrl.m.logicalW}px`;
      canvas.style.height = `${abacusCtrl.m.logicalH}px`;
      drawFrame();
    };
    window.addEventListener("resize", onResize, { passive: true });

    drawFrame();
  };
}

export default Abacus;
