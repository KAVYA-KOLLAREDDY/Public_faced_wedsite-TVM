/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME?: string;
  readonly VITE_APP_DESCRIPTION?: string;
  readonly VITE_APP_AUTHOR?: string;
  readonly VITE_OG_IMAGE?: string;
  readonly VITE_TWITTER_SITE?: string;
  readonly VITE_CONTACT_PHONE?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  /** Set to "true" to show the curtain reveal gate on `/` until dismissed */
  readonly VITE_LAUNCH_GATE?: string;
}
