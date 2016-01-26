Items = new Mongo.Collection("items");
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.itemsAdmin.helpers({
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // This code only runs on the client
  Meteor.subscribe("tasks");
  });
}

Meteor.methods({
  addItem: function (name, initial) {
    Items.insert({
      name: name,
      initial: initial,
      createdAt: new Date(),
    });
  },
  deleteItem: function (itemId) {
    var task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error("not-authorized");
    }
    Tasks.remove(taskId);
  },
});