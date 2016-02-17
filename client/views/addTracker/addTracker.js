Template.addTracker.events({
    "submit form": function(e){
        e.preventDefault();
        var name = $("#name").val(),
            goal = $("#goal").val(),
            period = $("input[name=period]:checked").val();
        console.log(name, goal, period);
        if(name &&  goal && period){
            Meteor.call('addTracker', name, goal, period);
        }
    }
})
