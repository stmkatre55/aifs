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
import ImagePicker from 'react-native-image-crop-picker';


const Profile = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [selectedStartDate, setSelectedStartDate] = useState('');
    const startDate = selectedStartDate ? selectedStartDate.format('DD-MM-YYYY') : '';
    const [modalVisible, setModalVisible] = useState(false);
    const [image1, setImage1] = useState('https://cdn2.iconfinder.com/data/icons/social-media-flat-line/70/user-512.png')



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

    const openGallery = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            setImage1(image.path);
          });
      }


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='#8D57F8' barStyle="light-content" />
            <ScrollView style={{ flex: 1 }}>
            {/* <ImageBackground style={styles.container} source={{ uri: 'https://media.istockphoto.com/photos/light-blue-and-teal-defocused-blurred-motion-abstract-background-picture-id1185549205?k=20&m=1185549205&s=612x612&w=0&h=z2jkEGBV8lctFsPKuhtwjOpBYLqdPUI2sAK-3HJHdKo=' }}> */}
            <View style={styles.header}>
                
                    <TouchableOpacity style={styles.imgBackground}
                     onPress={openGallery}
                    >
                        <Image style={styles.img} source={{uri:image1}}></Image>
                    </TouchableOpacity>
                
            </View>
            <LinearGradient colors={['#CCB3FF','#8D57F8', '#6643AB']}
                            style={styles.footerGradient}>
            <View style={styles.footer} >

                    <Text style={styles.text}>First Name</Text>
                    <TextInput style={styles.input}
                        placeholder='Enter Your First Name'
                    />
                    <Text style={styles.text}>Last Name</Text>
                    <TextInput style={styles.input}
                        placeholder='Enter Your Last Name'
                    />
                    <RadioForm style={styles.radioform}
                        radio_props={radio_props}
                        initial={0}
                        buttonColor='#FFF'
                        labelColor='#FFF'
                        onPress={(value) => { ({ value: value }) }}
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
                    <Text style={styles.text}>Date Of Birth</Text>
                    <View style={[styles.input, { flexDirection: 'row' }, { justifyContent: 'space-between' }]}>
                       
                        <TextInput
                            placeholder='Enter Your Date Of Birth'
                            editable={false} selectTextOnFocus={true}
                        >
                            {startDate}
                        </TextInput>
                        <Icons name='calendar' size={28} style={styles.icon}
                            onPress={() => setModalVisible(true)}
                        />
                    </View>


                    <Text style={styles.text}>Mobile Number</Text>
                    <TextInput style={styles.input}
                        placeholder='Enter Your Mo Number'
                        keyboardType='numeric'
                    />
                    
                    <TouchableOpacity>
                        {/* colors={['#4c669f', '#3b5998', '#192f6a']} */}
                        {/* colors={['#F88C89', '#F83A34', '#D40C06']} */}
                        {/* colors={['#60DD41', '#0D3702', '#135703']} */}
                        <LinearGradient colors={['#F88C89', '#F83A34', '#D40C06']}
                            style={styles.linearGradient}>
                            <Text style={styles.buttonText}>
                                Update Profile
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
               

            </View>
            </LinearGradient>
            {/* </ImageBackground> */}
            </ScrollView>
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
        paddingTop:'3%'

    },
    imgBackground: {
        width: 150,
        height: 150,
        borderRadius:100,
        color:'#000',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#CCB3FF',
        padding:1

    },
    img: {
        width: 140,
        height: 140,
        borderRadius:100,
        color:'#000',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000',

    },
    text: {
      
        fontSize: 16,
        color: '#FFF',
        fontWeight:'500',
        paddingLeft: 20,
        marginBottom:'1%'
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
        borderRadius: 20,
        paddingLeft: 20,
        fontSize: 16,
        marginBottom:'3%',


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
        marginTop:'18%'

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

export default Profile;