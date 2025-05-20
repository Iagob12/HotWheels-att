import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Criar from './src/pages/Criar';
import DetalhesHome from './src/pages/DetalhesHome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Criar" component={Criar} />
        <Stack.Screen name="DetalhesHome" component={DetalhesHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}