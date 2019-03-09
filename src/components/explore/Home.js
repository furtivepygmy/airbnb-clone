import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import StarRating from 'react-native-star-rating';

class Home extends Component {
  render() {
    const { width, name, type, rating, price } = this.props;
    return (
      <View
        style={{
          width: width / 2 - 30,
          height: width / 2 - 30,
          borderWidth: 0.5,
          borderColor: '#dddddd',
          marginBottom: 10
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={require('../../../assets/home.jpg')}
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: 'cover'
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'space-evenly',
            paddingLeft: 10
          }}
        >
          <Text style={{ fontSize: 10, color: '#b63838' }}>{type}</Text>
          <Text style={{ fontSize: 12, fontWeight: 'bold' }}>{name}</Text>
          <Text style={{ fontSize: 10 }}>{price}</Text>
          <StarRating
            disable={true}
            maxStars={5}
            rating={rating}
            starSize={10}
          />
        </View>
      </View>
    );
  }
}

export default Home;
