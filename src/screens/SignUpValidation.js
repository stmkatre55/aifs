import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SignUpValidation = () => {

    const submit = () => {
        fetch('https://neetabopche.in/public/api/verify-otp', {
            method: 'POST',
            headers: {
                'Accept' : 'applictation/json',
                'Content-Type': 'application/json',
            }
            
        })
            .then(response =>  response.json() )
            .then(data => {
                
                if(data.status_code === true){
                    console.log('Success:', data);
                }else{
                    console.log('failure:', data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#8D57F8' barStyle="light-content" />
            <Image style={styles.img} source={require('../images/secure_login.png')} />
            <Text style={styles.text}>OTP Validation</Text>
            <Text style={styles.text3}>We have sent an OTP to {9399705082} </Text>
            <TextInput
                style={styles.input}
                placeholder='______'
                // editable={false} selectTextOnFocus={true}
                keyboardType='numeric'
                
            ></TextInput>
            <Text style={styles.text1}>Did't get OTP?
                <Text style={styles.text2}>  Resend</Text>
            </Text>
            <TouchableOpacity style={styles.linearGradient} onPress={() => submit()}>
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
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
        margin:'2%',
    },
    img: {
        marginTop:'10%',
        width: '60%',
        height: '25%',
        marginRight:'8%'
        
    },
    text:{
        fontWeight:'bold',
        color:'#000',
        fontSize:20,
        marginBottom:'3%',
        
    },
    input: {
        backgroundColor: '#EEE',
        width: '80%',
        height: '8%',
        margin: '3%',
        marginTop:'10%',
        borderRadius: 20,
        paddingLeft: 20,
        fontSize:24,
        paddingLeft:60,
        letterSpacing: 20

    },
    text1:{
        flex:1,
        color:'#000',
        fontSize:16,
        marginRight:'30%',
        fontWeight:'500'
    },
    text2:{
        flex:1,
        color:'#192f6a',
        fontSize:16,
        fontWeight:'bold'
    },
    text3:{
        
        color:'#000',
        fontSize:16,
        fontWeight:'500',
        margin:'2%'
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        marginBottom:'30%',
        marginLeft:'10%',
        marginRight:'10%'

    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10,
        color: '#FFF',
        backgroundColor: 'transparent',
        marginLeft:'30%',
        marginRight:'30%'

    }
})
export default SignUpValidation;