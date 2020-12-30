import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },
  section: {
    margin: 10,
    padding: 10
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Numer dzialki</Text>
        <Text>Termin</Text>
        <Text>Tytuł</Text>
        <Text>Kwota</Text>
      </View>
      <View style={styles.section}>
        <Text>Numer konta</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument