import axios from 'axios';

async function handler(req, res) {
    try {
        const url = `https://api.sunrise-sunset.org/json?lat=52&lng=1&date=today`;
        const result = await axios.get(url);
    
        console.log(result.data);
    
        res.status(200).json(result.data);

    } catch (err) {
        console.log(err);
    }
}

export default handler;