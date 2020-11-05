import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/Welcome';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
          <WelcomeScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// function stopCodeImplode(noboom) {
//     this.noboom = this.code.code();
// }
// function saveCode(antivirus) {
//     this.protectionSequence = {
//         this.anti-virus = kill virus.anti();
//         this.sheild = protect saveCode.destroy();
//         this.requestAssistance = call help.(
//             if (this.sheild.fail()) {
//                 call 911/100
//             }
//         )
//         this.replace = this.code.code();
//     }
//     stopCodeImplode();
// }
