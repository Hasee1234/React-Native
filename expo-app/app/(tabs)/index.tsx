import React,{useState} from 'react';
import {  Text ,View,Platform,TextInput} from 'react-native';

export default function HomeScreen() {
  const [text, settext] = useState('')
  return (
    <View>
      <Text style={{margin: Platform.OS == "android" ? 20 : 50}}> Hello Hasee</Text>
      <Text>{Platform.OS}-{text}</Text>
      <TextInput style={{height:40,borderColor:'gray',borderWidth:2}}
      onChangeText={val=>settext(val)}
       value={text}/>

    </View>
  );
}
