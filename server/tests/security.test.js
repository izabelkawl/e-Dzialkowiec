import testData from "./testData.json";
import { hashPassword } from "../utils/security.js";

describe("hash()", () => {
  it("Should hash password", async () => {
    const hashedPassword = await hashPassword(testData.password);

    expect(hashedPassword).not.toBe(testData.password);
  });
});
