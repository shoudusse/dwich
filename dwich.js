Items = new Mongo.Collection("items");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("items");
}

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("items");
  Template.admin.helpers({
    items: function() {
      //return Items.find();
      console.log('yop');
      return
    }
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