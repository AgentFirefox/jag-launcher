// Navigation Script
$(function() {
	// Page load
	Session.set('CurrentPage', 'rs3');
});

Template.navigation.events({
	'click .nav-item': function(event) {
		var page = $(event.target).attr('name');
		if (Session.get('CurrentPage') != page) {
			$('.active-nav-item').removeClass('active-nav-item');
			Session.set('CurrentPage', page);
			$(event.target).addClass('active-nav-item');
		}
	}
});

// currentPageIs in jag-launcher.js