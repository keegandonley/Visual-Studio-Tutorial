import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/core';
import { Header, Section } from '../src/components';
import ReactPDF from '../node_modules/@react-pdf/node/lib';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white'
  },
  section: {
    width: '100%',
    textAlign: 'center'
  },
  link: {
    color: 'blue',
    textDecoration: 'none',
    fontSize: 11
  },
  body: {
    fontSize: 11
  },
  hint: {
    fontSize: 11,
    backgroundColor: '#ADD8E6',
    marginTop: 5,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  danger: {
    fontSize: 11,
    backgroundColor: '#F08080',
    marginTop: 5,
    marginLeft: '4%',
    marginRight: '4%',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  warning: {
    fontSize: 11,
    backgroundColor: '#FAFAD2',
    marginTop: 10,
    marginLeft: '4%',
    marginRight: '4%',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  }
});

// Create Document Component
const MyDocument = (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Header mac>Setting Up Visual Studio</Header>
      </View>
      <View style={styles.section}>
        <Text style={styles.warning}>
          If you already have the newest version of Visual Studio installed, you may skip to step 3.
        </Text>
        <Text style={styles.danger}>
          Note that Visual Studio for Mac does not support C++ development. For classes based in C++, the Mac version of Visual Studio is not suitable.
        </Text>
        <Section
            index="1a"
            title="Download"
            image="https://grading-backups.s3.amazonaws.com/tutorials/vs_screenshots/Windows/download.PNG"
          >
                <Text style={styles.body}>
                  Download Microsoft Visual Studio Community Edition from the following link:
                </Text>
                <Text style={styles.body}>
                  <Link style={styles.link}>www.visualstudio.com/vs/community/</Link>
                </Text>
          </Section>
          <Section
            index="1b"
            title="Install"
            image="https://grading-backups.s3.amazonaws.com/tutorials/vs_screenshots/MacOSX/install.PNG"
          >
                <Text style={styles.body}>
                  Once the Visual Studio has been downloaded, run it to start the install. 
                </Text>
          </Section>
          <Section
            index={2}
            title="Set Up"
            image="https://grading-backups.s3.amazonaws.com/tutorials/vs_screenshots/MacOSX/setup.PNG"
          >
                <Text style={styles.body}>
                  You'll need to make sure to install the appropriate tools. For desktop development, what you'll need is the option marked macOS. This will most likely take some time to complete.
                </Text>
          </Section>
          <Section
            index="3a"
            title="Create a New Project"
            image="https://grading-backups.s3.amazonaws.com/tutorials/vs_screenshots/MacOSX/new.PNG"
          >
                <Text style={styles.body}>
                  Once the setup and installation has been completed, you'll want to create a new project. Select the "New Project..." button to get started.
                </Text>
                <Text style={styles.hint}>
                  Make sure you create a new project and not a new file.
                </Text>
          </Section>
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Section
            index="3b"
            title="Configure project"
            image="https://grading-backups.s3.amazonaws.com/tutorials/vs_screenshots/MacOSX/config.PNG"
          >
                <Text style={styles.body}>
                  Next, you'll need to set the options for your project. On the left, under "Mac", select "App". Click next and enter your application's information.
                </Text>
          </Section>
      </View>
    </Page>
  </Document>
);

ReactPDF.render(MyDocument, `${__dirname}/vs_setup_mac.pdf`);