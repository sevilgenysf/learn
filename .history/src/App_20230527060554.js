import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

const App = () => {
  const [userList, serUserList] = useState([]);

  async function fetchData() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    serUserList(response.data);
  }

  const renderUser = ({item}) => <UserCard name={item.name} />;

  return (
    <View>
      <FlatList data={userList} renderItem={renderUser} />
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
};

export default App;
