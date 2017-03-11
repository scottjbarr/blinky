import { BACKGROUND_COLOR_CHANGE, BLINKY_LOAD } from '../actions/index'

const INITIAL_STATE = {
  color: 'green'
}

const validStates = [
  'green', 'red'
]

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case BACKGROUND_COLOR_CHANGE:
    return { color: action.payload }

  case BLINKY_LOAD:
    const c = action.payload.color

    if (validStates.includes(c)) {
      return { color: action.payload.color }
    }

    return state

  default:
    return state
  }
}
