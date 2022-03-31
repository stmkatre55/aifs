import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SigninScreen = () => {
    return (
        <View style={{flex:1}}>
        <StatusBar backgroundColor='#8D57F8' barStyle="light-content" />
        <ScrollView style={{flex:1}} >
        <View  style={styles.container}>
            
            
            <Image style={styles.img} source={require('../images/sign_in.png')} />
            <Text style={styles.text}>Welcome Back</Text>
            <Text style={styles.text3}>Enter Mobile No. </Text>
            <TextInput
                style={styles.input}
                placeholder='9399705082'
                // editable={false} selectTextOnFocus={true}
                keyboardType='numeric'
                textContentType="telephoneNumber"

            > <Text >+91  </Text></TextInput>
            <View style={styles.inputText}>
                <TextInput style={styles.input1}
                    placeholder='______'
                    // editable={false} selectTextOnFocus={true}
                    keyboardType='numeric'
                >

                </TextInput>
                <TouchableOpacity style={styles.linearGradient1}>
                    <LinearGradient colors={['#F88C89', '#F83A34', '#D40C06']}
                        style={styles.linearGradient1}>
                        <Text style={styles.buttonText1}>
                            Get OTP
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <Text style={styles.text1}>Did't get OTP?
                <Text style={styles.text2}>  Resend</Text>
            </Text>
            <TouchableOpacity style={styles.linearGradient}>
                {/* colors={['#4c669f', '#3b5998', '#192f6a']} */}
                {/* colors={['#F88C89', '#F83A34', '#D40C06']} */}
                {/* colors={['#60DD41', '#0D3702', '#135703']} */}
                <LinearGradient colors={['#F88C89', '#F83A34', '#D40C06']}
                    style={styles.linearGradient}>
                    <Text style={styles.buttonText}>
                        Submit
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
            
        </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
        margin: '2%',
        paddingHorizontal: '10%'
    },
    img: {
        
        marginTop: '10%',
        width: '60%',
        height: '25%',
        marginRight: '8%'

    },
    text: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 20,
        marginBottom: '3%',

    },
    input: {

        width: '100%',
        height: 40,
        color: '#05375a',
        margin: '2%',
        backgroundColor: '#EEE',
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
    input1: {
        flex: 1,
        width: '100%',
        height: 40,
        color: '#05375a',
        backgroundColor: '#EEE',
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
        marginTop: '2%',
        marginBottom: '2%',
        letterSpacing:20

    },
    inputText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text1: {
        flex: 1,
        color: '#000',
        fontSize: 16,
        marginRight: '40%',
        fontWeight: '500'
    },
    text2: {
        flex: 1,
        color: '#192f6a',
        fontSize: 16,
        fontWeight: 'bold'
    },
    text3: {

        color: '#000',
        fontSize: 16,
        fontWeight: '500',
        marginTop: '5%',
        marginRight: '50%'
    },
    linearGradient: {
        flex:1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        marginTop:'15%',
        marginBottom: '64%',
        marginLeft: '5%',
        marginRight: '5%'

    },
    linearGradient1: {
        // paddingLeft: 15,
        // paddingRight: 15,
        borderRadius: 20,
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft:'2%'


    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
        color: '#FFF',
        backgroundColor: 'transparent',
        marginLeft: '30%',
        marginRight: '30%'

    },
    buttonText1: {
        fontSize: 20,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: 'transparent',
        margin: 5


    }
});

export default SigninScreen;