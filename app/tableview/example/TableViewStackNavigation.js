import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import Home from './components/home';
import ExampleOne from './components/exampleOne';
import ExampleTwo from './components/exampleTwo';
import ExampleThree from './components/exampleThree';
import ExampleFour from './components/exampleFour';
import ExampleFive from './components/exampleFive';

const stackNavigatorConfig = {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#f6f8fa'
        },
        headerBackTitle: null,
        headerTintColor: '#abd0ce',
        headerTitleStyle: {
            color: '#7c7877',
            fontWeight: '100'
        }
    }
};
const Navigation = createDrawerNavigator({
    TableViewHome: {
        screen: Home
    },
    ExampleOne: {
        screen: ExampleOne
    },
    ExampleTwo: {
        screen: ExampleTwo
    },
    ExampleThree: {
        screen: ExampleThree
    },
    ExampleFour: {
        screen: ExampleFour
    },
    ExampleFive: {
        screen: ExampleFive
    }
});
const stack = createStackNavigator({
    TableViewHome: {
        screen: Home
    },
    ExampleOne: {
        screen: ExampleOne
    },
    ExampleTwo: {
        screen: ExampleTwo
    },
    ExampleThree: {
        screen: ExampleThree
    },
    ExampleFour: {
        screen: ExampleFour
    },
    ExampleFive: {
        screen: ExampleFive
    }
}, stackNavigatorConfig);
export default Navigation;
