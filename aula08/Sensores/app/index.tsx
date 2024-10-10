import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { Link } from 'expo-router';
import Button from '../components/Button';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Link href="./Acelerometro">
      <Button  label="Acelerometro" theme=""/>
      </Link>

    </View>
  );
}
