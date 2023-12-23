import { View, Text, FlatList, Animated} from "react-native";
import ScreenStyle from "./ScreenStyle";
import MySearchBarBackIcon from "../components/mySearchbBarBackIcon/MySearchBarBackIcon";
import ExperienceCard from "../components/exeprienceCard/ExeperienceCard";
import { useEffect, useState } from "react";
import { Database } from "../../database.types";
import supabase from "../config/Supabase";
import { RouteProps, ExperienceProp} from "../../types";

const ExperienceListScreen = (props: RouteProps) => {
    
    const { cityId, cityName} = props.route.params;

    const [experienceData, setExperienceData] = useState<Database['public']['Tables']['Experience']['Row'][] | null>(null);

    const fetchExperiences = async (city_id: Number) => {
        const response = await supabase.from('Experience').select('*').eq('city_id',city_id);
        setExperienceData(response.data)
    }

    useEffect(()=>{
        fetchExperiences(cityId)
    },[])

    return (
        <View style={ScreenStyle.background}>
            <View style={ScreenStyle.mySearchBar}>
                <MySearchBarBackIcon></MySearchBarBackIcon>
            </View>
            <View style={ScreenStyle.countrySelectionCard}>
                <Text style={ScreenStyle.locationHeader}>{cityName}</Text>
            </View>
            <FlatList
                data = {experienceData}
                numColumns={2}
                keyExtractor={(item) => item.city_id.toString()}
                renderItem={({ item }) => (
                    <View style = {ScreenStyle.experienceList}>
                        <ExperienceCard experienceInfo={item as ExperienceProp}  ></ExperienceCard>
                    </View>
                )}
            ></FlatList>
        </View>
    );
}

export default ExperienceListScreen;