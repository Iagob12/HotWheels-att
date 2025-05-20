import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function CarCard({
  nome,
  anoFabricacao,
  numeroColecao,
  serie,
  status,
  favorito,
  imagem,
  onPress,
}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{nome}</Text>
        <Text style={styles.year}>{anoFabricacao}</Text>
        <Text style={styles.description}>
          {`${status?.toUpperCase() || ''} • ${serie?.toUpperCase() || ''} • ${numeroColecao}`}
        </Text>
        <Text style={styles.description}>
          Favorito: {favorito ? 'Sim' : 'Não'}
        </Text>
      </View>
      <TouchableOpacity style={styles.arrowButton} onPress={onPress}>
        <Text style={styles.arrow}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
}