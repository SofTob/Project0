# Project0
*Project0 is just a working title, we will give it a better name when we find one.*

Project0 is a mobile application designed for tracking and sharing travel experiences. As of now, users can view a fixed list of countries and experiences and add to that list, but there's no working database yet.

Our ultimate goal is to transform this into a type of social media platform where users can see the experiences their friends had at a particular destination. We also envision incorporating a map feature that pinpoints each shared experience.

## Running the project

Before you begin, ensure you have [Node.js](https://nodejs.org/) and [Expo CLI](https://expo.dev/tools-cli) installed on your system.

1. **Clone the Repository:**

   ```bash
   git clone [repository-url]
   cd [repository-directory]
   ```

2. **Install Dependencies:**


   ```bash
   npm install
   ```
3. **Creating a `.env` file**
   To run the project locally you need to create a file named `.env` in the root directory if the project. This file should contain the supabase url and supabase anon key like this:
   ```JavaScript
   REACT_APP_SUPABASE_URL ='URL here'
   REACT_APP_SUPABASE_ANON_KEY='Key here'

   ```

4. **Start the Expo Development Server:**

   ```bash
   npx expo start
   ```

This will display a QR code in your terminal. You can scan this QR code with the Expo Go app on your Android or iOS device to view the app in action. Alternatively, you can use an emulator or simulator to run the app on your computer.

**Note:** If you encounter any issues, refer to the official [Expo Documentation](https://docs.expo.dev/) for troubleshooting and guidance.

## Credits

This project is a joint endeavor by [Tobias](https://github.com/2bias123) and [Sofia](https://github.com/sofiaburkow). Every facet, from design inception to development and testing, has been cooperatively managed by us. Our sincere appreciation goes to [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/) for the tools and framework that underpin this app.

For any questions or feedback related to this project, please contact us via our GitHub.

---



