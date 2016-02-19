External = FlowRouter.group({
  name: 'external'
})

Authenticated = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [
    function(context){
      if(Meteor.loggingIn() || Meteor.userId()){
        route = FlowRouter.current()
      } else {
        FlowRouter.go('login');
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

Authenticated.route('/', {
  action: function(params, queryParams) {
    BlazeLayout.render('cover');
  },
  name: "cover"
});

Authenticated.route('/addTracker', {
  action: function(params, queryParams) {
    BlazeLayout.render('addTracker');
  },
  name: "addTracker"
});




