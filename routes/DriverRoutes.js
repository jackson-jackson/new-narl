const router = require("express").Router();
const Driver = require('../models/Driver');

router.post('/api/CreateNewDriver', async (req, res) => {
    const newDriver = await Driver.create(req.body);
    res.send(newDriver);
});

router.get('/api/getAllDrivers', async (req, res) => {
    const allDrivers = await Driver.find({});
    res.send(allDrivers);
})

router.put('/api/setDriverStats/:driverID', async (req, res) => {
    const stat = req.body.stat;
    const value = req.body.value;
    switch (stat) {
        case 'points':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $set: { points: value } }, { new: true });
            break;
        case 'wins':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $set: { wins: value } }, { new: true });
            break;
        case 'fastestLaps':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $set: { fastestLaps: value } }, { new: true });
            break;
        case 'careerLaps':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $set: { careerLaps: value } }, { new: true });
            break;
        case 'careerPoints':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $set: { careerPoints: value } }, { new: true });
            break;
        case 'careerWins':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $set: { careerWins: value } }, { new: true });
            break;
        case 'careerFastestLaps':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $set: { careerFastestLaps: value } }, { new: true });
            break;
        case 'isActive':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $set: { isActive: value } }, { new: true });
            console.log(value);
            break;
        case 'teamHistory':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $push: { teamHistory: value } }, { new: true });
            break;
        case 'name':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $set: { name: value } }, { new: true });
            break;
        case 'wcc':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $set: { wcc: value } }, { new: true });
            break;
        case 'wdc':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $set: { wdc: value } }, { new: true });
            break;
    }

    res.send(updatedDriver);
});

router.put('/api/IncDriverStats/:driverID', async (req, res) => {
    const stat = req.body.stat;
    const value = req.body.value;
    switch (stat) {
        case 'points':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $inc: { points: value } }, { new: true });
            break;
        case 'wins':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $inc: { wins: value } }, { new: true });
            break;
        case 'fastestLaps':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $inc: { fastestLaps: value } }, { new: true });
            break;
        case 'careerLaps':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $inc: { careerLaps: value } }, { new: true });
            break;
        case 'careerPoints':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $inc: { careerPoints: value } }, { new: true });
            break;
        case 'careerWins':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $inc: { careerWins: value } }, { new: true });
            break;
        case 'careerFastestLaps':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $inc: { careerFastestLaps: value } }, { new: true });
            break;
        case 'wcc':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $inc: { wcc: value } }, { new: true });
            break;
        case 'wdc':
            updatedDriver = await Driver.findOneAndUpdate({ _id: req.params.driverID }, { $inc: { wdc: value } }, { new: true });
            break;

    }

    res.send(updatedDriver);
});


module.exports = router;