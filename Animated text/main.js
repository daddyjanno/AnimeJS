// console.log('animejs')

// anime({
//     targets: '.circle',
//     translateX: 250,
//     delay: anime.stagger(200, { start: 1000 }),
//     background: '#0000FF',
//     direction: 'alternate',
// })
const title = document.querySelector('h1')
const letters = [...document.querySelectorAll('h1 span')]

title.addEventListener('mouseenter', handleLetters)
title.addEventListener('mouseleave', handleLetters)

let isAnimatingIn = false
let calledOut = false
let animOpened = false

function handleLetters() {
    if (animOpened) {
        animOut()
        animOpened = false
        return
    }
    if (isAnimatingIn) {
        calledOut = true
        return
    }

    isAnimatingIn = true

    const animPromise = new Promise((resolve) => {
        animIn()
        setTimeout(() => {
            resolve()
        }, 750)
    })
    animPromise.then(() => {
        isAnimatingIn = false
        if (calledOut) {
            animOut()
            calledOut = false
        } else if (!calledOut) {
            animOpened = true
        }
    })
}
function animIn() {
    anime({
        targets: 'h1 span',
        translateX: function () {
            return anime.random(-250, 250)
        },
        translateY: function () {
            return anime.random(-250, 250)
        },
        translateZ: function () {
            return anime.random(-2000, 750)
        },
        rotate: function () {
            return anime.random(-250, 250)
        },
        easing: 'easeOutCirc',
        duration: 750,
    })
}
function animOut() {
    anime({
        targets: 'h1 span',
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotate: 0,
        easing: 'easeInQuad',
        duration: 750,
    })
}
