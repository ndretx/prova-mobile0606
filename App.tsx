import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ButtonComponent from './components/button-component';
import TitleComponent from './components/title-component';
import ImageComponent from './components/image-component';

const images = [
  require('./assets/campoVerde.jpg'),
  require('./assets/outono.jpg'),
  require('./assets/praia.jpg'),
];

export default function App() {
  const [imageIndex, setImageIndex] = useState(0);

  const handleButtonPress = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <View style={styles.container}>
      <TitleComponent title="Prova 06/06/23" />
      <ImageComponent imageSource={images} imageIndex={imageIndex} />
      <ButtonComponent onPress={handleButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
