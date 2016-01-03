//data

var bio = {
	"name" : "Dave Ellery",
	"role" : "Senior Architect",
	"contacts" : {
		"mobile" : "416-885-1450",
		"email" : "dave@qorp.net",
		"github" : "qorpus",
		"twitter" : "qorpus",
		"location" : "Toronto"
	},
	"bioPic" : "images/face-100pc_large_2x.jpg",
	"welcomeMessage" : "This is my page, take a look!",
	"skills" : ["javascript","jee","css","css"]
};


var education = {
	"schools" : [
		{
			"name" : "The University Of Auckland",
			"degree" : "Bachelor of Science",
			"location" : "Auckland, NZL",
			"majors" : ["Information Technology"],
			"minors" : [],
			"startDate" : 2002,
			"endDate" : 2005,
			"url" : "https://www.auckland.ac.nz"
		}
	],
	"onlineCourses" : [ 
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"startDate" : "Dec-2015",
			"endDate" : "Jan-2015",
			"url" : "www.udacity.com"
		},
		{
			"title" : "HTML/CSS Basics",
			"school" : "Udacity",
			"startDate" : "Dec-2015",
			"endDate" : "Dec-2015",
			"url" : "www.udacity.com"
		}
	]
};


var work =  {
	"jobs" : [
		{
			"employer" : "Leonardo Worldwide Corp.",
			"title" : "Senior Architect",
			"location" : "Toronto, Canada",
			"startDate" : 2008,
			"endDate" : "",
			"description" : "senior arch, arching stuff"
		},
		{
			"employer" : "Bluescope New Zealand Steel",
			"title" : "Software Engineer",
			"location" : "Auckland, NZL",
			"startDate" : 2006,
			"endDate" : 2008,
			"description" : "softwaring stuff"
		},
		{
			"employer" : "Talgentra",
			"title" : "Analyst Programmer",
			"location" : "Auckland, NZL",
			"startDate" : 2005,
			"endDate" : 2005,
			"description" : "analysing stuff"
		}
	]
};


var projects = {
	"projects" : [
		{
			"title" : "test project 1",
			"startDate" : 2015,
			"endDate" : 2015,
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
			"images" : ["http://lorempixel.com/401/200/", "http://lorempixel.com/402/200/" ]
		},
		{
			"title" : "test project 2",
			"startDate" : 2008,
			"endDate" : 2014,
			"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
			"images" : ["http://lorempixel.com/400/203/", "http://lorempixel.com/400/204/" ]
		}
	]
};



//functions

bio.display = function(){
	$("#header").prepend( HTMLheaderRole.replace("%data%",bio.role) );
	$("#header").prepend( HTMLheaderName.replace("%data%",bio.name) );
	$("#header").append( HTMLbioPic.replace("%data%", bio.bioPic) );
	$("#header").append( HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage) );
}

bio.contacts.display = function(){

	$("#topContacts").append( dataReplace( HTMLmobile, bio.contacts.mobile) );
	$("#topContacts").append( dataReplace( HTMLemail, bio.contacts.email) );
	$("#topContacts").append( dataReplace( HTMLtwitter, bio.contacts.twitter) );
	$("#topContacts").append( dataReplace( HTMLgithub, bio.contacts.github) );
	$("#topContacts").append( dataReplace( HTMLlocation, bio.contacts.location ) );
	
}


bio.displaySkills = function(){

	if( bio.skills.length > 0 ) {

		$("#header").append( HTMLskillsStart );

		for(i in bio.skills){

			$("#skills").append( HTMLskills.replace("%data%", bio.skills[i]) );

		}

	}
}


work.display = function(){ 
	if( work.jobs.length > 0 ){

		for( i in work.jobs ) {

			var job = work.jobs[i];

			$("#workExperience").append( HTMLworkStart );

			var employerFormatted = HTMLworkEmployer.replace( "%data%", job.employer );
			var titleFormatted = HTMLworkTitle.replace( "%data%", job.title );
			var locationFormatted = HTMLworkLocation.replace( "%data%", job.location );
			var datesFormatted = HTMLworkDates.replace( "%data%", job.startDate +"-"+ job.endDate );
			var descriptionFormatted = HTMLworkDescription.replace( "%data%", job.description );

			$(".work-entry:last").append( employerFormatted + titleFormatted + locationFormatted + datesFormatted + descriptionFormatted ); 
									
		}

	}
}




projects.display = function() {


	for( var i in projects.projects ){
		$("#projects").append( HTMLprojectStart );

		var proj = projects.projects[i];

		var projTitleFormatted = HTMLprojectTitle.replace("%data%", proj.title );
		var projDatesFormatted = HTMLprojectDates.replace("%data%", proj.startDate + "-" + proj.endDate );
		var projDescFormatted = HTMLprojectDescription.replace("%data%", proj.description );

		var projImagesFromatted = "";

		for( var j in proj.images ){
			projImagesFromatted += HTMLprojectImage.replace("%data%", proj.images[j] );
		}

		$(".project-entry:last").append( projTitleFormatted + projDatesFormatted + projDescFormatted + projImagesFromatted );
	}

}


education.display = function(){


	for( var i in education.schools ) {
		$("#education").append( HTMLschoolStart );

		var school = education.schools[i];

		var schoolHtml = HTMLschoolName.replace("%data%", school.name );
		var degreeHtml = HTMLschoolDegree.replace("%data%", school.degree );
		var datesHtml = HTMLschoolDates.replace("%data%", school.startDate+"-"+school.endDate );
		var locationHtml = HTMLschoolLocation.replace("%data%", school.location );
		var majorHtml = HTMLschoolMajor.replace("%data%", school.majors.join(",") );

		$(".education-entry:last").append( schoolHtml + degreeHtml + datesHtml + locationHtml + majorHtml );
	}


	if( education.onlineCourses.length > 0 ){


		$("#education").append( HTMLonlineClasses );

		$("#education").append( HTMLschoolStart );


		for( var j in education.onlineCourses ) {
			var course = education.onlineCourses[j];

			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", course.title ) + HTMLonlineSchool.replace("%data%", course.school )  ); 
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.startDate+" - "+course.endDate ) );
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url ) );

		}

	}

}




//invoke functions
bio.display();
bio.contacts.display();
bio.displaySkills();
work.display();
projects.display();
education.display();


//other code


/**  log click code
$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

function logClicks( x, y ){

	console.log("(" + x + "," + y + ")");

}
**/


$("#main").append(internationalizeButton);

function inName() {
	var names = bio.name.trim().split(" ");

	return names[0].slice(0,1).toUpperCase() 
			+ names[0].slice(1).toLowerCase() 
			+ " " 
			+ names[1].toUpperCase();

}

$("#mapDiv").append(googleMap);


//set the navbar button active on click
$(".navbar a").on("click", function(){
   $(".navbar").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});


//code to scroll selection of navbar menu items as you scroll the page.
var headerHeight = $("#header").outerHeight();

var anchorPoints = $("body").find(".page-anchor");

var menuItems = $(".navbar-nav").find("a");

var lastId = "";

	// Anchors corresponding to menu items
var scrollItems = anchorPoints.map(function(){
	var item = $($(this).attr("href"));
	if (item.length) {
		return item; 
	}
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+headerHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       	lastId = id;
       	menuItems
        	.parent().removeClass("active")
         	.end().filter("[href=#"+id+"]").parent().addClass("active");
   }   
                 
});