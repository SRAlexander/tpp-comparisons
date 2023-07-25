const { recursiveIdScan } = require('./raw-compare.js');

describe('recursiveIdScan', () => {
    it('does nothing to a simple entry', () => {
        const entry = {
            'score': '147'
        };
        expect(recursiveIdScan(entry, [], [], "", "")).toEqual(entry);
    });
});