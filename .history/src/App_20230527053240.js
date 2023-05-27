import axios from 'axios';
import React from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  async function fetchData() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    console.log(response);
  }

  return (
    <View>
      <Text>Merhaba Home</Text>
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
};

export default App;
