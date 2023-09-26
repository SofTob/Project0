import {useState} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const AboutSection = () => {

    const[text, setText] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={text => setText(text)}
                value={text}
                multiline={true}
                placeholder='About this experience...'
                placeholderTextColor='#9EB384'
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        padding: 20,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 15,
        minHeight: 150,
        fontSize: 16,
        color: '#9EB384',
        borderWidth: 1,
        borderColor: '#E0E0E0',
    },
});

export default AboutSection;