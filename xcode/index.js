import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/core';
import { Header, Section, NoImageSection as Section2 } from '../src/components';
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
  bodySecond: {
    fontSize: 11,
    marginTop: 10
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
        <Header xcode mac>Setting Up Xcode</Header>
      </View>
      <View style={styles.section}>
        <Text style={styles.warning}>
          If you already have the newest version of XCode installed, you may skip to step 3.
        </Text>
        <Section
          index="1a"
          title="Download"
          image="https://grading-backups.s3.amazonaws.com/tutorials/xcode_screenshots/APPSTORE.PNG"
        >
          <Text style={styles.body}>
            Download XCode from the Mac App Store, or via the following link:
                </Text>
          <Text style={styles.body}>
            <Link style={styles.link}>https://itunes.apple.com/us/app/xcode/id497799835</Link>
          </Text>
        </Section>
        <Section2
          index={2}
          title="Set Up"
        >
          <Text style={styles.body}>
            After downloading XCode, you may be prompted to download additional components. In order to run C++ code you will need accept the dialog to download the components.
				</Text>
        </Section2>
        <Section
          index="3a"
          title="Create a New Project"
          image="https://grading-backups.s3.amazonaws.com/tutorials/xcode_screenshots/NEW.PNG"
        >
          <Text style={styles.body}>
            Once the setup and installation has been completed, you'll want to create a new project. Select the "Create a new Xcode project" button to get started.
          </Text>
          <Text style={styles.hint}>
            Make sure you create a new project and not a playground.
          </Text>
        </Section>
        <Section
          index="3b"
          title="Configure Project"
          image="https://grading-backups.s3.amazonaws.com/tutorials/xcode_screenshots/CLT.PNG"
        >
          <Text style={styles.body}>
            Select 'Command Line Tool' under the 'macOS' section.
          </Text>
        </Section>
        <Section
          index="3c"
          title="Project Options"
          image="https://grading-backups.s3.amazonaws.com/tutorials/xcode_screenshots/LANGUAGE.PNG"
        >
          <Text style={styles.body}>
            Make sure you select 'None' as the team and 'C++' as the language, and click next. Choose the location you want to save the project and click 'Create' to finish.
          </Text>
        </Section>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Section
          index="4a"
          title="Edit Code"
          image="https://grading-backups.s3.amazonaws.com/tutorials/xcode_screenshots/CODE.PNG"
        >
          <Text style={styles.body}>
            You should now be able to edit main.cpp by selecting it in the left sidebar.
          </Text>
          <Text style={styles.hint}>
            If you don't see the file on the sidebar, click on "View -> Navigators -> Show Project Navigator" or press "Command + 1" to show it.
          </Text>
        </Section>
        <Section
          index="4b"
          title="Add File"
          image="https://grading-backups.s3.amazonaws.com/tutorials/xcode_screenshots/NEWFILE.PNG"
        >
          <Text style={styles.body}>
            In most cases, you'll need to create your own files in the project in order to follow the required naming convention, or to add multiple files.
          </Text>
          <Text style={styles.bodySecond}>
            Right click on the folder with the name of your project, and click 'New File...' You can then choose a C++ or a header file depending on the requirements of the assignment.
          </Text>
        </Section>
        <Section
          index="5"
          title="Run Code"
          image="https://grading-backups.s3.amazonaws.com/tutorials/xcode_screenshots/RUN.PNG"
        >
          <Text style={styles.body}>
            You can now run your code by clicking the triangle icon at the top of the window. The output will show at the bottom of the window.
          </Text>
        </Section>
      </View>
    </Page>
  </Document>
);

ReactPDF.render(MyDocument, `${__dirname}/xcode.pdf`);