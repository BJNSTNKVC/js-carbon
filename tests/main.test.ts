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

describe('Carbon.toDateString()', (): void => {
    test('formats the instance as date correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toDateString()).toBe('2024-03-01');
    });
});

describe('Carbon.toFormattedDateString()', (): void => {
    test('formats the instance as formatted date correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toFormattedDateString()).toBe('Mar 1, 2024');
    });
});

describe('Carbon.toFormattedDayDateString()', (): void => {
    test('formats the instance with the day and a formatted date correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toFormattedDayDateString()).toBe('Fri, Mar 1, 2024');
    });
});

describe('Carbon.toTimeString()', (): void => {
    test('formats the instance as time with precision "microsecond" correctly', (): void => {
        expect(() => Carbon.parse('2024-03-01 12:45:00', 'CET').toTimeString('microsecond')).toThrow();
    });

    test('formats the instance as time with precision "millisecond" correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toTimeString('millisecond')).toBe('12:45:00.000');
    });

    test('formats the instance as time with precision "second" correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toTimeString()).toBe('12:45:00');
    });

    test('formats the instance as time with precision "minute" correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toTimeString('minute')).toBe('12:45');
    });
});

describe('Carbon.toDateTimeString()', (): void => {
    test('formats the instance as date and time with precision "microsecond" correctly', (): void => {
        expect(() => Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeString('microsecond')).toThrow();
    });

    test('formats the instance as date and time with precision "millisecond" correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeString('millisecond')).toBe('2024-03-01 12:45:00.000');
    });

    test('formats the instance as date and time with precision "second" correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeString()).toBe('2024-03-01 12:45:00');
    });

    test('formats the instance as date and time with precision "minute" correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeString('minute')).toBe('2024-03-01 12:45');
    });
});

describe('Carbon.toDateTimeLocalString()', (): void => {
    test('formats the instance as date and time T-separated with no timezone with precision "microsecond" correctly', (): void => {
        expect(() => Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeLocalString('microsecond')).toThrow();
    });

    test('formats the instance as date and time T-separated with no timezone with precision "millisecond" correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeLocalString('millisecond')).toBe('2024-03-01T12:45:00.000');
    });

    test('formats the instance as date and time T-separated with no timezone with precision "second" correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeLocalString()).toBe('2024-03-01T12:45:00');
    });

    test('formats the instance as date and time T-separated with no timezone with precision "minute" correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeLocalString('minute')).toBe('2024-03-01T12:45');
    });
});

describe('Carbon.toDayDateTimeString()', (): void => {
    test('formats the instance with day, date, and time correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toDayDateTimeString()).toBe('Fri, Mar 1, 2024 12:45 PM');
    });
});

describe('Carbon.toAtomString()', (): void => {
    test('formats the instance as ATOM correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toAtomString()).toBe('2024-03-01T12:45:00+01:00');
    });
});

describe('Carbon.toCookieString()', (): void => {
    test('formats the instance as COOKIE correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toCookieString()).toBe('Friday, 01-Mar-2024 12:45:00 UTC');
    });
});

describe('Carbon.toISOString()', (): void => {
    test('formats the instance as ISO8601 correctly without keeping offset', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toISOString()).toBe('2024-03-01T12:45:00.000+01:00');
    });

    test('formats the instance as ISO8601 correctly and keeps the offset', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toISOString(true)).toBe('2024-03-01T11:45:00.000Z');
    });
});

describe('Carbon.toIso8601String()', (): void => {
    test('formats the instance as ISO8601 correctly without extended format', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toIso8601String()).toBe('2024-03-01T12:45:00+0100');
    });

    test('formats the instance as ISO8601 correctly with extended format', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toIso8601String(true)).toBe('+2024-03-01T12:45:00+01:00');
    });
});

describe('Carbon.toIso8601ZuluString()', (): void => {
    test('converts the instance to UTC and returns as Zulu ISO8601 with precision "microsecond" correctly', (): void => {
        expect(() => Carbon.parse('2024-03-01 12:45:00',).toIso8601ZuluString('microsecond')).toThrow();
    });

    test('converts the instance to UTC and returns as Zulu ISO8601 with precision "millisecond" correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00',).toIso8601ZuluString('millisecond')).toBe('2024-03-01T11:45:00.000Z');
    });

    test('converts the instance to UTC and returns as Zulu ISO8601 with precision "second" correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00',).toIso8601ZuluString()).toBe('2024-03-01T11:45:00Z');
    });

    test('converts the instance to UTC and returns as Zulu ISO8601 with precision "minute" correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00',).toIso8601ZuluString('minute')).toBe('2024-03-01T11:45Z');
    });
});

