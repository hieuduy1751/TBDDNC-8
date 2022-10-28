import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Animated, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import ImageText from './screens/ImageText';

export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false
    }).start()
  }

  const planeFly = useRef(new Animated.Value(20)).current
  const flyToRight = () => {
    Animated.timing(planeFly, {
      toValue: 370,
      duration: 2000,
      useNativeDriver: false
    }).start()
  }
  const flyToLeft = () => {
    Animated.timing(planeFly, {
      toValue: 20,
      duration: 2000,
      useNativeDriver: false
    }).start()
  }

  const planeTurn = useRef(new Animated.Value(45)).current

  const turnRight = () => {
    Animated.timing(planeTurn, {
      toValue: 45,
      duration: 500,
      useNativeDriver: false
    }).start()
  }

  const turnLeft = () => {
    Animated.timing(planeTurn, {
      toValue: 225,
      duration: 500,
      useNativeDriver: false
    }).start()
  }

  const pause = () => {
    // stop animation
    planeFly.stopAnimation()
  }

  const reset = () => {
    Animated.timing(planeFly, {
      toValue: 20,
      duration: 0,
      useNativeDriver: false
    }).start()
    Animated.timing(planeTurn, {
      toValue: 45,
      duration: 0,
      useNativeDriver: false
    }).start()
  }

  useEffect(() => {
    fadeIn()
  }, [])

  return (
    <Animated.View style={styles.container}>
      {/* <Animated.View style={{
        opacity: fadeAnim
      }}>
        <Text>Welcome to Animation React Native</Text>
      </Animated.View>
      <Animated.View style={{
        position: 'absolute',
        bottom: 150,
        left: planeFly,
        transform: [{
          rotate: planeTurn.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
          })
        }]
      }}>
        <FontAwesome name="plane" size={24} color="black" />
      </Animated.View>
      <TouchableOpacity style={{
        width: 70,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        left: 20
      }} onPress={() => {
        flyToRight()
        turnRight()
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Right</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width: 70,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        left: 120
      }} onPress={() => {
        pause()
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Stop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width: 70,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        right: 120
      }} onPress={() => {
        reset()
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
        width: 70,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        right: 20
      }} onPress={() => {
        flyToLeft()
        turnLeft()
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Left</Text>
      </TouchableOpacity> */}
      <ImageText />
      <StatusBar style="auto" />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
});
