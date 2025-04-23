import { Text, StyleSheet, Image, View } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function More() {
    const firstelementM = MEALS[8];  
    const firstelementC = CATEGORIES[8]; 

    return (
        <View style={[styles.screen,{ backgroundColor: firstelementC.color }]}> 
            <Text style={styles.mealTitle}>
                The First Element Title: {firstelementM.title}
            </Text>
            <Image 
                source={{ uri: firstelementM.imageUrl }} 
                style={styles.image} 
            />
        </View>
    );
};

export default More;

const styles = StyleSheet.create({
    screen: {
        flex: 1,  
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 20,  
    },
    mealTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        padding: 10,  
    },
    image: {
        width: 150,  
        height: 150,
        marginVertical: 20,  
    }
});
