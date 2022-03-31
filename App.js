// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './src/screens/SignupScreen';
import SignUpValidation from './src/screens/SignUpValidation';
import RequiredLoan from './src/screens/RequiredLoan';
import Adhaar from './src/screens/Adhaar';
import Pan from './src/screens/Pan';
import Account from './src/screens/Account';
import SigninScreen from './src/screens/SigninScreen';
import Profile from './src/screens/Profile';
import Home from './src/screens/Home';
import Kyc from './src/screens/Kyc';
import LoanApprovalStatus from './src/screens/LoanApprovalStatus';
import ApprovedLoan from './src/screens/ApprovedLoan';
import Notification from './src/screens/Notification';
import Support from './src/screens/Support';
import Splash from './src/screens/Splash';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      {/* <Drawer/> */}
      <Stack.Navigator intialRouteName='SignUp' >
        
        <Stack.Screen name='SignUp' component={SignupScreen} options={{ headerShown: false }}/>
        {/* <Stack.Screen name='SignupValidation' component={SignUpValidation} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name='RequiredLoan' component={RequiredLoan} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name='Adhar' component={Adhaar} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='pan' component={Pan} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='account' component={Account} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='SignIn' component={SigninScreen} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name='KYC' component={Kyc} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name='LoanApprovalStatus' component={LoanApprovalStatus} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name='ApprovedLoan' component={ApprovedLoan} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name='Notification' component={Notification} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name='Support' component={Support} options={{ headerShown: false }}/> */}
        {/* <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }}/> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;