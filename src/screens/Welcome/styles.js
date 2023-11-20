import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    containerPrincipal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagem: {
      width: 180,
      height: 180,
    },
    textoLogo: {
      fontSize: 35,
      padding: 20,
      color: '#000000',
    },
    containerLogo: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 40
    },
    containerBotao: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 40,
      },
      acessarButton: {
        backgroundColor: '#74d175',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginTop: 20,
        width: 300,
        alignItems: 'center'
      },
})