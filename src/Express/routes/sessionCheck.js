module.exports = function (req, res, next) {
    //Do your session checking...
    const session = req.session;

    if (!session.userid) {
        console.log('User Logged Out - access denied');
        res.json({
            response: {
                success: false,
                message: "User is not logged in and does not have access to this portion of the website.",
                payload: {},
            }
        });
        // res.redirect('/');
    } else {
        console.log('User Logged In - access granted');
        next();
    }
};