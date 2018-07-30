var journeyWrapper = document.querySelector('.journey');

// events
var beginning = document.querySelector('.beginning');
var designproject = document.querySelector('.design-project');
var spa = document.querySelector('.spa');
var app = document.querySelector('.app');
var uxProject = document.querySelector('.ux-project');
var newTeam = document.querySelector('.new-team');

events = [
    { element: beginning, top: 170 },
    { element: designproject, top: 280 },
    { element: spa, top: 430 },
    { element: app, top: 580 },
    { element: uxProject, top: 730 },
    { element: newTeam, top: 880 },
];

for (var i = 0; i < events.length; i++) {
    events[i].element.classList.add('hide');
    events[i].element.classList.remove('show');
}

var minHeight;

window.addEventListener('scroll', function(e) {
    var windowBottom = document.documentElement.scrollTop + document.documentElement.clientHeight;
    var elementTop = journeyWrapper.offsetTop + document.documentElement.clientHeight / 2;
    var scrollPercentage = (windowBottom - elementTop) / (journeyWrapper.scrollHeight - 156);

    var scrolledOfJourney = scrollPercentage * journeyWrapper.offsetTop + 156;

    var mask = this.document.querySelector('.mask');

    for (var i = 0; i < events.length; i++) {
        checkEventVisibility(events[i].element, events[i].top, scrolledOfJourney);
    }

    if (scrolledOfJourney > 156 && scrolledOfJourney < 1044) {
        if (!minHeight || minHeight < scrolledOfJourney) {
            minHeight = scrolledOfJourney;
        } else if (minHeight > scrolledOfJourney) {
            scrolledOfJourney = minHeight;
        }
        mask.style.top = scrolledOfJourney + 'px';
    }
});

function checkEventVisibility(element, top, now) {
    if (now > top) {
        element.classList.add('show');
        element.classList.remove('hide');
    }
}
