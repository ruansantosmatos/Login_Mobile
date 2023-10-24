import React, { useRef, useState } from "react";
import styles from "../../styles/Login/Login";
import Feather from 'react-native-vector-icons/Feather'
import { TextInput } from 'react-native-paper'
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from "react-native";

const Login = () => {

    //Hooks
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [activeBtn, setActiveBtn] = useState(false)
    const txtPasswordRef = useRef(null)

    return (
        <View style={styles.containerMain}>
            <SafeAreaView>
                <View style={styles.containerMessage}>
                    <Text style={styles.txtWelcomeMessage}>
                        Seja Bem-Vindo
                    </Text>
                </View>
            </SafeAreaView>
            <View style={styles.body}>
                <View style={styles.containerIcon}>
                    <View style={styles.icon}>
                        <Feather
                            name={'user'}
                            size={90}
                            color={'#17A9A0'}
                        />
                    </View>
                </View>
                <View style={styles.containerTxtInputs}>
                    <TextInput
                        style={styles.txtInput}
                        placeholder={'CPF'}
                        placeholderTextColor={'#eeee'}
                        underlineColor={'#ffff'}
                        activeUnderlineColor={'#ffff'}
                        textColor={'#ffff'}
                        maxLength={11}
                        keyboardType={'numeric'}
                        onSubmitEditing={() => { txtPasswordRef.current?.focus() }}
                        right={
                            <TextInput.Icon
                                icon={'card-account-details'}
                                color={'#eeee'}
                                size={24}
                            />
                        }
                    />
                    <TextInput
                        style={styles.txtInput}
                        ref={txtPasswordRef}
                        placeholderTextColor={'#eeee'}
                        placeholder={'Senha'}
                        activeUnderlineColor={'#ffff'}
                        textColor={'#ffff'}
                        underlineColor={'#ffff'}
                        secureTextEntry={visiblePassword ? false : true}
                        right={
                            <TextInput.Icon
                                icon={visiblePassword ? 'eye' : 'eye-off'}
                                color={'#eeee'}
                                onPress={() => setVisiblePassword(!visiblePassword)}
                                size={24}
                            />
                        }
                    />

                </View>
                <View style={styles.cotainerFooter}>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity
                            onPress={() => {
                                setActiveBtn(true)
                                setTimeout(() => { 
                                setActiveBtn(false) 
                            }, 1000) }}
                            style={styles.btnLogin}
                            activeOpacity={0.6}
                        >
                            <Text style={styles.txtBtnLogin}>
                                {
                                    activeBtn ?
                                        <ActivityIndicator
                                            color={'#3CC6C8'}
                                            size={'large'}
                                        />
                                        :
                                        'ACESSAR'
                                }
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerLogo}>
                        <Image
                            source={require('../../assets/images/Logo.png')}
                            style={styles.logo}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login