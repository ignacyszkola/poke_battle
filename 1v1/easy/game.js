// creating pokemons for player to choose and for bot
let random_poke1 = Math.floor(Math.random() * pokemons_pl.length);
let random_poke2;
do {
    random_poke2 = Math.floor(Math.random() * pokemons_pl.length);
} while (random_poke2 == random_poke1);

let choose_pokemon3 = Math.floor(Math.random() * pokemons_pl.length);

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

    write_pokemon_bot(bots_pokemon);
    write_pokemon_pl(players_pokemon);

    move1 = document.getElementById("move1_button");
    move1.innerHTML = `<div class="move1">${players_pokemon.moves[0].name}</div>`;
    move1.addEventListener("click", () => {
        // player_move(players_pokemon, bots_pokemon, 0);
        bots_pokemon = player_move(players_pokemon, bots_pokemon, 0);
        Healh_pokemon_bot(bots_pokemon.hp, bots_pokemon.maxhp);
        if (bots_pokemon.hp <= 0) {
            document.getElementById("end_screan").innerHTML = `
            <img src="../../pokemons_pictures/player/${players_pokemon.name}.png" height="500" width="500"/>
            <br><br><h1>WYGRAŁEŚ Z BOTEM</h1>
            `;
        }
        players_pokemon = bot_move(players_pokemon, bots_pokemon, 0);
        Healh_pokemon_player(players_pokemon.hp, players_pokemon.maxhp);
        if (players_pokemon.hp <= 0) {
            document.getElementById("end_screan").innerHTML = `
            <img src="../../pokemons_pictures/enemy/${bots_pokemon.name}.png" height="500" width="500"/>
            <br><br><h1>PRZEGRAŁEŚ Z BOTEM</h1>
            `;
        }
    });
    
    move2 = document.getElementById("move2_button");
    move2.innerHTML = `<div class="move2">${players_pokemon.moves[1].name}</div>`;
    move2.addEventListener("click", () => {
        // player_move(players_pokemon, bots_pokemon, 1);
        bots_pokemon = player_move(players_pokemon, bots_pokemon, 1);
        Healh_pokemon_bot(bots_pokemon.hp, bots_pokemon.maxhp);
        if (bots_pokemon.hp <= 0) {
            document.getElementById("end_screan").innerHTML = `
            <img src="../../pokemons_pictures/player/${players_pokemon.name}.png" height="500" width="500"/>
            <br><br><h1>WYGRAŁEŚ Z BOTEM</h1>
            `;
        }
        players_pokemon = bot_move(players_pokemon, bots_pokemon, 1);
        Healh_pokemon_player(players_pokemon.hp, players_pokemon.maxhp);
        if (players_pokemon.hp <= 0) {
            document.getElementById("end_screan").innerHTML = `
            <img src="../../pokemons_pictures/enemy/${bots_pokemon.name}.png" height="500" width="500"/>
            <br><br><h1>PRZEGRAŁEŚ Z BOTEM</h1>
            `;
        }
    });
    
    move3 = document.getElementById("move3_button");
    move3.innerHTML = `<div class="move3">${players_pokemon.moves[2].name}</div>`;
    move3.addEventListener("click", () => {
        // player_move(players_pokemon, bots_pokemon, 2);
        bots_pokemon = player_move(players_pokemon, bots_pokemon, 2);
        Healh_pokemon_bot(bots_pokemon.hp, bots_pokemon.maxhp);
        if (bots_pokemon.hp <= 0) {
            document.getElementById("end_screan").innerHTML = `
            <img src="../../pokemons_pictures/player/${players_pokemon.name}.png" height="500" width="500"/>
            <br><br><h1>WYGRAŁEŚ Z BOTEM</h1>
            `;
        }
        players_pokemon = bot_move(players_pokemon, bots_pokemon, 2);
        Healh_pokemon_player(players_pokemon.hp, players_pokemon.maxhp);
        if (players_pokemon.hp <= 0) {
            document.getElementById("end_screan").innerHTML = `
            <img src="../../pokemons_pictures/enemy/${bots_pokemon.name}.png" height="500" width="500"/>
            <br><br><h1>PRZEGRAŁEŚ Z BOTEM</h1>
            `;
        }
    });
    
    move4 = document.getElementById("move4_button");
    move4.innerHTML = `<div class="move4">${players_pokemon.moves[3].name}</div>`;
    move4.addEventListener("click", () => {
        // player_move(players_pokemon, bots_pokemon, 3);
        bots_pokemon = player_move(players_pokemon, bots_pokemon, 3);
        Healh_pokemon_bot(bots_pokemon.hp, bots_pokemon.maxhp);
        if (bots_pokemon.hp <= 0) {
            document.getElementById("end_screan").innerHTML = `
            <img src="../../pokemons_pictures/player/${players_pokemon.name}.png" height="500" width="500"/>
            <br><br><h1>WYGRAŁEŚ Z BOTEM</h1>
            `;
        }
        players_pokemon = bot_move(players_pokemon, bots_pokemon, 3);
        Healh_pokemon_player(players_pokemon.hp, players_pokemon.maxhp);
        if (players_pokemon.hp <= 0) {
            document.getElementById("end_screan").innerHTML = `
            <img src="../../pokemons_pictures/enemy/${bots_pokemon.name}.png" height="500" width="500"/>
            <br><br><h1>PRZEGRAŁEŚ Z BOTEM</h1>
            `;
        }
    });



}