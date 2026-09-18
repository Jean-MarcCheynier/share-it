/** @type {import('jest').Config} */
module.exports = {
  rootDir: ".",
  testRegex: ".*\\.e2e-spec\\.ts$",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["js", "json", "ts"],
  testEnvironment: "node",
};
