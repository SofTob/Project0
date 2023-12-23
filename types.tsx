import { RouteProp } from '@react-navigation/native';

export interface ExperienceProp {
    "city_id": number, 
    "experience_description": string, 
    "experience_id": number, 
    "experience_name": string, 
    "experience_rating": number
    "image_url": string 
}

export interface ExperienceCardProps {
    experienceInfo: ExperienceProp;
}

export type RootStackParamList = {
    CountryList: undefined;
    ExperienceListScreen: { cityId: number; cityName: string | null};
    ExperiencePost: { id: number };  // Here
};


//Props for the CountrySelectionCard component
export interface CountrySelectionCardProps {
    //Name of the country to be displayed
    countryName: string | null;
    //Country id
    countryId: number;
    //Whether or not the dropdown is open
    isOpen: boolean;
    //Function to toggle the dropdown
    onToggle: () => void;
}

interface RouteParams {
    cityId: number;
    cityName: string;
    experienceInfo: ExperienceProp;
    imageURL: string;
}

// Define the shape of your props
export interface RouteProps {
    route: RouteProp<{ params: RouteParams }, 'params'>;
}