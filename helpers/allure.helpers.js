import allureReporter from "@wdio/allure-reporter"

export default class AllureReportsHelpers {

    async addAllureMobile(idTestCase, severity, feature) {
        await allureReporter.addIssue(`https://dev.azure.com/nome-organizacao/nome-squad/_workitems/edit/${idTestCase}`)
        await allureReporter.addSeverity(severity)
        await allureReporter.addFeature(feature)
    }
}