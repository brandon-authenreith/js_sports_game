const teamonenumshots = document.querySelector("#teamone-numshots")
const teamonenumgoals = document.querySelector("#teamone-numgoals")
const teamoneshootbutton = document.querySelector("#teamone-shoot-button")


teamoneshootbutton.addEventListener ("click", function(){
    let newOneShot = Number(teamonenumshots.innerHTML) + 1;
    teamonenumshots.innerHTML = newOneShot;
    let shotChance = Math.random()
    if (shotChance < .5) {
        teamonenumgoals.innerText = Number(teamonenumgoals.innerHTML) + 1 
    }
})

const teamTwoNumShots = document.querySelector("#teamtwo-numshots")
const teamTwoNumGoals = document.querySelector("#teamtwo-numgoals")
const teamTwoShootButton = document.querySelector("#teamtwo-shoot-button")


teamTwoShootButton.addEventListener ("click", function(){
    let newTwoShot = Number(teamTwoNumShots.innerHTML) + 1;
    teamTwoNumShots.innerHTML = newTwoShot;
    let shotTwoChance = Math.random()
    if (shotTwoChance < .5) {
        teamTwoNumGoals.innerText = Number(teamTwoNumGoals.innerHTML) + 1 
    }
})

const resetButton = document.querySelector("#reset-button")
const numResets = document.querySelector("#num-resets")

resetButton.addEventListener ("click", function() {
   numResets.innerHTML = Number(numResets.innerHTML) +1;
   console.log (teamTwoNumGoals.innerHTML , "teamTwoNumGoals")
   teamTwoNumGoals.innerHTML = "0" ;
   teamTwoNumShots.innerHTML= "0" ;
   teamonenumshots.innerHTML = "0" ;
   teamonenumgoals.innerHTML = "0" ;

})