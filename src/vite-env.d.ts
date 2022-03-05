/// <reference types="vite/client" />

//  Firebase configurations
interface ImportMetaEnv {
  readonly VITE_APP_FIREBASE_API_KEY: string;
  readonly VITE_APP_AUTH_DOMAIN: string;
  readonly VITE_APP_PROJECT_ID: string;
  readonly VITE_APP_STORAGE_BUCKET: string;
  readonly VITE_APP_MESSAGING_SENDER_ID: string;
  readonly VITE_APP_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Children
interface child {
  children: React.ReactNode;
}

// Main interfaces
interface user {
  uid: string;
  name: string;
  profile: string;
  createdTime: number;
  signedIn: "true" | "false";
}
interface peerTopeer {
  peerId: string;
  clients: string[];
  createdTime: number;
  messages: messageBlock[];
}
interface messageBlock {
  previousHash: string;
  hash: string;
  uid: string;
  name: string;
  profile: string;
  timestamp: number;
  message: string;
  // medias: medias;
}
interface medias {
  image: string[];
}
