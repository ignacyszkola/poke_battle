function Healh_pokemon_player( hp, maxhp ) {
    const health = document.getElementById("health_bar_player");
    health.style.width = `${hp * 100 / maxhp}%`;
    const infoHp = document.getElementById("pokemon_info_pl_hp")
    infoHp.textContent = `hp: ${hp}/${maxhp}`
}

function Healh_pokemon_bot( hp, maxhp ) {
    const health = document.getElementById("health_bar_bot");
    health.style.width = `${hp * 100 / maxhp}%`;
    const infoHp = document.getElementById("pokemon_info_bot_hp")
    infoHp.textContent = `hp: ${hp}/${maxhp}`
}

// bots defense/spec --, players attack/spec --, bots hp, move power
function player_move(player, bot, num_move) {
    // if ((player.stats?.accuracy ?? 0) < Math.random()) return bot;
    let boost = 1;
    switch(player.moves[num_move].type) {
        case types[fire_type]:
            if(bot.type1 == types[water_type] || bot.type2 == types[water_type] || bot.type1 == types[ground_type] || bot.type2 == types[ground_type] || bot.type1 == types[rock_type] || bot.type2 == types[rock_type] || bot.type1 == types[dragon_type] || bot.type2 == types[dragon_type] || bot.type1 == types[fire_type] || bot.type2 == types[fire_type]){
                boost = 0.5
            }else if(bot.type1 == types[water_type] || bot.type2 == types[water_type] || bot.type1 == types[ground_type] || bot.type2 == types[ground_type] || bot.type1 == types[rock_type] || bot.type2 == types[rock_type] || bot.type1 == types[dragon_type] || bot.type2 == types[dragon_type] || bot.type1 == types[fire_type] || bot.type2 == types[fire_type] && bot.type1 == types[water_type] || bot.type2 == types[water_type] || bot.type1 == types[ground_type] || bot.type2 == types[ground_type] || bot.type1 == types[rock_type] || bot.type2 == types[rock_type] || bot.type1 == types[dragon_type] || bot.type2 == types[dragon_type] || bot.type1 == types[fire_type] || bot.type2 == types[fire_type]){
                boost = 0.25;
            }else if(bot.type1 == types[steel_type] || bot.type2 == types[steel_type] || bot.type1 == types[bug_type] || bot.type2 == types[bug_type] || bot.type1 == types[ice_type] || bot.type2 == types[ice_type] || bot.type1 == types[grass_type] || bot.type2 == types[grass_type]){
                boost = 2;
            }else if(bot.type1 == types[steel_type] || bot.type2 == types[steel_type] || bot.type1 == types[bug_type] || bot.type2 == types[bug_type] || bot.type1 == types[ice_type] || bot.type2 == types[ice_type] || bot.type1 == types[grass_type] || bot.type2 == types[grass_type] && bot.type1 == types[steel_type] || bot.type2 == types[steel_type] || bot.type1 == types[bug_type] || bot.type2 == types[bug_type] || bot.type1 == types[ice_type] || bot.type2 == types[ice_type] || bot.type1 == types[grass_type] || bot.type2 == types[grass_type]){
                boost = 4;
            }
            break;
        case types[water_type]:
            if(bot.type1 == types[grass_type] || bot.type2 == types[grass_type] || bot.type1 == types[water_type] || bot.type1 == types[dragon_type] || bot.type2 == types[dragon_type]){
                boost = 0.5
            }else if(bot.type1 == types[grass_type] || bot.type2 == types[grass_type] || bot.type1 == types[water_type] || bot.type1 == types[dragon_type] || bot.type2 == types[dragon_type] && bot.type1 == types[grass_type] || bot.type2 == types[grass_type] || bot.type1 == types[water_type] || bot.type1 == types[dragon_type] || bot.type2 == types[dragon_type]){
                boost = 0.25;
            }else if(bot.type1 == types[fire_type] || bot.type2 == types[fire_type] || bot.type1 == types[ground_type] || bot.type2 == types[ground_type] || bot.type1 == types[rock_type] || bot.type2 == types[rock_type]){
                boost = 2;
            }else if(bot.type1 == types[fire_type] || bot.type2 == types[fire_type] || bot.type1 == types[ground_type] || bot.type2 == types[ground_type] || bot.type1 == types[rock_type] || bot.type2 == types[rock_type] && bot.type1 == types[fire_type] || bot.type2 == types[fire_type] || bot.type1 == types[ground_type] || bot.type2 == types[ground_type] || bot.type1 == types[rock_type] || bot.type2 == types[rock_type]){
                boost = 4;
            }
            break;
    }
    
    const chance = player.moves[num_move].chance;
    const what_effect = player.moves[num_move].what_effect;
    const effect = player.moves[num_move].effect;


    switch(effect){
        case "statsB":
        case "damage_statsB":
            switch(what_effect){
                case "Paralysis":
                    if( Math.random() < chance/100) {
                        bot.status = "Paralysis";
                    }break;
                case "Burn":
                    if( Math.random() < chance/100) {
                        bot.status = "Burn";
                    }break;
                case "Poison":
                    if( Math.random() < chance/100) {
                        bot.status = "Poison";
                    }break;
                case "Sleep":
                    if( Math.random() < chance/100) {
                        bot.status = "Sleep";
                    }break;
                    case "Freeze":
                        if( Math.random() < chance/100) {
                        bot.status = "Freeze";
                    }break;
                default:
                    if("spec_defense" in what_effect) bot.spec_defense *= what_effect.spec_defense;
                    if("spec_attack" in what_effect) bot.spec_attack *= what_effect.spec_attack;
                    if("defense" in what_effect) bot.defense *= what_effect.defense;
                    if("attack" in what_effect) bot.attack *= what_effect.attack;
                    if("speed" in what_effect) bot.speed *= what_effect.speed;
            break;
        case "heal":
            player.hp += (player.maxhp * player.moves[num_move].power.maxhp);
            if(player.hp>player.maxhp) player.hp = player.maxhp;
            break;
        case "damage_statsP":
        case "statsP":
            switch (what_effect) {
                case "spec_defense":
                    player.spec_defense *= what_effect.spec_defense;
                    break;
                case "spec_attack":
                    player.spec_attack *= what_effect.spec_attack;
                    break;
                case "defense":
                    player.defense *= what_effect.defense;                    
                    break;
                case "attack":
                    player.attack *= what_effect.attack;
                break;
                case "speed":
                    player.speed *= what_effect.speed;                    
                    break;
            }
            break;
        }
    }

        if(player.moves[num_move].category == "Special"){
            const damage = Math.ceil(((player.spec_attack * player.moves[num_move].power * boost)/ bot.spec_defense));
            bot.hp -= damage;
            if(effect == "damage_heal"){
                player.hp += (damage*player.moves[num_move].power.maxhp);
                if(player.hp>player.maxhp) player.hp=player.maxhp;
            }
        }

        else if(player.moves[num_move].category == "Physical"){
            const damage = Math.ceil(((player.attack * player.moves[num_move].power * boost) / bot.defense));
            bot.hp -= damage;
            if(effect == "damage_heal"){
                player.hp += (damage*player.moves[num_move].power.maxhp);
                if(player.hp>player.maxhp) player.hp=player.maxhp;
            }
        }
    
    
    return bot;
}





