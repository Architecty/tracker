Categories = new Meteor.Collection('categories');

Categories_Schema = new SimpleSchema({
  vertical_id: {type: String, label: "The _id value of the vertical to which this pertains"},
  name: {type: String, label: "The name of the category"},
  desc: {type: String, label: "A short description of the category"},
  admin_notes: {type: String, label: "A short description of the category, for admin use"}
})
