import { View } from 'react-native';
import ScreenStyle from './ScreenStyle';
import HeaderImage from '../components/experiencePost/HeaderImage';
import AboutSection from '../components/experiencePost/AboutSection';

const ExperiencePost = () => {

    return (
        <View style={ScreenStyle.background}>
            <HeaderImage/>
            <AboutSection/>
        </View>
    );
}

export default ExperiencePost