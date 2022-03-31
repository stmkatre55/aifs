import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';


const width = Dimensions.get('window').width;

const RequiredLoan = () => {

    const [sliderValue, setSliderValue] = useState(5000);
    const [sliderValue1, setSliderValue1] = useState(12);
    const [selectedCategory, setSelectedCategory] = useState();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        get_category();
        
    }, []);


    const get_category = async () => {
        let tempArray = []
        fetch("https://neetabopche.in/public/api/get-category").then(result => {
            console.log('category')
            result.json().then((resp) => {
                console.log(resp,'resp')
                if (resp.status_code=== 'true') {
                    
                    for (let item of resp.result) {
                        tempArray.push({ label: item.category_name, value: item.id },)
                    }
                }
                setCategory(tempArray);
                console.log(category,'category');

            })
        })
    }
    const submit = () => {
        fetch('https://neetabopche.in/public/api/save-loan-data', {
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
            <View style={styles.header}>
                <Image style={styles.img} source={require('../images/loan.png')} />
                <Text style={styles.text1}>Getting Loans Quick And Simple </Text>
            </View>
            <LinearGradient colors={['#CCB3FF', '#8D57F8', '#6643AB']}
                style={styles.footerGradient}>
                <View style={styles.footer}>
                    <Text style={styles.text}>
                        Loan Amount : {sliderValue}
                    </Text>
                    <Slider
                        style={styles.slider}
                        maximumValue={100000}
                        minimumValue={1000}
                        minimumTrackTintColor="#307ecc"
                        maximumTrackTintColor="#fff"
                        step={1000}
                        value={sliderValue}
                        onValueChange={
                            (sliderValue) => setSliderValue(sliderValue)
                        }
                    />
                    <Text style={styles.text}>
                        Tenure : {sliderValue1}
                    </Text>
                    <Slider
                        style={styles.slider}
                        maximumValue={60}
                        minimumValue={12}
                        minimumTrackTintColor="#307ecc"
                        maximumTrackTintColor="#FFF"
                        step={1}
                        value={sliderValue1}
                        onValueChange={
                            (sliderValue1) => setSliderValue1(sliderValue1)
                        }
                    />
                    <Picker

                        style={[styles.textInput, { marginTop: '8%' }]}

                        selectedValue={selectedCategory}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedCategory(itemValue)
                        }>
                        {category.map((item, index) => {
                    return (<Picker.Item label={item.label} value={item.value} />)
                })}

                    </Picker>
                    <TouchableOpacity style={styles.linearGradient} onPress={() => submit()}>
                        <LinearGradient colors={['#F88C89', '#F83A34', '#D40C06']} style={styles.linearGradient}>
                            <Text style={styles.buttonText}>
                                Submit
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
        flex: 2,
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
});

export default RequiredLoan;