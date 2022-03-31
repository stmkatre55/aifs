import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';


// const PendingView = () => (
//     <View
//       style={{
//         flex: 1,
//         backgroundColor: 'lightgreen',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Text>Waiting</Text>

//     </View>
//   );


const Adhaar = () => {

  const [image1, setImage1] = useState('https://www.digitalindiagov.in/wp-content/uploads/2020/12/1bc1f5d58d8f71f3beca8075feed11e5.png')
  const [image2, setImage2] = useState('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/A_sample_of_Aadhaar_card.jpg/190px-A_sample_of_Aadhaar_card.jpg')

 

  const launchCamera1 = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage1(image.path);
    });
  }
  const launchCamera2 = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage2(image.path);
      console.log(image2)
    });
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#8D57F8' barStyle="light-content" />
      <View style={styles.header}>
        <Image style={styles.img} source={require('../images/upload_img.png')} />
        <Text style={styles.text1}>Upload Your Adhaar Card For </Text>
        <Text style={styles.text1}>Address verification </Text>

      </View>
      <LinearGradient colors={['#CCB3FF', '#8D57F8', '#6643AB']}
        style={styles.footerGradient}>
        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder='Enter Adhaar Card No.'

          ></TextInput>
          <View style={styles.imgView}>
            <View style={styles.front}>
              <TouchableOpacity style={styles.img1}
                onPress={launchCamera1}
              >
                <ImageBackground style={styles.img2} source={{ uri: image1 }}
                />
              </TouchableOpacity>
              <Text style={styles.frontText}>Front Image</Text>
            </View>
            <View style={styles.back}>
              <TouchableOpacity style={styles.img1}
                onPress={launchCamera2}
              >
                <ImageBackground style={styles.img2} source={{ uri: image2 }}

                />
              </TouchableOpacity>
              <Text style={styles.frontText}>
                Back Image
              </Text>
            </View>
          </View>

          <TouchableOpacity style={styles.linearGradient}>
            <LinearGradient colors={['#F88C89', '#F83A34', '#D40C06']} style={styles.linearGradient}>
              <Text style={styles.buttonText}>
                Upload
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>

    </View>
  )


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flex: 3,
    padding: '2%',
    backgroundColor: '#FFF',
    alignItems: 'center',

  },
  img: {
    flex: 4,
    width: '80%',
    height: '30%',
    marginLeft: '2%'
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  footer: {
    flex: 1,

},
footerGradient: {
    flex: 4,
    backgroundColor: '#00700F',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    borderRadius: 30,
    paddingTop: '5%',
    margin: '3%'

},
  input: {

    width: '100%',
    marginTop: '5%',
    height: 40,
    color: '#05375a',
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingLeft: 20,
    alignItems: "center",
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 7,
    fontSize: 16,
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  linearGradient: {

    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    marginTop: '8%'

  },
  imgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '8%'
  },
  img1: {
    width: 150,
    height: 100,
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'

  },
  img2: {
    width: 130,
    height: 80,
    borderRadius: 5,

  },
  front: {
    flex: 1,
    alignItems: 'center'
  },
  back: {
    flex: 1,
    alignItems: 'center'
  },
  frontText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFF',
    margin: '2%'
  }
});
export default Adhaar;
