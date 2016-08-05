var mongoose = require('mongoose');


var typeModel = require('./models/type.js');
var moveModel = require('./models/move.js');
var familyModel = require('./models/family.js');
var pokemonModel = require('./models/pokemon.js');
var DB = require('./config/database.js');
mongoose.connect(DB.url);

var basefamily = new familyModel({
    id: 1,
    pokemons: [1,2]
});
basefamily.save();
var baseNType = new typeModel({
    name: 't'
});

var baseWType = new typeModel({
    name: 'w',
    strength: [baseNType]
});

var baseSType = new typeModel({
    name: 's',
    strength: [baseNType],
    weakness: [baseWType]
});
baseNType.strength = [baseSType];
baseNType.weakness = [baseWType];
baseWType.weakness = [baseSType];
baseNType.save();
baseWType.save();
baseSType.save();
var baseMove1 = new moveModel({
    id: 1,
    charge: 0,
    name: 'mss',
    type: baseNType,
    charges: 1,
    dmg: 1,
    cd: 1,
    eps: 1,
    dodge: 1,
    ddps: 1
});
baseMove1.save();
var baseMove2 = new moveModel({
    id: 2,
    charge: 1,
    name: 'mcs',
    type: baseSType,
    charges: 2,
    dmg: 2,
    cd: 2,
    eps: 2,
    dodge: 2,
    ddps: 2
});
baseMove2.save();
var baseMove3 = new moveModel({
    id: 3,
    charge: 1,
    name: 'mcss',
    type: baseSType,
    charges: 3,
    dmg: 3,
    cd: 3,
    eps: 3,
    dodge: 3,
    ddps: 3
});
baseMove3.save();

var pokemon = new pokemonModel({
    id: 1,
    name: 'String',
    nameFr: 'String',
    maxCP: 1,
    baseAtk: 1,
    baseDef: 1,
    baseStm: 1,
    captureRate: 1,
    fleeRate: 1,
    candiesRequired: 1,
    eggDistance: 1,
    possibleMove: [baseMove1],
    possibleCharge: [baseMove2, baseMove3],
    family: basefamily,
    types: [baseNType, baseSType],
    weight: 1,
    height: 1
})
pokemon.save();