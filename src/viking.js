// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength

    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
     this.health = this.health - damage
       return
    }
}

// Viking
class Viking extends Soldier  {
    constructor(name , health, strength){
        super(health, strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0 ){
            return `${this.name} has received ${damage} points of damage`
        }
        else{
           return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health,strength)
    }
    receiveDamage(damage){
        this.health = this.health - damage
        if(this.health > 0 ){
            return `A Saxon has received ${damage} points of damage`
        }
        else{
           return `A Saxon has died in combat`
        }
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking){
        this.vikingArmy.push(viking)
        return
    }
    addSaxon(saxon){
        this.saxonArmy.push(saxon)
        return
    }
    vikingAttack(){
        let indexviking= Math.floor(Math.random() * (this.vikingArmy.length ) ) 
        let viking =this.vikingArmy[indexviking]

        let indexsaxon = Math.floor(Math.random() * (this.saxonArmy.length ))
        let saxon =this.saxonArmy[indexsaxon]
       
         let atack  = saxon.receiveDamage(viking.attack())

        if(saxon.health <= 0){
            this.saxonArmy.splice(indexsaxon)

        }
        

        return atack
    }

    saxonAttack(){
        let indexviking= Math.floor(Math.random() * (this.vikingArmy.length ) ) 
        let viking =this.vikingArmy[indexviking]

        let indexsaxon = Math.floor(Math.random() * (this.saxonArmy.length ))
        let saxon =this.saxonArmy[indexsaxon]
       
         let atack = viking.receiveDamage(saxon.attack())

        if(viking.health <= 0){
            this.vikingArmy.splice(indexviking)

        }
        
        return atack

    }

    showStatus(){
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'

        }
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day..."
              }
              if (this.saxonArmy.length === 1 && this.vikingArmy.length === 1 ){
                return "Vikings and Saxons are still in the thick of battle."
              }
    }
}
