const connectDB = require('./database/index.js');
const dotenv = require('dotenv');
const app = require('./index.js');

// Load env vars
dotenv.config({ path: './.env' });

// Connect to database
connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});