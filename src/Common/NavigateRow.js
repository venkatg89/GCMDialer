// Dependencies import
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import SettingsRowStyle from './SettingsRowStyle'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles deconstructing
const {
    containerInSection,
    containerInnerSection,
    iconLeft,
    iconRight,
    text,
} = SettingsRowStyle

// Class for navigate rows
class NavigateRow extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPressCallback}>
                <View style={containerInSection}>
                    <View style={containerInnerSection}>
                        <MaterialCommunityIcons name={this.props.iconName} color={'skyblue'} size={24} style={iconLeft} />
                        <Text style={text} numberOfLines={1} ellipsizeMode={'tail'}>
                            {this.props.text}
                        </Text>
                        <Icon name={'angle-right'} size={24} style={iconRight} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

// Component export
export default NavigateRow