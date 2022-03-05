import * as Logics from "src/logics";

// User Details
export class User {
  createdTime: number;
  name: string;
  profile: string;
  uid: string;
  signedIn: "true" | "false";
  constructor(user: Pick<user, "name" | "profile">) {
    this.createdTime = new Date().getTime();
    this.name = user.name;
    this.profile = user.profile;
    this.uid = this.generateId();
    this.signedIn = "true";
  }

  generateId = () =>
    new Logics.CryptoFn().getHash(this.name + this.profile + this.createdTime);

  getData = () => JSON.parse(JSON.stringify(this));
}
