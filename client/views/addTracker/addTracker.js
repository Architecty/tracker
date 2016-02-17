Template.addTracker.events({
    "submit form": function(e){
        e.preventDefault();
        var name = $("#name").val(),
            goal = $("#goal").val(),
            period = $("[name:period]:checked").val();
        console.log(name, goal, period);
    }
})
