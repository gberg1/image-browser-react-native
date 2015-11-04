var React = require('react-native');
var API = require('../data/api');
var DrillDown = require('./drilldown');
// var Device = require('react-native-device');

var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  ScrollView
} = React;

var ImageViewer = React.createClass({
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    API.get('topics/defaults')
      .then(function(data) {
        this.setState({
          topics: data.data
        })
      }.bind(this))
  },
  render: function() {
    // add style={[styles.drilldown, {width:Device.width}]} in TouchableHighlight component below
    console.log(this.state.topics);
    var self = this;
    var topics = this.state.topics.map(function(topic, key) {
      return (
        <View>
          <TouchableHighlight onPress={self._getTopicFromId.bind(this, topic.name, topic.id)} underlayColor="#f1f1f1" style={[styles.drilldown]}>
            <View>
              <Text style={{fontSize:20, color: '#0098e6'}}>{topic.name}</Text>
              <Text>{topic.description}</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    });

    return (
      <View style={[styles.container]}>
        <ScrollView>
          {topics}
        </ScrollView>
      </View>
    );
  },
  _getTopicFromId: function(topicName, topicId) {
    this.props.navigator.push({
      component: DrillDown,
      title: topicName,
      passProps: {
        id: topicId
      }
    });
  }
});

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
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
  drilldown: {
    padding:15,
    paddingBottom:20,
    borderBottomWidth:1,
    borderBottomColor: '#e3e3e3'
  }
});

module.exports = ImageViewer;