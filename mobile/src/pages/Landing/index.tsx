import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from './styles';

import landingImage from "../../assets/landing.png";
import studyIcon from "../../assets/icons/study.png";
import giveClassesIcon from "../../assets/icons/give-classes.png";
import heartIcon from "../../assets/icons/heart.png";

const Landing: React.FC = () => {
    const navigation = useNavigation();

    function handleNavigateToGiveClasses(){
        navigation.navigate("Give Classes");
    }

    function handleNavigateToStudy(){
        navigation.navigate("Study");
    }

    return (
        <View style={styles.container}>
            <Image style={styles.banner} source={landingImage}/>
            <Text style={styles.title}>
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>
                    O que deseja fazer?
                </Text>

            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={handleNavigateToStudy} 

                >
                    <Image source={studyIcon}/>
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>
                <RectButton 
                    onPress={handleNavigateToGiveClasses} 
                    style={[styles.button, styles.buttonSecondary]}
                >
                    <Image source={giveClassesIcon}/>
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </RectButton>

            </View>

            <Text style={styles.totalConnections}>
                200 conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    );
}

export default Landing;