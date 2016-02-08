External = FlowRouter.group({
  name: 'external'
})

Admin = FlowRouter.group({
  name: 'admin',
  triggersEnter: [
    function(context){
      if(Meteor.loggingIn() || Meteor.userId()){
        route = FlowRouter.current()
      } else {
        FlowRouter.go('main');
      }
    }
  ]
})

External.route('/login', {
  name: "login",
  action: function(params, queryParams) {
    BlazeLayout.render('login');
  }
});

External.route('/signup', {
  name: 'signup',
  action: function(params, queryParams) {
    BlazeLayout.render('signup');
  }
});

External.route('/forgotPassword', {
  name: "forgotPassword",
  action: function(params, queryParams) {
    BlazeLayout.render('forgotPassword');
  }
});

External.route('/resetPassword/:token', {
  name: "resetPassword",
  action: function(params, queryParams) {
    BlazeLayout.render('resetPassword');
  }
});

Admin.route('/', {
  action: function(params, queryParams) {
    BlazeLayout.render('cover');
  },
  name: "main"
});

Admin.route('/editAccount', {
  name: "editAccount",
  action: function(params, queryParams) {
    BlazeLayout.render('editAccount');
  }
});

Admin.route('/dashboard', {
  name: "dashboard",
  action: function(params, queryParams) {
    BlazeLayout.render('adminLayout', {whichTemplate:'dashboard'});
  }
});

Admin.route('/createVertical', {
  name: "createVertical",
  action: function(params, queryParams) {
    BlazeLayout.render('createVertical');
  }
});

Admin.route('/editVertical/:vertical_id?', {
  name: "editVertical",
  action: function(params, queryParams) {
    BlazeLayout.render('editVertical');
  }
});

Admin.route('/editStage/:vertical_id?/:stage_id?', {
  name: "editStage",
  action: function(params, queryParams) {
    BlazeLayout.render('editStage');
  }
});

Admin.route('/editItem/:vertical_id?/:stage_id?/:item_id?', {
  name: "editItem",
  action: function(params, queryParams) {
    BlazeLayout.render('editItem');
  }
});



