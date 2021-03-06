import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Category extends Component {
  render() {
    const { imageUri, name } = this.props;
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: '#dddddd'
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'cover'
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
            {name}
          </Text>
        </View>
      </View>
    );
  }
}

export default Category;
