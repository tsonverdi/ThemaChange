import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import MyContext from '../store'

const HomeScreen = () => {
    const {theme,setTheme} = useContext(MyContext);
  return (
    <View style={{ paddingTop: 50, backgroundColor: theme === "dark" ? "black" : "white", flex:1}}>
      <Text style={{color: theme === "dark" ? "white" : "black", textAlign: "center"}}>HomeScreen</Text>

      <Button title="Temayi Degistir"
      onPress={()=>{
        if(theme === "dark"){
            setTheme("light");
        }
        else{
            setTheme("dark");
        }
      }}/>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})