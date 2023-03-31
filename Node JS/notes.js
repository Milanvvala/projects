const express = require('express'); const router = express.Router();
const fetchuser = require('../middlewere/featchuser'); const Note = require('../modals/Note');
const { body, validationResult } = require('express-validator');

//R1 get all notes : post "/api/notesgetnotes" reequire login
router.get('/getnotes', fetchuser,
    async (req, res) => {
        try {
            const notes = await Note.find({ user: req.user.id });
            res.json(notes)
        } catch (e) {
            console.error(e.message);
            res.status(500).send(" esrrer occuerd ")
        }
    })

//R2 add note : post "/api/notes//addnote" reequire login
router.post('/addnote', fetchuser, [
    body('title', ' enter valid title ').isLength({ min: 3 }),
    body('desc', ' enter valid discription ').isLength({ min: 5 })],
    async (req, res) => {
        try {
            const { title, desc, tag } = req.body;
            //if err return bad request
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const note = new Note({ title, desc, tag, user: req.user.id })
            const save_N = await note.save();
            res.json(save_N)
        } 
        catch (e) { console.error(e.message); res.status(500).send(" esrrer occuerd (addnote)") }
    })

//R3 update note : post "/api/notes/updatenote/:id" reequire login
router.put('/updatenote/:id', fetchuser,
    async (req, res) => {
        try {
            const { title, desc, tag } = req.body;
            //if err return bad request
            const errors = validationResult(req);
            if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }
            //new note object 
            const new_N = {}
            if (title) { new_N.title = title }; if (desc) { new_N.desc = desc }; if (tag) { new_N.tag = tag }
            // find and update 
            let note = await Note.findById(req.params.id);
            if (!note) { res.status(404).send("not found") }
            if (note.user.toString() !== req.user.id) { return res.status(401).send("Not allowd"); }
            note = await Note.findByIdAndUpdate(req.params.id, { $set: new_N }, { new: true });
            res.json(note)
        } 
        catch (e) { console.error(e.message); res.status(500).send(" esrrer occuerd (addnote)") }
    })

//R4 delete note : delete "/api/notes/deletenote/:id" reequire login
router.delete('/deletenote/:id', fetchuser,
    async (req, res) => {
        try {
            //if err return bad request
            const errors = validationResult(req);
            if (!errors.isEmpty()) { return res.status(400).json({ errors: errors.array() }); }

            // find and delete 
            let note = await Note.findById(req.params.id);
            if (!note) { res.status(404).send("not found") }
            //allow delition on ly true user
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not allowd");
            }
            note = await Note.findByIdAndDelete(req.params.id);
            res.json({ "succcess": "note deleted", note: note })
        } catch (e) { console.error(e.message); res.status(500).send(" esrrer occuerd (deletenote)") }
    })

module.exports = router;