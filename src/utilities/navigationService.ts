import {CommonActions as NavigationActions} from '@react-navigation/native';

let _navigator: any;

const setTopLevelNavigator = (navigatorRef: any) => {
  _navigator = navigatorRef;
};

const navigate = (routeName: string, params = {}) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      name: routeName,
      params,
    }),
  );
};

const reset = (routeName: string) => {
  _navigator.dispatch(
    NavigationActions.reset({
      index: 0,
      routes: [{name: routeName}],
    }),
  );
};
// add other navigation functions that you need and export them
export default {
  navigate,
  reset,
  setTopLevelNavigator,
};
