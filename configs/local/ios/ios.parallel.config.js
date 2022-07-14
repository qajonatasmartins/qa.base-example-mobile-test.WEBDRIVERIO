const { config } = require('../wdio.shared.app.conf')
const path = require('path')


config.capabilities = [
    {
        automationName: 'XCUITest',
        bundleId: `org.wikipedia.alpha`,
        noReset: false,
        autoAcceptAlerts: true,
        app: path.resolve(`./apps/bs_ios.app`), // deve ter um app .app para testar local e .ipa para upar para o browserstack
        platformName: "iOS",
        platformVersion: "14.5",
        deviceName: "iPhone 11",
        wdaLocalPort: 8206
    },
    {
        automationName: 'XCUITest',
        bundleId: `org.wikipedia.alpha`,
        noReset: false,
        autoAcceptAlerts: true,
        app: path.resolve(`./apps/bs_ios.app`), // deve ter um app .app para testar local e .ipa para upar para o browserstack
        platformName: "iOS",
        platformVersion: "14.5",
        deviceName: "iPhone 12",
        wdaLocalPort: 8207
    }//, {
    //    platformName: 'iOS',
    //    deviceName: 'iPhone 12',
    //    wdalocalport: 4724,
    //    platformVersion: '14.5'
    //}
]

config.reporters = ['spec', ['allure', {
    outputDir: './reports/local/ios/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config