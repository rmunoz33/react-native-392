import React, { Component } from 'react';
import { View, Platform, StyleSheet, Text, ScrollView, Image } from 'react-native';
import BottomNav from './NavigatorComponent';

class Main extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
                }}>
              <BottomNav />
            </View>
        );
    }
}

export default Main;