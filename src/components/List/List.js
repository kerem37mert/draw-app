import { View, Text, TouchableOpacity } from "react-native";
import styles from "./List.style";

const List = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{props.value}</Text>
            <TouchableOpacity style={styles.button} onPress={props.remove}>
                <Text style={styles.buttonText}>Kaldır</Text>
            </TouchableOpacity>
        </View>
    );
}

export default List;