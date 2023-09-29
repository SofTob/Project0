import { View, StyleSheet } from "react-native";
import ScreenStyle from "./ScreenStyle";
import DashedBox from "../components/experiencePost/DashedBox";

const CreateExperiencePost = () => {

    return (
        <View style={ScreenStyle.background}>
            <View style={styles.container}>
                <DashedBox title="+ Picture"></DashedBox>
                <DashedBox title="+ Title"></DashedBox>
                <DashedBox title="+ Rating"></DashedBox>
                <DashedBox title="+ About"></DashedBox>
            </View>   
        </View>
      );
    };
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
}); 

export default CreateExperiencePost;