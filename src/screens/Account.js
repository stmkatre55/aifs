import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Account = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor='#8D57F8' barStyle="light-content" />
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.img} source={require('../images/account.png')} />
                    <Text style={styles.textHeader}>Please Provide Your Account Details</Text>
                </View>
                <LinearGradient colors={['#CCB3FF', '#8D57F8', '#6643AB']}
                    style={styles.footerGradient}>
                    <View style={styles.footer}>
                        <Text style={styles.text}> A/C Holder Name</Text>
                        <TextInput placeholder='Eg. Satyam Katre' style={styles.input}></TextInput>
                        <Text style={styles.text}> A/C Number</Text>
                        <TextInput placeholder='Eg. 1234567890' style={styles.input}></TextInput>
                        <Text style={styles.text}> Confirm A/C Number</Text>
                        <TextInput placeholder='Eg. 1234567890' style={styles.input}></TextInput>
                        <Text style={styles.text}> Bank Name</Text>
                        <TextInput placeholder='Eg. Bank Name' style={styles.input}></TextInput>
                        <Text style={styles.text}> IFSC Code</Text>
                        <TextInput placeholder='Eg. ABCD0000123' style={styles.input}></TextInput>
                        <Text style={styles.text1}>Find Ifsc Code</Text>
                        <TouchableOpacity style={styles.linearGradient}>
                            <LinearGradient colors={['#F88C89', '#F83A34', '#D40C06']} style={styles.linearGradient}>
                                <Text style={styles.buttonText}>
                                    Upload
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ScrollView>
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
        flex: 3,
        padding: '2%',
        backgroundColor: '#FFF',
        alignItems: 'center',

    },
    img: {

        width: 200,
        height: 100,
        marginLeft: '2%'
    },
    textHeader: {

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
    text: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        marginTop: '4%',
        marginBottom: '2%',
        marginLeft: '8%'

    },
    text1: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '600',
        margin: '2%',
        marginLeft: '65%'

    },
    input: {

        width: '90%',
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
        margin: '2%'

    },

});
export default Account;