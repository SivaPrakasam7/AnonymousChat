import * as Logics from "src/logics";

// Individual block
export class Block<T> {
  readonly previousHash: string;
  readonly timestamp: number;
  readonly hash: string;
  readonly data: Omit<T, "previousHash" | "hash" | "timestamp">;
  constructor(
    previousHash: string,
    data: Omit<T, "previousHash" | "hash" | "timestamp">
  ) {
    this.previousHash = previousHash;
    this.timestamp = new Date().getTime();
    this.data = data;
    this.hash = this.calculateHash();
  }

  calculateHash = () =>
    new Logics.CryptoFn().getHash(
      this.previousHash + this.timestamp + JSON.stringify(this.data)
    );
}

// Block chain
export class BlockChain<T> {
  readonly chain: Block<T>[];
  constructor(data: Omit<T, "previousHash" | "hash" | "timestamp">) {
    this.chain = [this.createGenesisBlock(data)];
  }

  createGenesisBlock = (data: Omit<T, "previousHash" | "hash" | "timestamp">) =>
    new Block<T>("initial_block", data);

  getLatestBlock = () => this.chain[this.chain.length - 1];

  addNewBlock = (data: Omit<T, "previousHash" | "hash" | "timestamp">) =>
    this.chain.push(new Block<T>(this.getLatestBlock().hash, data));

  getData = () => JSON.parse(JSON.stringify(this));
}
