const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
var Pokedex = [];

module.exports = {
    pokedex: () => {
        fs.createReadStream(path.join(path.dirname('pokedex_gen_8.csv'), 'pokedex_gen_8.csv'))
        .pipe(csv.parse({ headers: true }))
        .on('data', (row) => {
            //console.log(row);
            Pokedex.push({'index': row['ID No.'], 'name': row['Name'],type: [row['Type 1'], row['Type 2']]});
        })
        .on('end', () => {
            //console.log('CSV file successfully processed');
        })

        return Pokedex;
    }
}