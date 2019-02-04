import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2, //round corner
        borderColor: '#dddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 0 },
        shadowOpacity: 0.1,
        shadowRadius: 2, //shadow for round corner
        elevation: 1,
        marginLeft: 5, //space between cards
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };
