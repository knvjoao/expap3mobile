import { StyleSheet, View, Button, ImageBackground } from "react-native";
import React from 'react';
import {  useNavigation } from "@react-navigation/native";
import { NavegacaoPrincipalParams } from "../../navigations";
import { StackNavigationProp } from "@react-navigation/stack";
import imagemFundo from './../../assets/imgs/fundo.png';
import NetInfo from "@react-native-community/netinfo";
import { useNetInfo } from "@react-native-community/netinfo";
import { isReactNative } from "@firebase/util";
export default function Tela1Screen(props: any) {
    type navProps = StackNavigationProp<NavegacaoPrincipalParams, 'inicio'>;
    const nav = useNavigation<navProps>();
    const navigation = useNavigation();
    const net = useNetInfo();
    let estaConectado:string;
  
    function conectado(status:boolean){
      if (status == true){
          estaConectado = 'Conectado'
          return estaConectado
        }
      else{
        estaConectado = 'Sem conexão'
        return estaConectado
      }
    }

    estaConectado = conectado(net.isConnected);

  return (
    <ImageBackground source={imagemFundo} resizeMode='cover' style={{width: '100%', height: '100%', flex: 1}}  >
    <View style={styles.container}>

      <Button title="Receitas de almoço" 
        onPress={() => navigation.navigate('almoco')}/>
        
      <View style={styles.space}/>

      <Button title = "Receitas de lanche" color='red'
          onPress={() => navigation.navigate('lanche')}/>

      <View style={styles.space}/>

      <Button title = "Informações" color='green'
          onPress={() => navigation.navigate('informacoes')}/>
          
      <View style={styles.space}/>

      <Button title = "Status da internet" color='green'
          onPress={() => {
            NetInfo.fetch().then(state =>{
              alert(estaConectado);
            });
          }}/>

    </View>
    </ImageBackground>
   )
    }
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

 space: {
    width: 40,
    height: 40,
  },
})

export function componente(){
  return (<ImageBackground source={imagemFundo}>
   /.../
       </ImageBackground>) 
};

