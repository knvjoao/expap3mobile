import { ImageBackground, View, StyleSheet, Text, TextInput, Button, Alert } from "react-native";
import * as Yup from 'yup';
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { getFirestore, setDoc, doc } from '@firebase/firestore';
import imagemFundo from './../../assets/imgs/fundo.png';

export default function CadastroScreen() {

    const auth = getAuth();
    const db = getFirestore();
    const navigation = useNavigation();

    const handleCadastro = async({email, senha, nome, idade}:any) => {
        await createUserWithEmailAndPassword(auth, email, senha)
            .then((usuario) => {

                setDoc(doc(db, 'usuarios', usuario.user.uid), {
                    email, nome, idade
                })

            })
            .catch(erro => Alert.alert('Erro', 'Não foi possivel criar o usuário, tente novamente'))
    }


    return (
        <ImageBackground source={imagemFundo} resizeMode='cover' style={{width: '100%', height: '100%', flex: 1}}>
        <View style={styles.container}>
            <Text style={{fontSize: 24}}>Cadastro de conta</Text>
            <Formik
                initialValues={{email: '', senha: '', nome: '', idade: ''}}
                onSubmit={handleCadastro}
                validationSchema={Yup.object({
                    email: Yup.string().required('O campo email precisa existir').email('O campo precisa ser um email'),
                    nome: Yup.string().required('O campo nome precisa existir'),
                    idade: Yup.number().required('O campo idade precisa ser informado').positive('O valor precisa ser um número positivo'),
                    senha: Yup.string().required('O campo senha precisa existir').min(6, 'O campo senha precisa ter no mínimo 6 caracteres')
                })}
            >
                {({handleChange, errors, touched, handleBlur, isSubmitting, handleSubmit}) => (
                    <View style={{marginTop: 20}}>
                        
                        <Text>Nome: </Text>
                        <TextInput onChangeText={handleChange('nome')} onBlur={handleBlur('nome')} style={styles.input}/>
                        {touched.nome && errors.nome && <Text style={styles.erro}>{errors.nome}</Text>}
                        
                        <Text>Email: </Text>
                        <TextInput onChangeText={handleChange('email')} onBlur={handleBlur('email')} keyboardType="email-address" style={styles.input}/>
                        {touched.email && errors.email && <Text style={styles.erro}>{errors.email}</Text>}

                        
                        <Text>Idade: </Text>
                        <TextInput onChangeText={handleChange('idade')} onBlur={handleBlur('idade')} keyboardType="decimal-pad" style={styles.input}/>
                        {touched.idade && errors.idade && <Text style={styles.erro}>{errors.idade}</Text>}

                        
                        <Text>Senha: </Text>
                        <TextInput onChangeText={handleChange('senha')} onBlur={handleBlur('senha')} secureTextEntry style={styles.input}/>
                        {touched.senha && errors.senha && <Text style={styles.erro}>{errors.senha}</Text>}

                        <Text></Text>
                        <Button title="Cadastrar" color='blue' onPress={() => handleSubmit()} disabled={isSubmitting} />
                    </View>
                )}
            </Formik>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 70,
        paddingVertical: 110
    }, 
    input: {
        backgroundColor: 'rgb(237, 241, 210)',
        padding: 5
    },
    erro: {
        color: 'red',
        textAlign: 'right'
    }
});