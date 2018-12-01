const mongoose = require('mongoose');

const sizeValidator = [
    function(val) {
        let testVal = val.trim();
        return (testVal.length > 0 && testVal.length <= 25);
    },
    'Please supply a value for {PATH}'
];

const teamMemberSchema = new mongoose.Schema({
    name: { type: String, required: true, validator: sizeValidator }
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);