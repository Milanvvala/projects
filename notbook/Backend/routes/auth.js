const express = require('express');
const User = require('../modals/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
// const { Schema } = 'mongoose';
var bcrypt = require('bcryptjs');
const jwt_S = 'thisismilan';
var jwt = require('jsonwebtoken');
const fetchuser = require('../middlewere/featchuser');

//create a user using : post "/api/auth/createuser" dosent reequire auth

router.post('/createuser', [
    body('email', ' enter valid email ').isEmail(),
    body('name', ' enter valid name ').isLength({ min: 3 }),
    body('psw', ' enter valid password ').isLength({ min: 5 }),
], async (req, res) => {
    //if err return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // res.json("auth")
    console.log(req.body);
    // const user = User(req.body);
    // user.save()
    //check user wxist\
    try {
        let user = await User.findOne({ email: req.body.email });
        let success = false;
        if (user) {
            return res.status(400).json({success, err: "sorry user exist" })
        }
        const salt = await bcrypt.genSaltSync(10);
        const sPsw = await bcrypt.hash(req.body.psw, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            psw: sPsw,
        })
        const data = { user: { id: user.id } }
        var token = jwt.sign(data, jwt_S);
        success = true
        res.json({ success, token });
        // res.json(user);
        //   res.send(req.body);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).send(" esrrer occuerd ")
    }
})

//authenticate user through post "/api/auth/login" no login required
router.post('/login', [
    body('email', ' enter valid email ').isEmail(),
    body('psw', ' password can notbe blanck ').exists(),
], async (req, res) => {
    //if err return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, psw } = req.body;
    try {
        let user = await User.findOne({ email });
        let success = false;
        if (!user) {
            return res.status(400).json({ err: "wroung credencials(email)" })
        }
        const passCo = await bcrypt.compare(psw, user.psw);
        if (!passCo) {
            success = false
            return res.status(400).json({ success, err: "wroung credencials(password)" })
        }
        const data = { user: { id: user.id } }
        var token = jwt.sign(data, jwt_S);
        success = true
        res.json({ success, token });

    }
    catch (e) {
        console.error(e.message);
        res.status(500).send("server esrrer occuerd ");
    }
})

//rought 3 : userdetail /api/auth/getuser login required
router.post('/getuser', fetchuser,
    async (req, res) => {
        try {
            userid = req.user.id;
            const user = await User.findById(userid).select("-psw")
            res.send(user);
        } catch (error) {
            console.error(e.message);
            res.status(500).send("server esrrer occuerd ");
        }
    })


module.exports = router;

//   .then(user => res.json(user))
    //   .catch(e => {console.log(e.mass)
    //     res.json({e:'please enter unique value for email'
    //     ,massage:e.mass})})