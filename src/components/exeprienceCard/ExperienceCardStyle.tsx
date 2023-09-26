import { StyleSheet } from "react-native";

export const ExeperienceCardStyle = StyleSheet.create({
    cardContainer: {
        width: "100%", // Taking into account 2% for potential space between items
        height: 150,
        borderRadius: 10,
        backgroundColor: "#9EB384",
        overflow: 'hidden',
        marginBottom: 10, // Or the desired spacing between rows
    },
    
        experienceTitle: {
            flexWrap: "wrap",
            color: "#FFFFFF",
            fontSize: 20,
            fontWeight: "bold",
            position: "absolute", 
            bottom: 10,           
            left: 10,     
        },
        imageBackground: {
            flex: 1,
            borderRadius: 10, 
            justifyContent: 'flex-end', 
            alignItems: 'flex-start',   
            padding: 10,                
        },
});

