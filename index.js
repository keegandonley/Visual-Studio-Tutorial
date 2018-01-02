import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/core';
import Header from './header';
import ReactPDF from './node_modules/@react-pdf/node/lib';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white'
  },
  section: {
    width: '100%',
    textAlign: 'center'
  }
});

// Create Document Component
const MyDocument = (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Header> Visual Studio Community Edition Tutorial </Header>
      </View>
    </Page>
  </Document>
);

ReactPDF.render(MyDocument, `${__dirname}/output.pdf`);