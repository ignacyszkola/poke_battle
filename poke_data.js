const types = ["Normal", "Fire", "Water", "Electric", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"];
// for example types[normal_type];
const normal_type =   0;
const fire_type =     1;
const water_type =    2;
const electric_type = 3;
const grass_type =    4;
const ice_type =      5;
const fighting_type = 6;
const poison_type =   7;
const ground_type =   8;
const flying_type =   9;
const psychic_type = 10;
const bug_type =     11;
const rock_type =    12;
const ghost_type =   13;
const dragon_type =  14;
const dark_type =    15;
const steel_type =   16;
const fairy_type =   17;

class Pokemon {
    constructor(name, hp, attack, defense, spec_attack, spec_defense, speed, maxhp, maxattack, maxdefense, maxspec_defense, maxspec_attack, maxspeed, accuracy, maxaccuracy, type1, type2 = null, status = null) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.spec_attack = spec_attack;
        this.spec_defense = spec_defense;
        this.speed = speed;
        this.maxattack = maxattack;
        this.maxdefense = maxdefense;
        this.maxspec_attack = maxspec_attack;
        this.maxspec_defense = maxspec_defense;
        this.maxspeed = maxspeed;
        this.maxhp = maxhp;
        this.accuracy = accuracy;
        this.maxaccuracy = maxaccuracy;
        this.type1 = type1;
        this.type2 = type2;
        this.status = status;
        this.moves = []; // Moves list for pokemon
    }

    addMove(move) {
        this.moves.push(move);
    }
}
//188
// 256 * 90 / 176
// 256 * 90 * 2 / 246
//Math.floor((Math.random() * 20) + 40)
// creating pokemons, their stats and types: PLAYER
const pokemons_pl = [
    new Pokemon("Houndoom",   291, 216, 136, 256, 196, 226, 291, 216, 136, 256, 196, 226, 100, 100, types[fire_type], types[dark_type]),
    new Pokemon("Feraligatr", 311, 246, 236, 194, 202, 192, 311, 246, 236, 194, 202, 192, 100, 100, types[water_type]),
    new Pokemon("Roserade",   261, 176, 166, 286, 246, 2160, 261, 176, 166, 286, 246, 216, 100, 100, types[grass_type], types[poison_type]),
    new Pokemon("Pidgeot",    307, 196, 186, 176, 176, 238, 307, 196, 186, 176, 176, 238, 100, 100, types[normal_type], types[flying_type])
];

// creating pokemons, their stats and types: BOT
const pokemons_bot = [
    new Pokemon("Houndoom",   291, 216, 136, 256, 196, 226, 291, 216, 136, 256, 196, 226, 100, 100,types[fire_type], types[dark_type]),
    new Pokemon("Feraligatr", 311, 246, 236, 194, 202, 192, 311, 246, 236, 194, 202, 192, 100, 100,types[water_type]),
    new Pokemon("Roserade",   261, 176, 166, 286, 246, 216, 261, 176, 166, 286, 246, 216, 100, 100,types[grass_type], types[poison_type]),
    new Pokemon("Pidgeot",    307, 196, 186, 176, 176, 238, 307, 196, 186, 176, 176, 238, 100, 100,types[normal_type], types[flying_type])
];

class Moves {
    constructor(name, type, power, accuracy, priority, category, PP, effect, what_effect = null, chance = null) {
        this.name = name;
        this.type = type;
        this.power = power;
        this.accuracy = accuracy;
        this.priority = priority;
        this.category = category; // "Physical" lub "Special"
        this.PP = PP;
        this.effect = effect; // Attack with effect like calm mind or power up punch
        this.what_effect = what_effect;
        this.chance = chance;
    }
}


