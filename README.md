# ISU Ticket
A React Native Project for saving and showing tickets locally

# Summary
- [Stack](#stack)
- [Features](#features)
- [Considerations](#considerations)

# Stack
- Expo
- Typescript
- Redux (Redux Toolkit)
- React Native Maps
- React Native Calendars
- SQLite

## Justifications
### Expo
I used Expo as the tool for creating the app. Not only avoids the boilerplate of a React Native project, but also it’s recomended at this point. You can checkout this [article](https://retool.com/blog/expo-cli-vs-react-native-cli/) for more information.

### Typescript
Offers a type system on top of Javascript. This is useful for intellisense in the code editor, scaling the code and making the development process more descriptive and explicit.

### Redux
Using Redux in a "small" project like this could be seen as an "overkill", but since I structure the code to be scalable and also it was needed to create a communication between screens and components, I though I may as well use Redux for a more robust project.

Redux Toolkit is the recommended way to write redux logic since eliminates a lot of redux's boilerplate and add useful feature of the same ecosystem like async functions out of the box.

### React Native Maps
It uses "Google Maps" for Android and "Apple Maps" for IOS. It simple and easy to use. But there's a consideration to make regarding this.

For using this library in Android you must have an google API_KEY, or else the app will crash when opening the map.

### React Native Calendars
Offers a customizable and rich components related to dates like day picker or an agenda.

### SQLite
It was a local integration with Expo with the package `expo-sqlite` and it relative easy to use without compromising the core features of any SQL database.

# Features
- Dark mode / light mode DETECTION
- User registry
- User Login
---
- Notifications messages display
- Menu dropdown in header
- Navigation between screens
- Auth: login / logout
---
- Create Ticket
- View Ticket
- Delete Ticket
---
- Working ticket screen: View Ticket details
- Working tickets displays 1 or multiple tickets
- Checkbox select in dashboard to see more than 1 ticket details in working screen
- Data Validation while creating a ticket
---
- View Map
- Change coordinates of the point in the map (no coordinates saving yet)

# Considerations
## Map View (Important)
The app will crash on android. This is no an error on code but with the credentials that the library needs to display the map.

On Android, you need to set the **API KEY** of Google Maps to be able to use it in Google Play Store or even as an .apk

## .apk Compilation
At the moment for compiling the app in Android it relies on an Expo service called "eas".

For compiling the app locally use the command `expo prebuild`.

And here is a [guide](https://dev.henryjperez.com/gh-actions-react-native-android) a automate that compilation using **GitHub Actions**. 
