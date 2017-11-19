import app from '../index'

var whitelist = ['http://localhost:8080', 'http://mwolfhoffman.com','https://failerk.github.io/'];
export const corsOptions = {
	origin: function (origin, callback) {
		var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true
};

export const defaultErrorHandler = (err, req, res, next) => {
    let error;
    console.log('Error Caught:')
    console.log(err);
    if (res.headersSent) {
        return next(err);
    }
    let env = process.env.NODE_ENV;
    if (env !== 'production') {
        error = {
            ok: false,
            error: err.message,
            stack: err
        }
    } else {
        error = {
            ok: false,
            error: err.message,
        }
    }
    res.status(400).send(error);
}
