import { StyleSheet } from "react-native";

const MySearchBarBackIconStyle = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: "100%",
    },
    searchbar: {
        flex: 1,
    },
    backIconContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 10,
    },
    backIcon: {
        fontSize: 30, 
        color: "#9EB384", 
        fontWeight: "bold",
    },

});

export default MySearchBarBackIconStyle;