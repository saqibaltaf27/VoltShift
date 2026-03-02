import React from "react";
import {View, StyleSheet} from 'react-native';
import Largebutton from '../components/LargeButton';
import colors from "../theme/colors";

export default ({navigation}) => {
    return (
        <View style={styles.container}>
            <Largebutton
                title="Component Library"
                onPress={()=> navigation.navigate('Library')} />

            <Largebutton 
                title="Start Diagnostic Session"
                onPress={() => navigation.navigate('Session')}
            />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: 20,
        justifyContent: 'center'
    }
});

