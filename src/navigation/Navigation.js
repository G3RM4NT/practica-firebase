import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Add from '../screens/Add';
import Edit from '../screens/Edit';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{title:'Home'}} />
                <Stack.Screen name="Add" component={Add} 
                options={{presentation:'modal', title:'Registrar usuario'}}/>
                <Stack.Screen name="Edit" component={Edit} options={{title:'Editar datos'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;