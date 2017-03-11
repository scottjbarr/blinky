import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import BlinkyContainer from './components/BlinkyContainer'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BlinkyContainer} />
  </Route>
)
