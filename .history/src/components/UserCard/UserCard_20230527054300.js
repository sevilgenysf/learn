import React from 'react';
import {View, Text} from 'react-native';

const UserCard = props => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
};

export default UserCard;
