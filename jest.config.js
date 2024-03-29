module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        },
    setupFilesAfterEnv: [
        './src/setupTests.js'
    ],
    testEnvironment: 'jsdom',
    transformIgnorePatterns : 
    ["node_modules/(?!axios)/"],
    moduleNameMapper: {
        '^axios$': require.resolve('axios'),
        "\\.(jpg|jpeg|png)$": "identity-obj-proxy",
        "\\.(png|svg|pdf|jpg|jpeg)$": "<rootDir>/path-to-fileMock.js",
      },
}