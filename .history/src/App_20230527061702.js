import React, {useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [userList, serUserList] = useState([]);

  async function fetchData() {
    setLoading(true);
    const response = await axios.get(URL);
    setLoading(false);
    serUserList(response.data);
  }

  const renderUser = ({item}) => (
    <UserCard name={item.name} email={item.email} username={item.username} />
  );

  return (
    <View>
      <FlatList data={userList} renderItem={renderUser} />
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
};

export default App;
