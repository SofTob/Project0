import { View, TextInput, StyleSheet } from "react-native";

interface DashedBoxProps {
    title: string;
}

const DashedBox: React.FC<DashedBoxProps> = ({ title }) => {
    return (
        <View style={styles.boxLayout}>
            <TextInput
            style={styles.input}
            placeholder={title}
            placeholderTextColor='#9EB384'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    boxLayout: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#9EB384',
        borderStyle: 'dashed',
        width: 300, 
        height: 70,
        padding: 16,
    },
    input: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#9EB384',
    },
}); 

export default DashedBox;