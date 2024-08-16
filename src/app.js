const express = require('express');
const notificationRoutes = require('./routes/notification');

const app = express();

app.use(express.json());
app.use('/notification', notificationRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
