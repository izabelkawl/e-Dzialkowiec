import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf"
   });

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

const MyDocument = ({number,owner, title, area, charge, term, account}) => (

    <Document style={styles.font }> 
      <Page size="A4" style={styles.page} >
        
        <View style={styles.section}>
        <Text style={{ textAlign: 'center', marginBottom: 40,}}>Rachunek{"\n"}</Text>
    
        <Text>Tytuł:</Text>
        <Text >Numer działki:</Text>
        <Text >Działkowicz:</Text>
        <Text >Powierzchnia działki:</Text>
        <Text >Kwota:</Text>
        <Text >Termin:</Text>
        <Text >Numer konta:</Text>
        </View> 
        <View style={styles.section}>
          <Text>{"\n"}{"\n"}{"\n"}{title}</Text>
          <Text>{number}</Text>
          <Text>{owner}</Text>
          <Text>{area} m²</Text>
          <Text>{charge} zł</Text>
          <Text>{term}</Text>
          <Text>{account}</Text>
        </View>
       
      </Page>
    </Document>
  );

export default MyDocument