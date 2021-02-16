import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
});
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    fontFamily: "Roboto"
  },
  section: {
    margin: 10,
    padding: 10,
  },
});

// Create Document Component
const MyDocument = ({number,owner, title, charge, term, account}) => (

    <Document > 
      <Page size="A4" style={styles.page} >
        <Text style={{ textAlign: 'center', marginBottom: 40,}}>Faktura</Text>
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