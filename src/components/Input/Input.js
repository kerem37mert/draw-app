import { View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./Input.style";

const Input = (props) => {
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Listeye Ekle" 
                onChangeText={props.onChange}
            />
            <TouchableOpacity style={styles.button} onPress={props.onPress}>
                <Text>Ekle</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Input;
