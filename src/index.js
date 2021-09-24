import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './views/routes/App'
import store from './state/store'
const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )

renderApp()
