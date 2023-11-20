import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import logo from "../../assets/iconemaos.png";


export default function Topo() {
    return <>
    <View style={styles.containerPrincipal}>
        <View style={styles.containerImagem}>
            <Image source={logo} style={styles.imagem}/>
            <Text style={styles.textologo}>Clean Data</Text>
        </View>
        <View>
            <Text style={styles.texto}>Encontre dados ambientais urbanos</Text>
        </View>
    </View>
    
    </>
}