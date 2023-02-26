import React, { useState } from "react";
import { SafeAreaView, View, FlatList, Text, TouchableOpacity, Alert } from "react-native";
import styles from "./Draw.style";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import List from "../../components/List";

const Draw = ({navigation}) => {

    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");
    const [id, setId] = useState(0);
    const [isEmpty, setIsEmpty] = useState("");
    
    const addItem = () => {
        if(value != "")
        {
            setItems([...items, {id: id, value: value}]);
            setIsEmpty("");
            setId(id + 1);
        }
    }

    const changeItem = (val) => {
        setIsEmpty(val);
        setValue(val);
    }

    const removeItem = (id) => {
        const newList = items.filter(item => item.id != id);
        setItems(newList);
    }

    const renderList = ({item}) => {
        return(
            <List value={item.value} remove={() => removeItem(item.id)} />
        );
    }

    const goWin = () => {
        if(items.length < 2)
        {
            Alert.alert("Uyarı", "Çekiliş için en az 2 eleman gereklidir.");
        }
        else
        {
            navigation.navigate("WinPage");
        }
    }
    
    const goBack = () => {
        navigation.goBack();
    }

    return(
        <SafeAreaView style={styles.container}>
            <Navbar onPress={goBack} />
            <Input onPress={() => addItem()} onChange={changeItem} value={isEmpty} />
            <FlatList keyExtractor={items.id} data={items} renderItem={renderList} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={goWin}>
                    <Text style={styles.buttonText}>Çekiliş Yap</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Draw;