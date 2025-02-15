import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.ts", "**/?(*.)+(spec|test).ts"],
};

export default config;