import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const Loading = () => {
    return (
        <View style={styles.loading}>
            <ActivityIndicator style={styles.loading} animating={true} />
        </View>
    );
};

const styles = StyleSheet.create({
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', 
        top: 0, left: 0, 
        right: 0, bottom: 0, 
    }
})

export default Loading;