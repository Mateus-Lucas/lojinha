import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import Api from '../../services/Api';

export default function Usuario({ route }) {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const { userId } = route.params; 
    Api.get(`/users/${userId}`)
      .then(response => {
        setUsuario(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar detalhes do usuário:', error);
      });
  }, [route.params]);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>
        Detalhes do Usuário
      </Text>
      <View style={{ margin: 10 }}>
        <Text>Nome: {usuario.name}</Text>
        <Text>Email: {usuario.email}</Text>
      </View>
    </View>
  );
}
