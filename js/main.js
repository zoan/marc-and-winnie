$(document).ready(function() {
	// variables
	const slides = {
		'hero': 1,
		'venue': 2,
		'story': 3,
		'party': 4,
		'registry': 5,
		'rsvp': 6,
		'last': 7
	};
	const sitePink = '#ff8398';
	const siteOrange = '#ff9b20';
	const siteBlue = '#0089ff';
	const siteBlack = '#3e3e3e';
	const venueBlue = '#31aaff';

	// start full page
	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['hero', 'venue', 'our-story', 'wedding-party', 'registry', 'rsvp', 'last'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: [],
		showActiveTooltip: true,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: true,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : ['#fff', '#fff'],
		paddingTop: '3em',
		paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 768,
		responsiveHeight: 0,
		responsiveSlides: true,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){
			const menuLinks = $('.main-menu a');
			const dots = $('#fp-nav ul li a span');
			$('.main-menu li').removeClass('active-link-pink');
			$('.main-menu li').removeClass('active-link-orange');
			$('.main-menu li').removeClass('active-link-blue');
			$('.main-menu li').removeClass('active-link-black');

			if (index === slides.hero) {
				// lazy load other slide backgrounds
				$('.venue')[0].style.backgroundImage = "url('./img/casa-real-cropped.jpg')";
				$('.our-story')[0].style.backgroundImage = "url('./img/ggb-night-compressor.jpg')";
				$('.wedding-party')[0].style.backgroundImage = "url('./img/walking-flip.JPG')";
				$('.rsvp')[0].style.backgroundImage = "url('./img/save-the-date-group-cropped.jpg')";
				$('.last')[0].style.backgroundImage = "url('./img/last-cropped.jpg')";
			}

			switch(nextIndex) {
				case slides.hero:
					menuLinks.map(el => menuLinks[el].style.color = sitePink);
					dots.map(el => dots[el].style.backgroundColor = sitePink);
					$('.menu-hero').addClass('active-link-pink');
					break;
				case slides.venue:
					menuLinks.map(el => menuLinks[el].style.color = 'white');
					dots.map(el => dots[el].style.backgroundColor = siteOrange);
					$('.menu-venue').addClass('active-link-orange');
					break;
				case slides.story:
					menuLinks.map(el => menuLinks[el].style.color = '#0089ff');
					dots.map(el => dots[el].style.backgroundColor = siteBlue);
					$('.menu-story').addClass('active-link-blue');
					break;
				case slides.party:
					menuLinks.map(el => menuLinks[el].style.color = 'white');
					dots.map(el => dots[el].style.backgroundColor = sitePink);
					$('.menu-party').addClass('active-link-pink');
					break;
				case slides.registry:
					menuLinks.map(el => menuLinks[el].style.color = 'black');
					dots.map(el => dots[el].style.backgroundColor = siteBlack);
					$('.menu-registry').addClass('active-link-black');
					break;
				case slides.rsvp:
					menuLinks.map(el => menuLinks[el].style.color = 'white');
					dots.map(el => dots[el].style.backgroundColor = sitePink);
					$('.menu-rsvp').addClass('active-link-pink');
					break;
				default:
					menuLinks.map(el => menuLinks[el].style.color = sitePink);
					console.log('nothing yet');
			}
		},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});


	// set initial dots color
	const dots = $('#fp-nav ul li a span');
	dots.map(el => dots[el].style.backgroundColor = sitePink);


	// header hover logic
	// $('.menu-hero').hover(
	// 		function(){ if (!$(this).hasClass('active-link-pink')) $(this).toggleClass('active-link-pink')}
	// 	);


	var heroClasses = ['hand-in-hand', 'ocean-side', 'init'];
	var heroIndex = 0;

	setInterval(function() {
		var prevIndex = heroIndex === 0 ? heroClasses.length - 1 : heroIndex - 1;
		$('.hero').addClass(heroClasses[heroIndex]);
		$('.hero').removeClass(heroClasses[prevIndex]);

		heroIndex++;

		if (heroIndex > heroClasses.length - 1) heroIndex = 0;

	}, 3500);

	$('.hamburger-menu').on('click', function() {
		$('.mobile-menu').toggleClass('open');
	});

	$('.another-time').on('click', function() {
		$('.another-time-video').addClass('show');
		$('video').play();
	});

	// Update RSVP Button Text
	$('#mc-embedded-subscribe')[0].value = 'RSVP';

	// prefill email in RSVP form if coming from invite email
	var queryString = window && window.location.search;
	var visitorEmail = queryString.split('?email=')[1];
	$('#mce-EMAIL')[0].value = visitorEmail || '';

	$('.load-placeholder').addClass('close');
});
