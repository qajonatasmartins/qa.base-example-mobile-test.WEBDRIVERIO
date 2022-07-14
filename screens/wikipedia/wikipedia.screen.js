import WikipediaAndroidScreen from "./wikipedia.android.screen"
import WikipediaIOSScreen from "./wikipedia.ios.screen"

export default class WikipediaScreen {

    async getWikipediaScreen() {
        return await driver.isAndroid ? new WikipediaAndroidScreen() : new WikipediaIOSScreen()
    }
}