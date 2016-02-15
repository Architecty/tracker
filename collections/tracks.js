Tracks = new Meteor.Collection('tracks');

Tracks_Schema = new SimpleSchema({
  owner_id: {type: String, label: "The _id value of the owner of the track"},
  name: {type: String, label: "The name of the tracker"},
  goal: {type: Number, label: "How many times this action should be taken"},
  period: {type: String, label: "What time period to consider. May be Days, Weeks, or Months"}
})
