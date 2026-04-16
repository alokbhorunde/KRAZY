/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_CONTACT_EMAIL?: string;
  readonly VITE_PUBLIC_CALENDLY_URL?: string;
  readonly VITE_PUBLIC_LOCATION_LABEL?: string;
  readonly VITE_PUBLIC_PROJECT_SAFER_URL?: string;
  readonly VITE_PUBLIC_PROJECT_TECHSONIX_URL?: string;
  readonly VITE_PUBLIC_PROJECT_SKYMINENT_URL?: string;
  readonly VITE_PUBLIC_PRIVACY_URL?: string;
  readonly VITE_PUBLIC_TERMS_URL?: string;
  readonly VITE_PUBLIC_INSTAGRAM_URL?: string;
  readonly VITE_PUBLIC_TWITTER_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
