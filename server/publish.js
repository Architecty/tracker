Meteor.publish('allTracks', function(){
  return Tracks.find({owner_id: this.userId});
})
