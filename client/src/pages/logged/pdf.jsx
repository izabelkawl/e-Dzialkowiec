import React from 'react';
import {   Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  section: {
    margin: 10,
    padding: 10
  },
});

// Create Document Component
const MyDocument = ({number,owner, title, charge, term, account}) => (

    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          
          <Text >Tytul:</Text>
          <Text >Numer dzialki:</Text>
          <Text >Dzialkowicz:</Text>
          <Text >Kwota:</Text>
          <Text >Termin:</Text>
          <Text >Numer konta:</Text>
        </View>
        <View style={styles.section}>

            
          <Text>{title}</Text>
          <Text>{number}</Text>
          <Text>{owner}</Text>
          <Text>{charge} PLN</Text>
          <Text>{term}</Text>
          <Text>{account}</Text>
          <Text></Text>
        </View>
      </Page>
    </Document>
  );

export default MyDocument