// @ts-nocheck
require('../src/main');

describe('Carbon.now()', (): void => {
    test('returns instance of Carbon', (): void => {
        expect(Carbon.now()).toBeInstanceOf(Carbon);
    });

    test('returns current date correctly', (): void => {
        const carbon: string = Carbon.now('UTC').format('n/j/Y, H:i:s');
        const date: string   = new Date().toLocaleString('en-Us', { timeZone: 'UTC', hour12: false });

        expect(carbon).toBe(date);
    });

    test('changes timezone correctly', (): void => {
        const carbon: string = Carbon.now('CET').format('n/j/Y, H:i:s');
        const date: string   = new Date().toLocaleString('en-Us', { timeZone: 'CET', hour12: false });

        expect(carbon).toBe(date);
    });
});

describe('Carbon.parse()', (): void => {
    test('returns instance of Carbon', (): void => {
        expect(Carbon.parse()).toBeInstanceOf(Carbon);
    });

    test('returns current date correctly', (): void => {
        const carbon: string = Carbon.parse(null, 'UTC').format('n/j/Y, H:i:s');
        const date: string   = new Date().toLocaleString('en-Us', { timeZone: 'UTC', hour12: false });

        expect(carbon).toBe(date);
    });

    test('changes timezone correctly', (): void => {
        const carbon: string = Carbon.parse(null, 'CET').format('n/j/Y, H:i:s');
        const date: string   = new Date().toLocaleString('en-Us', { timeZone: 'CET', hour12: false });

        expect(carbon).toBe(date);
    });
});

