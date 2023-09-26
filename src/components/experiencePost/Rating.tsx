import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface RatingProps {
    rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {

    const stars = [];
    const totalStars = 5;

    // loop over total number of stars, and fill the array with either an empty star or a filled star
    for (let i = 1; i <= totalStars; i++) {
        stars.push(
        <Icon
            key={i}
            name={i <= rating ? 'star' : 'star-o'} // 'star' for filled star, 'star-o' for empty star
            size={20}
            color='#CEDEBD'
        />
        );
    }

    return <View style={{flexDirection: 'row'}}>{stars}</View>;
};

export default Rating;