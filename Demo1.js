import { View, Text, Animated, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'

const Demo1 = () => {

    const position = useRef(new Animated.ValueXY()).current; // Lay vi tri hien tai
    const windowHeight = Dimensions.get('window').height; // Lay chieu cao cua cua so
    useEffect(() => {
        startAnimation();
    });

    const startAnimation= () => {
        const randomY = Math.floor(Math.random()*windowHeight); // Vi tri bat ky theo Y
        Animated.timing(position, { //bat dau di chuyen tu vi tri da xac dinh
            toValue: {x: 0, y: randomY}, // chi di chuyen theo truc Y
            duration: 3000, // thoi gian di chuyen
            useNativeDriver: false,
        }).start(()=> startAnimation()); //lap di lap lai
    }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, position.getLayout()]} />
    </View>
  )
}

export default Demo1

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: 50,
      height: 50,
      backgroundColor: 'red',
    },
  });