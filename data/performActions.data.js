/**
 * https://w3c.github.io/webdriver/#dfn-perform-actions
 * https://w3c.github.io/webdriver/#keyboard-actions
 */
export const performActions = {
    shift_home: [
        { type: 'keyDown', value: "\uE008" },
        { type: 'keyDown', value: "\uE011" },
        { type: 'keyUp', value: "\uE008" },
        { type: 'keyUp', value: "\uE011" }
    ]
}