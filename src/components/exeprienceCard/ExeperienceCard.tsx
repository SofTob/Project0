import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import { ExeperienceCardStyle } from "./ExperienceCardStyle";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from '@react-navigation/native';
import { ExperienceCardProps, RootStackParamList } from "../../../types";
import supabase from "../../config/Supabase";



const ExperienceCard:  React.FC<ExperienceCardProps>= ({experienceInfo}) => {

    const navigation = useNavigation<NavigationProp<RootStackParamList, 'ExperiencePost'>>();

    let imageURL: string = '';

    if (experienceInfo?.image_url) {
        const response = supabase.storage.from('My_images').getPublicUrl(experienceInfo.image_url as string);
        imageURL = response.data?.publicUrl;
    }

    
    return(
        <TouchableOpacity 
            onPress={() => {navigation.navigate('ExperiencePost', { experienceInfo: experienceInfo, imageURL });
        }}
            style={ExeperienceCardStyle.cardContainer}>
                <ImageBackground
                    source={{ uri: imageURL}}
                    style={ExeperienceCardStyle.imageBackground}
                    resizeMode="cover"
                />
            <View>
                <Text style = {ExeperienceCardStyle.experienceTitle}>{experienceInfo?.experience_name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ExperienceCard;
