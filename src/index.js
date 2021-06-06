import React, {useState} from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';

import {styles} from './styles';

const CardComponent = () => {
  const [name, setName] = useState('');
  const [numero, setNumero] = useState('');
  const [validade, setValidade] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={[styles.cardNumber, {letterSpacing: numero ? 1.5 : 2.5}]}>
          {numero ? numero : '**** **** **** ****'}
        </Text>
        <View style={styles.bottomCardContainer}>
          <Text style={styles.cardName}>{name ? name : 'Nome completo'}</Text>
          <View style={styles.expiracyContainer}>
            <Text style={styles.expiracyText}>Val. </Text>
            <Text style={styles.expiracyTextValue}>
              {validade ? validade : '**/**'}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.inputsContainer}>
        <TextInput
          placeholder="Número"
          style={styles.inputs}
          value={numero}
          onChangeText={setNumero}
        />
      </View>

      <View style={styles.inputsContainer}>
        <TextInput placeholder="Nome" value={name} onChangeText={setName} />
      </View>

      <View style={styles.inputsContainer}>
        <TextInput
          placeholder="Validade"
          value={validade}
          onChangeText={setValidade}
        />
      </View>
    </ScrollView>
  );
};

export default CardComponent;
