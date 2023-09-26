import { View, Text, Image } from 'react-native';
import ScreenStyle from './ScreenStyle';
import Rating from '../components/experiencePost/Rating';
import {RouteProp} from '@react-navigation/native';
import { mockDB } from '../assets/MockDB';

type ExperiencePostRouteProp = RouteProp<{ ExperiencePost: { id: number } }, 'ExperiencePost'>;

interface ExperiencePostProps {
    route: ExperiencePostRouteProp;
}

const ExperiencePost: React.FC<ExperiencePostProps> = ({ route }) => {
    const { id } = route.params;

    // const postDB = require('../components/experiencePost/PostDB.json');
    const post = mockDB.experiences.find((post: { id: number; }) => post.id === id); // data from the post with the specified id

    return (
        <View style={ScreenStyle.background}>
            <Image style={ScreenStyle.image} 
                source={post?.imageURL} />
            <View style={ScreenStyle.container}>
                <Text style={ScreenStyle.title}>{post?.title}</Text>
                <Rating rating={post?.rating || 0} />
            </View>
            <Text style={ScreenStyle.about}>{post?.about}</Text>
        </View>
    );
}

export default ExperiencePost