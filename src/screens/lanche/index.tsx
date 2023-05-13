import { StyleSheet, View, TouchableOpacity, Image, Alert, ImageBackground} from "react-native";
import imagemFundo from './../../assets/imgs/fundo.png';

const App = () => {
   
    const brownie = () => Alert.alert('Brownie de chocolate', '        Ingredientes: \n 1 - 2 xícaras de achocolatado em pó \n 3 - 1 xícara de farinha de trigo \n 4 - 1 xícara de açúcar \n 5 - 200 gramas de manteiga \n 6 - 4 ovos \n\n         Modo de preparo: \n 1 - Em uma tigela, coloque os ovos, o açúcar e bata com a ajuda de um fouet ou garfo; \n 2 - Em seguida, adicione a manteiga e o achocolatado em pó; \n 3 - Misture tudo e depois adicione a farinha de trigo; \n 4 - Mexa a massa até que fique homogênea; \n 5 - Depois, despeje a massa em uma forma untada com achocolatado em pó; \n 6 - Leve para assar em forno preaquecido a 180 graus Celsius por 35 minutos; \n 7 - Retire do forno e sirva!');
    const bolo = () => Alert.alert('Bolo de chocolate na air fryer' , '        Ingredientes:\n 1 colher (sopa) fermento em pó \n 2 - 1 pitada de sal \n 3 - Meia xícara de leite \n 4 - 3 colheres (sopa) de chocolate em pó 50% \n 5 - Meia xícara de farinha de trigo \n 6 - 2 colheres (sopa) de óleo \n 7 - Meia xícara de açúcar \n 8 - 1 ovo \n\n        Modo de preparo:\n1 - Misture todos os ingredientes em uma forma que caiba em sua air fryer;\n2 - Em seguida, coloque em 180 graus por cerca de 20 minutos.\n');
    return (
      <ImageBackground source={imagemFundo} resizeMode='cover' style={{width: '100%', height: '100%', flex: 1}}  >
       <View style={styles.container}>
        
        <TouchableOpacity style={styles.button} onPress={brownie} >
          <Image source = {require('./brownie.png')} style={{width: 170, height: 170}}/>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.button} onPress={bolo}>
          <Image source = {require('./bolo.png')} style={{width: 170, height: 170}}/>
        </TouchableOpacity>
      
        </View>
      </ImageBackground>
      
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 95,
    },
    button: {
      alignItems: 'center',
      paddingVertical: 5,
    },
  });

  export function componente(){
    return (<ImageBackground source={imagemFundo}>
     /.../
         </ImageBackground>) 
  }
  
  export default App;