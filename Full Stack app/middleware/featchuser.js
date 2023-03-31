const jwt = require('jsonwebtoken'); const jwtSignature = 'jwtSting'; // store orignal in .env file

const fetchuser = (req, res, next) => {
    //adding jwt token in request header
    const jwtToken = req.header('auth-token');
    if (!jwtToken) {
        res.status(401).send({ error: 'auth-token required' })
    }
    try {
        //verifying token with signature
        const payload = jwt.verify(jwtToken, jwtSignature);

        //sending request with data // todo
        req.user = payload.user;
        next()
    } catch (error) {
        res.status(401).send({ error: 'wroung auth-token' })
    }
}

module.exports = fetchuser;