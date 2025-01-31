<%if (['react', 'preact'].includes(framework)) {-%>
import { Component } from 'react'
import { Provider } from 'react-redux'
<%} else if (framework === 'nerv') { -%>
import Nerv, { Component } from 'nervjs'
import { Provider } from 'nerv-redux'
<%}-%>

import configStore from './store'

import './app.<%= cssExt %>'

const store = configStore()

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
