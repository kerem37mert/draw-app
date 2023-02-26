import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10,
        justifyContent: "space-between",
        backgroundColor: "#97DECE",
        borderRadius: 20
    },
    text: {
        fontSize: 16,
        margin: 10
    },
    button: {
        backgroundColor: "red",
        padding: 10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    buttonText: {
        color: "#fff",
        fontSize: 14
    }
});