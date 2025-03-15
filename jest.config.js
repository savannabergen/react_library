export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.app.json",
      },
    ],
  },
  moduleNameMapper: {
    "\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\.svg$": "jest-transformer-svg",
  },
};
