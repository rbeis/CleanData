import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "97%",
        height: 100,
        backgroundColor: "#74d175",
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 10,
        marginLeft: 7,
        marginRight: 7

    },
    expandidoPoluicao: {
        width: "97%",
        height: 900,
        backgroundColor: "#74d175",
        borderRadius: 8,
        flexDirection: "column",
        marginVertical: 10,
        paddingVertical: 20,
        paddingLeft: 10,
        alignItems: "flex-start"
    },
    expandidoDesmatamento: {
        width: "97%",
        height: 390,
        backgroundColor: "#74d175",
        borderRadius: 8,
        alignItems: "center",
        flexDirection: "column",
        marginVertical: 10,
        paddingVertical: 20,
        paddingStart: 10
    },
    icone: {
        width: 30,
        height: 33,
        marginLeft: 15,
        opacity: 0.6
    },
    desmatamento: {
        fontSize: 18,
        fontWeight: "400",
        color: "#FFF",
        marginLeft: 80,
    },
    transito: {
        fontSize: 18,
        fontWeight: "400",
        color: "#FFF",
        paddingLeft: 114,
        marginRight: 33
    },
    poluicao: {
        fontSize: 18,
        fontWeight: "400",
        color: "#FFF",
        marginLeft: 80,
    },
    setaDesmatamento:{
        width: 40,
        height: 35,
        marginLeft: 55,
    },
    seta:{
        width: 40,
        height: 35,
        marginLeft: 65,
    }

})