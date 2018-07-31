document.addEventListener('DOMContentLoaded', animateContent(), false);

WebFont.load({
    google: {
        families: ['Source Sans Pro:200,300,400,600,700'],
    },
});

function animateContent() {
    let starOne = document.querySelector('.jumbotron__star-one');
    let starTwo = document.querySelector('.jumbotron__star-two');
    let starThree = document.querySelector('.work-flow__star');

    const starAnimation = {
        transform: ['scale(1, 1)', 'scale(0, 0)', 'scale(1, 1)'],
        easing: 'linear',
    };

    starOne.animate(starAnimation, {
        duration: 4000,
        iterations: Infinity,
    });

    starTwo.animate(starAnimation, {
        duration: 6000,
        iterations: Infinity,
    });

    starThree.animate(starAnimation, {
        duration: 5000,
        iterations: Infinity,
    });

    let iceberg = document.querySelector('.work-flow__iceberg');
    const icebergAnimation = {
        transform: ['translate(-50%, -50%)', 'translate(-50%, -51.5%)', 'translate(-50%, -50%)'],
        easing: 'ease-in-out',
    };
    iceberg.animate(icebergAnimation, {
        duration: 8000,
        iterations: Infinity,
    });

    let eskimo = document.querySelector('.work-flow__eskimo');
    const eskimoAnimation = {
        transform: ['translate(0, 0)', 'translate(0, 2%)', 'translate(0, 0)'],
        easing: 'ease-in-out',
    };
    eskimo.animate(eskimoAnimation, {
        duration: 8000,
        iterations: Infinity,
    });

    let waves = document.querySelector('.work-flow__waves');
    const wavesAnimation = {
        transform: ['skewY(1.5deg)', 'skewY(0deg)', 'skewY(1.5deg)'],
        easing: 'ease-in-out',
    };
    waves.animate(wavesAnimation, {
        duration: 4000,
        iterations: Infinity,
    });

    let waveTop = document.querySelector('.work-flow__wave-top');
    const waveTopAnimation = {
        transform: ['translate(-100%, 0)', 'translate(100%, 0)'],
        easing: 'ease-in-out',
    };
    waveTop.animate(waveTopAnimation, {
        duration: 12000,
        iterations: Infinity,
    });

    const invisible = document.querySelector('.invisible');
    const invisibleAnimation = {
        opacity: [1, 0.1, 1],
        easing: 'ease-in-out',
    };
    invisible.animate(invisibleAnimation, {
        duration: 20000,
        iterations: Infinity,
    });
}

/* Navigation */

// browser detection //
var root = document.documentElement;
var ua = navigator.userAgent;
var browser = 'asd';
if (ua.indexOf('MSIE 10') >= 0) {
    browser += ' ie10';
}
if (ua.indexOf('IEMobile') >= 0) {
    browser += ' wp';
}
if (ua.indexOf('iPad') >= 0) {
    browser += ' ipad';
}
root.className += browser;

// ie9 no request animation frame
window.iglu = window.iglu || {};
iglu.nav = {
    config: {
        trigger: '.app-header__navigation a',
        speed: 400, //scroll duration
    },
    interval: null,
    scrollTo: function(element) {
        var currentY = self.pageYOffset;
        var targetY = document.getElementById(element).offsetTop;
        console.log(document.getElementById(element));
        targetY -= 52;
        function scrollTo(Y, duration) {
            var start = Date.now(),
                elem = document.documentElement.scrollTop ? document.documentElement : document.body,
                from = elem.scrollTop,
                easingFunction = function(t) {
                    return Math.pow(t, 0.48);
                };
            if (from === Y) {
                return;
            }
            function min(a, b) {
                return a < b ? a : b;
            }
            function scroll(timestamp) {
                var currentTime = Date.now(),
                    time = min(1, (currentTime - start) / duration),
                    easedT = easingFunction(time);
                window.scrollTo(0, easedT * (Y - from) + from);

                if (time < 1) {
                    requestAnimationFrame(scroll);
                }
            }
            requestAnimationFrame(scroll);
        }
        scrollTo(targetY, iglu.nav.config.speed);
    },
    setBindings: function() {
        var config = iglu.nav.config,
            navItems = document.querySelectorAll(iglu.nav.config.trigger),
            eventFunction = function(e) {
                e.preventDefault();
                iglu.nav.scrollTo(this.href.split('#')[1]);
                // $('#app-header__toggler').prop('checked', false);
                document.getElementById('app-header__toggler').checked = false;
            };
        for (i = 0; i < navItems.length; i += 1) {
            navItems[i].addEventListener('click', eventFunction);
        }
        // document.querySelectorAll('#logo a')[0].addEventListener("click", eventFunction);
    },
    init: function() {
        iglu.nav.setBindings();
    },
};

if (window.requestAnimationFrame) {
    document.addEventListener('DOMContentLoaded', function() {
        iglu.nav.init();
    });
}
