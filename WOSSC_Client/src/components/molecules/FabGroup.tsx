import React, { Component } from 'react';
import { FAB } from 'react-native-paper';

type Props = {
  visible:boolean,
  actions:any[]
};

export default class FabGroup extends Component<Props> {

  state = {open: false};

  render(){
    const {open} = this.state;

    return(<FAB.Group visible={this.props.visible}
      actions={this.props.actions}
      open={open}
      icon={open ? 'close' : 'plus'}
      onStateChange={this._onStateChange} />)
  }

  _onStateChange = ({ open }: any) => this.setState({ open });
}