Meteor.publish('allTrackers', function(){
  return Trackers.find({owner_id: this.userId});
})

Meteor.publish('lastMonthsTrackers', function(tracker_id){
  console.log("Looking for records from", tracker_id)
  return Records.find({tracker_id: tracker_id});
})