import { StyleSheet } from "react-native";

const ScreenStyle = StyleSheet.create({
    mySearchBar: {
        marginTop: 80,
        marginHorizontal: 30,
    },
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FAF1E4',
    },
    countrySelectionCard: {
        justifyContent: "center",
        alignItems: 'center'
    },
    experienceList: {
        width: '50%',
        paddingHorizontal: 5,
        paddingVertical: 2.5,

    },   
    locationHeader: {
        justifyContent: "center",
        alignItems: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        marginHorizontal: 30,
        marginVertical: 10,
        color: '#435334',
    },
});

export default ScreenStyle;