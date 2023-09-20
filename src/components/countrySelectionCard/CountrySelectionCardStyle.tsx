import { StyleSheet } from "react-native";

export const CountrySelectionCardStyle = StyleSheet.create({
    countryCardContainer: {
        width: "100%",
        alignItems: "center",
    },
    namecontainer: {
        flexDirection: "row",
        backgroundColor: "#9EB384",
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        width: "82%",
        justifyContent: "space-between",
    },
    countryName: {
        color: "#FAF1E4",
        fontSize: 20,
    },
    button: {
        paddingRight: 10,
        paddingLeft: 10,
    },
    buttonText: {
        color: "#FAF1E4",
        fontSize: 20,
        fontWeight: "bold",
    },
    dropDownName: {
        color: "#435334",
        padding: 10,
    },
    dropDownContainer: {
        backgroundColor: "#CEDEBD",
        alignItems: "center",
        width: "70%",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    }
});







