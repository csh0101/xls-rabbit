module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ["<rootDir>/src/__tests__/*.(spec|test).js?(x)"],
    setupFilesAfterEnv: ['jest-fetch-mock', '@babel/register'],
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.test.js$': 'babel-jest',
        '^.+\\.js$': 'babel-jest',
        '^.+\\.mjs$': 'babel-jest',
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    transformIgnorePatterns: ["/node_modules/"],
    verbose: false,
    // globals: {
    //     vue: vue
    // },
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"],
    },
};