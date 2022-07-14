import PermissionAndroidHelpers from "./permission.android.helpers"
import PermissionIOSHelpers from "./permission.ios.helpers"

export default class PermissionHelpers {

    async getPermissionHelpers() {
        return await driver.isAndroid ? new PermissionAndroidHelpers() : new PermissionIOSHelpers()
    }
}