var fight = function (enemy) {
    // repeat and execute as long as the enemy-robot is alive
    while (enemy.health > 0 && playerInfo.health > 0) {
            // Alert players that they are starting the round
            // window.alert("Welcome to Robot Gladiators!");
            var promptFight = window.prompt(
            "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
            );

            if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to skip??");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerInfo.money for skipping
                playerInfo.money = playerInfo.money - 10;
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }

            // if player choses to fight, then fight
            if (promptFight === "fight" || promptFight === "FIGHT") {
                // generate a random damage value based on player's attack power
                var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
                // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
                enemy.health = Math.max(0, enemy.health - damage);
                console.log(
                    playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
                );
            

                // check enemy's health
                if (enemy.health <= 0) {
                    window.alert(enemy.name + " has died!");
                    playerInfo.money = Math.max(0, playerInfo.money + 20);
                    break;
                } else {
                    window.alert(enemy.name + " still has " + enemy.health + " health left.");
                }

            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            // remove player's health by subtracting the amount set in the enemy.attack variable
            playerInfo.health = Math.max(0, playerInfo.health - damage);
            console.log(enemy.name +" attacked " +playerInfo.name +". " +playerInfo.name +" now has " + playerInfo.health +" health remaining.");

            // check player's health
            if (playerInfo.health <= 0) {
                window.alert(playerInfo.name + " has died!");
                break;
            } else {
                window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
            
            }
        }
            else {
            window.alert("You need to choose a valid option. Try again!");
            }
        }
    }

    var startGame = function(){
        //reset player stats
        playerInfo.reset();

        for(var i=0;i < enemyInfo.length;i++) {
            if(playerInfo.health>0){
                window.alert("Welcome to Robot Gladiators! Round " + (i+1));
                var pickedEnemyObj = enemyInfo[i];
                pickedEnemyObj.health = randomNumber(40, 60);
                fight(pickedEnemyObj);

                // if we're not at the last enemy in the array
                if (playerInfo.health > 0 && i < enemyInfo.length - 1){
                    // ask player if wants to use store before next round
                    var storeConfirm = confirm("The fight is over, would you like to enter the store before the next round?");

                    if (storeConfirm) {
                        shop();
                }
            }  else {
                windows.alert("You have lost your robot in battle! Game Over!");
                break;
            }
        }

        // after the loop ends, player is either dead or enemies to fight, so run the endGame function
        endGame();
        // play again
        startGame();
    }
}

    // function to end the entire hame
    var endGame = function() {
        // if player is still alive, player wins!
        if (playerInfo.health > 0) {
            alert("Great job, you have survived the game! You now have a score of " + playerInfo.money + ".")
        }   else {
            alert("You've lost your robot in battle.");
        }
        // ask player if they'd like to play again
        var playAgainConfirm = confirm("Would you like to play again?");
        if (playAgainConfirm) {
            //restart the game
            startGame();
        }   else {
            alert("Thank you for playing Robot Gladiators! Come back soon!");
        }
    }

    var shop = function() {
        // ask player what they'd like to do
        var shopOptionPrompt = prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");

        //use switch to carry out action
        switch (shopOptionPrompt) {
            case "REFILL": // new case
            case "refill":
                playerInfo.refillHealth();
                break;

            case "UPGRADE": // new case
            case "upgrade":
                playerInfo.upgradeAttack();
                break;

            case "leave": // new case
            case "LEAVE":
                alert("Leaving the store.");

                // do nothing so function will end
                break;

            default:
                alert("You did not pick a valid option. Please try again.");

                // call shop() again to force player to pick a valid option
                shop();
                break;
        }
    }

    // function to generate a random numeric value
    var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1)) + min;

        return value;
    }

        var getPlayerName = function(){
            var name = "";

            while (name === "" || name === null) {
                name = prompt("What is the name of your robot?");
            }

            console.log("Your robot's name is " + name);
            return name;
        }

        var playerInfo = {
            name: getPlayerName(),
            health: 100,
            attack: 10,
            money: 10,
            reset: function () {
                this.health = 100;
                this.money = 10;
                this.attack = 10;
            },
            refillHealth: function () {
                if (this.money >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");
                this.health += 20;
                this.money -= 7;
                } else {
                window.alert("You don't have enough money!");
                }
            },
            upgradeAttack: function () {
                if (this.money >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                this.attack += 6;
                this.money -= 7;
                } else {
                window.alert("You don't have enough money!");
                }
            },
        };
            var enemyInfo = [
        {
            name: "Roborto",
            attack: randomNumber(10, 14),
        },
        {
            name: "Amy Android",
            attack: randomNumber(10, 14),
        },
        {
            name: "Robo Trumble",
            attack: randomNumber(10, 14),
        },
        ];

// start the game when the page laods
startGame();