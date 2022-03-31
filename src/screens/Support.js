import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Support = () => {
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#8D57F8' barStyle="light-content" />
           <View style={styles.header}>
               <Image style={styles.img} source={require('../images/contact.png')} />
               <Text style={styles.text1}>
                   Contact Us
               </Text>
           </View>
           <LinearGradient colors={['#CCB3FF', '#8D57F8', '#6643AB']}
                style={styles.footerGradient}>
           <View style={styles.footer}>
                <Text style={styles.text}>Email Id :</Text>
                <TextInput style={styles.input}
                         editable={false} selectTextOnFocus={true}
                         keyboardType='numeric'
                    >Digitalonebox@gmail.com</TextInput>
                <Text style={styles.text}>Contact No :</Text>
                <TextInput style={styles.input}
                         editable={false} selectTextOnFocus={true}
                         keyboardType='numeric'
                    >+91 1234567890</TextInput>
                    <TouchableOpacity>
                        {/* colors={['#4c669f', '#3b5998', '#192f6a']} */}
                        {/* colors={['#F88C89', '#F83A34', '#D40C06']} */}
                        {/* colors={['#60DD41', '#0D3702', '#135703']} */}
                        <LinearGradient colors={['#F88C89', '#F83A34', '#D40C06']}
                            style={styles.linearGradient}>
                            <Text style={styles.buttonText}>
                                Call Us
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
        margin: '2%'
    },
    header: {
        flex: 1.7,
        backgroundColor: '#FFF',
        alignItems: 'center',

    },
    img: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    text1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop:'1%'
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
    text: {
        fontSize:16,
        color:'#FFF',
        paddingLeft:20,
        marginBottom:'1%'
    },
    flatlist:{
        backGroundColor:'#FFF'
    },
    input: {

        width: '100%',
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
        marginBottom:'5%'
      },
    linearGradient: {

        // paddingLeft: 15,
        // paddingRight: 15,
        borderRadius: 20,
        margin: '30%',
        // marginLeft: '10%',
        // marginRight: '10%',


    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
        color: '#FFF',
        backgroundColor: 'transparent',
    },
})

export default Support;