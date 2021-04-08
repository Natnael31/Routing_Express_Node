const Ctrl = {
    greet:  (req, res) => res.send('Hi greetings from Ctrl->Routing'),
    showParams:  (req, res) => res.send({'Params': req.params})
};

module.exports = Ctrl;