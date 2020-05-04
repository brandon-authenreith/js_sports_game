const teamonenumshots = document.querySelector("#teamone-numshots")
const teamonenumgoals = document.querySelector("#teamone-numgoals")
const teamoneshootbutton = document.querySelector("#teamone-shoot-button")


teamoneshootbutton.addEventListener ("click", function(){
    let NewOneShot = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = NewOneShot;
    let ShotChance = Math.random()
    if (Math.random() < .5) {
        teamonenumgoals.innerText = Number(teamonenumgoals.innerHTML) + 1 
    }
})

const teamonenumshots = document.querySelector("#teamone-numshots")
const teamonenumgoals = document.querySelector("#teamone-numgoals")
const teamoneshootbutton = document.querySelector("#teamone-shoot-button")


teamoneshootbutton.addEventListener ("click", function(){
    let NewOneShot = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = NewOneShot;
    let ShotChance = Math.random()
    if (Math.random() < .5) {
        teamonenumgoals.innerText = Number(teamonenumgoals.innerHTML) + 1 
    }
})
