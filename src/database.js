const mongoose = require('mongoose');
const {database} = require('./keys');

mongoose.connect(database.URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('[DATABASE] connected'))
    .catch(err => console.error('[DATABASE] error:',err));