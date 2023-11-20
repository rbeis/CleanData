import React from 'react';
import { TouchableOpacity, SafeAreaView, View, Image, Text } from 'react-native';
import IMG from '../../assets/iconemaos.png'
import styles from './styles'
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

    const navigation = useNavigation()
    
    return <>
        <View style={styles.containerPrincipal}>
            <View style={styles.containerLogo}>
                <Image source={IMG} style={styles.imagem}/>
                <Text style={styles.textoLogo}>Clean Data</Text>
            </View>
            <View style={styles.containerBotao}>
                <TouchableOpacity style={styles.acessarButton} onPress={() =>  navigation.navigate('Home')}>
                    <Text style={{color: "#fff", fontSize: 16}}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>

    </>
}