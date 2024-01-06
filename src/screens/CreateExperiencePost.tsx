import { useState } from "react";
import { View, TextInput } from "react-native";
import ScreenStyle from "./ScreenStyle";
import SelectImage from "../components/experiencePost/SelectImage";
import SelectDate from "../components/experiencePost/SelectDate";

const CreateExperiencePost = () => {

    const [title, onChangeTitle] = useState<string>('');
    const [about, onChangeAbout] = useState<string>('');

    return (
        <View style={ScreenStyle.background}>
            <SelectImage></SelectImage>
            <View style={ScreenStyle.container}>
                <TextInput
                    style={ScreenStyle.title}
                    onChangeText={title => onChangeTitle(title)}
                    value={title}
                    placeholder='+ Title' />
                <SelectDate></SelectDate>
            </View>
            <TextInput
                editable
                multiline
                maxLength={200}
                style={ScreenStyle.about}
                onChangeText={about => onChangeAbout(about)}
                value={about}
                placeholder='About the experience...' />
        </View>
      );
    };

export default CreateExperiencePost;