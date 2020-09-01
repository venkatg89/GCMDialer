import * as React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import NavigateRow from "../Common/NavigateRow";

const SettingsScreen = ({ navigation }) => {
    return (
        <ScrollView style={SettingsStyle.container}>
            <View style={SettingsStyle.content}>
                <NavigateRow
                    text='My Profile'
                    iconName="home" />
                 <NavigateRow
                    text='Change password'
                    iconName="form-textbox-password"/>
                 <NavigateRow
                    text='Change security question'
                    iconName="comment-question"/>
                  <NavigateRow
                    text='About us'
                    iconName="home" />
                 <NavigateRow
                    text='Contact us'
                    iconName="contacts" />
                 <NavigateRow
                    text='Logout'
                    iconName="logout" />
            </View>
        </ScrollView>
    );
};


const SettingsStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5'
    },
    content: {
      flex: 1,
    }
  })
export default SettingsScreen;


