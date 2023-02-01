# TRIVIA README

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
