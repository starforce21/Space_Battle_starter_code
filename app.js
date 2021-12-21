let yourHull=20
let yourFirePower=5
let yourAccuracy=.7
let enemyCount=6
const battleLoop=()=>{
    while(enemyHull>0 && yourHull>0){
        alert(`Your current HP=${yourHull}. Enemy current HP=${enemyHull}`)
        if(didYouHit(yourAccuracy)){
            enemyHull-=yourFirePower
            alert(`You Hit and dealt 5dmg. Enemy now have ${enemyHull}hp`)
            if(enemyHull<1){
                alert('Enemy is dead')
                enemyCount--
            }
            else {
                if(didYouHit(enemyAccuracy)){
                    alert('Enemy surviving and is attempting to hit you')
                    yourHull-=enemyFirePower
                    if(yourHull<1){
                        alert('Enemy breached your hull and you are dead')

                    }
                }
            }    
        }
        else{
            alert('You missed your shot. Enemy is attacking')
            if(didYouHit(enemyAccuracy)){
                alert(`Enemy hit you for ${enemyFirePower}`)
                yourHull-=enemyFirePower
                if(yourHull<1){
                    alert('Enemy breached your hull and you are dead')
                }
            }
            else{
                alert('Enemy missed you')
            }
        }
    }
    if (enemyCount==0){
        alert('You defeated the aliens and saved Earth')
        enemyCount=6
        yourHull=20
    }
    if (yourHull<1){
        alert('Aliens Won');
        yourHull=20
    }
    makeEnemy()
    displayStats()
} 
button1.addEventListener('click',battleLoop)
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
    document.getElementById('p1').innerHTML=`Enemy left=${enemyCount}`
}
makeEnemy()
displayStats()
function LoadingStatement() {
    alert("Earth has been attacked by a horde of aliens! Time to fight back. Your ship's has 20 hull strength, 5 firepower and hitrate of 70%")
    alert("There is a total of 6 enemy and you will fight them in a row")
    alert("Battle Initializing")
}
setTimeout(LoadingStatement,1)