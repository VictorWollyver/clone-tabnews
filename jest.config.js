const nextJest = require("next/jest");
const dotenv = require("dotenv");

const createJestConfig = nextJest({
	dir: "./src",
});

dotenv.config({ path: ".env.development" });

const jestConfig = createJestConfig({
	moduleDirectories: ["node_modules", "<rootDir>/src"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
});

module.exports = jestConfig;
