
import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style = {styles.background}> 
        <Feather name = "search" style={styles.iconStyle}/>
            <TextInput 
            autoCapitalize = "none"
            autoCorrect ={false}
            placeholder="Search" 
            style={styles.inputStyle}
            value = {term}
            onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}
            ></TextInput>
        </View>
    
};

const styles = StyleSheet.create({
    background:{
        marginTop :10,
        backgroundColor: 'rgb(224, 224, 235)',
        height : 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom:10,
    },
    inputStyle: {
    
        flex : 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
    }
});

export default SearchBar;

