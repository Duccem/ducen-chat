const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    name: {type:String},
    avatar: {type:String}
});

module.exports = model('User',userSchema);