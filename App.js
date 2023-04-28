import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <Text style={styles.tituloP}>As Borracharias</Text>
        <Image source={require('./assets/favicon.png')}/>
        <View style={styles.bloco}>
            <Text style={styles.tit}>Oficina do Pedro</Text>
            
            <Text style={styles.desc}>Marteliho de ouro</Text>
            <Text style={styles.end}>Endereço: Rua Afonso Brás, 43 São Paulo</Text>
            <Text style={styles.tel}>Telefone: (11)99643816</Text>
            <Text style={styles.ligar}>Ligar</Text>
        </View>

        <View style={styles.bloco}>
            <Text style={styles.tit}>Oficina do João</Text>
            <Text style={styles.desc}>Marteliho de ouro</Text>
            <Text style={styles.end}>Endereço: Rua Afonso Brás, 43 São Paulo</Text>
            <Text style={styles.tel}>Telefone: (11)99643816</Text>
            <Text style={styles.ligar}>Ligar</Text>
        </View>

        <View style={styles.bloco}>
            <Text style={styles.tit}>Oficina do Lucas</Text>
            <Text style={styles.desc}>Marteliho de ouro</Text>
            <Text style={styles.end}>Endereço: Rua Afonso Brás, 43 São Paulo</Text>
            <Text style={styles.tel}>Telefone: (11)99643816</Text>
            <Text style={styles.ligar}>Ligar</Text>
        </View>

        <View style={styles.bloco}>
            <Text style={styles.tit}>Oficina do Miguel</Text>
            <Text style={styles.desc}>Marteliho de ouro</Text>
            <Text style={styles.end}>Endereço: Rua Afonso Brás, 43 São Paulo</Text>
            <Text style={styles.tel}>Telefone: (11)99643816</Text>
            <Text style={styles.ligar}>Ligar</Text>
        </View>
    
   
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#192a56',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloP: {
    
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 70,
    padding: 20, 
  },
  tit: {
    color: '#192a56',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30, 
  },

  tel:{
    color: 'blue',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  desc: {
    color:'#333',
    fontStyle: 'italic',
    
  },

  bloco: {
    backgroundColor: '#FFF',
    width: 350,
    padding: 20,
    borderRadius: 12,
    margin: 15,
            
  },

  ligar: {
    backgroundColor: '#2b961f',
    padding: 8,
    justifyContent: 'center',
    width: 138,
    borderRadius: 30,
    marginTop: 10,
    
  }
});
