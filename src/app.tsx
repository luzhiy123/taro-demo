import { Provider } from 'mobx-react';
import type { PropsWithChildren } from 'react';
import { Component } from 'react';
import './app.scss';
import counterStore from './store/counter';

const store = {
  counterStore,
};

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  // this.props.children 就是要渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
