Records = new Meteor.Collection('records');

Records_Schema = new SimpleSchema({
  owner_id: {type: String, label: "The _id value of the user to which this pertains"},
  tracker_id: {type: String, label: "The _id of the tracker to which this pertains"},
  date: {type: Number, label: "When the record was receieved"}
})
