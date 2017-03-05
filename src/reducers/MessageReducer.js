import { MESSAGE_INPUT_ON_CHANGE } from '../actions/index'

const INITIAL_STATE = {
  text: 'yolo'
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case MESSAGE_INPUT_ON_CHANGE:
    return { text: action.payload }
  default:
    return state
  }
}
