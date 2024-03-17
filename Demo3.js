import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Demo3 = () => {

    const [expanded, setExpanded] = useState(false)
    const [animation] = useState(new Animated.Value(60)) // chieu cao ban dau

    const changeHeader = () => {
        const initialValue = expanded ? 200 : 60
        const finalValue = expanded ? 60 : 200
        setExpanded(!expanded)
        animation.setValue(initialValue)
        Animated.spring(animation, {
            toValue: finalValue,
            useNativeDriver: false
        }).start()
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.header, {height: animation}]}>
                <Text>Header Pig</Text>
            </Animated.View>
            <TouchableOpacity onPress={changeHeader} style={styles.button}>
                <Text>{expanded ? 'Thu hep' : 'Mo rong'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Demo3

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    header: {
        width: '100%', 
        backgroundColor: '#faa',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#fff'
    }
})