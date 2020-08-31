/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

          <View style={styles.container}>
            <View style={styles.logo}>
              <Text style={styles.sectionTitle}>GCM Dailer</Text>
            </View>
            <View style={styles.inputView} >
              <TextInput style={styles.inputText}

                placeholder="Email"
                placeholderTextColor="#003f5c"

              />

            </View>
            <View style={styles.inputView} >
              <TextInput
                style={styles.inputText}
                placeholder="password..."
                placeholderTextColor="#003f5c"
              />
            </View>
            <TouchableOpacity
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Login</Text>
            </TouchableOpacity>

          </View>
          <TouchableOpacity style={styles.forpass}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#33adff',

  },
  forpass: {
    textAlign: 'right',


  },
  forgot: {
    textAlign: 'right',
    textDecorationLine: 'underline',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 40,
    marginBottom: 10,


  },
  container: {
    flex: 1,
    backgroundColor: '#33adff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center"


  },
  sectionTitle: {
    fontWeight: "800",
    color: "#fff",
    fontSize: 25,
  },
  body: {
    backgroundColor: Colors.white,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",

    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "#000"
  },
  body: {
    backgroundColor: '#33adff'
  },
  submitButton: {
    width: "80%",
    backgroundColor: "#00e600",

    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  submitButtonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20,

  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
