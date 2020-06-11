/*
 *  Copyright 2020 EPAM Systems
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const PublicReportingAPI = require('@reportportal/agent-js-jasmine/lib/publicReportingAPI');

describe('attributes for suite/test', function() {
    PublicReportingAPI.addAttributes([{
        key: 'suiteKeyOne',
        value: 'suiteValueOne',
    }], 'test the attributes for suites/tests');
    PublicReportingAPI.addAttributes([{
        key: 'suiteKeyTwo',
        value: 'suiteValueTwo',
    }], 'test the attributes for suites/tests');

    it('should have the correct attributes', function() {
        PublicReportingAPI.addAttributes([{
            key: 'testKey',
            value: 'testValue'
        }]);
        expect(true).toBe(true);
    });
});