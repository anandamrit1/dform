import { Magic } from "magic-sdk";
import { FlowExtension } from "@magic-ext/flow";
import { OAuthExtension } from '@magic-ext/oauth';

const magicApiKey = "pk_live_104C69FAEEF2F977"

export const magic = new Magic(magicApiKey, {
  extensions: [
    new FlowExtension({
      rpcUrl: "https://rest-testnet.onflow.org",
      network: "testnet",
    }),
   new OAuthExtension(),
  ],
});

