import { View, Image } from 'react-native';

const HeaderImage = () => {
    return (
        <View>
            <Image
                style={{ width: '100%', height: 500 }}
                source={require('../../assets/sampleImages/angelsLanding.jpg')} 
            />
        </View>
    );
}

export default HeaderImage;