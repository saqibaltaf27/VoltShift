import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../theme/colors";

export default function LargeButton({title, onPress}) {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    btn: {
        backgroundColor: colors.accent,
        padding: 22,
        marginVertical: 10,
        borderRadius: 12,
        alignItems: 'center'
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    }
});
