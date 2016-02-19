Template.singleDay.helpers({
  msToDate: function(ms){
    return moment(ms, 'x').format('D-MMM-YYYY')
  }
})