function bot_move(player, bot) {
    // Losowanie ruchu bota
    const num_move = Math.floor(Math.random() * 4); // Losuje liczbę od 0 do 3, więc num_move będzie w zakresie 0-3

    let boost;

    
    switch(bot.moves[num_move].type) {
        case types[fire_type]:
            if(player.type1 == types[water_type] || player.type2 == types[water_type] || player.type1 == types[ground_type] || player.type2 == types[ground_type] || player.type1 == types[rock_type] || player.type2 == types[rock_type] || player.type1 == types[dragon_type] || player.type2 == types[dragon_type] || player.type1 == types[fire_type] || player.type2 == types[fire_type]){
                boost = 0.5
            }else if(player.type1 == types[water_type] || player.type2 == types[water_type] || player.type1 == types[ground_type] || player.type2 == types[ground_type] || player.type1 == types[rock_type] || player.type2 == types[rock_type] || player.type1 == types[dragon_type] || player.type2 == types[dragon_type] || player.type1 == types[fire_type] || player.type2 == types[fire_type] && player.type1 == types[water_type] || player.type2 == types[water_type] || player.type1 == types[ground_type] || player.type2 == types[ground_type] || player.type1 == types[rock_type] || player.type2 == types[rock_type] || player.type1 == types[dragon_type] || player.type2 == types[dragon_type] || player.type1 == types[fire_type] || player.type2 == types[fire_type]){
                boost = 0.25;
            }else if(player.type1 == types[steel_type] || player.type2 == types[steel_type] || player.type1 == types[bug_type] || player.type2 == types[bug_type] || player.type1 == types[ice_type] || player.type2 == types[ice_type] || player.type1 == types[grass_type] || player.type2 == types[grass_type]){
                boost = 2;
            }else if(player.type1 == types[steel_type] || player.type2 == types[steel_type] || player.type1 == types[bug_type] || player.type2 == types[bug_type] || player.type1 == types[ice_type] || player.type2 == types[ice_type] || player.type1 == types[grass_type] || player.type2 == types[grass_type] && player.type1 == types[steel_type] || player.type2 == types[steel_type] || player.type1 == types[bug_type] || player.type2 == types[bug_type] || player.type1 == types[ice_type] || player.type2 == types[ice_type] || player.type1 == types[grass_type] || player.type2 == types[grass_type]){
                boost = 4;
            }else{
                boost = 1;
            }
            break;
    }

    const chance = bot.moves[num_move].chance;
    const what_effect = bot.moves[num_move].what_effect;
    const effect = bot.moves[num_move].effect;

    switch (effect) {
        case "statsB":
        case "damage_statsB":
            switch (what_effect) {
                case "Paralysis":
                    if (Math.random() < chance / 100) {
                        player.status = "Paralysis";
                    }
                    break;
                case "Burn":
                    if (Math.random() < chance / 100) {
                        player.status = "Burn";
                    }
                    break;
                case "Poison":
                    if (Math.random() < chance / 100) {
                        player.status = "Poison";
                    }
                    break;
                case "Sleep":
                    if (Math.random() < chance / 100) {
                        player.status = "Sleep";
                    }
                    break;
                case "Freeze":
                    if (Math.random() < chance / 100) {
                        player.status = "Freeze";
                    }
                    break;
                default:
                    if ("spec_defense" in what_effect) player.spec_defense *= what_effect.spec_defense;
                    if ("spec_attack" in what_effect) player.spec_attack *= what_effect.spec_attack;
                    if ("defense" in what_effect) player.defense *= what_effect.defense;
                    if ("attack" in what_effect) player.attack *= what_effect.attack;
                    if ("speed" in what_effect) player.speed *= what_effect.speed;
                    break;
            }
            break;
        case "heal":
            bot.hp += (bot.maxhp * bot.moves[num_move].power.maxhp);
            if (bot.hp > bot.maxhp) bot.hp = bot.maxhp;
            break;
        case "damage_statsP":
        case "statsP":
            switch (what_effect) {
                case "spec_defense":
                    bot.spec_defense *= what_effect.spec_defense;
                    break;
                case "spec_attack":
                    bot.spec_attack *= what_effect.spec_attack;
                    break;
                case "defense":
                    bot.defense *= what_effect.defense;
                    break;
                case "attack":
                    bot.attack *= what_effect.attack;
                    break;
                case "speed":
                    bot.speed *= what_effect.speed;
                    break;
            }
            break;
    }

    // Obliczanie obrażeń
    // if(chance=="damage" || chance=="damage_statsP" || chance=="damage_statsB" || chance=="damage_heal"){
        if (bot.moves[num_move].category == "Special") {
            const damage = Math.ceil(((bot.spec_attack * bot.moves[num_move].power * boost) / player.spec_defense));
            player.hp -= damage;
            if (effect == "damage_heal") {
                bot.hp += (damage * bot.moves[num_move].power.maxhp);
                if (bot.hp > bot.maxhp) bot.hp = bot.maxhp;
            }
        } else if (bot.moves[num_move].category == "Physical") {
            const damage = Math.ceil(((bot.attack * bot.moves[num_move].power * boost) / player.defense));
            player.hp -= damage;
            if (effect == "damage_heal") {
                bot.hp += (damage * bot.moves[num_move].power.maxhp);
                if (bot.hp > bot.maxhp) bot.hp = bot.maxhp;
            }
        }

    return player;
}


