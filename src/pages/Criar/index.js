import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Pressable,
} from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function Criar() {
  const [mostrarCampoImagem, setMostrarCampoImagem] = useState(false);
  const [imagemPath, setImagemPath] = useState('');
  const navigation = useNavigation();

  const handleAdicionar = () => {
    Alert.alert('Sucesso', 'Adicionado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Pressable onPress={() => setMostrarCampoImagem(true)}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/image-placeholder.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
        </Pressable>

        {mostrarCampoImagem && (
          <TextInput
            style={styles.imageInput}
            placeholder="Caminho da imagem"
            placeholderTextColor="#555"
            value={imagemPath}
            onChangeText={setImagemPath}
          />
        )}

        <View style={styles.inputGroup}>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Modelo:</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Ano:</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Número:</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Coleção:</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.label}>Tipo:</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAdicionar}>
        <Text style={styles.addButtonText}>ADICIONAR</Text>
      </TouchableOpacity>

      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={require('../../assets/icon1.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: -10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('Criar')}
        >
          <FontAwesome name="plus" size={34} color="#FFD700" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('WishList')}
        >
          <Image
            source={require('../../assets/icon2.png')}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}