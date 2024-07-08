import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image style={styles.image} source={require('../assets/lru.png')} />
      </View>

      <View style={[styles.section]}>
        <Text style={styles.text}>สมุนไพรท้องถิ่นเลย</Text>
      </View>

      <View style={styles.section}>
        <Image style={styles.coverScreenImage} source={require('../assets/st1.jpg')} />
      </View>

      <View style={styles.screenSection}>
        <Image style={styles.image} source={require('../assets/st2.jpg')} />
        <Image style={styles.image} source={require('../assets/st3.jpg')} />
        <Image style={styles.image} source={require('../assets/st4.jpg')} />
      </View>

      <View style={[styles.section]}>
        <Text style={styles.text}>มหาวิทยาลัยราชภัฏเลย</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'blue',
    flexDirection: 'column',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  coverScreenImage: {
    width: '100%',
    height: 250, // Adjust height as needed
    resizeMode: 'cover',
    marginTop: 100, // Move downwards
  },
  screenSection: {
    flex: 3, // Give this section more space
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    marginTop: 100, // Move downwards
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    color: 'white',
  },
});

export default Flex;
