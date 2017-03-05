import { BACKGROUND_COLOR_CHANGE } from '../actions/index'

const INITIAL_STATE = {
  color: 'green'
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case BACKGROUND_COLOR_CHANGE:
    return { color: action.payload }
  default:
    return state
  }
}
