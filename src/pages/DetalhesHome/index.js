import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

export default function DetalhesHome() {
  const navigation = useNavigation();
  const route = useRoute();
  const { modelo, ano, numero, colecao, tipo } = route.params;

  const [isEditable, setIsEditable] = useState(false);

  const [modeloValue, setModeloValue] = useState(modelo);
  const [anoValue, setAnoValue] = useState(ano);
  const [numeroValue, setNumeroValue] = useState(numero);
  const [colecaoValue, setColecaoValue] = useState(colecao);
  const [tipoValue, setTipoValue] = useState(tipo);

  const handleEditarOuConcluir = () => {
    if (isEditable) {
      Alert.alert('Editado com sucesso');
    }
    setIsEditable(!isEditable);
  };

  const handleExcluir = () => {
    Alert.alert('Excluído com sucesso');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
        <Image source={require('../../assets/carro1.png')} style={styles.carImage} />
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Modelo</Text>
          <TextInput
            style={[styles.value, isEditable && styles.inputEditable]}
            value={modeloValue}
            onChangeText={setModeloValue}
            editable={isEditable}
          />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Ano</Text>
          <TextInput
            style={[styles.value, isEditable && styles.inputEditable]}
            value={anoValue}
            onChangeText={setAnoValue}
            editable={isEditable}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Número</Text>
          <TextInput
            style={[styles.value, isEditable && styles.inputEditable]}
            value={numeroValue}
            onChangeText={setNumeroValue}
            editable={isEditable}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Coleção</Text>
          <TextInput
            style={[styles.value, isEditable && styles.inputEditable]}
            value={colecaoValue}
            onChangeText={setColecaoValue}
            editable={isEditable}
          />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Tipo</Text>
          <TextInput
            style={[styles.value, isEditable && styles.inputEditable]}
            value={tipoValue}
            onChangeText={setTipoValue}
            editable={isEditable}
          />
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={handleEditarOuConcluir}
        >
          <Text style={styles.buttonText}>
            {isEditable ? 'CONCLUIR' : 'EDITAR'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleExcluir}
        >
          <Text style={styles.buttonText}>EXCLUIR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomMenu}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Image source={require('../../assets/icon1.png')} style={styles.menuIcon} />
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
          <Image source={require('../../assets/icon2.png')} style={styles.menuIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}