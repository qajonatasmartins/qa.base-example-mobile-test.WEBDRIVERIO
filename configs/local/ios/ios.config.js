const { config } = require('../wdio.shared.app.conf')
const path = require('path')

config.capabilities = [
    {
        platformName: 'iOS',
        automationName: 'XCUITest',
        bundleId: `org.wikipedia.alpha`,
        noReset: false,
        deviceName: 'iPhone 11',
        platformVersion: '14.5',
        autoAcceptAlerts: true,
        app: path.resolve(`./apps/bs_ios.app`) // deve ter um app .app para testar local e .ipa para upar para o browserstack
    }
]

config.reporters = ['spec', ['allure', {
    outputDir: './reports/local/ios/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config