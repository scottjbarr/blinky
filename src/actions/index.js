export const MESSAGE_INPUT_ON_CHANGE = 'MESSAGE_INPUT_ON_CHANGE'
export const BACKGROUND_COLOR_CHANGE = 'BACKGROUND_COLOR_CHANGE'
export const CONTROLS_TOGGLE_VISIBILTY = 'CONTROLS_TOGGLE_VISIBILITY'

export function messageInputOnChange(event) {
  return {
    type: MESSAGE_INPUT_ON_CHANGE,
    payload: event.target.value
  }
}

export function backgroundColorOnChange(event) {
  return {
    type: BACKGROUND_COLOR_CHANGE,
    payload: event.target.value
  }
}

export function controlsToggleVisibility() {
  return {
    type: CONTROLS_TOGGLE_VISIBILTY
  }
}
