Trackers = new Meteor.Collection('trackers');

Trackers_Schema = new SimpleSchema({
  owner_id: {type: String, label: "The _id value of the owner of the tracker"},
  name: {type: String, label: "The name of the tracker"},
  goal: {type: Number, label: "How many times this action should be taken"},
  period: {type: String, label: "What time period to consider. May be Days, Weeks, or Months"}
})
