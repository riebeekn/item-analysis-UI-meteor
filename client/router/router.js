Router.configure({  
	layoutTemplate: 'layout',  
	loadingTemplate: 'loading',  
	waitOn: function() { 
		return Meteor.subscribe('jobs'); }
});

Router.map(function() {  
	this.route('jobs', {path: '/'});
});

Router.onBeforeAction('loading');