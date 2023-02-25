import React from "react";
import { SafeAreaView, } from "react-native";
import styles from "./Draw.style";
import Navbar from "../../components/Navbar";

const Draw = ({navigation}) => {

    const goBack = () => {
        navigation.goBack();
    }

    return(
        <SafeAreaView style={styles.container}>
            <Navbar onPress={goBack} />
        </SafeAreaView>
    );
}

export default Draw;