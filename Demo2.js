import { Animated, FlatList, PanResponder, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'

const Demo2 = () => {

    const translateY = useRef(new Animated.Value(0)).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponse: () => true,
            onPanResponderMove: Animated.event(
                [null, {dy: translateY}],
                {useNativeDriver: false}
            ),
            onPanResponderRelease: (e, gestureState) => {
                Animated.spring(translateY, {
                    toValue: 0,
                    useNativeDriver: false,
                }).start()
            }
        })
        
    ).current;
    const renderItem =({item}) => {
        return(
            <Animated.View
            style={[styles.item, {transform: [{translateY}]}]}
            {...panResponder.panHandlers}>
                <Text style={styles.text}>Flat List Items</Text>
            </Animated.View>
        )
    }

    return(
        <View>
            <FlatList 
            data={Array.from({length: 5},
                (_, index) => ({key: `${index}`}))}
                renderItem={renderItem}
            />
        </View>
    )

}

export default Demo2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
    item: {
        width: 200,
        height: 50,
        backgroundColor: '#faa',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})