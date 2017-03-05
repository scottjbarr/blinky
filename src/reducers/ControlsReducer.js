import { CONTROLS_TOGGLE_VISIBILTY } from '../actions/index'

const INITIAL_STATE = {
  visible: true
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CONTROLS_TOGGLE_VISIBILTY:
    return { visible: !state.visible }
  default:
    return state
  }
}
