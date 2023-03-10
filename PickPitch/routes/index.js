const loginRoute = require("./loginRoute");
const registerRoute = require("./registerRoute");
const homeRoute = require("./homeRoute");
const productRoute = require("./productRoute");
function mainRoutes (app){
    app.use("/", homeRoute);
    app.use("/login",loginRoute);
    app.use("/register", registerRoute);
    app.use("/logout", (req,res,next)=>{
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect('/');
        });
    })
    app.use("/product",productRoute);

}

module.exports = mainRoutes;