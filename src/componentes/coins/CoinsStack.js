//importar react
import React from 'react'; 
//import libreria stack
import { createStackNavigator } from '@react-navigation/stack';

import CoinsScreen from './CoinsScreen';

const Stack = createStackNavigator();
import CoinDetailsScreen from './CoinDetailsScreen';


const CoinsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="stack"  
            component={CoinsScreen}
            />
            {/* //importamos el sstack de la pantalla de detalle*/}   
         <Stack.Screen 
            name="CoinDetailsScreen"  
            component={CoinDetailsScreen}
            />

        </Stack.Navigator>

    )
}

export default CoinsStack;