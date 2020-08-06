import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";

import styles from './styles';

import arrowBack from "../../assets/icons/back.png"
import logoImg from "../../assets/logo.png"
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string,
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.navigate("Landing");
    }

    return (
        <View style={styles.container} >
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={arrowBack} resizeMode="contain"></Image>
                </BorderlessButton>
                <Image source={logoImg} resizeMode="contain" />
            </View>

    <Text style={styles.title}>{props.title}</Text> 
        </View>
    );
}

export default PageHeader;