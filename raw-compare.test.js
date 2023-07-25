const { recursiveIdScan } = require('./raw-compare.js');

describe('recursiveIdScan', () => {
    it('does nothing to a simple entry', () => {
        const entry = {
            'score': '147'
        };
        expect(recursiveIdScan(entry, [], [], "", "")).toEqual(entry);
    });

    it('converts date fields to be in UTC', () => {
        const entry = {
            'date': '2000-01-01T03:00:00+03:00',
            'authoredOn': '2000-01-01T02:30:00+02:30',
            'issued': '1999-12-31T21:00:00-03:00'
        };

        expect(recursiveIdScan(entry, [], [], "", "")).toEqual({
            'date': '2000-01-01T00:00:00.000Z',
            'authoredOn': '2000-01-01T00:00:00.000Z',
            'issued': '2000-01-01T00:00:00.000Z'
        });
    })
});