export const mockDB = {
    countries: [
        {
            countryName: "Norway",
            countryCode: "NO",
            countryId: 1,
        },
        {
            countryName: "Hungary",
            countryCode: "HU",
            countryId: 2,
        },
        {
            countryName: "USA",
            countryCode: "US",
            countryId: 3,
        }
    ],
    cities: [
        {
            cityName: "Budapest",
            cityId: 1,
            countryId: 2
        },
        {
            cityName: "Oslo",
            cityId: 2,
            countryId: 1
        },
        {
            cityName: "Salt Lake City",
            cityId: 3,
            countryId: 3
        }
    ],
    experiences: [
        {
            "id":1,
            "title":"Angels Landing",
            "about":"Scary as hell (yes, I am a bit scared of heights), but undeniably an incredible hike! Remember to register for the lottery since there are only a limited number of spots available for hikers.",
            "rating":4,
            "date":"2023-03-20",
            "tag":"activity",
            "imageURL":require("./sampleImages/angelsLanding.jpg")
        },
        {
            "id":2,
            "title":"Pléhcsárda",
            "about":"A food truck situated just outside of town. The place offered affordable and pretty decent food (look at the size of the fried chiken!!). It was obviously a popular spot among locals who came and ordered their food, enjoyed some on the spot, and then took the remainder home in small transparent plastic bags (!!).",
            "rating":3,
            "date":"2022-12-07",
            "tag":"food",
            "imageURL":require("./sampleImages/FriedChicken.jpg")
        }
    ]
};
