import { StyleSheet } from "react-native";

const ScreenStyle = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FAF1E4',
    },
    // CountryList
    mySearchBar: {
        marginTop: 80,
        marginHorizontal: 30,
    },
    countrySelectionCard: {
        justifyContent: "center",
        alignItems: 'center'
    },
    // ExperiencePost
    image: {
        width: '100%', 
        height: 500,
    },
    container: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#9EB384',
    },
    about: {
        margin: 20,
        marginTop: 0,
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#CEDEBD',
        padding: 15,
        fontSize: 14,
        color: 'black', 
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