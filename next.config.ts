import type { NextConfig } from "next";
import { assertEnv } from "./lib/env";

assertEnv();

const codespaceHost = process.env.CODESPACE_NAME
  ? `${process.env.CODESPACE_NAME}-3000.${process.env.GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}`
  : undefined;

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", ...(codespaceHost ? [codespaceHost] : [])],
    },
  },
};

export default nextConfig;
