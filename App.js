import * as React from 'react';
import { Text, View, Button , TouchableOpacity } from 'react-native';

class SoundButton extends React.Component {


  render() {
    return (
<TouchableOpacity
style={{
  backgroundColor : 'cyan',
  width:200,
  height:200,
  justifyContent:'center',
  alignItems : 'center' ,
  borderRadius : 100,
  
  
}}> 
<Text>press me</Text>
</TouchableOpacity>
    );
  }
}
class SoundButton1 extends React.Component {


  render() {
    return (
<TouchableOpacity
style={{
  backgroundColor : 'red',
  width:200,
  height:200,
  justifyContent:'center',
  alignItems : 'center' ,
  borderRadius : 100,
  
  
}}> 

<Text>press me</Text>
</TouchableOpacity>
    );
  }
}
class SoundButton2 extends React.Component {


  render() {
    return (
<TouchableOpacity
style={{
  backgroundColor : 'yellow',
  width:200,
  height:200,
  justifyContent:'center',
  alignItems : 'center' ,
  borderRadius : 100,
  
  
}}> 

<Text>press me</Text>
</TouchableOpacity>
    );
  }
}
class SoundButton3 extends React.Component {


  render() {
    return (
<TouchableOpacity
style={{
  backgroundColor : 'green',
  width:200,
  height:200,
  justifyContent:'center',
  alignItems : 'center' ,
  borderRadius : 100,
  
  
}}> 

<Text>press me</Text>
</TouchableOpacity>
    );
  }
}
export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
         <SoundButton1 />
         <SoundButton2 />
         <SoundButton3 />
        
      </View>
    );
  }
}


