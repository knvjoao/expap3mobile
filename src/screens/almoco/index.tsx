import { StyleSheet, View, TouchableOpacity, Image, Alert, ImageBackground} from "react-native";
import imagemFundo from './../../assets/imgs/fundo.png';


const App = () => {
   
    const macarrao = () => Alert.alert('Macarrão ao molho alfredo', '       Ingredientes: \n 1 - Macarrão ao molho alfredo \n 2 - Água pra cozinhar o macarrão \n 3 - 200 gramas de macarrão tipo fettuccine \n 4 - 100 gramas de manteiga \n 5 - 50 gramas de queijo parmesão ralado \n 6 - Pimenta-do-reino a gosto \n\n       Modo de preparo: \n  1 - Com a água fervendo, coloque sal a gosto para cozinhar o macarrão. \n  2 - Adicione o macarrão fettuccine à panela. \n 3 - Cozinhe até a massa ficar al dente. \n  4 - Coloque um pouco da água do cozimento dentro de um bowl, e depois volte a água à panela. \n  5 - Imediatamente, adicione as 100 gramas de manteiga no bowl, para que derretam. \n  6 - Escorra também o macarrão e coloque dentro do bowl com a manteiga. \n  7 - Acrescente todo o queijo ralado e misture bem, até que o queijo derreta e o macarrão fique cremoso. \n  8 - Finalize com pimenta-do-reino a gosto e seu macarrão com molho alfredo está pronto para servir.');
    const frango = () => Alert.alert('Frango com molho de mel e páprica' , '        Ingredientes: \n 1 - Frango com molho de mel e páprica \n 2 - 500 gramas de sassami de frango \n 3 - Um quarto de xícara de chá de amido de milho \n 4 - Um quarto de xícara de chá de vinagre de vinho tinto \n 5 - Um quarto de xícara de chá de mel \n 6 - 3 colheres de sopa de água \n 7 - 1 e meia colher de chá de páprica doce \n 8 - Um quarto colher de chá de cominho em pó \n 9 - 2 colheres de sopa de óleo \n 10 - Sal a gosto \n 11 - Pimenta-do-reino moída a gosto \n\n        Modo de preparo: \n 1 - Em uma tigela pequena, misture o mel com o vinagre, a água, a páprica, o cominho e sal. \n 2 - Tempere o frango com 1 colher de chá de sal e com pimenta a gosto. Coloque o amido de milho num prato raso. \n 3 - Leve uma frigideira antiaderente grande ao fogo médio e, enquanto ela aquece, passe metade dos filezinhos de frango pelo amido para empanar — pressione bem com as mãos para cobrir toda a superfície. \n 4 - Regue a frigideira com 1 colher de sopa de óleo, coloque os filezinhos empanados um ao lado do outro e deixe dourar por cerca de 3 minutos de cada lado. \n 5 - Enquanto isso, empane o restante. Transfira o frango dourado para uma travessa e repita o processo com a outra metade, regando a frigideira com mais óleo. \n 6 - Volte os filezinhos dourados para a frigideira e abaixe o fogo. Acrescente o molho e deixe cozinhar por cerca de 2 minutos, até que o molho engrosse levemente e fique bem brilhante. \n 7 - Vá virando o frango com a pinça para que toda a superfície fique coberta pelo molho. Sirva a seguir. \n');
    return (
      <ImageBackground source={imagemFundo} resizeMode='cover' style={{width: '100%', height: '100%', flex: 1}}  >
       <View style={styles.container}>
        
        <TouchableOpacity style={styles.button} onPress={macarrao} >
          <Image source = {require('./macarrao.png')} style={{width: 170, height: 170}}/>
        </TouchableOpacity>  

        <TouchableOpacity style={styles.button} onPress={frango}>
          <Image source = {require('./frango.png')} style={{width: 170, height: 170}}/>
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