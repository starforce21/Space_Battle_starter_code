console.log("Earth has been attacked by a horde of aliens! Time to fight back. Your ship's has 20 hull strength, 5 firepower and hitrate of 70%")
let yourHull=20
let yourFirePower=5
let yourAccuracy=.7
let enemyHull
let enemyFirePower
let enemyAccuracy
let enemyCount=6
let makeEnemy=()=>{
    enemyHull=Math.floor(Math.random()*4+3)
    enemyFirePower=Math.floor(Math.random()*3+2)
    enemyAccuracy=Math.floor(Math.random()*20+60)/100
}
let didYouHit=(accuracy)=>{
    if (Math.random() < accuracy)
        return true
    else
        return false
}
let yourStats=document.getElementsByClassName('playerStats')[0]
let enemyStats=document.getElementsByClassName('enemyStats')[0]
const displayStats=()=>{
    yourStats.innerHTML=`Hull : ${yourHull} <br>FirePower : 5 <br>Accuracy : .7 <br>`
    enemyStats.innerHTML=`Hull : ${enemyHull} <br>FirePower : ${enemyFirePower} <br>Accuracy : ${enemyAccuracy} <br>`
}
makeEnemy()
displayStats()
console.log("There is a total of 6 enemy and you will fight them in a row")
console.log("Battle Initializing")
let z=0
const spaceBattle=()=>{

while(enemyCount>0){
    makeEnemy()
    let battleInput=prompt(`Your current stats: HP=${yourHull} FP=${yourFirePower} HR=${yourAccuracy}. Enemy Stats: HP=${enemyHull} FP=${enemyFirePower} HR=${enemyAccuracy} and there is ${enemyCount} enemy left. Do you wish to attack or retreat.` )
    if(battleInput=='attack'){
        while(enemyHull>0){
            console.log(`Your current stats: HP=${yourHull} FP=${yourFirePower} HR=${yourAccuracy}. Enemy Stats: HP=${enemyHull} FP=${enemyFirePower} HR=${enemyAccuracy}.
            and there is ${enemyCount} enemy left` )
            if(didYouHit(yourAccuracy)){
                enemyHull-=yourFirePower
                console.log(`You Hit and dealt 5dmg. Enemy now have ${enemyHull}hp`)
                displayStats()
                if(enemyHull<1){
                    console.log('Enemy is dead')
                    enemyCount--
                }
                else {
                    if(didYouHit(enemyAccuracy)){
                        console.log('Enemy surviving and is attempting to hit you')
                        yourHull-=enemyFirePower
                        if(yourHull<1){
                            console.log('Enemy breached your hull and you are dead')
                            enemyCount=0
                            break
                        }
                    }
                }    
            }
            else{
                console.log('You missed your shot. Enemy is attacking')
                if(didYouHit(enemyAccuracy)){
                    console.log(`Enemy hit you for ${enemyFirePower}`)
                    yourHull-=enemyFirePower
                    displayStats()
                    if(yourHull<1){
                        console.log('Enemy breached your hull and you are dead')
                        enemyCount=0
                        break
                    }
                }
                else{
                    console.log('Enemy missed you')
                }
            }
        }
    } 
    else{
        enemyCount=0
    }  
}
if (z<10000){
    setTimeout(spaceBattle,20)
}
}
spaceBattle()