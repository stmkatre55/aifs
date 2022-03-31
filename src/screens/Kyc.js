import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity,
    Image,
    StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Kyc = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#8D57F8' barStyle="light-content" />
            <View style={styles.header}>
                <Image style={styles.img} source={require('../images/kyc.png')} />
                <Text style={styles.text1}>KYC And Bank Details </Text>
            </View>
            <LinearGradient colors={['#CCB3FF', '#8D57F8', '#6643AB']}
                style={styles.footerGradient}>
                <View style={styles.footer}>
                    <Text style={styles.text}>
                        Adhaar Card Number
                    </Text>
                    <TextInput style={styles.input}
                         placeholder='1234-5678-9658-8574'
                         editable={false} selectTextOnFocus={true}
                         keyboardType='numeric'
                    ></TextInput>
                    <Text style={styles.text}>
                        Pan Card Number
                    </Text>
                    <TextInput style={styles.input}
                         placeholder='ABCDE1234F'
                         editable={false} selectTextOnFocus={true}
                         keyboardType='numeric'
                    ></TextInput>
                    <Text style={styles.text}>
                        Bank Accounts
                    </Text>
                    <View style={styles.footerView}>
                        <Text style={styles.text2}>State Bank Of India</Text>
                        <Text style={styles.text2}>0123456789</Text>
                        <Text style={styles.text2}>SBIN0000318</Text>
                    </View>
                    <FlatList style={styles.flatlist}></FlatList>
                    <TouchableOpacity>
                        <LinearGradient colors={['#EEE', '#FFF', '#EEE']}
                            style={styles.linearGradient1}>
                            <Text style={[styles.buttonText,{color:'#6643AB'},{margin:4}]}>
                                + Add Bank
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {/* colors={['#4c669f', '#3b5998', '#192f6a']} */}
                        {/* colors={['#F88C89', '#F83A34', '#D40C06']} */}
                        {/* colors={['#60DD41', '#0D3702', '#135703']} */}
                        <LinearGradient colors={['#F88C89', '#F83A34', '#D40C06']}
                            style={styles.linearGradient}>
                            <Text style={styles.buttonText}>
                                Update KYC
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
        marginBottom:'2%'
      },
    linearGradient: {

        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        // margin: '10%'
        marginLeft: '10%',
        marginRight: '10%',


    },
    linearGradient1: {
        borderRadius: 20,
        margin: '3%', 
        marginLeft:'30%',
        marginRight:'30%'    

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
    footerView: {
        flex: 1,
        backgroundColor: '#fff',
        margin: '1%',
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 130,
        
        justifyContent:'center'
    },
    text2:{
        fontSize:16,
        color:"#000",
        fontWeight:'500',
        margin:'1%'
    }
})

export default Kyc;