
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MEALS } from '../data/dummy-data';
import More from './More'

const DetailsScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const filteredMeals = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const handlePress = (id) => {
    navigation.navigate('More');
  };
const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.mealItem}>
        <Image source={{ uri: item.imageUrl }} style={styles.mealImage} />
        <Text style={styles.mealTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  }




  return (
    <View style={styles.screen}>
      <FlatList
        data={filteredMeals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  mealItem: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    marginHorizontal: 10,
    flex: 1,
    marginVertical: 10,
  },
  mealImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  mealTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 15,
    color: '#333',
    textAlign: 'center',
  },
  flatListContainer: {
    paddingBottom: 20,
  },
});

export default DetailsScreen;
