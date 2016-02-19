Meteor.methods({
  addTracker: function(name, goal, period){
    Trackers.insert({
      name: name,
      goal: goal,
      period: period,
      owner_id: Meteor.userId()
    })
  },
  addRecord: function(tracker_id){
    Records.insert({
      tracker_id: tracker_id,
      date: moment().valueOf()
    })
    console.log("Added Record");
  }
})
