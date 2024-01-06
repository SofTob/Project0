import { useState } from 'react';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const SelectImage = () => {
  
    const [image, setImage] = useState<string | null>(null);

    const onPress = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        // if image is selected, set the image
        setImage(result.assets[0].uri);
      }
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.dashedBox} onPress={onPress} >
          <Text>+ Image</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  dashedBox: {
    width: '90%',
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed'
  },
  image: {
    width: '100%', 
    height: 500 
  },
});

export default SelectImage;