/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HEADER_LOGO_URL?: string;
  readonly VITE_FOOTER_LOGO_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}