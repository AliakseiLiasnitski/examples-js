const newman = require('newman');

const SKIP_RP_FLAG = '--skip-rp';
const hasSkipRPFlag = process.argv.indexOf(SKIP_RP_FLAG) !== -1;

hasSkipRPFlag
  ? newman.run({ collection: './collections/Example.postman_collection.json', reporters: 'cli' })
  : newman.run(
      {
        collection: './collections/Example.postman_collection.json',
        reporters: '@reportportal/agent-js-postman',
        reporter: {
          '@reportportal/agent-js-postman': {
            endpoint: process.env.RP_ENDPOINT || 'http://your-instance.com:8080/api/v1',
            apiKey: process.env.RP_API_KEY || '00000000-0000-0000-0000-000000000000',
            launch: process.env.RP_LAUNCH_NAME || 'LAUNCH_NAME',
            project: process.env.RP_PROJECT_NAME || 'PROJECT_NAME',
            description: 'PROJECT_DESCRIPTION',
            attributes: [
              {
                key: 'attributeKey',
                value: 'attrbuteValue',
              },
              {
                value: 'secondAttrbuteValue',
              },
            ],
            debug: true,
          },
        },
      },
      function (err) {
        if (err) {
          throw err;
        }
      },
    );
