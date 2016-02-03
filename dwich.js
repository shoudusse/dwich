Items = new Mongo.Collection("items");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish("items", function () {
    return Items.find();
  });
}

if (Meteor.isClient) {
  // This code only runs on the client
  Meteor.subscribe("items");
  Template.admin.helpers({
    items: function() {
      return Items.find({});
    }
  });

  Template.admin.events({
    "submit .new-item": function (event) {
      console.log(event);
      // Prevent default browser form submit
      event.preventDefault();

      // Get values from form element
      var text = event.target.text.value;
      var slug = event.target.slug.value;

      // Insert a task into the collection
      Meteor.call("addItem", text, slug);

      // Clear form
      event.target.text.value = "";
      event.target.slug.value = "";
    },
  });
}


Meteor.methods({
  addItem: function (name, slug) {
    Items.insert({
      name: name,
      slug: slug,
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