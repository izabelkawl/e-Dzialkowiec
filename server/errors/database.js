export class DatabaseConnectionError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseConnectionError";
    this.code = "1x00";
  }
}

export class DatabaseInsertError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseInsertError";
    this.code = "1x01";
  }
}

export class DatabaseUpdateError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseTpdaterror";
    this.code = "1x02";
  }
}
