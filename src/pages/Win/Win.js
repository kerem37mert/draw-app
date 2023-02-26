import React from "react";
import { SafeAreaView } from "react-native";
import Navbar from "../../components/Navbar";
import styles from "./Win.style";

const Win = ({navigation}) => {

    const goBack = () => {
        navigation.goBack();
    }

    return(
        <SafeAreaView style={styles.container}>
            <Navbar onPress={goBack} />
            <Text>Çekiliş Sonucu</Text>
            <Text>djsdghf</Text>
        </SafeAreaView>
    );
}

export default Win;