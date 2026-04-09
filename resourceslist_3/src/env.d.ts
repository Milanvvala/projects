type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

interface ImportMetaEnv {
	// readonly SECRET_PASSWORD: string;
	// readonly PUBLIC_ANYBODY: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare namespace App {
	interface Locals extends Runtime { }
}
