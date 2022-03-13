module.exports = function (req, res, next) {
    //Do your session checking...
    const session = req.session;

    if (!session.userid) {
        console.log('User Logged Out - access denied');
        res.json({ authenticated: false });
        // res.redirect('/');
    } else {
        console.log('User Logged In - access granted');
        next();
    }
};