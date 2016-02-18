Template.cover.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('allTrackers');
  })
});

Template.cover.helpers({
  allTrackers: function(){
    return Trackers.find({owner_id: Meteor.userId()});
  }
})
