import { combineReducers } from 'redux'
import MessageReducer from './MessageReducer'
import BackgroundColorReducer from './BackgroundColorReducer'
import ControlsReducer from './ControlsReducer'

const rootReducer = combineReducers({
  message: MessageReducer,
  background: BackgroundColorReducer,
  controls: ControlsReducer
})

export default rootReducer
