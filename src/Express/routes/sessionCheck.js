module.exports = function (req, res, next) {
    //Do your session checking...
    const session = req.session;

    // res.redirect('/');

    // console.log('session check', session);

    next();
};