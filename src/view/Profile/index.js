import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
 
import photo from '../../../assets/photo.png'
 
export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.container3}>
 
          
        <Image source={photo} style={styles.photo} />
 
        <label>Nome</label>
        <br/>
        <label>Infos</label>
        <br/>
        <label>Infos</label>
        <br/>
        <label>Infos</label>
 
        </View>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8D99AE',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  container2: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: "95%",
    maxHeight: "95%",
    borderRadius: "15px"
  },
 
  container3: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: 'center',
    justifyContent: 'center',
    width: "80%",
    maxHeight: "50%",
    marginBottom: 150
  },
 
  photo: {
    width: 155,
    height: 155,
    borderRadius: "30px",
    marginBottom: 40,
    borderWidth: 1,
    borderColor: "#2B2D42",
    backgroundColor: "#FFFFFF"
  },
 
});