import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import AccountScreen from './src/screens/Account'
import SigninScreen from './src/screens/Signin'
import SignupScreen from './src/screens/Signup'
import TrackCreateScreen from './src/screens/TrackCreate'
import TrackDetailsScreen from './src/screens/TrackDetails'
import TrackListScreen from './src/screens/TrackList'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  )
}

const TrackStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetails" component={TrackDetailsScreen} />
    </Stack.Navigator>
  )
}

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{ headerShown: false }} name="TrackStack" component={TrackStackNavigator} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
        <Stack.Screen name="MainTab" component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
