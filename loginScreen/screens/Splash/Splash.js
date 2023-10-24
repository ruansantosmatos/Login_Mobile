import React, { useEffect, useState } from "react";
import styles from "../../styles/Splash/Splash";
import { View, Image } from "react-native";
import Animated from "react-native-reanimated";
import { FadeIn } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    
    //Hooks
    const navigation = useNavigation()

    const navigationScreen = () => {
        setTimeout(() => {navigation.navigate('Login')}, 1500)
    }

    useEffect(() => {
        navigationScreen()
    }, [])

    return (
        <View style={styles.containerMain}>
            <Animated.View 
                style={styles.containerLogo} 
                entering={FadeIn.delay(500).easing()}
            >
                <Image
                    source={require('../../assets/images/Logo.png')}
                    style={styles.logo}
                />
            </Animated.View>
        </View>
    )
}

export default Splash