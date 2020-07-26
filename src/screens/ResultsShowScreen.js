
import React, {useState, useEffect}from 'react';
import {View,Text,StyleSheet,Image,FlatList,ScrollView} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return <>
            <ScrollView>
                <Text>{result.name}</Text>
                <Text>Rating: {result.rating}</Text>
                <Text>ReviewCount: {result.review_count}</Text>
                <Text>Phone: {result.phone}</Text>
                <Text>Price: {result.price}</Text>

                <FlatList 
                    data = {result.photos}
                    keyExtractor={(photo) => photo}
                    renderItem={({item}) => {
                        return <Image style = {styles.image} source={{uri: item}} />
                    }}
                />
            </ScrollView>
        </>
    
};

const styles = StyleSheet.create({
    image:{
        height:200,
        width:300,
        borderRadius:4,
        margin:10
    }
});

export default ResultsShowScreen;

