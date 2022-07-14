import { allureReportsHelpers, assertJS, wikipediaScreen } from "../../constants"
import { describeName } from "../../data/describe.data"
import { feature } from "../../data/feature.data"
import { severity } from "../../data/severity.data"

describe(describeName.app1, () => {

    it(`[APP01-000001]can find search results`, async () => {
        await allureReportsHelpers.addAllureMobile(924, severity.blocker, feature.login)

        await (await wikipediaScreen).clickInpSearch()
        await (await wikipediaScreen).setInpSearchText("BrowserStack")
        //await browser.pause(5000);
        assertJS.isTrue(await (await wikipediaScreen).isExistLblProductName("BrowserStack"))
    })
})