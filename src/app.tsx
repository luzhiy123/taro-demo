import { Provider } from 'mobx-react';
import { Component, PropsWithChildren } from 'react';
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
