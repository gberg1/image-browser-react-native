/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var entry = require('./app/entry');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

var imageBrowser = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={{flex:1}}
        ref="nav"
        initialRoute={{
          component: entry,
          title: 'Image Viewer'
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('imageBrowser', () => imageBrowser);
