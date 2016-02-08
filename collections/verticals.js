Verticals = new Meteor.Collection('verticals');

Verticals_Schema = new SimpleSchema({
  name: {type: String, label: "The name of the vertical"},
  admin_notes: {type: String, label: "A short description of the vertical, for admin use"},
  htmlTitle: {type: String, label: "A short phrase or word for the title bar"},
  pageTitle: {type: String, label: "The on-page title of the vertical -- carried through on most pages?"},
  subTitle: {type: String, label: "An additional sub-title of information on the vertical"},
  created: {type: Number, label: "The date this vertical was created, in milliseconds"}

})
