import { MESSAGE_INPUT_ON_CHANGE, BLINKY_LOAD } from '../actions/index'

const INITIAL_STATE = {
  text: 'yolo'
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case MESSAGE_INPUT_ON_CHANGE:
    return { text: action.payload }
  case BLINKY_LOAD:
    const text = action.payload.text

    if (text !== 'undefined') {
      return { text: action.payload.text }
    }

    return state

  default:
    return state
  }
}
