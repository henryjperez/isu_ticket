# isu_ticket
a test project of React Native

# Document

## Technical specifications

- Native or Kotlin is required for this test App
• It is required the use of architecture and design patterns
• Application needs to be optimized for tablets with 10 Inches, however it needs to be responsive in order to operate with other resolutions

• The android application needs to work with a local SQL Lite database structure  • The application needs to be able to demonstrate add, modify and delete records  • The application code needs to be submitted with proper in code comments and  documentation in English.

• For the address location user story, we will be reviewing a proper google maps API  integration

• When submitted the project to ISUCorp, provide the code and the APK so we can run the application

# Process

## Project Init

I used Expo as the tool for creating the app. Not only avoids the boilerplate of a React Native, but also it’s desirable at this point. You can checkout this [article](https://retool.com/blog/expo-cli-vs-react-native-cli/) for more information.

### Stack

- Typescript
- Expo

The reason for choosing Expo instead of React Native CLI is not only convenience but also because Expo, as a development tool, has grown a lot over the couple of years and now it’s the best way to initialize and continue a React Native Project.

For more information you can check this article that talk about this: [https://retool.com/blog/expo-cli-vs-react-native-cli/](https://retool.com/blog/expo-cli-vs-react-native-cli/)

And, the reason for using Typescript was 

## Considerations

### Directions

To have a more accurate reading of the direction in the map, and not just a strait line, it’s necessary to set the API key of Google Maps.

### Map initial coordinates

Since there’s no much data, I used the coordinates of the surroundings of ISU CORP in Canada. But it can be replace with actual data easily. 

### Data

The data used in this app is dummy data, it needs coordination about API integrations and all kind of stuff.

### Poor implementation of the Local database

The database integration is the worse part of the app. It created a mess between the files and it was an unpleasant coding experience.

### Not global context

For this project I didn’t make use of a Redux nor React Context. For these case it works, but it’s something to keep in mind.

## Pros and Cons

### Cons

- At the end of the project, for reasons of time, I didn’t pay as much attention to details as I should
- The interface is not something that a mature product would display, so it needs to be improved
- Too many files for the size of the project

### Props

- The structure and organization of the project. It makes a separation of concerns between different parts of the code. Typescript helps a lot with that.
- Scalable. This is a word that many people use now days, but what I need by “scalable” is the integration between the components.
- Although I have many libraries from the expo init command, the application doesn’t need too many dependencies to work and the dependencies are often part of the same ecosystem (expo) which simplify a lot of things
- Not bad for two days of coding

## Features

- Register
- Login
- Create ticket
- Delete ticket
- Visualize tickets
- Map view
    - Drag the Pin Markers in the app
    - Path between two points
- Portrait and Landscape device orientation
- Notification component
- Header menu
    - Go back
    - new ticket (in dashboard)
    - Dropdown menu
- Darkmode / Lightmode detection
    - Light mode colors
    - Dark mode colors
    - Hooks integration for easy use

### Missing features

- Calendar sync
- Update tickets
- Working Screen buttons
- Input validation
- Code commenting

# Code specifics

The applications uses alises to for the most important folders of the project, this allows easier importing of components, which connects them and improve the communications between the components.

It’s important to create easy to implement, easy to extend components for the flexibility of the platform. So, if you are planning to continue the code, you need to create components more “open” to changes. That require making components less “hyper” with a bunch of props that will be passed to other components and more like letting decide the parent component decide what the content will have. For an example, see the `header.tsx` component and how it allows of other icons in it without too much harzard.

---

## Automation

It needs to take advantage of tools like “github actions” to automate some repetitive tasks, like compiling the .apk file.

## Bundle size

Although it’s too early to say, in the future it may be a good idea to implement “Proguard” to reduce the bundle size. I must say that the app uses “Hermes” by default.
