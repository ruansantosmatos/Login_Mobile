import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerMain: {
        width: '100%',
        height: '100%',
        backgroundColor: '#3CC6C8',
    },
    containerMessage: {
        width: '100%',
        height: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    txtWelcomeMessage: {
        color: '#FFFF',
        fontSize: 22,
        fontFamily: 'Montserrat-Bold'
    },
    body: {
        width: '100%',
        height: '100%',
    },
    containerIcon: {
        width: '100%',
        height: 160,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    icon: {
        width: 120,
        height: 120,
        borderRadius: 100,
        backgroundColor: '#FFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerTxtInputs: {
        width: '100%',
        alignItems: 'center',
        height: 150,
        paddingLeft: 20,
        paddingRight: 20,
    },
    txtInput: {
        width: '90%',
        height: 60,
        backgroundColor: '#3CC6C8',
        borderBottomWidth: 3,
        borderBottomColor: '#FFFF',
        fontFamily: 'Montserrat-Bold',
        color: '#eeee'
    },
    cotainerFooter: {
        width: '100%',
        height: '50%',
    },
    containerBtn: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnLogin: {
        width: '45%',
        height: 45,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#FFFF',
        backgroundColor: '#FFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBtnLogin: {
        color: '#3CC6C8',
        fontSize: 18,
        fontFamily: 'Montserrat-Bold'
    },
    containerLogo: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        paddingTop: '20%'
    },
    logo: {
        width: '35%',
        height: '35%',
    }
})

export default styles