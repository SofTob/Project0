import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { ExeperienceCardStyle } from "./ExperienceCardStyle";
import { mockDB } from "./MockImageDB";

interface ExperienceCardProps {
    id: number; // or string
}

const ExperienceCard = ({id}: ExperienceCardProps) => {

    const experience = mockDB.experiences.find((experience) => experience.id === id);

    return(
        <TouchableOpacity 
            style={ExeperienceCardStyle.cardContainer}>
                <ImageBackground
                    source={experience?.backgroundImage}
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
