Trivia README
Please pull from the "main" branch.

git pull origin main

===FOR ANDROID==
yarn install
npx react-native run-android

===FOR IOS=====
cd ios
pod install
cd ..
npm run ios

Please note that the solution used to solve a problem can be improved, and I'm open to seeing different approaches and understanding the reasoning behind them.

Styles can also be created like this:
typescript

const elementStyles = (prop?: type) => {
return StyleSheet.create<ElementStylesProps>({
element: {
property: 'value',
},
});
};

Where "ElementStylesProps" are the type definitions of each styling object expected to be received in this component. This gives room for adding dynamic values in other components. However, for simplicity, I will proceed with the traditional style approach.

I choose to map inputs from an array to keep my return UI clean, concise, and dry.

I like to configure a TextComponent that will be reusable throughout the app. This helps prevent cluttered text styles and keeps the code organized.

When styling, if the property of an element or component will only be used once or twice, I prefer to declare it inline. If it will be used more frequently, I will separate it into a separate object.

Sometimes it is simpler to import SVGs directly from a file, but there are other ways to use SVGs such as creating a component.

In a real-world app, I prefer to keep all static text in a translated file for easier language changes for users around the world.

The comments in the "fontSize.ts" file show how font sizes are calculated for different devices.

I like to keep all Data Transfer Object (DTO) definitions in one folder for readability and isolation.

The UI is kept concise and the logic and data fetching are encapsulated in a custom hook.

The bottom margin between the "Welcome to the" and the "Trivia" logo in the StartQuiz screen had to be adjusted due to the logo having more padding than it appeared in the design.

In FlatList screens, I try to isolate components that don't need to be re-rendered to improve performance.

For more flexibility, simplicity, and readability, I used Redux Toolkit.

The "em" value is calculated based on the font size.

I wrote a test for just questionServices file it's called questionServices.test.ts

Padding and margin values are taken from the Figma design.

The "5-star approach" was used for the results screen to provide a better user experience instead of displaying stars according to the questions (imagine we have 10,000 questions)

Endpoints strings was separated for better organization in a real-world app with multiple endpoints and parameters.

The persisted store is cleared after a reload as it is not necessary to keep.

The navigation animation was designed to make navigating to screens feel like they are appearing on top of each other for a better user experience.

The "Play Again" button redirects the user to the StartQuiz screen so they can choose a difficulty level or number of questions. Another option would have been to store the parameters in the store initially and automatically replay the game.

A basic loading feeling has been added for improved user experience.

Error UI is not shown, but is important in a real-world app.

The "type" parameter was initially thought to be either true or false, but the endpoint didn't return any data based on that. Flagging it as a boolean instead produced the desired

since this is just a test app, i didn't bother perfecting on all screen-sizes, but this is difinetely what i'll do in a real world app.

i tested for IOS, and Nokia 3.4
