// alert("Earth has been attacked by a horde of aliens! Time to fight back. Your ship's has 20 hull strength, 5 firepower and hitrate of 70%")
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
    enemyAccuracy=(Math.random()*2+6)/10
}
let didYouHit=(accuracy)=>{
    if (Math.random() < accuracy)
        return true
    else
        return false
}


// alert("There is a total of 6 enemy and you will fight them in a row")
// alert("Battle Initializing")
while(enemyCount>0){
    makeEnemy()
    let battleInput=prompt(`Your current stats: HP=${yourHull} FP=${yourFirePower} HR=${yourAccuracy}. Enemy Stats: HP=${enemyHull} FP=${enemyFirePower} HR=${enemyAccuracy}.
                        and there is ${enemyCount} enemy left` )
    if(battleInput=='attack'){
        while(enemyHull>0){
            alert(`Your current stats: HP=${yourHull} FP=${yourFirePower} HR=${yourAccuracy}. Enemy Stats: HP=${enemyHull} FP=${enemyFirePower} HR=${enemyAccuracy}.
            and there is ${enemyCount} enemy left` )
            if(didYouHit(yourAccuracy)){
                enemyHull-=yourFirePower
                alert(`You Hit enemy have ${enemyHull}hp`)
                if(enemyHull<1){
                    alert('enemy is dead')
                    enemyCount--
                }
                else {
                    if(didYouHit(enemyAccuracy)){
                        alert('enemy hit you')
                        yourHull-=enemyFirePower
                        if(yourHull<1){
                            alert('you are dead')
                        }
                    }
                }    
            }
            else{
                alert('You missed enemy is attacking')
                if(didYouHit(enemyAccuracy)){
                    alert('enemy hit you')
                    yourHull-=enemyFirePower
                    if(yourHull<1){
                        console.log('you are dead')
                    }
                }
                else{
                    alert('enemy missed you')
                }
            }
        }
    } 
    else{
        enemyCount=0
    }  
}

// onloadevents