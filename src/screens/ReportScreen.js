import React, {useContext} from "react";
import { View } from "react-native";
import LargeButton from "../components/LargeButton";
import { SessionContext } from "../store/SessionContext";
import {exportReport} from '../utils/PdfExport';

export default () => {
    const {session} = useContext(SessionContext);

    return (
        <View style={{padding: 20}} >
            <LargeButton
            title="Export Diagnostic Report"
            onPress={() => exportReport(session)}
            />
        </View>
    );
};

