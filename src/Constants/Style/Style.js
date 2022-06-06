'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    customInput: {
        height: 45,
        margin: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderTopColor: '#fff',
        borderColor:"white",
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        padding: 10,
        fontSize: 20,
        elevation:3
      },
});