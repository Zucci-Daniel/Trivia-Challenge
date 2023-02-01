# TRIVIA README

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

2. i choose
