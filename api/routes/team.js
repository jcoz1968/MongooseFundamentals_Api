const TeamMember = require('../../models/teamMember');

module.exports = function(router) { 
    // GET: the 12 newest stand-up meeting notes
    router.get('/team', function(req, res) {

    });

    // POST: Get new meeting note document
    router.post('/teamMember', (req, res) => {
        let member = new TeamMember(req.body);
        member.save((err, note) => {
            if(err) {
                return res.status(400).json(err);
            }
            return res.status(200).json(member);
        });
    });
};