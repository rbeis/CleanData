import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import styles from './styles';
import { carregaDesmatamento, carregaPoluicao } from '../../servicos/carregaDados';
import Arvore from '../../assets/iconedesmatamento.png';
import Poluicao from '../../assets/iconepoluicao.png';
import Seta from '../../assets/iconesetaparabaixo.png';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desmatamentoExpandido: false,
            transitoExpandido: false,
            poluicaoExpandido: false,
        };
    }
    atualizaDesmatamento() {
        const retorno = carregaDesmatamento();
        this.setState({ dadosAnoEstados: retorno})
        console.log(retorno);
    }
    atualizaPoluicao() {
        const retorno = carregaPoluicao();
        this.setState({ dadosIPA: retorno})
        console.log(retorno);
    }

    componentDidMount() {
        this.atualizaPoluicao();
        this.atualizaDesmatamento();
    }

    toggleExpansao = (campo) => {
        this.setState((prevState) => ({
            [campo]: !prevState[campo],
        }));
    };

    renderDadosExpandidos() {
        return this.state.dadosAnoEstados.lista.map((item, index) => (
            <View key={index}>
                <Text style={{color: "#fff"}}>Ano: {item.ano}</Text>
                <Text style={{color: "#fff"}}>AC: {item.AC}</Text>
                <Text style={{color: "#fff"}}>AP: {item.AP}</Text>
                <Text style={{color: "#fff"}}>MA: {item.MA}</Text>
                <Text style={{color: "#fff"}}>MT: {item.MT}</Text>
                <Text style={{color: "#fff"}}>PA: {item.PA}</Text>
                <Text style={{color: "#fff"}}>RO: {item.RO}</Text>
                <Text style={{color: "#fff"}}>RR: {item.RR}</Text>
                <Text style={{color: "#fff"}}>TO: {item.TO}</Text>
                <Text style={{color: "#fff"}}>AMZ LEGAL: {item.AMZ_LEGAL}</Text>
            </View>
        ));
    }

    renderDadosPoluicao() {
        return this.state.dadosIPA.rmSP.map((item, index) => (
            <View key={index}>
                <Text style={{color: "#fff"}}>Município: {item.municipio}</Text>
                <Text style={{color: "#fff"}}>IPA: {item.IPA}</Text>
                <Text style={{paddingBottom: 20, color: "#fff"}}>Classificação: {item.classificacao}</Text>
            </View>
        ));
    }

    render() {
        return (
            <>
                <ScrollView style={{ width: "100%" }}>
                    <TouchableOpacity
                        style={[styles.container, this.state.desmatamentoExpandido && styles.expandidoDesmatamento]}
                        onPress={() => this.toggleExpansao('desmatamentoExpandido')}
                    >
                        {!this.state.desmatamentoExpandido && (
                            <>
                                <Image source={Arvore} style={styles.icone} />
                                <Text style={styles.desmatamento}>Desmatamento</Text>
                                <Image
                                    source={Seta}
                                    style={[
                                        styles.seta
                                    ]}
                                />
                            </>
                        )}
                        {this.state.desmatamentoExpandido && (
                            <View>
                                <Text style={{paddingBottom: 20, color: "#fff"}}>{this.state.dadosAnoEstados.texto}</Text>
                                <Text style={{paddingBottom: 15, color: "#fff", fontSize: 15}}>Tabela PRODES:</Text>
                                {this.renderDadosExpandidos()}
                            </View>
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.container, this.state.poluicaoExpandido && styles.expandidoPoluicao]}
                        onPress={() => this.toggleExpansao('poluicaoExpandido')}
                    >
                        {!this.state.poluicaoExpandido && (
                            <>
                                <Image source={Poluicao} style={styles.icone} />
                                <Text style={styles.poluicao}>Poluição do ar</Text>
                                <Image
                                    source={Seta}
                                    style={[
                                        styles.seta
                                    ]}
                                />
                            </>
                        )}

                        {this.state.poluicaoExpandido && (
                            <View>
                                <Text style={{color: "#fff", paddingBottom: 7, fontSize: 15}}>Índice de poluição atmosférica (IPA) - São Paulo</Text>
                                {this.renderDadosPoluicao()}
                            </View>
                        )}
                    </TouchableOpacity>
                </ScrollView>
            </>
        );
    }
}
export default Cards;