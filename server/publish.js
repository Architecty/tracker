Meteor.publish('allTrackers', function(){
  return Trackers.find({owner_id: this.userId});
})
