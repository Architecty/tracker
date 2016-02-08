Combination = new Meteor.Collection('combinations');

Combinations_Schema = new SimpleSchema({
  vertical_id: {type: String, label: "The _id value of the vertical to which this pertains"},
  name: {type: String, label: "The name of the combination"},
  desc: {type: String, label: "A short description of the combination"},
  admin_notes: {type: String, label: "A short description of the combination, for admin use"},
  "stageChoices.$.option_id": {type: String, label: "The option_ids that need to be chosen to get this result"},
  "items": {type: [String], label: "The option_ids that need to be chosen to get this result"}
})
