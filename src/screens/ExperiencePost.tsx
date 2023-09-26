import { View, Text, Image } from 'react-native';
import ScreenStyle from './ScreenStyle';
import Rating from '../components/experiencePost/Rating';

interface ExperiencePostProps {
    id: number;
}

const ExperiencePost: React.FC<ExperiencePostProps> = ({ id }) => {

    const postDB = require('../components/experiencePost/PostDB.json');
    const post = postDB.find((post: { id: number; }) => post.id === id); // data from the post with the specified id

    return (
        <View style={ScreenStyle.background}>
            <Image style={ScreenStyle.image} 
                source={require('../assets/sampleImages/angelsLanding.jpg')} />
            <View style={ScreenStyle.container}>
                <Text style={ScreenStyle.title}>{post.title}</Text>
                <Rating rating={post.rating} />
            </View>
            <Text style={ScreenStyle.about}>{post.about}</Text>
        </View>
    );
}

export default ExperiencePost