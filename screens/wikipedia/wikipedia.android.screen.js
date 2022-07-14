export default class WikipediaAndroidScreen {

    get inpSearch() { return $('~Search Wikipedia') }
    get inpSearchText() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")') }
    set lblProductName(name) { this.nameSearch = $(`android=new UiSelector().resourceId("org.wikipedia.alpha:id/page_list_item_title").text("${name}")`) }
    get lblProductName() { return this.nameSearch }

    async clickInpSearch() {
        await this.inpSearch.waitForDisplayed({ timeout: 30000 })
        await this.inpSearch.click()
    }

    async setInpSearchText(nameSearch) {
        await this.inpSearchText.waitForDisplayed({ timeout: 30000 })
        await this.inpSearchText.addValue(nameSearch)
    }

    async isExistLblProductName(name) {
        this.lblProductName = name
        await this.lblProductName.waitForDisplayed({ timeout: 30000 })
        return await this.lblProductName.isDisplayed()
    }
}