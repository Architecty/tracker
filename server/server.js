Meteor.methods({
  addTracker: function(name, goal, period){
    Trackers.insert({
      name: name,
      goal: goal,
      period: period,
      owner_id: Meteor.userId()
    })
  }
})
