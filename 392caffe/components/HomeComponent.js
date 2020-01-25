import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Home extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image 
                        style={styles.shoplogo}
                        source={{uri: 'https://images.squarespace-cdn.com/content/5c60c3d7fb22a535bf56536a/1549922237997-468II2GCDIV5IQZ51XSZ/DRIP%2BDIAMOND+ICON.png?content-type=image%2Fpng'}}
                        /> 
                    <Text style={{
                        textAlign: 'center',
                        paddingTop: 20,
                        paddingLeft: 40,
                        fontSize: 36,
                        color: '#C82129'
                    }}>
                        392 Caffé
                    </Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Image 
                        style={{
                            flex: 0.5,
                            margin: 30,
                            height: 180
                        }}
                        source={{uri: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/70648122_2370053483044497_1088936194227568640_n.jpg?_nc_cat=105&_nc_ohc=D3tvJoipvv0AX8Ac-vk&_nc_ht=scontent-lga3-1.xx&oh=d1998af6a035c44e915fb8d19fb7c9a3&oe=5E901D01'}}
                    />
                </View>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 36,
                    paddingBottom: 10
                }}>
                    Welcome!
                </Text>
                <View>
                    <Text style={styles.bodytext}>
                        392 Caffé brings the big city, coffee shop culture to Clinton, IA. Come experience what everyone loves about a true coffee shop!
                    </Text>
                    <Text style={styles.bodytext}>
                        Free WiFi, Great Atmosphere & Ambiance, Great Music, Amazing Coffee & Small Bites...
                    </Text>
                    <Text style={styles.bodytext}>
                        We can't wait to get you hooked! ;)
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 20,
      paddingLeft: 40,
      paddingBottom: 20,
      backgroundColor: '#fff',
    },
    shoplogo: {
        borderWidth: 10,
        width: 75, 
        height: 75,
        padding: 20
    },
    bodytext: {
        fontSize: 20,
        textAlign: 'justify',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
        paddingEnd: 20
    }
  });

export default Home;