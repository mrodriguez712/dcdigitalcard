let main = document.querySelector('.main')

// batman
let batman = document.querySelector('.batman')
let bbio = document.getElementById('bruce-bio')

batman.addEventListener('mouseover', function() {
    bbio.innerHTML = 
    `
        <img src='images/batman.jpg' alt='batman'/>
        <h3>Batman</h3>
        <p>The Caped Crusader, The Dark Knight</p>
        <h4>BatCave</h4>
    `
    main.style.background = '#222'
    main.style.transition = 'all 2s ease-in-out'
    bbio.style.transition = 'all 2s ease-in-out'
    bbio.style.color = 'grey'
    bbio.style.fontSize = '24px'
})

batman.addEventListener('mouseout', function() {
    bbio.innerHTML =
    `   
        <img src="images/bruce.jpg" alt="Bruce Wayne profile picture">
        <h3>Bruce Wayne</h3>
        <p>Billionaire, industrialist and notorious playboy</p>
        <h4>Gotham, Gotham City</h4>
    `
    main.style.background = 'white'
    main.style.transition = 'all 2s ease-in-out'
    bbio.style.transition = 'all 1s ease-in-out'
    bbio.style.color = 'white'
    bbio.style.fontSize = '16px'
})

// superman
let superman = document.querySelector('.superman')
let sbio = document.getElementById('clark-bio')

superman.addEventListener('mouseover', function() {
    sbio.innerHTML = 
    `
        <img src='images/superman.jpg' alt='superman'/>
        <h3>Superman</h3>
        <p>Man of Steel, Man of Tomorrow</p>
        <h4>Fortress of Solitude</h4>
    `
    main.style.background = '#00308F'
    main.style.transition = 'all 2s ease-in-out'
    sbio.style.transition = 'all 2s ease-in-out'
    sbio.style.color = 'red'
    sbio.style.fontSize = '24px'
})

superman.addEventListener('mouseout', function() {
    sbio.innerHTML =
    `   
        <img src="images/clark.jpg" alt="Clark Kent profile picture">
        <h3>Clark Kent</h3>
        <p>Reporter for the Daily Planet</p>
        <h4>Metropolis</h4>
    `
    main.style.background = 'white'
    main.style.transition = 'all 2s ease-in-out'
    sbio.style.transition = 'all 1s ease-in-out'
    sbio.style.color = 'white'
    sbio.style.fontSize = '16px'
})

// wonder woman
let ww = document.querySelector('.wonder-woman')
let wbio = document.getElementById('diana-bio')

ww.addEventListener('mouseover', function() {
    wbio.innerHTML = 
    `
        <img src='images/ww.jpg' alt='wonder woman'/>
        <h3>Wonder Woman</h3>
        <p>The Truthqueen, Pricess of Themyscira</p>
        <h4>Themyscira</h4>
    `
    main.style.background = '#FFFF00'
    main.style.transition = 'all 2s ease-in-out'
    wbio.style.transition = 'all 2s ease-in-out'
    wbio.style.color = 'yellow'
    wbio.style.fontSize = '24px'
})

ww.addEventListener('mouseout', function() {
    wbio.innerHTML =
    `   
        <img src="images/diana.jpg" alt="Diana Price profile picture">
        <h3>Diana Prince</h3>
        <p>Civilian Employee, Businesswoman, Astronaut</p>
        <h4>Paris, France</h4>
    `
    main.style.background = 'white'
    main.style.transition = 'all 2s ease-in-out'
    wbio.style.transition = 'all 1s ease-in-out'
    wbio.style.color = 'white'
    wbio.style.fontSize = '16px'
})
