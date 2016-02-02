var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpService.js');

// var ingredients = [{"id": 1, "text": "pineapple"}, {"id": 2, "text": "bacon"}, {"id": 3, "text": "chili"}];

var List = React.createClass({
  getInitialState: function() {
    return {ingredients: []};
  },
  componentWillMount: function() {
    HTTP.get('/ingredients')
    .then(function(data) {
      this.setState({ingredients: data});
    }.bind(this));
  },
  render: function() {
    var listItems = this.state.ingredients.map(function(item) {
      return <ListItem key={item.id} ingredient={item.text}/>;
    });
    return (
      <ul> {listItems} </ul>
    );
  }
});

module.exports = List;
