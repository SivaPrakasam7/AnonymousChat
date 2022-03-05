import * as Crypto from "crypto-js";

export class CryptoFn {
  getHash = (data: string) => Crypto.SHA256(data).toString();
}
