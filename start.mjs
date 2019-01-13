import { app } from './app.mjs';
import dotenv from 'dotenv';

dotenv.config();

const server = app.listen(process.env.SERVER_PORT, () => {
    console.log(`Express is running on port ${server.address().port}`);
});