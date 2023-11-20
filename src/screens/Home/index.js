import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';
import Topo from '../../components/Topo/index';
import Cards from '../../components/Cards/index';


export default function Home(){
    return <>
        <SafeAreaView style={styles.fundo}>
            <Topo />
            <Cards />
        </SafeAreaView>
    </>
}