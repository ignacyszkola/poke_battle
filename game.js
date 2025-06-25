let rounds = 0, roundsB = 0;
 // creating pokemons for player to choose and for bot
let random_poke1 = Math.floor(Math.random() * pokemons_pl.length);
let random_poke2;
do {
    random_poke2 = Math.floor(Math.random() * pokemons_pl.length);
} while (random_poke2 == random_poke1);

let choose_pokemon3 = Math.floor(Math.random() * pokemons_pl.length);
// let choose_pokemon3 = 2;
let choose_pokemon1 = pokemons_pl[random_poke1];
let choose_pokemon2 = pokemons_pl[random_poke2];
let bot_pokemon = pokemons_bot[choose_pokemon3];

pokemon1 = document.getElementById("write_a_pokemon1");
pokemon1.innerHTML = choose_pokemon1.name;
//pokemon1.setAttribute("onclick", `main_game(${random_poke1}, ${choose_pokemon3})`);


pokemon1.addEventListener("click", () => {
    main_game(random_poke1, choose_pokemon3)
})

pokemon2 = document.getElementById("write_a_pokemon2");
pokemon2.innerHTML = choose_pokemon2.name; 
//pokemon2.setAttribute("onclick", `main_game(${random_poke2}, ${choose_pokemon3})`);
pokemon2.addEventListener("click", () => {
    main_game(random_poke2, choose_pokemon3)
})

