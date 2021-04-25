import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style';

const StyledButton = (props) => {

    /* const type = props.type;
    const content = props.content;
    const onPress = props.onPress; 
    ** This 3 line scan be written as one as below **
    */

    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#ffffffa6';
    const textColor = type === 'primary' ? '#ffffff' : '#171A20';
    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => {
                    onPress()
                }} >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;