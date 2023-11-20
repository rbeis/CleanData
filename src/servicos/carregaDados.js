import dadosAnoEstados from "../mocks/Desmatamento/dadosAnoEstado";
import dadosAnoEstados2 from "../mocks/Desmatamento/dadosAnoEstado2";
import dadosIPA from "../mocks/PoluicaoDoAr/dadosIPA";
import dadosIPA2 from "../mocks/PoluicaoDoAr/dadosIPA2";

let useDados1 = true;

export const carregaDesmatamento = () => {
    const dados = useDados1 ? dadosAnoEstados : dadosAnoEstados2;

    useDados1 = !useDados1;

    return dados;
};
export const carregaPoluicao = () => {
    const dados2 = useDados1 ? dadosIPA : dadosIPA2;

    useDados1 = !useDados1;

    return dados2;
};