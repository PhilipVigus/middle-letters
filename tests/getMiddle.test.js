import getMiddle from "../src/getMiddle";

describe("getMiddle", () => {
  it("returns the middle letter for the word 'a'", () => {
    expect(getMiddle("a")).toEqual("a");
  });
});
