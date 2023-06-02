import { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function App() {

  const imagemCronometro = require('./assets/crono.png')

  const [iniciar, setIniciar] = useState('Iniciar')
  const [timer, setTimer] = useState('00:00:00')

  function iniciarCronometro(){
    alert('iniciando cronometro')
  }
  
  function pararCronometro(){
    alert('parando cronometro')
  }    
  return (
    <View style={estilo.container}>

     <Image style={estilo.imagem} source={imagemCronometro}/>
     <Text style={estilo.timer}>{timer}</Text>

      <View style={estilo.areaBotoes}>

        <TouchableOpacity style={estilo.btn} onPress={iniciarCronometro}>
            <Text style={estilo.btnIniciar}>{iniciar}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilo.btn} onPress={pararCronometro}>
            <Text style={estilo.btnPausar}>Pausar</Text>  
        </TouchableOpacity>
      </View>

      <View style={estilo.areaTextoRelogio}>
        <Text style={estilo.textoRelogio}>

        </Text>
      </View>
      <View style={estilo.areaTempoPercorrido}>
        <Image style={estilo.relogioTempoPercorrido} source={imagemCronometro}/>
        <Text style={estilo.tempoPercorrido}>00:00:10</Text>
      </View>

    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07a2a6',
    alignItems: 'center',
    justifyContent: 'center',

  },
  timer:{
    marginTop:-160,
    fontSize:45,
    color:'#fff'
  },
  areaBotoes:{
    flexDirection:'row',
    marginTop:160,
    height:40
  },
  btn:{
    margin:17,
    height:40,
    borderRadius:8,
    backgroundColor:"#fff",
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btnIniciar:{
    color:'#07a2a6',
    fontSize:32,
  
  }, 
  btnPausar:{
    color:'#07a2a6',
    fontSize:32
  },
  areaTempoPercorrido:{
    flex:0.5,
    flexDirection:'row',
    justifyContent:'center',
    gap:10,
    alignItems:'center',
    
  },
  relogioTempoPercorrido:{
    width:32,
    height:40
  },

  tempoPercorrido:{
    color:'#fff',
    fontSize:25,

  }
});
