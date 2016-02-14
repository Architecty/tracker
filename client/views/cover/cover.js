Template.cover.onCreated(function(){
  var self = this;
  self.autoRun(function(){
    self.subscribe('allTracks');
  })
});

Template.cover.helpers({
  allTracks: function(){
    return Tracks.find({owner_id: Meteor.userId()});
  }
})
