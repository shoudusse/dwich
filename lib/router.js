Router.configure({
  layoutTemplate: 'layout'
  //loadingTemplate: 'loading',
  //waitOn: function() { return Meteor.subscribe('items'); }
});
Router.route('/admin', {name: 'admin', template: 'admin'});
Router.route('/', {name: 'choice'});
