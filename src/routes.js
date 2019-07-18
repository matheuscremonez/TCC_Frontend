import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './screens/main.js';

const RootStack = createStackNavigator({
    Main
});

const App = createAppContainer(RootStack);

export default App;
