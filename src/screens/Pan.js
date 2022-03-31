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
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-crop-picker';


const Pan = () => {

    const [image1, setImage1] = useState('http://www.jkyouth.com/wp-content/uploads/2022/01/Pan-Card.jpg')


    const launchCamera1 = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            setImage1(image.path);
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#8D57F8' barStyle="light-content" />
            <View style={styles.header}>
                <Image style={styles.img} source={require('../images/upload_img1.png')} />
                <Text style={styles.text1}>Upload Your Pan Card For</Text>
                <Text style={styles.text1}>Personal Identity</Text>

            </View>
            <LinearGradient colors={['#CCB3FF', '#8D57F8', '#6643AB']}
                style={styles.footerGradient}>
                <View style={styles.footer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter Pan No.'

                    ></TextInput>
                    <View style={styles.imgView}>
                        <TouchableOpacity style={styles.img1}
                            onPress={launchCamera1}
                        >
                            <ImageBackground style={styles.img2} source={{ uri: image1 }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.frontText}>Pan Card Image</Text>
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
        margin: '2%',
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

        width: '90%',
        marginTop: '5%',
        height: 40,
        color: '#05375a',
        marginLeft: '5%',
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
        // margin: '2%'

    },
    imgView: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    img1: {
        width: '80%',
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#fff',
        paddingLeft: '2%',
        paddingTop: '2%',
        paddingBottom: '1%'

    },
    img2: {
        width: '98%',
        height: '98%',
        borderRadius: 20,


    },
    frontText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#FFF',
        margin: '2%'
    },
});
export default Pan;
