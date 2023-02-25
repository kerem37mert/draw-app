import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Navbar.style";

const Navbar = (props) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.text}>Geri</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Navbar;