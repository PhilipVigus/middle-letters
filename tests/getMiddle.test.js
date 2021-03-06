import getMiddle from "../src/getMiddle";

describe("getMiddle", () => {
  it("returns the middle letter for the word 'a'", () => {
    expect(getMiddle("a")).toEqual("a");
  });

  it("returns the middle letter for the word 'I'", () => {
    expect(getMiddle("I")).toEqual("I");
  });

  it("returns the middle letter for the word 'abc'", () => {
    expect(getMiddle("abc")).toEqual("b");
  });

  it("returns the middle letter for the word 'of'", () => {
    expect(getMiddle("of")).toEqual("of");
  });

  it("returns the middle letter for the word 'middle'", () => {
    expect(getMiddle("middle")).toEqual("dd");
  });
});
