const proxy = require("http-proxy-middleware")


module.exports = function(app) {
    app.use(
        proxy("/walls/saveComments", {
            target: "127.0.0.1:5000/",
            secure: false,
            changeOrigin: true
        })
    );
};