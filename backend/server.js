import express from "express"
// module works asynchronously but require as synchronous

const app  = express()

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.get('/api/v1/jokes', (req, res) => { 
        const jokes = [
            {
                "id": 1,
                "joke": "Why don't scientists trust atoms? Because they make up everything!"
            },
            {
                "id": 2,
                "joke": "What do you call a lazy kangaroo? Pouch potato."
            },
            {
                "id": 3,
                "joke": "Why did the scarecrow win an award? Because he was outstanding in his field!"
            },
            {
                "id": 4,
                "joke": "What do you call a fish with no eyes? Fsh."
            },
                {
                "id": 5,
                "joke": "How do you organize a space party? You planet!"
            }
        ];
        res.send(jokes)
    })


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})