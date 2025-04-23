import { FlatList, Text, StyleSheet, View } from 'react-native';

function ListScreen({ data }) {

  const renderingData = ({ item }) => {
    return (
      <View style={[styles.itemContainer , { backgroundColor: item.color }]}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text>{item.id}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderingData}
      numColumns={2}
    />
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  itemContainer: {
  
    padding: 20,
    backgroundColor: '#f9c2ff',
    width: '45%',
    height: 100,
    margin  : 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
