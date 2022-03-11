require('../connections/mongoose.js');
const User = require('../models/User.js');

const LoginController = () => {

    /* Login ---------------------------*/
    const login = (req,res) => {
        console.log('User: Log In');

        const user = req.body;

        User.findOne({"username": user.username},(err, dbUser) => {
            if (err) throw err;

            if (dbUser) {
                // test a matching password
                dbUser.comparePassword(user.password, dbUser.password, (err, isMatch) => {
                    if (err) throw err;
                    if (isMatch) {
                        res.json({
                            access: 'granted',
                            user: user,
                            isMatch: isMatch,
                        });
                    } else {
                        res.json({
                            access: 'denied',
                            user: user,
                            isMatch: isMatch,
                        });
                    }
                });
            } else {
                res.json('Unable to Locate User in our records.');
            }
        });
    };

    return {
        login: login
    }
}

module.exports = LoginController();