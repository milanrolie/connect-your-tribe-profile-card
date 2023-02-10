const text = SplitType.create('h1')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1
})

gsap.to('.see-more', {
    y: -100,
    delay: 1,
    duration: .5,
    ease: "back.out(1.7)"
})

let card = document.querySelector('.animated-card')
let revealButton = document.querySelector('.see-more')
let objects = document.getElementsByClassName('objects')
let pause = document.querySelector('.pause')

revealButton.addEventListener('click', getBig)

function getBig() {

    pauseAnimation()
    
    gsap.to('.animated-card', {
        scale: 20,
        // rotate: 180,
        duration: 3,
    })
    
    gsap.to('.char', {
        y: '-44vh',
        stagger: 0.05,
        scale: .3,
        duration: .7,
        ease: "back.in(1.2)"
    })

    gsap.to('.visitekaartje', {
        y: '-100vh',
        duration: .7,
        delay: 1.5,
    })

    gsap.to('.see-more', {
        y: 100,
        duration: .3,
        delay: 2.2,
        ease: "back.in(1.7)",
    })

    gsap.to('.business-card', {
        stagger: .1,
        y: 0,
        duration: .8,
        delay: 2,
        ease: "back.out(1.2)"
    })

    gsap.to('.see-less', {
        y: 0,
        duration: .8,
        delay: 4,
        ease: "back.out(1.2)"
    })

    gsap.from('h2', {
        x: -200,
        stagger: .1,
        duration: .8,
        delay: 2.5,
        ease: "back.out(1.2)"
    })

    gsap.from('.divider', {
        x: 240,
        stagger: .1,
        duration: .8,
        delay: 2.6,
        ease: "back.out(1.2)"
    })

    gsap.from('p', {
        x: -300,
        stagger: .1,
        duration: .8,
        delay: 2.6,
    })

    gsap.from('.divider2', {
        x: -240,
        stagger: .1,
        duration: .8,
        delay: 3.4,
        ease: "back.out(1.2)"
    })

}

function pauseAnimation() {
    for (let i = 0; i < objects.length; i++) {
        objects[i].classList.toggle("pause");
        console.log('hi');
    }
}
