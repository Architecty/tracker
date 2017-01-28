Template.singleTracker.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('lastMonthsTrackers', Template.currentData()._id)
  })
})

Template.singleTracker.helpers({
  allRecords: function(){
    var thisTracker = this;
    var records = [];
    for(var i = 0; i < 30; i++){
      var dayRecords = Records.find({date: {$gte: moment().startOf('d').subtract(i, 'd').valueOf()}, date: {$lte: moment().endOf('d').subtract(i, 'd').valueOf()}});
      var thisDay = {
        day: moment().startOf('d').subtract(i, 'd').valueOf(),
        responses: dayRecords.count(),
        goalProgress: (dayRecords.count() >= thisTracker.goal) ? "complete" : "",
        color: "color"
      }
      console.log(thisDay);

      records.push(thisDay)
    }
    return records;
  }
})


Template.singleTracker.events({
  "click .didIt": function(e){
    var tracker_id = $(e.currentTarget).closest('div').prop('id');
    Meteor.call('addRecord', tracker_id)
  }
})