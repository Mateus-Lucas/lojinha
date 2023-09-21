import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import Api from '../../services/Api';

export default function Home({ navigation }) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Faça uma solicitação à API para buscar a lista de usuários
    Api.get('/users')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Não foi possível buscar os usuários', error);
      });
  }, []);

  return (
    <View>
      <View style={{ backgroundColor: 'red', width: '100%' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 10 }}>
          Consulta de Usuários
        </Text>
      </View>
      <FlatList
        data={usuarios}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Button
              title={`Ver detalhes de ${item.name}`}
              onPress={() => navigation.navigate('Usuario', { userId: item.id })}
            />
          </View>
        )}
      />
    </View>
  );
}
