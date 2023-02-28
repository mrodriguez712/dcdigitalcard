// batman
let batman = document.querySelector('.batman')
let bio = document.getElementById('bruce-bio')

batman.addEventListener('mouseover', function() {
    bio.innerHTML = 
    `
        <img src='images/batman.jpg' alt='batman'/>
        <h3>Batman</h3>
        <p>The Caped Crusader, The Dark Knight</p>
        <h4>BatCave</h4>
    `
    bio.style.transition = 'all 4s ease-in-out'
    bio.style.color = 'red'
    bio.style.fontSize = '24px'
})

batman.addEventListener('mouseout', function() {
    bio.innerHTML =
    `   
        <img src="images/bruce.jpg" alt="Bruce Wayne profile picture">
        <h3>Bruce Wayne</h3>
        <p>Billionaire, industrialist and notorious playboy</p>
        <h4>Gotham, Gotham City</h4>
    `
    bio.style.transition = 'all 4s ease-in-out'
    bio.style.color = 'white'
    bio.style.fontSize = '16px'
})