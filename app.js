const battleLoop=()=>{
    while(enemyHull>0 && yourHull>0){
        console.log(`Your current HP=${yourHull} and Shield=${yourShield}. Enemy current HP=${enemyHull}`)
        if(didYouHit(yourAccuracy)){
            enemyHull-=yourFirePower
            console.log(`You Hit and dealt ${yourFirePower}dmg. Enemy now have ${enemyHull}hp`)
            if(enemyHull<1){
                console.log('Enemy is dead, You gain one pp')
                shieldRegen()
                powerPoints++
                level++
                enemyCount--
            }
            else {
                console.log('Enemy survived and is attempting to fire at you')
                if(didYouHit(enemyAccuracy,YourDodge)){
                    console.log(`Enemy hit you for ${enemyFirePower}`)
                    dmgCalc()
                    if(yourHull<1){
                        console.log('Enemy breached your hull and you are dead')
                    }
                }
            }    
        }
        else{
            console.log('You missed your shot. Enemy is attacking')
            if(didYouHit(enemyAccuracy,YourDodge)){
                console.log(`Enemy hit you for ${enemyFirePower}`)
                dmgCalc()
                if(yourHull<1){
                    console.log('Enemy breached your hull and you are dead')
                }
            }
            else{
                console.log('Enemy missed you')
            }
        }
    }
    if (enemyCount==0){
        console.log('You defeated the aliens and saved Earth')
        reset()
    }
    if (yourHull<1){
        console.log('Aliens Won');
        reset()
    }
    if(enemyCount>1){
        makeEnemy()
    }
    else{
        makeBoss()
        console.log('Enemy Mothership approaching')
    }
    
    displayStats()
}
const shieldRegen=()=>{
    amountRegen=Math.ceil(Math.random()*2*level)
    yourShield+=amountRegen
    console.log(`Shield battery activated, Your shield strength increased by ${amountRegen}.`)
}
const heal=()=>{
    if(powerPoints>0){
    yourHull+=5
    powerPoints--
    displayStats()    
    }
    else
    console.log('No pp lefts')
}
const atkUp=()=>{
    if(powerPoints>0){
    yourFirePower+=1
    powerPoints--
    displayStats()    
    }
    else
    console.log('No pp lefts')
}
const accUp=()=>{
    if(powerPoints>0){
    yourAccuracy+=10
    powerPoints--
    displayStats()
    }
    else
    console.log('No pp lefts')
}
const spec=()=>{
    if(specialAtk>0){
    console.log('Ima Firing Mah Lazer')
    specialAtk--
    enemyHull-=10
        if(enemyHull<1){
            console.log('You killed the enemy with your lazer. You get no bonus for that')
            enemyCount--
            makeEnemy()
        }
    displayStats()
    }
    else
    console.log('No specs lefts')
}
const dodgeUp=()=>{
    if(powerPoints>0){
        YourDodge+=5
        powerPoints--
        displayStats()    
        }
        else
        console.log('No pp lefts')
}
const dmgCalc=()=>{
    if(yourShield>enemyFirePower)
        yourShield-=enemyFirePower
    else{
        yourHull+=yourShield-enemyFirePower
        yourShield=0 
    }
}
const reset=()=>{
    yourHull=20
    yourFirePower=5
    yourAccuracy=50
    yourShield=10
    enemyCount=10
    level=1
    powerPoints=0
    specialAtk=3
    YourDodge=10
}
const makeEnemy=()=>{
    enemyHull=Math.ceil(Math.random()*2*level+3)
    enemyFirePower=Math.ceil(Math.random()*2*level+2)
    enemyAccuracy=Math.ceil((.75+(level/100))*100)
}
const makeBoss=()=>{
    enemyHull=35
    enemyFirePower=18
    enemyAccuracy=100
    document.getElementsByClassName('enemyImage')[0].style.backgroundImage='url("images/mothership.gif")'
}
const didYouHit=(accuracy,dodge=0)=>{
    if (Math.random()*100*((100+dodge)/100) < accuracy)
        return true
}
const displayStats=()=>{
    yourStats.innerHTML=`Hull : ${yourHull} <br>FirePower : ${yourFirePower} <br>Accuracy : ${yourAccuracy} <br> Shield: ${yourShield}<br> Dodge: ${YourDodge}`
    enemyStats.innerHTML=`Hull : ${enemyHull} <br>FirePower : ${enemyFirePower} <br>Accuracy : ${enemyAccuracy} <br>`
    document.getElementById('p1').innerHTML=`Enemy left=${enemyCount}`
    document.getElementById('powerPoints').innerHTML=`Power Points left=${powerPoints}`
    document.getElementById('spAtk').innerHTML=`SpAtk left=${specialAtk}`

}
function LoadingStatement() {
    console.log(`Earth has been attacked by a horde of aliens! Time to fight back. Your ship's has ${yourHull} hull strength, ${yourFirePower} firepower and accuracy of ${yourAccuracy}`)
    console.log(`There is a total of ${enemyCount} enemy and you will fight them in a row`)
    console.log("Battle Initializing")
}
let button=document.getElementsByClassName('button1')
let yourStats=document.getElementsByClassName('playerStats')[0]
let enemyStats=document.getElementsByClassName('enemyStats')[0]
button[0].addEventListener('click',battleLoop)
button[1].addEventListener('click',heal)
button[2].addEventListener('click',atkUp)
button[3].addEventListener('click',accUp)
button[4].addEventListener('click',spec)
button[5].addEventListener('click',dodgeUp)
reset()
makeEnemy()
displayStats()
setTimeout(LoadingStatement,100)