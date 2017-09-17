import {TabNavigator} from 'react-navigation';
import Feed from "../components/Feed/Feed";
import Map from "../components/Map/Map";
import Preferences from "../components/Preferences/Preferences";

export const BottomTabNavigator = TabNavigator({
    Feed: {screen: Feed},
    Map: {screen: Map},
    Preferences: {screen: Preferences}
});
