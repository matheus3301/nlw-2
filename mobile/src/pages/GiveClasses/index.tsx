import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import styles from './styles';

import giveClassesBgImage from "../../assets/give-classes-background.png";
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const GiveClasses: React.FC = () => {
    const navigation = useNavigation();

    function handleOk(){
        navigation.goBack();
    }

  return(
      <View style={styles.container}>
          <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}> Para comeeçar, você precisa se cadastrar como professor na nossa platafroma web.</Text>

          </ImageBackground>

          <RectButton onPress={handleOk} style={styles.okButton}>
            <Text style={styles.okButtonText}>Tudo bem</Text>
          </RectButton>
      </View>
  );
}

export default GiveClasses;