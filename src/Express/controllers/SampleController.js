const sampleData = require('./sampleData.json');

const SampleController = () => {

    const getSample = (req,res) => {
        res.json(sampleData);
        console.log('Retrieved Sample Data');
    }

    return {
        getSample: getSample
    }
}


module.exports = SampleController();