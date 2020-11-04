export class ServerRuntimeError extends Error {
  constructor(message) {
    super(message);
    this.name = "ServerRuntimeError";
    this.code = "0x00";
  }
}
