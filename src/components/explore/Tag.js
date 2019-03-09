import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Tag extends Component {
  render() {
    const { name } = this.props;
    return (
      <View
        style={{
          minHeight: 20,
          minWidth: 40,
          padding: 5,
          backgroundColor: 'white',
          borderColor: '#dddddd',
          borderWidth: 1,
          borderRadius: 2,
          marginRight: 5
        }}
      >
        <Text style={{ fontWeight: '700', fontSize: 10 }}>{name}</Text>
      </View>
    );
  }
}
export default Tag;
