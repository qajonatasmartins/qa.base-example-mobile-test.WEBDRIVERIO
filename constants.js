import WikipediaScreen from "./screens/wikipedia/wikipedia.screen"
import { assert } from "chai"
import Actions from "./helpers/actions.helpers"
import AllureReportsHelpers from "./helpers/allure.helpers"
import PermissionHelpers from "./helpers/mobile/permission/permission.helpers"

export const wikipediaScreen = new WikipediaScreen().getWikipediaScreen()
export const assertJS = assert
export const permissionHelpers = new PermissionHelpers().getPermissionHelpers()
export const allureReportsHelpers = new AllureReportsHelpers()
export const actions = new Actions()