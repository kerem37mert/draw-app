import React, { useState } from "react";
import { SafeAreaView, FlatList, Text } from "react-native";
import styles from "./Draw.style";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";

const Draw = ({navigation}) => {

    const [items, setItems] = useState([]);
    const [value, setValue] = useState("");
    const [id, setId] = useState(0);
    
    const addItem = () => {
        if(value != "")
        {
            setItems([...items, {id: id, value: value}]);
            setId(id + 1);
        }
    }

    const changeItem = (val) => {
        setValue(val);
    }

    const renderList = ({item}) => {
        return(
            <Text>{item.value}</Text>
        );
    }
    
    const goBack = () => {
        navigation.goBack();
    }

    return(
        <SafeAreaView style={styles.container}>
            <Navbar onPress={goBack} />
            <Input onPress={() => addItem()} onChange={changeItem} />
            <FlatList keyExtractor={items.id} data={items} renderItem={renderList} />
        </SafeAreaView>
    );
}

export default Draw;