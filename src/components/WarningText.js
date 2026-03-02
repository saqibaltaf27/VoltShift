// Warning Text Component

import React from "react";
import {Text} from 'react-native';
import colors from '../theme/colors';

export default({ warning, okText, badText}) => {
    return (
        <Text
            style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: warning ? colors.danger : colors.success
            }}>
        {warning ? badText: okText}
        </Text>
    );
};

