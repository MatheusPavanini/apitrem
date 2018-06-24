const configFile = require('./env.json');

let config;

const configProductionEnvironment = (config) => {
    config.MONGO_URI = process.env.MONGO_URI;
    config.PORT = process.env.PORT;
}

switch(process.env.NODE_ENV) {
    case 'test':
        config = configFile['test'];
        break;

    case 'production':
        config = configFile['production'];
        configProductionEnvironment(config);
        break;

    default:
        config = configFile['development'];
        break;
}

module.exports = config;