describe('Carbon.toRfc822String()', (): void => {
    test('formats the instance as RFC822 correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc822String()).toBe('Fri, 01 Mar 24 12:45:00 +0100');
    });
});

describe('Carbon.toRfc850String()', (): void => {
    test('formats the instance as RFC850 correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc850String()).toBe('Friday, 01-Mar-24 12:45:00 UTC');
    });
});

describe('Carbon.toRfc1036String()', (): void => {
    test('formats the instance as RFC1036 correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc1036String()).toBe('Fri, 01 Mar 24 12:45:00 +0100');
    });
});

describe('Carbon.toRfc1123String()', (): void => {
    test('formats the instance as RFC1123 correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc1123String()).toBe('Fri, 01 Mar 2024 12:45:00 +0100');
    });
});

describe('Carbon.toRfc2822String()', (): void => {
    test('formats the instance as RFC2822 correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc2822String()).toBe('Fri, 01 Mar 2024 12:45:00 +0100');
    });
});

describe('Carbon.toRfc3339String()', (): void => {
    test('formats the instance as RFC3339 correctly without extended format', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc3339String()).toBe('2024-03-01T12:45:00+01:00');
    });

    test('formats the instance as RFC3339 correctly with extended format', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc3339String(true)).toBe('2024-03-01T12:45:00.000+01:00');
    });
});

describe('Carbon.toRfc7231String()', (): void => {
    test('formats the instance as RFC7231 correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00').toRfc7231String()).toBe('Fri, 01 Mar 2024 11:45:00 GMT');
    });
});

describe('Carbon.toRssString()', (): void => {
    test('formats the instance as RSS correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toRssString()).toBe('Fri, 01 Mar 2024 12:45:00 +0100');
    });
});

describe('Carbon.toW3cString()', (): void => {
    test('formats the instance as W3C correctly', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toW3cString()).toBe('2024-03-01T12:45:00+01:00');
    });
});

describe('Carbon.getTimeFormatByPrecision()', (): void => {
    test('returns format H:i:s.u for precision "microsecond"', () => {
        expect(new Carbon().getTimeFormatByPrecision('microsecond')).toBe('H:i:s.u');
    });

    test('returns format H:i:s.v for precision "millisecond"', () => {
        expect(new Carbon().getTimeFormatByPrecision('millisecond')).toBe('H:i:s.v');
    });

    test('returns format H:i:s for precision "second"', () => {
        expect(new Carbon().getTimeFormatByPrecision('second')).toBe('H:i:s');
    });

    test('returns format H:i for precision "minute"', () => {
        expect(new Carbon().getTimeFormatByPrecision('minute')).toBe('H:i');
    });

    test('throws error for invalid precision', () => {
        expect(() => new Carbon().getTimeFormatByPrecision('hour')).toThrow('Precision unit expected among: minute, second, millisecond and microsecond.');
    });
});

describe('Carbon.toArray()', (): void => {
    test('returns default array representation', () => {
        expect(Carbon.now().toArray()).toEqual([]);
    });
});

describe('Carbon.toObject()', (): void => {
    test('returns default object representation', () => {
        expect(Carbon.now().toObject()).toEqual({});
    });
});

describe('Carbon.toDate()', (): void => {
    test('returns a Date instance', () => {
        expect(Carbon.now().toDate()).toBeInstanceOf(Date);
    });

    test('returns date correctly', () => {
        const date: Date = new Date(new Date().toLocaleString('en-US', { timeZone: 'UTC' }));

        expect(Carbon.now('UTC').toDate()).toEqual(date);
    });

    test('returns timezone correctly', () => {
        const date: Date = new Date(new Date().toLocaleString('en-US', { timeZone: 'CET' }));

        expect(Carbon.now('CET').toDate()).toEqual(date);
    });
});

describe('Carbon.toString()', (): void => {
    test('returns the formatted date string', () => {
        const carbon : Carbon = Carbon.now();

        expect(carbon.toString()).toBe(carbon.date);
    });
});

