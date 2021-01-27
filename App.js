import React from 'react';
import CoinsStack from './src/componentes/coins/CoinsStack';
import { NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <>
      <NavigationContainer>
        <CoinsStack />
      </NavigationContainer>
    </>
  );
}
export default App;