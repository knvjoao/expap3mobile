import { View, ImageBackground, TouchableOpacity, StyleSheet, Image} from "react-native";
import imagemFundo from './../../assets/imgs/fundo.png';

const App = () => {
    
    return (
        <ImageBackground source={imagemFundo} resizeMode='cover' style={{width: '100%', height: '100%', flex: 1}}  >
         <View>
          <TouchableOpacity style={styles.button} >
            <Image source = {require('./info.png')} style={{width: 250, height: 250}}/>
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
      paddingVertical: 180,
    },
  });

  export function componente(){
    return (<ImageBackground source={imagemFundo}>
     /.../
         </ImageBackground>) 
 }


  export default App;