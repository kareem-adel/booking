import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Signup = () => {
    const signup = async (email, password) => {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            console.log("User account created & signed in!");
            return true;
          })
          .catch((error) => {
            if (error.code === "auth/email-already-in-use") {
              console.log("That email address is already in use!");
              return error.code;
            }
    
            if (error.code === "auth/invalid-email") {
              console.log("That email address is invalid!");
              return error.code;
            }
    
            console.error(error);
            return error;
          });
      };
    return (
        <View>
            <Text></Text>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({})
