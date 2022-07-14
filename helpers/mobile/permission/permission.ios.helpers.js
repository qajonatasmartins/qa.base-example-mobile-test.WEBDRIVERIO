import { permission } from "../../../data/permission.data"
import PermissionAndroidHelpers from "./permission.android.helpers"

export default class PermissionIOSHelpers extends PermissionAndroidHelpers {

    set btnAlertPermission(name) { this.permissionName = $(`-ios predicate string:type == 'XCUIElementTypeButton' && label CONTAINS '${name}'`) }
    get btnAlertPermission() { return this.permissionName }

    async clickBtnAlertPermission(permissionName = permission.ios.allowWhileUsingApp) {
        this.btnAlertPermission = permissionName
        await this.btnAlertPermission.waitForDisplayed()
        await this.btnAlertPermission.click()
    }
}