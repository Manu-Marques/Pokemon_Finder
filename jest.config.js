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
      },
}