import React, {useState} from "react";
import {
    View, 
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import colors from '../theme/colors';

const fluidStates = [
    {label: "Bright Red/ Healthy", color: "#ff3b3b"},
    {label: "Light Brown", color: "#a97142"},
    {label: "Dark Brown", color: "#5c3a21"},
    {label: "Black / Burned", color: "#000000"}
];

export default ()=> {
    const [selected, setSelected] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transmission Fluid Health</Text>

            {fluidStates.map((item, index) => (
                <TouchableOpacity
                key={index}
                onPress={()=> setSelected(index)}
                style={[
                    styles.option,
                    {
                        backgroundColor: item.color,
                        borderWidth: selected===index?4:0
                    }
                ]}>
                    <Text style={styles.text}>{item.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.background
    },

    title: {
        color: "#fff",
        fontSize: 24,
        marginBottom: 20
    },

    option: {
        padding: 28,
        marginVertical: 10,
        borderRadius: 14,
        borderColor: "#FFD600"
    },

    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold'
    }
});