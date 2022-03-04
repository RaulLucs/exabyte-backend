const { sequelize } = require('./config/sequelize.config');
const userRoutes = require('./routes/user.routes');
const bulidingRoutes = require('./routes/building.routes');
const officeRoutes = require('./routes/office.routes');
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true });
//sequelize.sync();
userRoutes(app);
bulidingRoutes(app);
officeRoutes(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
