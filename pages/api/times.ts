import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { latitude, longitude } = req.body;
        const url = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&date=today`;
        const response = await axios.get(url);
    
        res.status(200).json(response.data.results);
    } catch (err) {
        res.status(500).send("Error finding sunrise and sunset time");
    }
}

export default handler;