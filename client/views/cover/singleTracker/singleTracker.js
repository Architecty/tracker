Template.singleTracker.helpers({
  allRecords: function(){
    var thisTracker = this;
    var records = [];
    for(var i = 0; i < 30; i++){
      var dayRecords = Records.find({time: {$lte: moment().startOf('d').subtract(i, 'd').valueOf()}, time: {$gte: moment().startOf('d').subtract(i + 1, 'd')}});
      var thisDay = {
        day: moment().subtract(i + 1, 'd'),
        responses: dayRecords.count(),
        goalProgress: !(i%3) ? "complete": "",
        color: "color"
      }

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