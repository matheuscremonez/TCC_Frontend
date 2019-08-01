import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './screens/main.js';
import Result from './screens/result.js';

const RootStack = createStackNavigator({
    Main: {
        screen: Main,

        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    Result: {
        screen: Result
    }
});

const App = createAppContainer(RootStack);

export default App;
