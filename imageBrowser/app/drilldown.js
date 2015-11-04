var API = require('./data/api');
var Device = require('react-native-device');

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  ScrollView,
  Image
} = React;

var DrillDown = React.createClass({
  getInitialState: function() {
    return {
      images: []
    }
  },
  componentWillMount: function() {
    API.get('topics/' + this.props.id)
      .then(function(json) {
        this.setState({
          images: json.data
        })
      }.bind(this))
  },
  getImageUrl: function(id) {
    var link = 'http://i.imgur.com/' + id + 'h.jpg';
    return link
  },
  render: function() {
    var self = this;

    var content = this.state.images.map(function(image) {
      return (
        <View key={image.id} style={{borderBottomColor: '#0098e6', borderBottomWidth:3}}>
          <Text style={{padding:20,fontSize:16, color: '#494949'}}>{image.title}</Text>
          <View >
            <Image 
              source={{uri: self.getImageUrl(image.id)}} 
              style={{width:Device.width, height:300}} /> 
          </View>
        </View>
      )
    });

    return (
      <ScrollView >
        {content}
      </ScrollView>
    );
  }
});

module.exports = DrillDown;