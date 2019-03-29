import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { tsPropertySignature } from '@babel/types';

const Button = ({ onPress, children }) => {
    const { titleStyle, buttonStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={titleStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    titleStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
