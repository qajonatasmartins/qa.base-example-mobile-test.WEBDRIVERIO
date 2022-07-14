//import { permissionHelpers } from "../../constants" --> class aqui tem exemplo
import WikipediaAndroidScreen from "./wikipedia.android.screen"

export default class WikipediaIOSScreen extends WikipediaAndroidScreen {

    get inpSearch() { return $('') }
    get inpSearchText() { return $('') }
    set lblProductName(name) { this.nameSearch = $(``) }
    get lblProductName() { return this.nameSearch }

    // async clickInpSearch() {
    //     //se houver algo diferente ai deve criar um mesmo método com mesmo nome do android aqui
    //     // para que o código entenda que no ios é diferente a acão.
    // }

    // async setInpSearchText(nameSearch) {
    //     //se houver algo diferente ai deve criar um mesmo método com mesmo nome do android aqui
    //     // para que o código entenda que no ios é diferente a acão.
    // }

    // async isExistLblProductName(name) {
    //     //se houver algo diferente ai deve criar um mesmo método com mesmo nome do android aqui
    //     // para que o código entenda que no ios é diferente a acão.
    // }
}