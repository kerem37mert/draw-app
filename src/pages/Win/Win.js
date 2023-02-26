import React from "react";
import { SafeAreaView, View, Text } from "react-native";
import Navbar from "../../components/Navbar";
import styles from "./Win.style";

const Win = ({navigation, route}) => {

    const goBack = () => {
        navigation.goBack();
    }

    return(
        <SafeAreaView style={styles.container}>
            <Navbar onPress={goBack} />
            <View style={styles.resultContainer}>
                <Text style={styles.title}>Çekiliş Sonucu</Text>
                <Text style={styles.result}>{route.params.winner}</Text>
            </View>
        </SafeAreaView>
    );
}

export default Win;