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
	paddingRight: 5
  },
  hintTop: {
	fontSize: 11,
    backgroundColor: '#ADD8E6',
    marginTop: 5,
    paddingTop: 5,
    paddingLeft: 5,
	paddingRight: 5,
	marginLeft: '4%',
    marginRight: '4%',
  },
  danger: {
    fontSize: 11,
    backgroundColor: '#F08080',
    marginTop: 5,
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
  },
  successWide: {
	fontSize: 11,
    backgroundColor: '#C0D9AF',
    marginTop: 20,
    marginLeft: '4%',
    marginRight: '4%',
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  success: {
	fontSize: 11,
    backgroundColor: '#C0D9AF',
    marginTop: 20,
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
        <Header>Compiling and Running Code</Header>
      </View>
      <View style={styles.section}>
        <Text style={styles.warning}>
          If you haven't already installed and set up visual studio, you should go back to that tutorial before following these steps!
        </Text>
		<Text style={styles.hintTop}>
          If you already know how to properly create a new project, you can skip steps i and ii.
        </Text>
        <Section
            index="i"
            title="Create a New Project"
            image="https://grading-backups.s3.amazonaws.com/tutorials/vs_screenshots/Windows/new.PNG"
          >
                <Text style={styles.body}>
                  The first thing to do is create a new project. Under the file menu, select File -> New -> Project...
                </Text>
                <Text style={styles.hint}>
                  Make sure you create a new project and not a new file.
                </Text>
          </Section>
        </View>
		<View style={styles.section}>
          <Section
            index="ii"
            title="Configure project"
            image="https://grading-backups.s3.amazonaws.com/tutorials/vs_screenshots/Windows/empty.PNG"
          >
                <Text style={styles.body}>
                  Next, you'll need to set the options for your project. On the left, under "Visual C++", select "Empty Project"
                </Text>
                <Text style={styles.danger}>
                  Make sure you choose 'empty project' or you may have issues with later assignments.
                </Text>
          </Section>
		  <Section
            index="1"
            title="Open Solution Explorer"
            image="https://grading-backups.s3.amazonaws.com/tutorials/vs_screenshots/Windows/compile/solution_explorer.PNG"
          >
                <Text style={styles.body}>
                  You should see the solution explorer on the left. This is how you'll navigate your project's files.
                </Text>
                <Text style={styles.hint}>
                  If the solution explorer isn't visible to you, go to the "View" menu and click "Solution Explorer". You can also toggle the solution explorer using the shortcut Ctrl + Alt + L.
                </Text>
          </Section>
      </View>
      </Page>
	  <Page size="A4" style={styles.page}>
	  	<View style={styles.section}>
		  <Section
            index="2a"
            title="Create a file"
            image="https://grading-backups.s3.amazonaws.com/tutorials/vs_screenshots/Windows/compile/new_item.PNG"
          >
                <Text style={styles.body}>
                  Right click (or control + click) on "Source Files" in the solution explorer and select Add -> New Item...
                </Text>
          </Section>
		  <Section
            index="2b"
            title="Create a file"
            image="https://grading-backups.s3.amazonaws.com/tutorials/vs_screenshots/Windows/compile/cpp.PNG"
          >
                <Text style={styles.body}>
                  In the menu that opens, make sure to choose "C++ file (.cpp)," and not a header file.
                </Text>
          </Section>
		  <Text style={styles.successWide}>
		  	Now that you have completed these steps, you are ready to being writing C++ code using Visual Studio. Once you are ready to compile and run your code, proceed to the next section.
		  </Text>
		  <Section
            index="3a"
            title="Compile and Run"
            image="https://grading-backups.s3.amazonaws.com/tutorials/vs_screenshots/Windows/compile/debug.PNG"
          >
                <Text style={styles.body}>
				To compile and run your program, go to the Debug menu and select "Start Without Debugging".
                </Text>
          </Section>
		  <Section
            index="3b"
            title="Build Project"
			image="https://grading-backups.s3.amazonaws.com/tutorials/vs_screenshots/Windows/compile/out_of_date.PNG"
			small
          >
                <Text style={styles.body}>
					If a window pops up indicating the project is out of date, click "Yes" to build the project.
                </Text>
				<Text style={styles.hint}>
					This means the most recent version of your program hasn’t been compiled, which needs to be done before it can run.
				</Text>
				<Text style={styles.success}>
					Once you have completed these steps, your program should now compile and run properly in a console window!
				</Text>
          </Section>
	  	</View>
	  </Page>
  </Document>
);

ReactPDF.render(MyDocument, `${__dirname}/vs_compile_win.pdf`);