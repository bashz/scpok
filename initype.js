var mongoose = require('mongoose');

var typeModel = require('./models/type.js');
var DB = require('./config/database.js');
mongoose.connect(DB.url);

var bug = new typeModel({
    name: 'bug'
});
var dark = new typeModel({
    name: 'dark'
});
var dragon = new typeModel({
    name: 'dragon'
});
var electric = new typeModel({
    name: 'electric'
});
var fairy = new typeModel({
    name: 'fairy'
});
var fight = new typeModel({
    name: 'fight'
});
var fire = new typeModel({
    name: 'fire'
});
var flying = new typeModel({
    name: 'flying'
});
var ghost = new typeModel({
    name: 'ghost'
});
var grass = new typeModel({
    name: 'grass'
});
var ground = new typeModel({
    name: 'ground'
});
var ice = new typeModel({
    name: 'ice'
});
var normal = new typeModel({
    name: 'normal'
});
var poison = new typeModel({
    name: 'poison'
});
var psychic = new typeModel({
    name: 'psychic'
});
var rock = new typeModel({
    name: 'rock'
});
var steel = new typeModel({
    name: 'steel'
});
var water = new typeModel({
    name: 'water'
});
bug.strength = [grass, psychic, dark];
bug.weakness = [fight, flying, poison, ghost, steel, fire, fairy];
dark.strength = [psychic, ghost];
dark.weakness = [fight, dark, fairy];
dragon.strength = [dragon];
dragon.weakness = [steel, fairy];
electric.strength = [water, flying];
electric.weakness = [grass, electric, dragon, ground];
fairy.strength = [fight, dragon, dark];
fairy.weakness = [fire, poison, steel];
fight.strength = [normal, ice, rock, dark, steel];
fight.weakness = [poison, flying, psychic, bug, fairy, ghost];
fire.strength = [grass, ice, bug, steel];
fire.weakness = [fire, water, rock, dragon];
flying.strength = [grass, fight, bug];
flying.weakness = [electric, rock, steel];
ghost.strength = [psychic, ghost];
ghost.weakness = [dark, normal];
grass.strength = [water, ground, rock];
grass.weakness = [fire, grass, poison, bug, dragon, steel, flying];
ground.strength = [fire, electric, poison, rock, steel];
ground.weakness = [grass, bug, flying];
ice.strength = [grass, ground, dragon, flying];
ice.weakness = [fire, water, ice, steel];
normal.strength = [];
normal.weakness = [rock, steel, ghost];
poison.strength = [grass, fairy];
poison.weakness = [poison, ground, rock, ghost, steel];
psychic.strength = [fight, poison];
psychic.weakness = [psychic, steel, dark];
rock.strength = [fire, ice, flying, bug];
rock.weakness = [fight, ground, steel];
steel.strength = [ice, rock, fairy];
steel.weakness = [fire, water, electric, steel];
water.strength = [fire, ground, rock];
water.weakness = [water, grass, dragon];

bug.save();
dark.save();
dragon.save();
electric.save();
fairy.save();
fight.save();
fire.save();
flying.save();
ghost.save();
grass.save();
ground.save();
ice.save();
normal.save();
poison.save();
psychic.save();
rock.save();
steel.save();
water.save();

console.log('Types initiated !')
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination');
    process.exit(0);
  });
});