function write_pokemon_pl(pokemon) {
    document.getElementById("player_pokemon").innerHTML = `
        <span id="pokemon_info_pl_hp">hp: ${pokemon.hp}/${pokemon.maxhp}</span>
        <div id="health_player"><div id="health_bar_player"></div></div><br>
        <img src="../../pokemons_pictures/player/${pokemon.name}.png" width="150" height="150"/>
        <div id="pokemon_info_player">${pokemon.name}<br>(Type: ${pokemon.type1}${pokemon.type2 ? "/" + pokemon.type2 : ""})<br>
        attack: ${pokemon.attack}<br>
        defense: ${pokemon.defense}<br>
        spec.attack: ${pokemon.spec_attack}<br>
        spec.defense: ${pokemon.spec_defense}<br>
        speed: ${pokemon.speed}</div>
        <br /><br />
        `;    
}

function write_pokemon_bot(pokemon) {
    document.getElementById("bot_pokemon").innerHTML = `
    <div id="health_bot"><div id="health_bar_bot"></div></div><br>
    <img src="../../pokemons_pictures/enemy/${pokemon.name}.png" width="150" height="150"/>
    <div id="pokemon_info_bot">${pokemon.name} (Type: ${pokemon.type1}${pokemon.type2 ? "/" + pokemon.type2 : ""})
    <br><span id="pokemon_info_bot_hp">hp: ${pokemon.hp}/${pokemon.maxhp}</span></div>
    `;if(pokemon.status != null){
        document.getElementById("bot_pokemon").innerHTML += `<br>status = ${pokemon.status}`;
    }
}