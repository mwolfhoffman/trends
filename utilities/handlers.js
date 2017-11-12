import app from '../index'

let corsHandler=(req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
}

let defaultErrorHandler = (err, req, res, next) => {
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


export {
    corsHandler,
    defaultErrorHandler
}