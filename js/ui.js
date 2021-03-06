//Portfolio data
var myData = {
	skillsTicker: {
		skills: ['HTML, CSS & JavaScript', 'Responsive Web Design', 'Bootstrap', 'SASS', 'ReactJS', 'Redux',
			'KnockoutJS', 'Git', 'PhotoShop', 'Illustrator'
		],
		elementID: "skills"
	},
	projects: {
		ids: ['brewJabber', 'myReads', 'justBenRoasted', 'hubTransit', 'brewFiend', 'arcade', 'optimization'],
		modal: "projectWindow",
		projectInfo: {
			brewJabber: {
				title: "Brew Jabber",
				date: "October 2017",
				link: "http://brewjabber.thebenwright.com/",
				github: "https://github.com/bw120/BrewJabber",
				skills: "React, Redux, JavaScript, CSS, HTML",
				picture: "images/brewJabber_c_1x.png",
				description: "Created a content and comment web app using React and Redux. The site allows users to create posts and to comment on posts. Users can also rate each post or comment."
			},
			myReads: {
				title: "My Reads",
				date: "August 2017",
				link: "http://myreads.thebenwright.com/",
				github: "https://github.com/bw120/React-MyReads-Project1",
				skills: "React, JavaScript, HTML, CSS",
				picture: "images/myReads_c_1x.png",
				description: "Built using ReactJS, this app allows you to search for books and keep track of books that you are reading. The app pulls book info from an API and then allows you to add it to one of three shelves–want to read, currently reading and shelf for books you have read."
			},
			justBenRoasted: {
				title: "Just Ben Roasted Coffee",
				date: "August 2017",
				link: "http://www.justbenroasted.com/",
				github: "https://github.com/bw120/JustBenRoasted",
				skills: "Responsive design, HTML, CSS, Zurb Foundation (CSS frameork), JavaScript and jQuery",
				picture: "images/JustBenRoasted_c_1x.png",
				description: "Designed and built this responsive website using HTML, CSS, JavaScript and jQuery. I wrote custom JavaScript to handle the scroll effects, navigation and enhance the responsiveness."
			},
			hubTransit: {
				title: "HubTransit",
				date: "March 2016",
				link: "http://www.hubtransit.com",
				github: "https://github.com/bw120/MBTA-Commuter",
				skills: "JavaScript, HTML, CSS, AngularJS",
				picture: "images/hubtransit_c_1x.png",
				description: "Using the AngularJS framework, I developed this app to easily get arrival predictions and service " +
					"alerts for your commute on the MBTA (Boston transit system). The app uses the MBTA API to get information about each " +
					"route. The user authentication and user data is handled through the Firebase api. This app is great for anyone " +
					"that uses multiple transit lines in their commute and wants to see at a glance any service alerts, delays and arrival " +
					"predictions."
			},
			brewFiend: {
				title: "BrewFiend",
				date: "October 2015",
				link: "http://bw120.github.io/NeighborhoodCraftBeerMap/",
				github: "https://github.com/bw120/NeighborhoodCraftBeerMap",
				skills: "JavaScript, HTML, CSS, KnockoutJS, AJAX, jQuery, Responsive Web Desgin",
				picture: "images/neighborhoodMap_c_1x.png",
				description: "This was the fifth project I did for the Udacity Front-End Web Developer Nanodegree. " +
					"This web app allows you to explore craft breweries in the Boston area. The app interacts with three " +
					"different 3rd party API's allowing you to search and view the details of each brewery. It was developed " +
					"using the MVVM (Model Vew VewModel) architectural pattern using the jQuery and Knockout JavaScript libraries."
			},
			arcade: {
				title: "Arcade Game",
				date: "June 2015",
				link: "http://bw120.github.io/frontend-nanodegree-arcade-game/",
				github: "https://github.com/bw120/frontend-nanodegree-arcade-game",
				skills: "JavaScript, HTML5 Canvas",
				picture: "images/ArcadeGame_c_1x.png",
				description: "This was the third project I did for the Udacity Front-End Web Developer Nanodegree. Starting with " +
					"a supplied game engine and graphic assets, I coded all the game entities including the player and enemies using " +
					"Object-Oriented JavaScript. I built additional features including the ability to select a character and to accumulate points and lives by collecting the gems and hearts. As you complete each level and move on to the next the difficulty increases."
			},
			optimization: {
				title: "Web Optimization",
				date: "July 2015",
				link: "",
				github: "https://github.com/bw120/frontend-nanodegree-mobile-portfolio",
				skills: "Critical Rendering path, Chrome Developer tools, JavaScript, CSS, HTML",
				picture: "images/Optimization_c_1x.jpg",
				description: "While going through the Nanodegree program at Udacity, I learned a lot about measuring and " +
					"optimizing web performance. In the fourth project, I was given two sites to analyze and identify performance issues. " +
					"The first part of the project was a mobile portfolio page where I made adjustments to optimize the Critical Rendering " +
					"Path and was able achieve a PageSpeed score of 95 for mobile and 96 for desktop." +
					"The second part of the project was a web page for a pizzeria with graphics that were animated using JavaScript. " +
					"I analyzed and re-wrote the code to make it more efficient so that it could achieve 60 frames per second."
			}
		}
	}

};


