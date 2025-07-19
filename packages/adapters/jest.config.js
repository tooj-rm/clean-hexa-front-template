const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    '^@clean/adapters': '<rootDir>/src',
    '^@clean/domain': '<rootDir>/../domain/src',
  },
  testMatch: ['<rootDir>/test/**/*.spec.ts'],
};