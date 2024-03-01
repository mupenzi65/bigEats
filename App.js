import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantCard from './components/RestaurantCard';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import PreparingOrder from './screens/PreparingOrder';
import DeliveryScreen from './screens/DeliveryScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RestaurantScreen" component={RestaurantScreen} />
        <Stack.Screen 
  name="Basket" 
  component={BasketScreen} 
  options={{
    presentation: "modal",
    headerShown: false
  }} 
/>
<Stack.Screen name="preparingOrder" component={PreparingOrder}  options={{
    presentation: "fullScreenModal",
    headerShown: false
  }}   />
<Stack.Screen name="Delivery" component={DeliveryScreen}  options={{
    presentation: "fullScreenModal",
    headerShown: false
  }}   />

      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