//skills ticker. cycles through array of skills. Each fades out, changes to next item then fades in
var ticker = {

	setUp: function(element, items) {
		this.element = document.getElementById(element);
		this.items = items;
		this.index = 0;
		this.change = true;
		this.run();
	},

	//Start cysling through each item
	run: function() {
		var self = this;
		// self.nextItem();
		var interval = setInterval(function() {
			self.nextItem();
		}, 2000);
	},

	//fade out original content, change then fade in
	nextItem: function() {
		var self = this;
		self.element.className = "skills-hidden";
		//wait for CSS transition before changing content
		setTimeout(function() {
			self.element.className = "skills";
			self.element.innerHTML = self.items[self.index];
			self.index++;
			if (self.index > self.items.length - 1) {
				self.index = 0;
			}
		}, 700);
	}
};

//pops up info box when project item is hovered over and opens model when clicked
var projectInfo = function(modalID, projectIDs) {

	var self = this;

	//get elements that will need updating
	var scrollbar = window.innerWidth > document.documentElement.clientWidth;
	var container = document.getElementsByClassName("container")[0];
	var modal = document.getElementById(modalID);
	var modalContent = document.getElementById(content);
	var close = modal.getElementsByClassName("modal-close")[0];
	var content = modal.getElementsByClassName("modal-content")[0];
	var image = modal.getElementsByClassName("screenshot")[0];
	var title = content.getElementsByClassName("title")[0];
	var date = content.getElementsByClassName("date")[0];
	var skills = content.getElementsByClassName("project-skills")[0];
	var link = content.getElementsByClassName("link")[0];
	var github = content.getElementsByClassName("github")[0];
	var description = content.getElementsByClassName("description")[0];
	var body = document.getElementsByTagName("body")[0];

	//adds listeners to each project ID
	this.addListeners = function() {

		close.addEventListener("click", function() {
			self.closeModal(modal);
		});

		projectIDs.map(function(item) {

			var element = document.getElementById(item);

			element.addEventListener("mouseover", function() {
				self.mouseOn(element.children[0]);
			});
			element.addEventListener("mouseout", function() {
				self.mouseOff(element.children[0]);
			});
			element.addEventListener("click", function() {
				self.openModal(modal, content, item);
			});
		});
	};

	this.mouseOn = function(element) {
		element.className = "project-overlay";
	};

	this.mouseOff = function(element) {
		element.className = "project-overlay-hidden";
	};

	this.openModal = function(element, content, item) {
		if (scrollbar) container.classList.add("scrollPad");
		image.src = myData.projects.projectInfo[item].picture;
		title.innerHTML = myData.projects.projectInfo[item].title;
		date.innerHTML = myData.projects.projectInfo[item].date;
		skills.innerHTML = myData.projects.projectInfo[item].skills;
		link.innerHTML = "<a href='" + myData.projects.projectInfo[item].link + "' target='_blank'>" + myData.projects.projectInfo[item].link + "</a>";
		github.innerHTML = "<a href='" + myData.projects.projectInfo[item].github + "' target='_blank'>" + myData.projects.projectInfo[item].github + "</a>";
		description.innerHTML = myData.projects.projectInfo[item].description;

		element.className = "modal-visible";
		body.style.overflowY = "hidden";
	};

	this.closeModal = function(element) {
		container.classList.remove("scrollPad");
		element.className = "modal-hidden";
		body.style.overflowY = "auto";
	};

	this.addListeners();
};

//scroll down to element position
var scroller = function(event, element) {
	console.log(event);
	event.preventDefault();
	var topOffset = document.getElementById(element).offsetTop;
	var scrollAmount = Math.floor(topOffset / 20);
	var totalScrolled = window.scrollY;

	var scrollDown = function() {
		if (element) {
			if (totalScrolled + scrollAmount < topOffset) {
				window.scrollBy(0, scrollAmount);
				totalScrolled = totalScrolled + scrollAmount;
				aFrame = requestAnimationFrame(scrollDown);
			} else {
				window.scrollTo(0, topOffset);
				cancelAnimationFrame(aFrame);
				return;
			}
		}
	};
	var aFrame = requestAnimationFrame(scrollDown);
};

var introAnimation = function() {
	var profile = document.getElementById("profile");
	var logo = document.getElementById("logo");
	var nav = document.getElementById("nav");
	var name = document.getElementById("name");
	var title = document.getElementById("title");

	profile.className = "profile-pic";

	setTimeout(function() {
		logo.classList.add("fade-in");
		nav.classList.add("fade-in");
		title.classList.add("fade-in");
		name.classList.add("fade-in");
		ticker.setUp(myData.skillsTicker.elementID, myData.skillsTicker.skills);
	}, 1100)

};

var initiate = function() {
	projectInfo("modal", myData.projects.ids);
	introAnimation();


};