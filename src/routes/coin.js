const express = require('express');
const coinSchema = require('../models/coin');
const cors = require('cors');

const router = express.Router();
router.use(cors());

// create or coin
router.post("/coins", async (req, res) => {

    const { comment, symbol } = req.body
    const coinSaved = await coinSchema.findOne({ symbol });
    console.log('symbol:', symbol);
    console.log('coinSaved:', coinSaved);

    if(coinSaved) {
        const { _id } = coinSaved;
        coinSchema.updateOne({_id: _id}, {$set:{comment, symbol}})
        .then(data => {
            res.json(data);
            console.log('Coin updated:', data)
        })
        .catch(err => res.json({message: err}))
        
    }
    else {
        const coin = coinSchema(req.body);
        coin.save()
        .then(data => {
            res.json(data);
            console.log('Coin saved:', data)
        })
        .catch(err => res.json({message: err}))
    }
    
});

// get all coins
router.get("/coins", (req, res) => {
    coinSchema
    .find()
    .then(data => {
        res.json(data);
        console.log('Coins retrieved');
    })
    .catch(err => res.json({message: err}))
});

// get coin
router.get("/coins/:symbol", async(req, res) => {
    const { symbol } = req.params;

    coinSchema
    .findOne({symbol: symbol})
    .then(data => {
        res.json(data);
        console.log('Coin retrieved:', data)
    })
    .catch(err => res.json({message: err}))
});

// update coin
router.put("/coins/:id", (req, res) => {
    const { id } = req.params;
    const { comment, symbol } = req.body
    coinSchema
    .updateOne({_id: id}, {$set:{comment, symbol}})
    .then(data => {
        res.json(data);
        console.log('Coin updated:', data)
    })
    .catch(err => res.json({message: err}))
})


module.exports = router;

