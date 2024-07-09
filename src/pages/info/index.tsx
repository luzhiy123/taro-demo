import { Button, Text, View } from '@tarojs/components';
import { inject, observer } from 'mobx-react';
import type { PropsWithChildren } from 'react';
import { Component } from 'react';

import Taro from '@tarojs/taro';
import './index.scss';

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

@inject('store')
@observer
class Index extends Component<PropsWithChildren<PageStateProps>> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props.store;
    counterStore.incrementAsync();
  };

  goIndex = () => {
    Taro.navigateTo({
      url: '/pages/index/index',
    });
  };

  render() {
    const {
      counterStore: { counter },
    } = this.props.store;
    return (
      <View className="index">
        <Button onClick={this.increment}>+ +++</Button>
        <Button onClick={this.decrement}>- +++</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <Button onClick={this.goIndex}>goHome</Button>
      </View>
    );
  }
}

export default Index;