describe('Carbon.format()', (): void => {
    test('formats the date', (): void => {
        expect(Carbon.parse('13 September 2023, 12:00 PM').format('m/d/Y, H:i:s')).toEqual('09/13/2023, 12:00:00');
    });

    test('sets the timezone', (): void => {
        expect(Carbon.parse('13 September 2023, 12:00 PM', 'Europe/London').format('m/d/Y, H:i:s')).toEqual('09/13/2023, 11:00:00');
        expect(Carbon.parse('13 September 2023, 12:00 PM', 'America/Toronto').format('m/d/Y, H:i:s')).toEqual('09/13/2023, 06:00:00');
    });

    test('\'d\' returns the day of the month, 2 digits with leading zeros', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('d')).toEqual('29');
    });

    test('\'D\' returns a textual representation of a day, three letters', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('D')).toEqual('Thr');
    });

    test('\'j\' returns the day of the month without leading zeros', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('j')).toEqual('29');
    });

    test('\'l\' returns a full textual representation of the day of the week', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('l')).toEqual('Thursday');
    });

    test('\'N\' returns ISO 8601 numeric representation of the day of the week', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('N')).toEqual('4');
    });

    test('\'S\' returns English ordinal suffix for the day of the month, 2 characters', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('S')).toEqual('th');
    });

    test('\'w\' returns numeric representation of the day of the week', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('w')).toEqual('4');
    });

    test('\'z\' returns numeric representation of the day of the week', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('z')).toEqual('59');
    });

    test('\'W\' returns ISO 8601 week number of year, weeks starting on Monday', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('W')).toEqual('09');
    });

    test('\'F\' returns a full textual representation of a month', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('F')).toEqual('February');
    });

    test('\'m\' returns numeric representation of a month, with leading zeros', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('m')).toEqual('02');
    });

    test('\'M\' returns a short textual representation of a month, three letters', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('M')).toEqual('Feb');
    });

    test('\'n\' returns numeric representation of a month, without leading zeros', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('n')).toEqual('2');
    });

    test('\'t\' returns number of days in the given month', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('t')).toEqual('29');
    });

    test('\'L\' returns whether it\'s a leap year', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('L')).toEqual('1');
    });

    test('\'o\' returns ISO 8601 week-numbering year', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('o')).toEqual('2024');
    });

    test('\'X\' returns an expanded full numeric representation of a year', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('X')).toEqual('+2024');
    });

    test('\'x\' returns an expanded full numeric representation if required', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('x')).toEqual('2024');
    });

    test('\'Y\' returns a full numeric representation of a year', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('Y')).toEqual('2024');
    });

    test('\'y\' returns a two-digit representation of a year', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('y')).toEqual('24');
    });

    test('\'a\' returns lowercase Ante meridiem and Post meridiem', (): void => {
        expect(Carbon.parse('2024-02-29 08:00:00', 'CET').format('a')).toEqual('am');
    });

    test('\'A\' returns uppercase Ante meridiem and Post meridiem', (): void => {
        expect(Carbon.parse('2024-02-29 20:00:00', 'CET').format('A')).toEqual('PM');
    });

    test('\'B\' returns Swatch Internet time', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00', 'CET').format('B')).toEqual('500');
    });

    test('\'g\' returns 12-hour format of an hour without leading zeros', (): void => {
        expect(Carbon.parse('2024-02-29 08:00:00', 'CET').format('g')).toEqual('8');
    });

    test('\'G\' returns 24-hour format of an hour without leading zeros', (): void => {
        expect(Carbon.parse('2024-02-29 20:00:00', 'CET').format('G')).toEqual('20');
    });

    test('\'h\' returns 12-hour format of an hour with leading zeros', (): void => {
        expect(Carbon.parse('2024-02-29 08:00:00', 'CET').format('h')).toEqual('08');
    });

    test('\'H\' returns 24-hour format of an hour with leading zeros', (): void => {
        expect(Carbon.parse('2024-02-29 20:00:00', 'CET').format('H')).toEqual('20');
    });

    test('\'i\' returns minutes with leading zeros', (): void => {
        expect(Carbon.parse('2024-02-29 08:09:00', 'CET').format('i')).toEqual('09');
    });

    test('\'s\' returns seconds with leading zeros', (): void => {
        expect(Carbon.parse('2024-02-29 08:09:07', 'CET').format('s')).toEqual('07');
    });

    test('\'u\' returns microseconds', (): void => {
        expect(() => Carbon.parse('2024-02-29 08:09:07.654321', 'CET').format('u')).toThrow('Microseconds are not supported at the moment.'); // Disabled temporarily
    });

    test('\'v\' returns milliseconds', (): void => {
        expect(Carbon.parse('2024-02-29 08:09:07.654', 'CET').format('v')).toEqual('654');
    });

    test('\'e\' returns timezone identifier', (): void => {
        expect(Carbon.parse('2024-02-29 08:09:07', 'CET').format('e')).toMatch(/^(?:GMT|UTC|[A-Za-z\/_]+(?:[+\-][0-9]+)?)$/);
    });

    test('\'I\' returns whether or not the date is in daylight saving time', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('I')).toMatch(/^[01]$/);
    });

    test('\'O\' returns difference to Greenwich time (GMT) without colon between hours and minutes', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('O')).toMatch(/^[+\-]\d{4}$/);
    });

    test('\'P\' returns difference to Greenwich time (GMT) with colon between hours and minutes', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('P')).toMatch(/^[+\-]\d{2}:\d{2}$/);
    });

    test('\'p\' returns the same as P, but returns Z instead of +00:00', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('p')).toMatch(/^[+\-]\d{2}:\d{2}$/);
    });

    test('\'T\' returns timezone abbreviation, if known; otherwise the GMT offset', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('T')).toMatch(/^[A-Za-z]+|[+\-]\d{2}:\d{2}$/);
    });

    test('\'Z\' returns timezone offset in seconds', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('Z')).toMatch(/([+\-]?\d+)/);
    });

    test('\'c\' returns ISO 8601 date', (): void => {
        expect(Carbon.parse('2024-02-29 08:09:07', 'CET').format('c')).toEqual('2024-02-29T08:09:07+01:00');
    });

    test('\'r\' returns seconds since the Unix Epoch', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('r')).toEqual('Thr, 29 Feb 2024 01:00:00 +0100');
    });

    test('\'U\' returns RFC 2822/RFC 5322 formatted date', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('U')).toMatch(/^-?\d+$/);
    });

    test('returns "Invalid Date" for incorrect Date/Time string', (): void => {
        expect(Carbon.parse('This is not a valid date').toString()).toEqual('Invalid Date');
    });
});