// statsP -> stats player,  statsB -> stats bot
//creating moves for pokemons: name, type, power, accuracy, priority, category of attack, PP's move
const moves = [
    //Houndoom
    new Moves("Flamethrower",types[fire_type],     90, 100, 0, "Special",  15, "damage"),
    new Moves("Crunch",      types[dark_type],     80, 100, 0, "Physical", 10, "damage"),
    new Moves("Sucker Punch",types[dark_type],     70, 100, 1, "Physical", 5,  "damage"),
    new Moves("Thunder Fang",types[electric_type], 65,  95, 0, "Physical", 15, "damage_statsB", {name:"Paralysis", number:1}, 10),//10% paralize
    
    // Feraligatr
    new Moves("Waterfall",   types[water_type],    80,                      100, 0, "Physical", 15, "damage"),
    new Moves("Dragon Dance",types[dragon_type],   {attack:0.5, speed:0.5},   0, 0, "Status",   20, "statsP"),//"Boosts Attack and Speed by 1 stage"
    new Moves("Ice Fang",    types[ice_type],      65,                       95, 0, "Physical", 10, "damage_statsB", {name:"Freeze", number:4}, 10),// "May freeze the target"
    new Moves("Crunch",      types[dark_type],     80,                      100, 0, "Physical", 10, "damage"),

    // Roserade
    new Moves("Sludge Bomb", types[poison_type],   90,                 100, 0, "Special", 10, "damage_statsB", {name:"Poison", number:3}, 30),//"May poison the target"
    new Moves("Energy Ball", types[grass_type],    90,                 100, 0, "Special", 10, "damage_statsB", {spec_defense:0.67},       10),// "May lower the target's Special Defense"
    new Moves("Sleep Powder",types[grass_type],    0,                  75,  0, "Status",  15, "statsB",        {name:"Sleep", number:5},  100),// "May opponent sleppy"
    new Moves("Giga Drain",  types[grass_type],    {hp:75, maxhp:0.5}, 100, 0, "Special", 10, "damage_heal"),//"Restores 50% of damage dealt"

    // Pidgeot
    new Moves("Hurricane",   types[flying_type],   110,          70,   0, "Special",  5,  "damage"),
    new Moves("Agility",     types[normal_type],   {speed:1},     0,   0, "Status",   30, "statsP"),// "Increases Speed by 2 stages"
    new Moves("Quick Attack",types[normal_type],   40,          100,   1, "Physical", 30, "damage"),
    new Moves("Roost",       types[flying_type],   {maxhp:0.5},   0,   0, "Status",   10, "heal")// "Restores half of the user's HP"
];

class Status{
    constructor(number, name, type, damage, rounds, stats = null) {
        this.number = number;
        this.name = name;
        this.type = type,
        this.damage = damage;
        this.rounds = rounds; // how many rounds takes to take down status
        this.stats = stats; // takes down pokemon's stat
    }
}

const statuses =[
    new Status(1,"Paralysis", types[electric_type],          0, 25, {accuracy: 0.75, speed: 0.5}),
    new Status(2,"Burn",      types[fire_type],  {maxhp: 1/16}, -1, {attack: 0.5}),
    new Status(3,"Poison",    types[poison_type], {maxhp: 1/8}, -1),
    new Status(4,"Freeze",    types[ice_type],               0, 20),
    new Status(5,"Sleep",     types[normal_type],            0, 33)
];

// player moves
// Houndoom moves update
pokemons_pl[0].addMove(moves[0]); // Flamethrower
pokemons_pl[0].addMove(moves[1]); // Crunch
pokemons_pl[0].addMove(moves[2]); // Sucker Punch
pokemons_pl[0].addMove(moves[3]); // Thunder Fang

// Feraligatr moves update
pokemons_pl[1].addMove(moves[4]); // Waterfall
pokemons_pl[1].addMove(moves[5]); // Dragon Dance
pokemons_pl[1].addMove(moves[6]); // Ice Fang
pokemons_pl[1].addMove(moves[7]); // Crunch

// Roserade moves update
pokemons_pl[2].addMove(moves[8]); // Sludge Bomb
pokemons_pl[2].addMove(moves[9]); // Energy Ball
pokemons_pl[2].addMove(moves[10]); // Toxic Spikes
pokemons_pl[2].addMove(moves[11]); // Giga Drain

// Pidgeot moves update
pokemons_pl[3].addMove(moves[12]); // Hurricane
pokemons_pl[3].addMove(moves[13]); // Agility
pokemons_pl[3].addMove(moves[14]); // Quick Attack
pokemons_pl[3].addMove(moves[15]); // Roost


// bots moves
// Houndoom moves update
pokemons_bot[0].addMove(moves[0]); // Flamethrower
pokemons_bot[0].addMove(moves[1]); // Crunch
pokemons_bot[0].addMove(moves[2]); // Sucker Punch
pokemons_bot[0].addMove(moves[3]); // Thunder Fang

// Feraligatr moves update
pokemons_bot[1].addMove(moves[4]); // Waterfall
pokemons_bot[1].addMove(moves[5]); // Dragon Dance
pokemons_bot[1].addMove(moves[6]); // Ice Fang
pokemons_bot[1].addMove(moves[7]); // Crunch

// Roserade moves update
pokemons_bot[2].addMove(moves[8]); // Sludge Bomb
pokemons_bot[2].addMove(moves[9]); // Energy Ball
pokemons_bot[2].addMove(moves[10]); // Toxic Spikes
pokemons_bot[2].addMove(moves[11]); // Giga Drain

// Pidgeot moves update
pokemons_bot[3].addMove(moves[12]); // Hurricane
pokemons_bot[3].addMove(moves[13]); // Agility
pokemons_bot[3].addMove(moves[14]); // Quick Attack
pokemons_bot[3].addMove(moves[15]); // Roost