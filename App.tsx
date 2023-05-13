import { StyleSheet } from 'react-native';
import { NavegacaoPrincipal } from './src/navigations';
import { firebaseConfig } from './src/config/firebase-config';
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from "firebase/analytics";


export default function App() {


  initializeApp(firebaseConfig)

  return ( <NavegacaoPrincipal/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
