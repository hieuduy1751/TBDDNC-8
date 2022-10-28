import { useEffect, useRef } from "react"
import { Animated, Image, View } from "react-native"

const ImageText = () => {
  const imageAnim = useRef(new Animated.Value(0)).current
  const textAnim = useRef(new Animated.Value(-150)).current
  const textOpacity = useRef(new Animated.Value(0)).current
  const imageFadeIn = () => {
    Animated.timing(imageAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false
    }).start(textToRight)
  }

  const textToRight = () => {
    Animated.timing(textAnim, {
      toValue: 150,
      duration: 3000,
      useNativeDriver: false
    }).start()
    Animated.timing(textOpacity, {
      toValue: 1,
      duration: 0,
      useNativeDriver: false
    }).start()
  }

  useEffect(() => {
    imageFadeIn()
  }, [])

  return (
    <View style={{
      flexGrow: 1,
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Animated.Image style={{
        width: 100,
        height: 100,
        opacity: imageAnim
      }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png' }} />
      <Animated.Text style={{
        position: 'absolute',
        left: textAnim,
        fontWeight: 'bold',
        fontSize: 20,
        opacity: textOpacity,
        top: 500
      }}>
        Facebook
      </Animated.Text>
    </View>
  )
}

export default ImageText