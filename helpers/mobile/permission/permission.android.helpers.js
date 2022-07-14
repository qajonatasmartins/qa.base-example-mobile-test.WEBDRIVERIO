import { permission } from "../../../data/permission.data"

export default class PermissionAndroidHelpers {
    set btnAlertPermission(name) { this.permissionName = $(`android=new UiSelector().text("${name}")`) }
    get btnAlertPermission() { return this.permissionName }

    async clickBtnAlertPermission(permissionName = permission.android.whileUsingTheApp) {
        this.btnAlertPermission = permissionName
        await this.btnAlertPermission.click()
    }
}