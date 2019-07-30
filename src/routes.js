import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './screens/main.js';
import Result from './screens/result.js';

const RootStack = createStackNavigator({
    Main,
    Result
});

const App = createAppContainer(RootStack);

export default App;
