import { StyleSheet } from "react-native";

const MySearchBarBackIconStyle = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
    },
    searchbar: {
        flex: 1,
    },
    backIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green', // This is just for visualization     
        height: 60,                
        width: 60, 
    },
    backIcon: {
        fontSize: 50, 
        color: "red", 
        fontWeight: "bold",
    },

});

export default MySearchBarBackIconStyle;