var syncRequest = require('sync-request');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');

var typeModel = require('./models/type.js');
var moveModel = require('./models/move.js');
var familyModel = require('./models/family.js');
var pokemonModel = require('./models/pokemon.js');
var DB = require('./config/database.js');
mongoose.connect(DB.url);

baseUrl = 'http://pokemongo.gamepress.gg'

getTypeByName = function (types, name) {
    return types.filter(function (obj) {
        return obj.name === name;
    });
}

getTypes = function () {
    var url = baseUrl + '/pokemon-moves';
    var links = [];
    var types = [];
    request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            $('#sort-table h2').find('a').each(function () {
                var link = $(this).attr('href');
                linkPieces = link.split('/')
                var id = linkPieces[linkPieces.length - 1];
                if (!links[id]) {
                    links[id] = link;
                    var res = syncRequest('GET', baseUrl + link);
                    var _$ = cheerio.load(res.body);
                    typeName = _$(_$('.field--name-field-type-image img')[1]).attr('src').split('/')[5].split('.')[0];
                    types.push(new typeModel({
                        name: typeName
                    }));
                }
            });
            links.forEach(function (link) {
                request(baseUrl + link, function (error, response, html) {
                    if (!error && response.statusCode == 200) {
                        var $ = cheerio.load(html);
                        $('table tr').each(function () {
                            var td = $(this).find('td');
                            var sName = $($(td[2]).find('img')[1]).attr('src').split('/')[5].split('.')[0];
                            console.log('---------' + sName);
                            var sType = getTypeByName(types, sName);
                            console.log('    ');
                            console.log(sType);
                            if ($(td[0]).text() === '1.25x Damage') {
                                sType.strength = types[types.length - 1];
                            } else {
                                sType.weakness = types[types.length - 1];
                            }
                        })
                    }
                })
                
            });
        }
    });
}
getMoves = function () {
    var url = 'http://pokemongo.gamepress.gg/pokemon-moves';
    request(url, function (error, response, html) {
        if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            $('#sort-table').find('a').each(function () {
                var link = $(this).attr('href');
                if (link.match(/\/pokemon-move/))
                    console.log(link);
            });
        }
    });
}
getFamilies = function () {

}
getPokemons = function () {

}
getTypes();
//getMoves();