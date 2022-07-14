const { config } = require('../wdio.shared.app.conf')
const path = require('path');

config.capabilities = [{
    platformName: 'Android',
    platformVersion: '12',
    appPackage: 'org.wikipedia.alpha',
    appActivity: 'org.wikipedia.main.MainActivity',
    automationName: 'UiAutomator2',
    app: path.resolve(`./apps/bs_android.apk`),
    fullReset: true,
    autoAcceptAlerts: true
}
];


config.reporters = ['spec', ['allure', {
    outputDir: './reports/local/android/',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false
}]]

exports.config = config