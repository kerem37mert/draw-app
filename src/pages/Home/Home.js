import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import styles from "./Home.style";

const Home = ({navigation}) => {

    const goDraw = () => {
        navigation.navigate("DrawPage");
    }

    return(
        <SafeAreaView style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Çekiliş Yap</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={goDraw}>
                <Text style={styles.buttonText}>Başla</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    );
}
export default Home;