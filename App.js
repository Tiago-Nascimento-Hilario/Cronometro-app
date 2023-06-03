import { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

let relogio = null;

let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {

  const imagemCronometro = require('./assets/crono.png')

  const [iniciar, setIniciar] = useState('Iniciar');
  const [timer, setTimer] = useState(0);
  const [ultimo, setUltimo] = useState(null);



  function iniciarCronometro(){
    
    // Para o relógio 
    if(relogio !== null){
      clearInterval(relogio);
      relogio = null;

      setIniciar('Iniciar');

      // Inicia o relógio
    }else{
      relogio = setInterval(()=>{
        ss++

        if(ss == 60){
          ss = 0;
          mm++;
        }
        if(mm == 60){
            mm = 0;
            hh++;
          }
        
         let horaFormatada =
         (hh < 10 ? '0' + hh : hh) + ':' + 
         (mm < 10 ? '0' + mm : mm) + ':' +
         (ss < 10 ? '0' + ss : ss);

         setTimer(horaFormatada);
         setUltimo(horaFormatada);


      },1000);
      setIniciar('Pausar');
    }

  }
  
  function pararCronometro(){
    if(relogio !== null){
      clearInterval(relogio);
      relogio = null;
    }
    setIniciar('Iniciar')
    setTimer(0)
    ss = 0;
    mm = 0;
    hh = 0;


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
            <Text style={estilo.btnPausar}>Limpar</Text>  
        </TouchableOpacity>
      </View>

      <View style={estilo.areaTextoRelogio}>
        <Text style={estilo.textoRelogio}>

        </Text>
      </View>

      <View style={estilo.areaTempoPercorrido}>
          <Text style={estilo.tempoPercorrido}>{ultimo ? 'Tempo: ' + ultimo : '' }</Text>
      </View>

    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',

  },
  imagem:{
    marginTop:100,
  },
  timer:{
    marginTop:-160,
    fontSize:45,
    color:'#fff'
  },
  areaBotoes:{
    flexDirection:'row',
    marginTop:160,

  },
  btn:{
    margin:17,
    height:40,
    borderRadius:8,
    borderWidth:2,
    borderColor:'#fff',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btnIniciar:{
    color:'#fff',
    fontSize:32,
  
  }, 
  btnPausar:{
    color:'#fff',
    fontSize:32
  },
  areaTempoPercorrido:{
    flex:0.5,
    flexDirection:'row',
    justifyContent:'center',
    gap:10,
    alignItems:'center',
    
  },

  tempoPercorrido:{
    color:'#fff',
    fontSize:25,

  }
});
