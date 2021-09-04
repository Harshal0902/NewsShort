import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/img1.jpg')}
        width={300}
        height={500}
        style={styles.image}
      />
      <View style={styles.headline}>
        <Text style={styles.cardsText}>
          <Text style={styles.bold}>GTA 6 leaks:</Text> Here are the Top 3 GTA 6
          leaks we know as of now
        </Text>
        <Button title="View More" style={styles.button} />
      </View>

      <View style={styles.row}>
        <View style={styles.eContainer}>
          <Text style={styles.emoji}>👎</Text>
        </View>
        <View style={styles.eContainer}>
          <Text style={styles.emoji}>🔖</Text>
        </View>

        <View style={styles.eContainer}>
          <Text style={styles.emoji}>👍</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 350,
    height: 650,
    borderRadius: 20,
    borderWidth: 2,
    backgroundColor: '#CAD5E2',
  },
  cardsText: {
    fontSize: 17,
    color: 'white',
    marginBottom: 10,
    fontFamily: 'Roboto Condensed',
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  bold: {
    fontWeight: 'bold',
  },
  image: {
    width: 350,
    height: 450,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headline: {
    width: 350,
    padding: 10,
    backgroundColor: '#242B2E',
    height: 130,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#242B2E',
    width: 350,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  eContainer: {
    height: 70,
    borderTopWidth: 2,
    width: 116,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 50,
  },
  button: {
    fontSize: 20,
  },
});
