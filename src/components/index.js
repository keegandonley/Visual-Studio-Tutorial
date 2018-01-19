import React from 'react';
import { Link, Text, View, StyleSheet, Image } from '@react-pdf/core';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 0,
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    textTransform: 'uppercase',
  },
  link: {
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  stepSectionLeft: {
    marginTop: 30,
    marginLeft: '4%',
    marginRight: '2%',
    marginBottom: 0,
    width: '44%',
  },
  stepSectionRight: {
    marginTop: 30,
    marginLeft: '2%',
    marginRight: '4%',
    marginBottom: 0,
    width: '44%',
  },
  sectionHeader: {
    fontSize: 12,
    marginBottom: 10,
  },
  sectionContainer: {
    flexDirection: 'row'
  }
});

export const Header = (props) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{props.children}</Text>
      <Text style={styles.subtitle}>{props.xcode ? 'Xcode' : 'Visual Studio'} for {props.mac ? ' macOS' : 'Windows'}</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link style={styles.link}>{props.xcode ? 'itunes.apple.com/us/app/xcode/id497799835' : 'www.visualstudio.com/vs/community/'}</Link>
    </View>
  </View>
);

function getImage(image) {
  if (image) return <Image src={image}/>;
  return '';
}

export const Section = (props) => (
  <View style={styles.sectionContainer}>
    <View style={styles.stepSectionLeft}>
      <Text stye={styles.sectionHeader}>{props.index} - {props.title}</Text>
      {props.children}
    </View>
    <View style={styles.stepSectionRight}>
      <Image src={props.image}/>
    </View>
  </View>
);

export const NoImageSection = (props) => (
  <View style={styles.sectionContainer}>
  <View style={styles.stepSectionLeft}>
    <Text stye={styles.sectionHeader}>{props.index} - {props.title}</Text>
    {props.children}
  </View>
</View>
);