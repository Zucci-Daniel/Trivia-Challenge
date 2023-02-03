# TRIVIA README

Please PULL FROM THE "master" branch

PLEASE, THE SOLUTION I USE TO SOLVE A PROBLEM CAN BE IMPROVED, AND I'M OPEN TO SEEING DIFFERENT APPROACH AND THE "WHY" OF THEM ALL

1.  Styles can also be created like this
    /\*\*

const elementStyles = (prop?: type) => {
return StyleSheet.create<ElementStylesProps>({
element: {
property: 'value',
},
});
};

where "ElementStylesProps" are the type difinition of each styling object expected to be recieved in this component. This gives room for adding dynamic values in other components too.
But for simplicity, i'll proceed with the traditional style approach.
/**
export const elementStyles = StyleSheet.create({});
**/

\*\*/

2. for my inputs, i choose to map them from array, this keeps my return UI very clean,concise and dry😅,

3. i personally i love to configure a TextComponent that will be reusable everywhere in the app, i don't like litered text styles, it make my codes ugly.

4. when styling, if the property i that element or component is just gonna be 1 or at most 2, i rather declare it inline, otherwise, i will separate them entirely

5. sometimes, it's just simpler to import my svg directly from one file and make use of them, however, there are many aways i can think of to use SVGs, i can make it component too.

6. Although this is a test evaluation task, but in a real world app, i prefer to keep all static text accross the app in a translated file, where i can just import them, this is super useful if we want to change language for users accross the world.

7. the comments in the fontSize.ts file is just to show you how i calculate fontsizes across different devices

8. i love keeping all DTOs (DATA TRANSFER OBJECT) definitions in one folder, it's more readable and isolated

9. make the UI concise, the logic and how data is fetched is encapsulated and kept in a custom hook.

10. for the bottom margin btwn the "welcome to the" and the "trivia" Logo inside the StartQuiz screen, i found out that the logo exported as svg had alot of padding in it, which is different from the way it appears on the UI design, proceeded anyways.

11. for Flatlist screens, i try as much as possible to isolate component that don't need to be rerendered all over again, they're in the same file but outside of the main Component.

12. for more flexibilty,simplicity and readability, i used redux toolkit

13. calculated "em" based on fontSize

14. padding and margin are gotten from the figma design

15. went ahead with the "5 Star approach" because, assumming we have 10,000 questions, it'll be a bad UX to display all 10k stars in the result screen and count the number of passed vs all questions. so that's why i choosed this approach. (hopefully, you like this approach too.)

16. for the endpoint given, i decided to separate, because i want to mimick the exact way i do this in a big app with alot of endpoint and params to be passed.

17. clearing the persisted store after a reload because i don't find it neccessary to keep.

18. for the navigation animation, wanted to fit the app UX by making navigating to screens as if they appear ontop of each other, this is a beautiful experience for me.

19. for the "play again", i redirected them to the StartQuiz screen, so they can choose a difficulty level or amount of questions, another way would have been to store the params in the store initially and automatically replay the game without re-choosing.

20. decided to add a basic loading feeling,

21. didn't bother about showing error UI, but in real world cases, it is important.

22. initially, i thought the "type" params when making a request will be either true/false, but then the endpoint don't return anything based on that, i feel this was on purpose, and since flagging it as "boolean" get's me the desired data, i proceeded, as it's a test app.

23. the detectTouch file is where i kept the hitSlop value, this allows users to tap a small action comfortable

24. i ran a test for "questionServices" and it passed all cases

25. if the "Triva" LOGO doesn't look aligned, it's from the design on the Logo on figma directly, it'll need some tweaking

26. i noticed sometimes, copying the whole svg from designs omits some things, this is not a problem though, usually the Designer export and zips theses assets
