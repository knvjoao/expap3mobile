import { ImageBackground, View, Text, TextInput, Button, Alert, TouchableOpacity, StyleSheet } from "react-native";
import { NavegacaoPrincipalParams } from "../../navigations";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from "formik";
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import imagemFundo from './../../assets/imgs/fundo.png';

export default function LoginScreen() {
    
    const navigation = useNavigation<StackNavigationProp<NavegacaoPrincipalParams, "almoco">>();
    const auth = getAuth();

    const handleLogin = async ({email, senha}:any) => {
        await signInWithEmailAndPassword(auth, email, senha)
            .then(usuario => navigation.reset({index: 0, routes: [{name: 'inicio'}]})) //levar para tela inicial do app. mudar lanche para ela
            .catch(erro => Alert.alert('Erro', 'Verifique o login e a senha e tente novamente.')); 
    }

    return (  <ImageBackground source={imagemFundo} resizeMode='cover' style={{width: '100%', height: '100%', flex: 1}}  >
    <View style={styles.container}>
        <Formik initialValues={{email:'', senha:''}} onSubmit={handleLogin}>
            {({handleChange, handleSubmit, isSubmitting}) => (
                <>
                    <Text style={styles.header}>Login</Text>
                    <TextInput onChangeText={handleChange('email')} style={[styles.input, styles.borderBottom]} placeholder="EMAIL:"/>
                    <TextInput onChangeText={handleChange('senha')}  style={styles.input} secureTextEntry placeholder="SENHA:"/>
                    <Button title="Logar" color='blue' onPress={() => handleSubmit()} disabled={isSubmitting}/>
                </>
            )}
         </Formik>

        <TouchableOpacity onPress={() => navigation.push('cadastro')}>
            <Text style={styles.cadastro}>Clique aqui para criar uma conta</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 60,
        padding: 20
    },
    header: {
        fontSize: 24,
        textAlign: 'center'
    },
    input: {
        backgroundColor: 'rgb(237, 241, 210)',
        padding: 10,
        paddingHorizontal: 40
    },
    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingHorizontal: 40
    },
    cadastro: {
        marginTop: 5,
        fontSize: 12,
        textAlign: 'center'
    }
});