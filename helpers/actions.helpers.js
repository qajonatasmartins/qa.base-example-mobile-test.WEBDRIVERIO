import { keysValues } from "../data/keysValues.data"
import { performActions } from "../data/performActions.data"

export default class Actions {

    /**
     * Método responsável por enviar um único comando do teclado
     * @param {String} stingKey - String do comando do teclado a ser utilizado (Ex.: Shift, Ctrl e etc.)
     */
    async keys(stingKey = keysValues.enter) {
        await browser.keys(stingKey)
    }

    /**
     * Método responsável por enviar um comando do teclado segurando mais de uma tecla do teclado.
     * @param {String} keys - Array com os comandos a serem pressionados juntos no teclado.
     */
    async performActionsKeys(keys = performActions.shift_home) {
        await browser.performActions([{
            type: 'key',
            id: 'keyboard',
            actions: keys
        }])
    }

    /**
     * Método responsável por realizar o upload de um arquivo
     * @param {WebElement} element - Elemento mapeado
     * @param {String} path - diretório do arquivo
     */
    async uploadFiles(element, pathFile) {
        const filePath = `${downloadDir}${pathFile}`
        const remoteFilePath = await browser.uploadFile(filePath)
        await element.addValue(remoteFilePath)
    }

    /**
     * Método para executar um script no navegador, quando não for possível detectar um elemento ou etc.
     * @param {String} script - O script a ser executado. EX.: document.getElementById('inp-alert-1').value
     * @returns 
     */
    async executeScriptBrowser(script) {
        return await browser.executeScript(script, [""])
    }

    /**
     * Método responsável por verificar se pode marcar um checkbox
     * Verifica se o checkbox está desmarcado, se sim, ele vai marcar o checkbox
     * @param {*} element - Elemento que deseja verificar se pode ser marcado.
     */
    async selectedElement(element) {
        if (await element.isSelected() === false) {
            await element.click()
        }
    }

    /**
     * Método responsável por verificar se pode desmarcar um checkbox
     * Verifica se o checkbox está marcado, se sim, ele vai desmarcar o checkbox
     * @param {*} element - Elemento que deseja verificar se pode ser marcado.
     */
    async uncheckedElement(element) {
        if (await element.isSelected() === true) {
            await element.click()
        }
    }

    async getCookie() {
        return await browser.getCookies(['NomeCookie'])
    }
}