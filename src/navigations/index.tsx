import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import Tela1Screen from '../screens/inicio';
import Tela2Screen from '../screens/almoco';
import Tela3Screen from '../screens/lanche';
import Tela4Screen from '../screens/informacoes';
import CadastroScreen from '../screens/cadastro';
import LoginScreen from '../screens/login';


export const NavegacaoPrincipal = () => (
 <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="inicio" component={Tela1Screen} />
        <Stack.Screen name="cadastro" component={CadastroScreen} />
        <Stack.Screen name="almoco" component={Tela2Screen} />
        <Stack.Screen name="lanche" component={Tela3Screen} />
        <Stack.Screen name="informacoes" component={Tela4Screen} />
  </Stack.Navigator>
 </NavigationContainer>
)

export type NavegacaoPrincipalParams = {
    login: undefined,
    cadastro: undefined,
    inicio: undefined,
    almoco: undefined,
    lanche: undefined,
    informacoes: undefined
    }

const Stack = createStackNavigator<NavegacaoPrincipalParams>();
    