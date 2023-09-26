import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { ExeperienceCardStyle } from "./ExperienceCardStyle";
import { mockDB } from "../../assets/MockDB";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from '@react-navigation/native';


interface ExperienceCardProps {
    id: number; // or string
}

type RootStackParamList = {
    CountryList: undefined;
    ExperienceListScreen: undefined;
    ExperiencePost: { id: number };  // Here
};


const ExperienceCard:  React.FC<ExperienceCardProps>= ({id}) => {

    const navigation = useNavigation<NavigationProp<RootStackParamList, 'ExperiencePost'>>();


    const experience = mockDB.experiences.find((experience) => experience.id === id);

    return(
        <TouchableOpacity 
            onPress={() => {navigation.navigate('ExperiencePost', { id: id });
        }}
            style={ExeperienceCardStyle.cardContainer}>
                <ImageBackground
                    source={experience?.imageURL}
                    style={ExeperienceCardStyle.imageBackground}
                    resizeMode="cover"
                />
            <View>
                <Text style = {ExeperienceCardStyle.experienceTitle}>{experience?.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ExperienceCard;
