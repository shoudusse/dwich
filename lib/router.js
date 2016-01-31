Router.configure({
  layoutTemplate: 'layout',
   loadingTemplate: 'loading',
   waitOn: function() { return Meteor.subscribe('items'); }
});
Router.route('/admin', {name: 'admin'});
Router.route('/', {name: 'choice'});
