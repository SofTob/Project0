import { View, Text, Image } from 'react-native';
import ScreenStyle from './ScreenStyle';
import Rating from '../components/experiencePost/Rating';
import { RouteProps } from '../../types';


const ExperiencePost = (route: RouteProps) => {
    const { experienceInfo, imageURL } = route.route.params;

    return (
        <View style={ScreenStyle.background}>
            <Image style={ScreenStyle.image} 
            source={{ uri: imageURL}}                 
            />
            <View style={ScreenStyle.container}>
                <Text style={ScreenStyle.title}>{experienceInfo?.experience_name}</Text>
                <Rating rating={experienceInfo?.experience_rating || 0} />
            </View>
            <Text style={ScreenStyle.about}>{experienceInfo?.experience_description}</Text>
        </View>
    );
}

export default ExperiencePost