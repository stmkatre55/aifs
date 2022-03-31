import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';



const Home = (props) => {

    const [toggle, setToggle] = useState(true)

    const toggleFun = () => {
       setToggle(!toggle)
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#8D57F8' barStyle="light-content" />
           
            <View style={styles.header}>
                <View style={styles.innerHeader}>
                    
                    <Icons onPress={() => {toggleFun(), (toggle? props.navigation.openDrawer(): props.navigation.closeDrawer() )}} name='bars' size={28} style={styles.icon}
                        color={'#00700F'} 
                        
                    />
                   
                    <Image style={styles.img} source={require('../images/logo.png')}></Image>
                </View>
                {/* <LinearGradient colors={['#F9369F', '#FE805D', '#FFCE0F']}
                    style={styles.footerGradient}> */}
                    <View style={styles.innerFooter}>
                        <Text style={styles.text}>
                            Approved Loan Amount :
                        </Text>
                        <Text style={styles.text1}>
                            50000
                        </Text>
                        <TouchableOpacity>
                            <LinearGradient colors={['#60DD41', '#135703', '#0D3702']}
                                style={styles.linearGradient1}>
                                <Text style={[styles.buttonText, { margin: 4 }]}>
                                    Pay Now
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                {/* </LinearGradient> */}
            </View>
            <LinearGradient colors={['#CCB3FF', '#8D57F8', '#6643AB']}
                style={styles.footerGradient}>
                <View style={styles.footer}>
                    <Text style={styles.text}>
                        Recent Transactions
                    </Text>
                    <View style={styles.footerView}>
                        <Text style={styles.text2}>Home Loan</Text>
                        <Text style={styles.text2}>date : 01/02/2022</Text>
                        <Text style={styles.text2}>Status : Paid</Text>
                    </View>
                    <View style={styles.footerView}>
                        <Text style={styles.text2}>Home Loan</Text>
                        <Text style={styles.text2}>date : 01/02/2022</Text>
                        <Text style={styles.text2}>Status : Paid</Text>
                    </View>
                    <View style={styles.footerView}>
                        <Text style={styles.text2}>Home Loan</Text>
                        <Text style={styles.text2}>date : 01/02/2022</Text>
                        <Text style={styles.text2}>Status : Paid</Text>
                    </View>
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
        flex: 2,
    },
    innerHeader: {
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 20,

    },
    innerFooter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        borderRadius: 30,
        paddingTop: '5%',
        margin: '3%'
    },
    footer: {
        flex: 1,
        alignItems: 'center',
    },

    footerGradient: {
        flex: 3,
        backgroundColor: '#00700F',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
        borderRadius: 30,
        paddingTop: '5%',
        margin: '3%'

    },
    icon: {
        marginTop: '4%'
    },
    img: {

        width: 180,
        height: 50,
        marginTop: '2%',
        marginLeft: '15%'
    },
    text: {
        fontSize: 20,
        margin: '1%',
        color: '#000',
        fontWeight: '600'
    },
    text1: {
        fontSize: 28,
        margin: '1%',
        color: '#000',
        fontWeight: 'bold'
    },
    linearGradient1: {
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 20,
        margin: '5%',
        marginLeft: '10%',
        marginRight: '10%'

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
        paddingRight: 150,
        
        justifyContent:'center'
    },
    text2:{
        fontSize:16,
        color:"#000",
        margin:'1%'
    }
})

export default Home;