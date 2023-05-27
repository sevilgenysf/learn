import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import axios from 'axios';

const App = () => {
  const [userList, serUserList] = useState([]);

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
