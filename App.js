import React from 'react';

import CoinsStack from './src/componentes/coins/CoinsStack';
import { NavigationContainer} from '@react-navigation/native';
import InicioLayout from './src/componentes/coins/LayoutInicio';
import CategoriasLayout from './src/componentes/coins/LayoutCategorias';

function App() {
  return (
    <>
      <NavigationContainer>
        <CategoriasLayout />
      </NavigationContainer>
    </>
  );
}
export default App;