var jwt = require('jsonwebtoken');
const jwt_S = 'thisismilan';

const fetchuser = (req,res,next) => {
    const token  = req.header('auth-token');
    if(!token){
        res.status(401).send({error:'wroung auth token(no token)'})
    }
    try {
    const data = jwt.verify(token,jwt_S);
    req.user = data.user ;
    next();
    } catch (error) {
        res.status(401).send({error:'wroung auth token (e)'})
    }
}

module.exports = fetchuser;