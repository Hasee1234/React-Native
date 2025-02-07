import Card from '@/components/card/Card';
import { Link, router, useRouter } from 'expo-router';
import React,{useState} from 'react';
import {  Text ,View,Platform,TextInput,Button, Alert} from 'react-native';

export default function HomeScreen() {
  const [text, settext] = useState('')
  const router=useRouter()
  const goToExplore=()=>{
    Alert.alert("clicked here")
    router.push('/explore')
  }
  return (
    <View>
      <Link href={"/explore"}>Go to explore</Link>
      <Link href={"/profile"}>Go to profile</Link>
      <Button title='Go to explore' onPress={goToExplore}></Button>
      <Text style={{margin: Platform.OS == "android" ? 20 : 50}}> Hello Hasee</Text>
      <Text>{Platform.OS}-{text}</Text>
      <Card title="hello card"/>
      <TextInput style={{height:40,borderColor:'gray',borderWidth:2}}
      onChangeText={val=>settext(val)}
       value={text}/>

    </View>
  );
}
