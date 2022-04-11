import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Button,TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="username."
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setusernamr(username)}
        />
      </View>
     

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
     
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="confirm password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(confirmpassword) => setconfirmPassword(confirmpassword)}
        />
      </View>
 
      <TouchableOpacity style={styles.signInBtn}>
        <Text style={styles.signInText}>signIN</Text>
      </TouchableOpacity>
    </View>
  );
}
    



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  confrimButton: {
    height: 30,
    marginBottom: 30,
  },
 
  signInBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
