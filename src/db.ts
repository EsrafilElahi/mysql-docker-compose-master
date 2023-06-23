import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('test_db', 'root', 'any_password', {
  host: 'mysql-docker',
  dialect: 'mysql',
});

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
