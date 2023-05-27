import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard/UserCard';

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [userList, serUserList] = useState([]);

  async function fetchData() {
    const response = await axios.get(URL);
    setLoading(false);
    serUserList(response.data);
  }

  const renderUser = ({item}) => (
    <UserCard name={item.name} email={item.email} username={item.username} />
  );

  useEffect(() => {
    fetchData();

    return null;
  }, []);

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList data={userList} renderItem={renderUser} />
      )}

      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
};

export default App;
