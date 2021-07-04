const { Application, genesisBlockDevnet, configDevnet } = require ('lisk-sdk');
const NewsRepotingTransaction = require('./transactions/newsRepotingTransaction');
const NewsEditingTransaction = require('./transactions/newsEditingTransaction');
const NewsPublishingTransaction = require('./transactions/newsPublishingTransaction');

configDevnet.app.label = 'media-miner-ledger';
configDevnet.components.storage.port = 5435;
configDevnet.components.storage.password = 'lisk';
configDevnet.components.storage.database = 'lisk_dev';
configDevnet.components.storage.host = 'localhost';
configDevnet.modules.http_api.access.public = true;

configDevnet.app.genesisConfig.BLOCK_TIME = 10;

const app = new Application(genesisBlockDevnet, configDevnet);

app.registerTransaction(NewsRepotingTransaction);
app.registerTransaction(NewsEditingTransaction);
app.registerTransaction(NewsPublishingTransaction);

app.run()
    .then(() => app.logger.info('App started...') )
    .catch(error => {
        console.error('Faced error in application', error);
        process.exit(1);
    });
