Stages = new Meteor.Collection('stages');
StageOptions = new Meteor.Collection('stageOptions');

Stages_Schema = new SimpleSchema({
  vertical_id: {type: String, label: "The _id value of the vertical to which this pertains"},
  name: {type: String, label: "The name of the stage"},
  desc: {type: String, label: "A short description of the stage"},
  admin_notes: {type: String, label: "A short description of the stage, for admin use"},
  pageTitle: {type: String, label: "The on-page title of the stage"},
  subTitle: {type: String, label: "An additional sub-title of information on the vertical"},
  created: {type: Number, label: "The date this vertical was created, in milliseconds"},
})

StagesOptions_Schema = new SimpleSchema({
  vertical_id: {type: String, label: "The _id value of the vertical to which this pertains"},
  stage_id: {type: String, label: "The _id value of the stage to which this pertains"},
  name: {type: String, label: "The name of the stage"},
  desc: {type: String, label: "A short description of the option."},
  admin_notes: {type: String, label: "A short description of the option, for admin use"},
  image: {type: String, label: "The url of the image this option refers to"}
})
