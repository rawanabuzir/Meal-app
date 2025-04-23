import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CATEGORIES } from '../data/dummy-data';

const HomeScreen = () => {
    const navigation = useNavigation();

    const handlePress = (categoryId) => {
        navigation.navigate('Details', { categoryId });
    };





    const renderItem = ({ item }) => {
        return (
            <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
                <Pressable onPress={() => handlePress(item.id)} >

                    <Text style={styles.itemText}>{item.title}</Text>

                </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.container}>



            <FlatList
                numColumns={2}


                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}

            />



        </View>

    );
};

const styles = StyleSheet.create({
    itemContainer: {

        padding: 20,
        backgroundColor: '#f9c2ff',
        width: '45%',
        height: 100,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    container: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
