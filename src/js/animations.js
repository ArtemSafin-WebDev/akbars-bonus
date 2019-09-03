import TimelineMax from 'TimelineMax';
import ScrollMagic from 'ScrollMagic';
import 'animation.gsap';
import 'debug.addIndicators';
import { Power0, Power4, Elastic } from 'gsap';

export default function() {
    const hocksIntro = document.getElementById('hocks-intro');
    const howToGet = document.getElementById('how-to-get');
    const triangles = document.getElementById('parallax-triangles');
    const bonuses = document.getElementById('bonuses');
    const partners = document.getElementById('partners');
    const faq = document.getElementById('faq');
    const footerHocks = document.getElementById('footer-hocks');

    const controller = new ScrollMagic.Controller();

    if (hocksIntro) {
        const textBlock = hocksIntro.querySelector('.hocks-intro__text-block');
        const videoLink = hocksIntro.querySelector('.hocks-intro__video-link');
        const gradientBG = hocksIntro.querySelector('.hocks-intro__gradient-bg');
        const circle = hocksIntro.querySelector('.hocks-intro__circle');

        const timeline = new TimelineMax();

        timeline
            .to(hocksIntro, 1, {
                autoAlpha: 1,
                ease: Power4.easeOut
            })
            .to(
                gradientBG,
                1,
                {
                    scaleX: 1,
                    ease: Power4.easeOut
                },
                0
            )
            .to(
                circle,
                1.5,
                {
                    scale: 1,
                    ease: Elastic.easeOut.config(1, 0.5)
                },
                '-=.5'
            )
            .from(
                textBlock,
                1.5,
                {
                    autoAlpha: 0,
                    xPercent: -30,
                    ease: Power4.easeOut
                },
                '-=2'
            )
            .from(
                videoLink,
                1,
                {
                    autoAlpha: 0,
                    ease: Power4.easeOut
                },
                '-=1'
            );

        const scene = new ScrollMagic.Scene({
            triggerElement: hocksIntro,
            triggerHook: 1,
            reverse: false
        })
            .setTween(timeline)
            .addTo(controller);
    }

    if (howToGet) {
        const azevedo = howToGet.querySelector('.how-to-get__image');
        const circle = howToGet.querySelector('.how-to-get__image-block-circle');
        const heading = howToGet.querySelector('.how-to-get__stages-heading');

        const numbers = Array.from(howToGet.querySelectorAll('.how-to-get__stages-list-item'));

        const timeline = new TimelineMax();

        timeline
            .to(howToGet, 2, {
                autoAlpha: 1,
                ease: Power4.easeOut
            })
            .from(
                heading,
                1,
                {
                    autoAlpha: 0,
                    xPercent: 40,
                    ease: Power4.easeOut
                },
                0
            )
            .from(
                azevedo,
                1.5,
                {
                    autoAlpha: 0,
                    xPercent: -30,
                    ease: Power4.easeOut
                },
                0
            )
            .from(
                circle,
                1,
                {
                    scale: 0,
                    ease: Elastic.easeOut.config(1, 0.5)
                },
                '-=1.5'
            )
            .staggerFrom(
                numbers,
                1,
                {
                    autoAlpha: 0,
                    y: 30
                },
                0.3,
                '-=1.2'
            );

        const scene = new ScrollMagic.Scene({
            triggerElement: howToGet,
            triggerHook: 1,
            reverse: false
        })
            .setTween(timeline)
            .addTo(controller);
    }

    if (triangles) {
        const timeline = new TimelineMax();

        timeline.to(triangles, 1, {
            y: '30%',
            ease: Power0.easeNone
        });

        const scene = new ScrollMagic.Scene({
            triggerElement: triangles,
            triggerHook: 1,
            duration: '200%'
        })
            .setTween(timeline)
            .addTo(controller);
    }

    if (bonuses) {
        const heading = bonuses.querySelector('.bonus__categories-heading');
        const listItems = Array.from(bonuses.querySelectorAll('.bonus__categories-list-item'));
        const slider = bonuses.querySelector('.bonus__categories-slider');

        const timeline = new TimelineMax();

        timeline.from(heading, 1, {
            autoAlpha: 0,
            xPercent: -30,
            ease: Power4.easeOut
        });

        if (listItems.length > 0) {
            timeline.staggerFrom(
                listItems,
                1,
                {
                    y: 30,
                    autoAlpha: 0,
                    ease: Power4.easeOut
                },
                0.3,
                '-=.3'
            );
        } else {
            timeline.from(
                slider,
                1,
                {
                    autoAlpha: 0,
                    y: 30,
                    ease: Power4.easeOut
                },
                '-=.3'
            );
        }

        const scene = new ScrollMagic.Scene({
            triggerElement: bonuses,
            triggerHook: 1,
            reverse: false
        })
            .setTween(timeline)
            .addTo(controller);
    }

    if (partners) {
        const heading = partners.querySelector('.bonus__partners-heading');
        const zaripov = partners.querySelector('.bonus__partners-bg-img');
        const tabs = partners.querySelector('.bonus__partners-tabs');

        const timeline = new TimelineMax();

        timeline
            .from(heading, 1, {
                autoAlpha: 0,
                xPercent: -30,
                ease: Power4.easeOut
            })
            .from(
                zaripov,
                1,
                {
                    autoAlpha: 0,
                    xPercent: 30,
                    ease: Power4.easeOut
                },
                0
            )
            .from(
                tabs,
                1,
                {
                    autoAlpha: 0,
                    yPercent: 30,
                    ease: Power4.easeOut
                },
                '-=.5'
            );

        const scene = new ScrollMagic.Scene({
            triggerElement: partners,
            triggerHook: 0.5,
            reverse: false
        })
            .setTween(timeline)
            .addTo(controller);
    }

    if (faq) {
        const heading = faq.querySelector('.qa__heading');
        const btn = faq.querySelector('.qa__ask-question-btn');
        const accordeons = faq.querySelector('.qa__accordeons-list');

        const timeline = new TimelineMax();

        timeline
            .from(heading, 1, {
                autoAlpha: 0,
                xPercent: -30,
                ease: Power4.easeOut
            })
            .from(
                btn,
                1,
                {
                    autoAlpha: 0,
                    xPercent: 30,
                    ease: Power4.easeOut
                },
                0
            )
            .from(
                accordeons,
                1,
                {
                    autoAlpha: 0,
                    yPercent: 30,
                    ease: Power4.easeOut
                },
                '-=.7'
            );

        const scene = new ScrollMagic.Scene({
            triggerElement: faq,
            triggerHook: 1,
            reverse: false
        })
            .setTween(timeline)
            .addTo(controller);
    }

    if (footerHocks) {
        const leopard = footerHocks.querySelector('.page-footer__hocks-leopard');
        const heading = footerHocks.querySelector('.page-footer__hocks-heading');
        const link = footerHocks.querySelector('.page-footer__hocks-link');
        const bottomRow = footerHocks.querySelector('.page-footer__links');
        console.log('bottom row', bottomRow)

        const timeline = new TimelineMax();

        timeline
            .from(heading, 2, {
                autoAlpha: 0,
                xPercent: -30,
                ease: Power4.easeOut
            })
            .from(link, 1, {
                autoAlpha: 0,
                y: 30,
                ease: Power4.easeOut
            }, '-=1')
            .from(
                leopard,
                2,
                {
                    autoAlpha: 0,
                    xPercent: 30,
                    ease: Power4.easeOut
                },
                0
            )
            .from(bottomRow, 1, {
                autoAlpha: 0,
                ease: Power4.easeOut
            }, 0);

        const scene = new ScrollMagic.Scene({
            triggerElement: footerHocks,
            triggerHook: 1,
            reverse: false
        })
            .setTween(timeline)
            .addTo(controller);
    }
}
