import { expect } from "../{{cookiecutter.repo_name}}/src/chai";
import { flatten, permutate } from "../../src/util";

function fact(num: number) {
  let val = 1;
  let count = num;
  while (count > 0) {
    val *= count;
    count -= 1;
  }
  return val;
}

describe("Permutation tests", () => {
  const tests = ["a", "ab", "abc", "abcd"];
  // tslint:disable-next-line mocha-no-side-effect-code
  tests.forEach(str => {
    const expectedLen = fact(str.length);
    const arr = str.split("");
    it(`permutate '${String(arr)}'`, () => {
      const perms = permutate(arr);
      console.log(JSON.stringify(perms));
      expect(perms)
        .to.be.an("array")
        .that.has.lengthOf(expectedLen);
      // This assumes items are unique (otherwise you'll get dupes that filter out)
      const s = new Set(perms.map(val => val.join()));
      expect(s.size).to.equal(expectedLen);
    });
  });
});

describe("Flatten tests", () => {
  const tests = ["a", "a/bc", "ab/cd/ef", "ab//c/d/e"];

  // tslint:disable-next-line mocha-no-side-effect-code
  tests.forEach(str => {
    const arr = str.split("/").map(item => item.split(""));
    const expected = str.replace(/\//g, "").split("");
    it(`flatten: ${JSON.stringify(arr)} => ${JSON.stringify(expected)}`, () => {
      const flat = flatten(arr);
      expect(flat).to.be.an("array");
      // $XealthFlowIgnore property not found (ordered)
      expect(flat).to.have.ordered.members(expected);
    });
  });
});