function main_game(indexP, indexB) {
    document.getElementById("buttons").innerHTML = "";
    
    let players_pokemon = pokemons_pl[indexP];
    let bots_pokemon = pokemons_bot[indexB];
    // players_pokemon.status = statuses[4]; bots_pokemon.accuracy = 0;

    write_pokemon_bot(bots_pokemon);
    write_pokemon_pl(players_pokemon);

    
    move1 = document.getElementById("move1_button");
    move1.innerHTML = `<div class="move1">${players_pokemon.moves[0].name}</div>`;
    move1.addEventListener("click", () => {
        if(players_pokemon.speed>bots_pokemon.speed){
            if(players_pokemon.status!=null){
                return_ar = check_status(players_pokemon, rounds); 
                players_pokemon=return_ar[0];
                rounds = return_ar[1];  
            }
            if(rounds == 0){
                ret1 = player_move(players_pokemon, bots_pokemon, 0);
                players_pokemon = ret1[0];
                bots_pokemon = ret1[1];
            }
            if (bots_pokemon.hp <= 0) end("player", "WYGRAŁEŚ", players_pokemon.name);
        

            if(bots_pokemon.status!=null){
                return_ar = check_status(bots_pokemon, roundsB); 
                bots_pokemon=return_ar[0];
                roundsB = return_ar[1];  
            }
            if(roundsB == 0){
                ret2 = bot_move(players_pokemon, bots_pokemon);
                players_pokemon = ret2[0];
                bots_pokemon = ret2[1];
            }
            if (players_pokemon.hp <= 0) end("enemy", "PRZEGRAŁEŚ", bots_pokemon.name);
        }
        else{
            if(bots_pokemon.status!=null){
                return_ar = check_status(bots_pokemon, roundsB); 
                bots_pokemon=return_ar[0];
                roundsB = return_ar[1];  
            }
            if(roundsB == 0){
                ret2 = bot_move(players_pokemon, bots_pokemon);
                players_pokemon = ret2[0];
                bots_pokemon = ret2[1];
            }
            if (players_pokemon.hp <= 0) end("enemy", "PRZEGRAŁEŚ", bots_pokemon.name);
        

            if(players_pokemon.status!=null){
                return_ar = check_status(players_pokemon, rounds); 
                players_pokemon=return_ar[0];
                rounds = return_ar[1];  
            }
            if(rounds == 0){
                ret1 = player_move(players_pokemon, bots_pokemon, 0);
                players_pokemon = ret1[0];
                bots_pokemon = ret1[1];
            }
            if (bots_pokemon.hp <= 0) end("player", "WYGRAŁEŚ", players_pokemon.name);
        }

        write_pokemon_bot(bots_pokemon);
        write_pokemon_pl(players_pokemon);
        Healh_pokemon_bot(bots_pokemon.hp, bots_pokemon.maxhp);
        Healh_pokemon_player(players_pokemon.hp, players_pokemon.maxhp);
    });
    
    move2 = document.getElementById("move2_button");
    move2.innerHTML = `<div class="move2">${players_pokemon.moves[1].name}</div>`;
    move2.addEventListener("click", () => {
        if(players_pokemon.speed>bots_pokemon.speed){
            if(players_pokemon.status!=null){
                return_ar = check_status(players_pokemon, rounds); 
                players_pokemon=return_ar[0];
                rounds = return_ar[1];  
            }
            if(rounds == 0){
                ret1 = player_move(players_pokemon, bots_pokemon, 1);
                players_pokemon = ret1[0];
                bots_pokemon = ret1[1];
            }
            if (bots_pokemon.hp <= 0) end("player", "WYGRAŁEŚ", players_pokemon.name);
        

            if(bots_pokemon.status!=null){
                return_ar = check_status(bots_pokemon, roundsB); 
                bots_pokemon=return_ar[0];
                roundsB = return_ar[1];  
            }
            if(roundsB == 0){
                ret2 = bot_move(players_pokemon, bots_pokemon);
                players_pokemon = ret2[0];
                bots_pokemon = ret2[1];
            }
            if (players_pokemon.hp <= 0) end("enemy", "PRZEGRAŁEŚ", bots_pokemon.name);
        }
        else{
            if(bots_pokemon.status!=null){
                return_ar = check_status(bots_pokemon, roundsB); 
                bots_pokemon=return_ar[0];
                roundsB = return_ar[1];  
            }
            if(roundsB == 0){
                ret2 = bot_move(players_pokemon, bots_pokemon);
                players_pokemon = ret2[0];
                bots_pokemon = ret2[1];
            }
            if (players_pokemon.hp <= 0) end("enemy", "PRZEGRAŁEŚ", bots_pokemon.name);
        

            if(players_pokemon.status!=null){
                return_ar = check_status(players_pokemon, rounds); 
                players_pokemon=return_ar[0];
                rounds = return_ar[1];  
            }
            if(rounds == 0){
                ret1 = player_move(players_pokemon, bots_pokemon, 1);
                players_pokemon = ret1[0];
                bots_pokemon = ret1[1];
            }
            if (bots_pokemon.hp <= 0) end("player", "WYGRAŁEŚ", players_pokemon.name);
        }
        write_pokemon_bot(bots_pokemon);
        write_pokemon_pl(players_pokemon);
        Healh_pokemon_bot(bots_pokemon.hp, bots_pokemon.maxhp);
        Healh_pokemon_player(players_pokemon.hp, players_pokemon.maxhp);
    });
    
    move3 = document.getElementById("move3_button");
    move3.innerHTML = `<div class="move3">${players_pokemon.moves[2].name}</div>`;
    move3.addEventListener("click", () => {
        if(players_pokemon.speed>bots_pokemon.speed){
            if(players_pokemon.status!=null){
                return_ar = check_status(players_pokemon, rounds); 
                players_pokemon=return_ar[0];
                rounds = return_ar[1];  
            }
            if(rounds == 0){
                ret1 = player_move(players_pokemon, bots_pokemon, 2);
                players_pokemon = ret1[0];
                bots_pokemon = ret1[1];
            }
            if (bots_pokemon.hp <= 0) end("player", "WYGRAŁEŚ", players_pokemon.name);
        

            if(bots_pokemon.status!=null){
                return_ar = check_status(bots_pokemon, roundsB); 
                bots_pokemon=return_ar[0];
                roundsB = return_ar[1];  
            }
            if(roundsB == 0){
                ret2 = bot_move(players_pokemon, bots_pokemon);
                players_pokemon = ret2[0];
                bots_pokemon = ret2[1];
            }
            if (players_pokemon.hp <= 0) end("enemy", "PRZEGRAŁEŚ", bots_pokemon.name);
        }
        else{
            if(bots_pokemon.status!=null){
                return_ar = check_status(bots_pokemon, roundsB); 
                bots_pokemon=return_ar[0];
                roundsB = return_ar[1];  
            }
            if(roundsB == 0){
                ret2 = bot_move(players_pokemon, bots_pokemon);
                players_pokemon = ret2[0];
                bots_pokemon = ret2[1];
            }
            if (players_pokemon.hp <= 0) end("enemy", "PRZEGRAŁEŚ", bots_pokemon.name);
        

            if(players_pokemon.status!=null){
                return_ar = check_status(players_pokemon, rounds); 
                players_pokemon=return_ar[0];
                rounds = return_ar[1];  
            }
            if(rounds == 0){
                ret1 = player_move(players_pokemon, bots_pokemon, 2);
                players_pokemon = ret1[0];
                bots_pokemon = ret1[1];
            }
            if (bots_pokemon.hp <= 0) end("player", "WYGRAŁEŚ", players_pokemon.name);
        }
        write_pokemon_bot(bots_pokemon);
        write_pokemon_pl(players_pokemon);
        Healh_pokemon_bot(bots_pokemon.hp, bots_pokemon.maxhp);
        Healh_pokemon_player(players_pokemon.hp, players_pokemon.maxhp);
    });
    
    move4 = document.getElementById("move4_button");
    move4.innerHTML = `<div class="move4">${players_pokemon.moves[3].name}</div>`;
    move4.addEventListener("click", () => {
        if(players_pokemon.speed>bots_pokemon.speed){
            if(players_pokemon.status!=null){
                return_ar = check_status(players_pokemon, rounds); 
                players_pokemon=return_ar[0];
                rounds = return_ar[1];  
            }
            if(rounds == 0){
                ret1 = player_move(players_pokemon, bots_pokemon, 3);
                players_pokemon = ret1[0];
                bots_pokemon = ret1[1];
            }
            if (bots_pokemon.hp <= 0) end("player", "WYGRAŁEŚ", players_pokemon.name);
        

            if(bots_pokemon.status!=null){
                return_ar = check_status(bots_pokemon, roundsB); 
                bots_pokemon=return_ar[0];
                roundsB = return_ar[1];  
            }
            if(roundsB == 0){
                ret2 = bot_move(players_pokemon, bots_pokemon);
                players_pokemon = ret2[0];
                bots_pokemon = ret2[1];
            }
            if (players_pokemon.hp <= 0) end("enemy", "PRZEGRAŁEŚ", bots_pokemon.name);
        }
        else{
            if(bots_pokemon.status!=null){
                return_ar = check_status(bots_pokemon, roundsB); 
                bots_pokemon=return_ar[0];
                roundsB = return_ar[1];  
            }
            if(roundsB == 0){
                ret2 = bot_move(players_pokemon, bots_pokemon);
                players_pokemon = ret2[0];
                bots_pokemon = ret2[1];
            }
            if (players_pokemon.hp <= 0) end("enemy", "PRZEGRAŁEŚ", bots_pokemon.name);
        

            if(players_pokemon.status!=null){
                return_ar = check_status(players_pokemon, rounds); 
                players_pokemon=return_ar[0];
                rounds = return_ar[1];  
            }
            if(rounds == 0){
                ret1 = player_move(players_pokemon, bots_pokemon, 3);
                players_pokemon = ret1[0];
                bots_pokemon = ret1[1];
            }
            if (bots_pokemon.hp <= 0) end("player", "WYGRAŁEŚ", players_pokemon.name);
        }

        write_pokemon_bot(bots_pokemon);
        write_pokemon_pl(players_pokemon);
        Healh_pokemon_bot(bots_pokemon.hp, bots_pokemon.maxhp);
        Healh_pokemon_player(players_pokemon.hp, players_pokemon.maxhp);
    });
}