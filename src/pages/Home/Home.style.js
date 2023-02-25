import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#439A97"
    },
    titleContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#CBEDD5"
    },
    buttonContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#62B6B7",
        padding: 20,
        borderRadius: 20
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#CBEDD5"
    }
});