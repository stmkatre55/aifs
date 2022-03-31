import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    StatusBar,
    TouchableOpacity,
    Pressable,
    Alert,
    Image,
    ImageBackground
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import RadioForm from 'react-native-simple-radio-button';
import CalendarPicker from 'react-native-calendar-picker';
import LinearGradient from 'react-native-linear-gradient';
import Modal from "react-native-modal";
import Icons from 'react-native-vector-icons/FontAwesome';


const SignupScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const startDate = selectedStartDate ? selectedStartDate.format('YYYY/MM/DD') : '';
    const [modalVisible, setModalVisible] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [moNum, setmoNum] = useState('');
    const [date, setDate] = useState('');
    const [gender, setGender] = useState('');




    var radio_props = [
        { label: 'Male', value: 0 },
        { label: 'Female', value: 1 }
    ];

    const onDateChange = (date) => {

        setSelectedStartDate(date)

        console.log(selectedStartDate, "Date")
        if (date != null) {
            setModalVisible(!modalVisible);
        }

    }

    const register = () => {
        const data = {
            first_name: 'firstName',
            last_name: 'lastName',
            gender: 'gender',
            mobile_number: 'moNum',
            dob: 'date'
        };

        fetch('https://neetabopche.in/public/api/register', {
            method: 'POST',
            headers: {
                'Accept' : 'applictation/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            
        })
            .then(response =>  response.json() )
            .then(data => {
                
                if(data.status_code === true){
                    console.log('Success:', data);
                }else{
                    console.log('failure:', data, date);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#8D57F8' barStyle="light-content" />

            {/* <ImageBackground style={styles.container} source={{ uri: 'https://media.istockphoto.com/photos/light-blue-and-teal-defocused-blurred-motion-abstract-background-picture-id1185549205?k=20&m=1185549205&s=612x612&w=0&h=z2jkEGBV8lctFsPKuhtwjOpBYLqdPUI2sAK-3HJHdKo=' }}> */}
            <View style={styles.header}>

                <Image style={styles.img} source={require('../images/logo.png')} />
                <Text style={styles.text}>Welcome To AISF</Text>
            </View>
            <LinearGradient colors={['#CCB3FF', '#8D57F8', '#6643AB']}
                style={styles.footerGradient}>
                <View style={styles.footer} >

                    <ScrollView style={{ flex: 1 }}>
                        <TextInput style={styles.input}
                            placeholder='Enter Your First Name'
                            onChangeText={(text) => setFirstName({text})}
                        />
                        <TextInput style={styles.input}
                            placeholder='Enter Your Last Name'
                            onChangeText={(text) => setlastName({text})}
                        />
                        <RadioForm style={styles.radioform}
                            radio_props={radio_props}
                            initial={0}
                            buttonColor='#FFF'
                            labelColor='#FFF'
                            onPress={(value) =>  setGender({ value: value }) }
                        />
                        <Modal
                            animationType='slide'
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={[styles.calendar, { flex: 1 }, { marginTop: '40%' }, { marginBottom: '50%' }]}>
                                <CalendarPicker
                                    onDateChange={onDateChange}
                                //onMonthChange={onDateChange}
                                />
                            </View>
                        </Modal>

                        <View style={[styles.input, { flexDirection: 'row' }, { justifyContent: 'space-between' }]}>
                            <TextInput
                                placeholder='Enter Your Dob'
                                editable={false} selectTextOnFocus={true}
                                onChangeText={(text) => setDate({text})}
                            >
                                {startDate}
                            </TextInput>
                            <Icons name='calendar' size={28} style={styles.icon}
                                onPress={() => setModalVisible(true)}
                            />
                        </View>



                        <TextInput style={styles.input}
                            placeholder='Enter Your Mo Number'
                            keyboardType='numeric'
                            onChangeText={(text) => setmoNum({text})}
                        />
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={setSelection}
                                style={styles.checkbox}
                                tintColors={{ true: '#FFF', false: '#FFF' }}
                            />
                            <Text style={styles.label}>WhatsApp Notification</Text>
                        </View>
                        <TouchableOpacity onPress={()=> register()}>
                            {/* colors={['#4c669f', '#3b5998', '#192f6a']} */}
                            {/* colors={['#F88C89', '#F83A34', '#D40C06']} */}
                            {/* colors={['#60DD41', '#0D3702', '#135703']} */}
                            <LinearGradient colors={['#F88C89', '#F83A34', '#D40C06']}
                                style={styles.linearGradient}>
                                <Text style={styles.buttonText}>
                                    Sign Up
                                </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </ScrollView>

                </View>
            </LinearGradient>
            {/* </ImageBackground> */}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        margin: '2%',
    },
    header: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    img: {

        width: '100%',
        height: '100%',
        marginEnd: '8%',

    },
    text: {

        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: '5%'
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
        backgroundColor: '#FFF',
        margin: '3%',
        borderRadius: 20,
        paddingLeft: 20,
        fontSize: 16

    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    label: {
        margin: 8,
        color: '#FFF',
        fontWeight: '500'
    },
    radioform: {
        flexDirection: 'row',
        margin: '2%',
        borderRadius: 20,
        paddingLeft: 20,
        justifyContent: 'space-around',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 20,
        // margin: '10%'
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '5%'

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
    button: {
        margin: '20%'
    },
    icon: {
        paddingTop: '3%',
        paddingEnd: '5%'
    },
    calendar: {
        backgroundColor: '#FFF',
        paddingTop: '5%',
        borderRadius: 20
    }
})

export default SignupScreen;