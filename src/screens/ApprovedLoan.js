import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ApprovedLoan = () => {
    return(
        <View style={styles.container} >
             <StatusBar backgroundColor='#8D57F8' barStyle="light-content" />
            <View style={styles.header}>
                <Image style={styles.img} source={require('../images/approved.png')} />
                <Text style={styles.text1}>Congrates! Your Loan Is Approved</Text>
            </View>
            <LinearGradient colors={['#CCB3FF', '#8D57F8', '#6643AB']}
                style={styles.footerGradient}>
                <View style={styles.footer}>
                    <Text style={styles.text}>
                        ApprovedLoan : 
                    </Text>
                    <Text style={styles.text}>
                        Monthly EMI
                    </Text> 
                    <View style={styles.footerView}>
                        <Text style={styles.text2}>5000</Text>
                        <Text style={styles.text2}>date : 01/04/2022</Text>
                        
                    </View> 
                    <View style={styles.footerView}>
                        <Text style={styles.text2}>5000</Text>
                        <Text style={styles.text2}>date : 01/05/2022</Text>
                        
                    </View> 
                    <View style={styles.footerView}>
                        <Text style={styles.text2}>5000</Text>
                        <Text style={styles.text2}>date : 01/06/2022</Text>
                        
                    </View>       
                    <FlatList></FlatList>
                   
                   
                    <TouchableOpacity style={styles.linearGradient}>
                        <LinearGradient colors={['#F88C89', '#F83A34', '#D40C06']} style={styles.linearGradient}>
                            <Text style={styles.buttonText}>
                                Repayment
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
        flex: 1.5,
        padding: '2%',
        backgroundColor: '#FFF',
        alignItems: 'center'

    },
    img: {
        flex: 5,
        width: '70%',
        height: '20%',
        marginLeft: '2%'
    },
    text1: {
        flex: 1,
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
        fontSize: 24,
        fontWeight: '600',
        marginTop: '3%'

    },
    slider: {
        height: 60,
        marginBottom: '2%'

    },
    textInput: {

        width: '100%',
        height: 30,
        color: '#000',
        backgroundColor: '#FFF',
        borderRadius: 20,
        paddingLeft: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 7
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
        marginTop: '10%'

    },
    footerView: {
        flex: 1,
        backgroundColor: '#fff',
        margin: '1%',
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 150,
        
        justifyContent:'center'
    },
    text2:{
        fontSize:16,
        color:"#000",
        margin:'1%'
    }
});
export default ApprovedLoan;