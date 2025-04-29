import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Interview in</Text>
        </View>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Attract Group</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.filter}>
          <View style={styles.filterItem}>
            <Switch />
            <Text style={styles.filterText}>Marketing</Text>
          </View>

          <View style={styles.filterItem}>
            <Switch />
            <Text style={styles.filterText}>Best Practices</Text>
          </View>
        </View>
        

        <ScrollView style={styles.list}>
          <TouchableOpacity style={styles.card}>
            <Image 
              source={require('./assets/images/post_1.png')}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardTitle}>Top 10 Reasons to Update Your Website</Text>
            <Text style={styles.cardTag}>Marketing</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image 
              source={require('./assets/images/post_2.png')}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardTitle}>eCommerce Website Design: 14 Best Practices</Text>
            <Text style={styles.cardTag}>Best Practices</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Image 
              source={require('./assets/images/post_3.png')}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardTitle}>How Much Does It Cost to Build a Hotel Booking Website?</Text>
            <Text style={styles.cardTag}>Marketing</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2011 - 2022 Attract Group - Web and Mobile Development Company. All Rights Reserved
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginRight: 10,
  },
  logoContainer: {
    backgroundColor: '#2C3E50',
    padding: 8,
    borderRadius: 4,
    marginLeft: 10,
  },
  logoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginLeft: 8,
  },
  list: {
    flex: 1,
  },
  card: {
    maxWidth: 300,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
  cardImage: {
    width: 300,
    maxWidth: 300,
    height: 200,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  cardTag: {
    color: '#666',
    padding: 10,
    paddingTop: 0,
  },
  footer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
  },
});
