const TeamMember = require('../../models/teamMember');

module.exports = function(router) { 
    // GET: team members
    router.get('/team', function(req, res) {
        TeamMember.find()
            .sort({ 'name': 1 })
            .exec()
            .then(docs => res.status(200)
                .json(docs))
            .catch(err => res.status(500)
                .json({
                    message: 'Error finding team members',
                    error: err
                })
            );
    });

    // POST: Get new meeting note document
    router.post('/team', (req, res) => {
        let member = new TeamMember(req.body);
        member.save((err, note) => {
            if(err) {
                return res.status(400).json(err);
            }
            return res.status(200).json(member);
        });
    });
};