import React, {useEffect, useState} from "react";
import {View, Text, FlatList} from 'react-native';
import db from '../database/db';
import LargeButton from "../components/LargeButton";

export default ({navigation}) => {
    const [components, setComponents] = useState([]);

    const load = () => {
        db.transaction(tx => {
            tx.executeSql('Select * from Components',
                [],
            (_,res) => setComponents(res.rows.raw())
            );
        });
    };

    useEffect(() => {
        load();
    }, []);

    return(
        <View style={{flex: 1, padding: 20}}>
            <LargeButton 
                title="Add Component"
                onPress={()=> navigation.navigate('AddComponent')}/>
            
            <FlatList
            data={components}
            keyExtractor={i=>i.id.toString()}
            renderItem={({item}) => (
                <Text style={{fontSize: 20, color: '#201818'}}>{item.name}</Text>
            )} />

        </View>
    );
};

