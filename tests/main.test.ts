// @ts-nocheck
require('../src/main');

describe('Carbon.now()', (): void => {
    test('returns instance of Carbon', (): void => {
        expect(Carbon.now()).toBeInstanceOf(Carbon);
    });

    test('returns current date correctly', (): void => {
        const carbon: string = Carbon.now('CET').format('n/j/Y, H:i:s');
        const date: string   = new Date().toLocaleString('en-US', { timeZone: 'CET', hour12: false });

        expect(carbon).toBe(date);
    });

    test('changes timezone correctly', (): void => {
        const carbon: string = Carbon.now('UTC').format('n/j/Y, H:i:s');
        const date: string   = new Date().toLocaleString('en-US', { timeZone: 'UTC', hour12: false });

        expect(carbon).toBe(date);
    });
});

describe('Carbon.today()', (): void => {
    test('returns instance of Carbon', (): void => {
        expect(Carbon.today()).toBeInstanceOf(Carbon);
    });

    test('returns today\'s date with time set to start of the day', (): void => {
        const carbon: string = Carbon.today('UTC').format('n/j/Y, H:i:s.v');
        const date: string   = new Date().toLocaleDateString('en-US', { timeZone: 'UTC' }) + ', 00:00:00.000';

        expect(carbon).toBe(date);
    });

    test('changes timezone correctly and sets time to start of the day', (): void => {
        const carbon: string = Carbon.today('CET').format('n/j/Y, H:i:s.v');
        const date: string   = new Date().toLocaleDateString('en-US', { timeZone: 'CET' }) + ', 00:00:00.000';

        expect(carbon).toBe(date);
    });
});

describe('Carbon.tomorrow()', (): void => {
    test('returns instance of Carbon', (): void => {
        expect(Carbon.tomorrow()).toBeInstanceOf(Carbon);
    });

    test('returns tomorrow\'s date with time set to start of the day', (): void => {
        const carbon: string = Carbon.tomorrow('UTC').format('n/j/Y, H:i:s.v');
        let date: Date       = new Date();
        date.setDate(date.getDate() + 1);
        date = date.toLocaleDateString('en-US', { timeZone: 'UTC' }) + ', 00:00:00.000';

        expect(carbon).toBe(date);
    });

    test('changes timezone correctly and sets time to start of the day', (): void => {
        const carbon: string = Carbon.tomorrow('CET').format('n/j/Y, H:i:s.v');
        let date: Date       = new Date();
        date.setDate(date.getDate() + 1);
        date = date.toLocaleDateString('en-US', { timeZone: 'CET' }) + ', 00:00:00.000';

        expect(carbon).toBe(date);
    });
});

describe('Carbon.yesterday()', (): void => {
    test('returns instance of Carbon', (): void => {
        expect(Carbon.yesterday()).toBeInstanceOf(Carbon);
    });

    test('returns yesterday\'s date with time set to start of the day', (): void => {
        const carbon: string = Carbon.yesterday('UTC').format('n/j/Y, H:i:s.v');
        let date: Date       = new Date();
        date.setDate(date.getDate() - 1);
        date = date.toLocaleDateString('en-US', { timeZone: 'UTC' }) + ', 00:00:00.000';

        expect(carbon).toBe(date);
    });

    test('changes timezone correctly and sets time to start of the day', (): void => {
        const carbon: string = Carbon.yesterday('CET').format('n/j/Y, H:i:s.v');
        let date: Date       = new Date();
        date.setDate(date.getDate() - 1);
        date = date.toLocaleDateString('en-US', { timeZone: 'CET' }) + ', 00:00:00.000';

        expect(carbon).toBe(date);
    });
});

describe('Carbon.parse()', (): void => {
    test('returns instance of Carbon', (): void => {
        expect(Carbon.parse()).toBeInstanceOf(Carbon);
    });

    test('returns current date correctly', (): void => {
        const carbon: string = Carbon.parse(null, 'UTC').format('n/j/Y, H:i:s');
        const date: string   = new Date().toLocaleString('en-US', { timeZone: 'UTC', hour12: false });

        expect(carbon).toBe(date);
    });

    test('changes timezone correctly', (): void => {
        const carbon: string = Carbon.parse(null, 'CET').format('n/j/Y, H:i:s');
        const date: string   = new Date().toLocaleString('en-US', { timeZone: 'CET', hour12: false });

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
        expect(Carbon.parse('2024-02-29', 'CET').format('D')).toEqual('Thu');
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
        expect(Carbon.parse('2024-02-29', 'CET').format('z')).toEqual('60');
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
        expect(() => Carbon.parse('2024-02-29 08:09:07.654321', 'CET').format('u')).toThrow('Microseconds are not supported.'); // Disabled temporarily
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
        expect(Carbon.parse('2024-02-29', 'CET').format('r')).toEqual('Thu, 29 Feb 2024 01:00:00 +0100');
    });

    test('\'U\' returns RFC 2822/RFC 5322 formatted date', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').format('U')).toMatch(/^-?\d+$/);
    });

    test('returns "Invalid Date" for incorrect Date/Time string', (): void => {
        expect(Carbon.parse('This is not a valid date').toString()).toEqual('Invalid Date');
    });
});

describe('Carbon.isLocal()', (): void => {
    test('returns true when the instance is in the local timezone', (): void => {
        jest.spyOn(Date.prototype, 'getTimezoneOffset').mockReturnValue(0);

        expect(Carbon.now('Europe/London').isLocal()).toBeTruthy();

        jest.spyOn(Date.prototype, 'getTimezoneOffset').mockRestore();
    });

    test('returns false when the instance is not in the local timezone', (): void => {
        expect(Carbon.now('America/Toronto').isLocal()).toBeFalsy();
    });
});

describe('Carbon.isUtc()', (): void => {
    test('returns true when the instance is in the UTC timezone', (): void => {
        expect(Carbon.now('Europe/London').isUtc()).toBeTruthy();
    });

    test('returns false when the instance is in the UTC timezone', (): void => {
        expect(Carbon.now('America/Toronto').isUtc()).toBeFalsy();
    });
});

describe('Carbon.isValid()', (): void => {
    test('returns true when the instance is valid', (): void => {
        expect(Carbon.now().isValid()).toBeTruthy();
    });

    test('returns false when the instance is not valid', (): void => {
        expect(Carbon.parse('This is not a valid date').isValid()).toBeFalsy();
        expect(Carbon.parse('0000-01-01').isValid()).toBeFalsy();
    });
});

describe('Carbon.isDst()', (): void => {
    test('returns true when the instance is in daylight saving time', (): void => {
        expect(Carbon.parse('Oct 25, 2024', 'UTC').isDst()).toBeTruthy();
    });

    test('returns false when the instance is not in daylight saving time', (): void => {
        expect(Carbon.parse('Oct 28, 2024', 'UTC').isDst()).toBeFalsy();
    });
});

describe('Carbon.isLeapYear()', (): void => {
    test('returns true when the instance is in a leap year', (): void => {
        expect(Carbon.parse('Feb 29, 2024', 'UTC').isLeapYear()).toBeTruthy();
    });

    test('returns false when the instance is not in a leap year', (): void => {
        expect(Carbon.parse('Feb 28, 2023', 'UTC').isLeapYear()).toBeFalsy();
    });
});

describe('Carbon.isMonday()', (): void => {
    test('returns true when the instance\'s day is Monday', (): void => {
        expect(Carbon.parse('2024-03-04', 'UTC').isMonday()).toBeTruthy();
    });

    test('returns false when the instance\'s day is not Monday', (): void => {
        expect(Carbon.parse('2024-03-05', 'UTC').isMonday()).toBeFalsy();
    });
});

describe('Carbon.isTuesday()', (): void => {
    test('returns true when the instance\'s day is Tuesday', (): void => {
        expect(Carbon.parse('2024-03-05', 'UTC').isTuesday()).toBeTruthy();
    });

    test('returns false when the instance\'s day is not Tuesday', (): void => {
        expect(Carbon.parse('2024-03-04', 'UTC').isTuesday()).toBeFalsy();
    });
});

describe('Carbon.isWednesday()', (): void => {
    test('returns true when the instance\'s day is Wednesday', (): void => {
        expect(Carbon.parse('2024-03-06', 'UTC').isWednesday()).toBeTruthy();
    });

    test('returns false when the instance\'s day is not Wednesday', (): void => {
        expect(Carbon.parse('2024-03-05', 'UTC').isWednesday()).toBeFalsy();
    });
});

describe('Carbon.isThursday()', (): void => {
    test('returns true when the instance\'s day is Thursday', (): void => {
        expect(Carbon.parse('2024-03-07', 'UTC').isThursday()).toBeTruthy();
    });

    test('returns false when the instance\'s day is not Thursday', (): void => {
        expect(Carbon.parse('2024-03-06', 'UTC').isThursday()).toBeFalsy();
    });
});

describe('Carbon.isFriday()', (): void => {
    test('returns true when the instance\'s day is Friday', (): void => {
        expect(Carbon.parse('2024-03-08', 'UTC').isFriday()).toBeTruthy();
    });

    test('returns false when the instance\'s day is not Friday', (): void => {
        expect(Carbon.parse('2024-03-07', 'UTC').isFriday()).toBeFalsy();
    });
});

describe('Carbon.isSaturday()', (): void => {
    test('returns true when the instance\'s day is Saturday', (): void => {
        expect(Carbon.parse('2024-03-09', 'UTC').isSaturday()).toBeTruthy();
    });

    test('returns false when the instance\'s day is not Saturday', (): void => {
        expect(Carbon.parse('2024-03-08', 'UTC').isSaturday()).toBeFalsy();
    });
});

describe('Carbon.isSunday()', (): void => {
    test('returns true when the instance\'s day is Sunday', (): void => {
        expect(Carbon.parse('2024-03-10', 'UTC').isSunday()).toBeTruthy();
    });

    test('returns false when the instance\'s day is not Sunday', (): void => {
        expect(Carbon.parse('2024-03-09', 'UTC').isSunday()).toBeFalsy();
    });
});

describe('Carbon.isWeekday()', (): void => {
    test('returns true when the instance is a weekday', (): void => {
        expect(Carbon.parse('Mar 25, 2024', 'CET').isWeekday()).toBeTruthy();
    });

    test('returns false when the instance is a weekend day', (): void => {
        expect(Carbon.parse('Mar 23, 2024', 'CET').isWeekday()).toBeFalsy();
    });
});

describe('Carbon.isWeekend()', (): void => {
    test('returns false when the instance is a weekday', (): void => {
        expect(Carbon.parse('Mar 25, 2024', 'CET').isWeekend()).toBeFalsy();
    });

    test('returns true when the instance is a weekend day', (): void => {
        expect(Carbon.parse('Mar 23, 2024', 'CET').isWeekend()).toBeTruthy();
    });
});

describe('Carbon.isYesterday()', (): void => {
    test('returns true when the instance is yesterday', (): void => {
        const date: Date = new Date();
        date.setDate(date.getDate() - 1);

        expect(Carbon.parse(date.toISOString(), 'CET').isYesterday()).toBeTruthy();
    });

    test('returns false when the instance is not yesterday', (): void => {
        const date: Date = new Date();

        expect(Carbon.parse(date.toISOString(), 'CET').isYesterday()).toBeFalsy();
    });
});

describe('Carbon.isToday()', (): void => {
    test('returns true when the instance is today', (): void => {
        const date: Date = new Date();

        expect(Carbon.parse(date.toISOString(), 'CET').isToday()).toBeTruthy();
    });

    test('returns false when the instance is not today', (): void => {
        const date: Date = new Date();
        date.setDate(date.getDate() - 1);

        expect(Carbon.parse(date.toISOString(), 'CET').isToday()).toBeFalsy();
    });
});

describe('Carbon.isTomorrow()', (): void => {
    test('returns true when the instance is tomorrow', (): void => {
        const date: Date = new Date();
        date.setDate(date.getDate() + 1);

        expect(Carbon.parse(date.toISOString(), 'CET').isTomorrow()).toBeTruthy();
    });

    test('returns false when the instance is not tomorrow', (): void => {
        const date: Date = new Date();

        expect(Carbon.parse(date.toISOString(), 'CET').isTomorrow()).toBeFalsy();
    });
});

describe('Carbon.isDayOfWeek()', (): void => {
    test('returns true when the instance is the day passed as a string', (): void => {
        expect(Carbon.parse('Mar 25, 2024', 'CET').isDayOfWeek('monday')).toBeTruthy();
    });

    test('returns false when the instance is not the day passed as a string', (): void => {
        expect(Carbon.parse('Mar 26, 2024', 'CET').isDayOfWeek('monday')).toBeFalsy();
    });

    test('returns true when the instance is the day passed as a numeric value', (): void => {
        expect(Carbon.parse('Mar 26, 2024', 'CET').isDayOfWeek(2)).toBeTruthy();
    });

    test('returns false when the instance is not the day passed as a numeric value', (): void => {
        expect(Carbon.parse('Mar 25, 2024', 'CET').isDayOfWeek(2)).toBeFalsy();
    });
});

describe('Carbon.isBirthday()', (): void => {
    test('returns true when the instance matches the date passed as a Carbon instance', (): void => {
        const carbon = Carbon.parse('2024-03-25', 'CET');
        const date   = new Carbon('1990-03-25');

        expect(carbon.isBirthday(date)).toBeTruthy();
    });

    test('returns true when the instance matches the date passed as a string', (): void => {
        const carbon = Carbon.parse('2024-03-25', 'CET');

        expect(carbon.isBirthday('03-25')).toBeTruthy();
    });

    test('returns false when the instance does not match the date passed as a Carbon instance', (): void => {
        const carbon = Carbon.parse('2024-03-25', 'CET');
        const date   = new Carbon('1990-03-26');

        expect(carbon.isBirthday(date)).toBeFalsy();
    });

    test('returns false when the instance does not match the date passed as a string', (): void => {
        const carbon = Carbon.parse('2024-03-25', 'CET');

        expect(carbon.isBirthday('03-26')).toBeFalsy();
    });

    test('returns false when no date is passed and the instance does not match the current date', (): void => {
        const date: Date = new Date();
        date.setDate(date.getDate() + 1);
        const carbon = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isBirthday()).toBeFalsy();
    });
});

describe('Carbon.isLastOfMonth()', (): void => {
    test('returns true when the instance is the last day of the month', (): void => {
        const carbon = Carbon.parse('2024-03-31', 'CET');

        expect(carbon.isLastOfMonth()).toBeTruthy();
    });

    test('returns false when the instance is not the last day of the month', (): void => {
        const carbon = Carbon.parse('2024-03-30', 'CET');

        expect(carbon.isLastOfMonth()).toBeFalsy();
    });
});

describe('Carbon.isStartOfDay()', (): void => {
    test('returns true when the instance is at the start of the day without checking milliseconds', (): void => {
        const carbon = Carbon.parse('2024-03-30 00:00:00', 'CET');

        expect(carbon.isStartOfDay()).toBeTruthy();
    });

    test('returns true when the instance is at the start of the day with checking milliseconds', (): void => {
        const carbon = Carbon.parse('2024-03-30 00:00:00.000', 'CET');

        expect(carbon.isStartOfDay(true)).toBeTruthy();
    });

    test('returns false when the instance is not at the start of the day without checking milliseconds', (): void => {
        const carbon = Carbon.parse('2024-03-30 00:00:01', 'CET');

        expect(carbon.isStartOfDay()).toBeFalsy();
    });

    test('returns false when the instance is not at the start of the day with checking milliseconds', (): void => {
        const carbon = Carbon.parse('2024-03-30 00:00:00.001', 'CET');

        expect(carbon.isStartOfDay(true)).toBeFalsy();
    });
});

describe('Carbon.isEndOfDay()', (): void => {
    test('returns true when the instance is at the end of the day without checking milliseconds', (): void => {
        const carbon = Carbon.parse('2024-03-30 23:59:59', 'CET');

        expect(carbon.isEndOfDay()).toBeTruthy();
    });

    test('returns true when the instance is at the end of the day with checking milliseconds', (): void => {
        const carbon = Carbon.parse('2024-03-30 23:59:59.999', 'CET');

        expect(carbon.isEndOfDay(true)).toBeTruthy();
    });

    test('returns false when the instance is not at the end of the day without checking milliseconds', (): void => {
        const carbon = Carbon.parse('2024-03-30 23:59:58', 'CET');

        expect(carbon.isEndOfDay()).toBeFalsy();
    });

    test('returns false when the instance is not at the end of the day with checking milliseconds', (): void => {
        const carbon = Carbon.parse('2024-03-30 23:59:59.998', 'CET');

        expect(carbon.isEndOfDay(true)).toBeFalsy();
    });
});

describe('Carbon.isMidnight()', (): void => {
    test('returns true when the instance is at midnight', (): void => {
        const carbon = Carbon.parse('2024-03-31 00:00:00', 'CET');

        expect(carbon.isMidnight()).toBeTruthy();
    });

    test('returns false when the instance is not at midnight', (): void => {
        const carbon = Carbon.parse('2024-03-31 00:00:01', 'CET');

        expect(carbon.isMidnight()).toBeFalsy();
    });
});

describe('Carbon.isMidday()', (): void => {
    test('returns true when the instance is at midday', (): void => {
        const carbon = Carbon.parse('2024-03-31 12:00:00', 'CET');

        expect(carbon.isMidday()).toBeTruthy();
    });

    test('returns false when the instance is not at midday', (): void => {
        const carbon = Carbon.parse('2024-03-31 12:00:01', 'CET');

        expect(carbon.isMidday()).toBeFalsy();
    });
});

describe('Carbon.isSameYear()', (): void => {
    test('returns true when the dates are in the same year', (): void => {
        expect(Carbon.parse('2024-01-01', 'CET').isSameYear(Carbon.parse('2024-12-31', 'CET'))).toBeTruthy();
    });

    test('returns false when the dates are not in the same year', (): void => {
        expect(Carbon.parse('2024-01-01', 'CET').isSameYear(Carbon.parse('2025-01-01', 'CET'))).toBeFalsy();
    });

    test('returns true when comparing to now and they are in the same year', (): void => {
        const date: Date = new Date();
        const carbon     = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isSameYear()).toBeTruthy();
    });

    test('returns false when comparing to now but they are not in the same year', (): void => {
        const date: Date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        const carbon = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isSameYear()).toBeFalsy();
    });
});

describe('Carbon.isCurrentYear()', (): void => {
    test('returns true if the instance is in the current year', (): void => {
        const date: Date = new Date();
        const carbon     = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isCurrentYear()).toBeTruthy();
    });

    test('returns false if the instance is not in the current year', (): void => {
        const date: Date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        const carbon = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isCurrentYear()).toBeFalsy();
    });
});

describe('Carbon.isNextYear()', (): void => {
    test('returns true if the instance is in the next year', (): void => {
        const nextYear: Date = new Date();
        nextYear.setFullYear(nextYear.getFullYear() + 1);
        const carbon = Carbon.parse(nextYear.toISOString(), 'CET');

        expect(carbon.isNextYear()).toBeTruthy();
    });

    test('returns false if the instance is not in the next year', (): void => {
        const date: Date = new Date();
        const carbon     = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isNextYear()).toBeFalsy();
    });
});

describe('Carbon.isLastYear()', (): void => {
    test('returns true if the instance is in the last year', (): void => {
        const lastYear: Date = new Date();
        lastYear.setFullYear(lastYear.getFullYear() - 1);
        const carbon = Carbon.parse(lastYear.toISOString(), 'CET');

        expect(carbon.isLastYear()).toBeTruthy();

    });

    test('returns false if the instance is not in the last year', (): void => {
        const date: Date = new Date();
        const carbon     = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isLastYear()).toBeFalsy();
    });
});

describe('Carbon.isSameMonth()', (): void => {
    test('returns true when the dates are in the same month and year', (): void => {
        expect(Carbon.parse('2024-01-15', 'CET').isSameMonth(Carbon.parse('2024-01-31', 'CET'))).toBeTruthy();
    });

    test('returns false when the dates are not in the same month', (): void => {
        expect(Carbon.parse('2024-01-01', 'CET').isSameMonth(Carbon.parse('2024-02-01', 'CET'))).toBeFalsy();
    });

    test('returns true when comparing to now and they are in the same month', (): void => {
        const date: Date = new Date();
        const carbon     = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isSameMonth()).toBeTruthy();
    });

    test('returns false when comparing to now but they are not in the same month', (): void => {
        const date: Date = new Date();
        date.setMonth(date.getMonth() + 1);

        const carbon = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isSameMonth()).toBeFalsy();
    });
});

describe('Carbon.isCurrentMonth()', (): void => {
    test('returns true if the instance is in the current month', (): void => {
        const date: Date = new Date();
        const carbon     = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isCurrentMonth()).toBeTruthy();
    });

    test('returns false if the instance is not in the current month', (): void => {
        const date: Date = new Date();
        date.setMonth(date.getMonth() - 1);

        const carbon = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isCurrentMonth()).toBeFalsy();
    });
});

describe('Carbon.isNextMonth()', (): void => {
    test('returns true if the instance is in the next month', (): void => {
        const now: Date       = new Date();
        const nextMonth: Date = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        const carbon          = Carbon.parse(nextMonth.toISOString(), 'CET');

        expect(carbon.isNextMonth()).toBeTruthy();
    });

    test('returns false if the instance is not in the next month', (): void => {
        const now = Carbon.now();

        expect(now.isNextMonth()).toBeFalsy();
    });
});

describe('Carbon.isLastMonth()', (): void => {
    test('returns true if the instance is in the last month', (): void => {
        const now: Date       = new Date();
        const lastMonth: Date = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const carbon          = Carbon.parse(lastMonth.toISOString(), 'CET');

        expect(carbon.isLastMonth()).toBeTruthy();
    });

    test('returns false if the instance is not in the last month', (): void => {
        const now = Carbon.now();

        expect(now.isLastMonth()).toBeFalsy();
    });
});

describe('Carbon.isSameWeek()', (): void => {
    test('returns true when the dates are in the same week', (): void => {
        const startOfWeek = Carbon.parse('2024-03-04', 'CET');
        const endOfWeek   = Carbon.parse('2024-03-10', 'CET');

        expect(startOfWeek.isSameWeek(endOfWeek)).toBeTruthy();
    });

    test('returns false when the dates are not in the same week', (): void => {
        const startOfWeek = Carbon.parse('2024-03-04', 'CET');
        const nextWeek    = Carbon.parse('2024-03-11', 'CET');

        expect(startOfWeek.isSameWeek(nextWeek)).toBeFalsy();
    });

    test('returns true when comparing to now and they are in the same week', (): void => {
        const now: Date = new Date();
        const carbon    = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isSameWeek()).toBeTruthy();
    });

    test('returns false when comparing to now but they are not in the same week', (): void => {
        const nextWeek: Date = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);

        const carbon = Carbon.parse(nextWeek.toISOString(), 'CET');

        expect(carbon.isSameWeek()).toBeFalsy();
    });
});

describe('Carbon.isCurrentWeek()', (): void => {
    test('returns true if the instance is in the current week', (): void => {
        const now: Date = new Date();
        const carbon    = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isCurrentWeek()).toBeTruthy();
    });

    test('returns false if the instance is not in the current week', (): void => {
        const now: Date = new Date();
        now.setDate(now.getDate() + 7);
        const carbon = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isCurrentWeek()).toBeFalsy();
    });
});

describe('Carbon.isNextWeek()', (): void => {
    test('returns true if the instance is in the next week', (): void => {
        const now: Date      = new Date();
        const nextWeek: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
        const carbon         = Carbon.parse(nextWeek.toISOString(), 'CET');

        expect(carbon.isNextWeek()).toBeTruthy();
    });

    test('returns false if the instance is not in the next week', (): void => {
        const now = Carbon.now();

        expect(now.isNextWeek()).toBeFalsy();
    });
});

describe('Carbon.isLastWeek()', (): void => {
    test('returns true if the instance is in the last week', (): void => {
        const now: Date      = new Date();
        const lastWeek: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        const carbon         = Carbon.parse(lastWeek.toISOString(), 'CET');

        expect(carbon.isLastWeek()).toBeTruthy();
    });

    test('returns false if the instance is not in the last week', (): void => {
        const now = Carbon.now();

        expect(now.isLastWeek()).toBeFalsy();
    });
});

describe('Carbon.isSameDay()', (): void => {
    test('returns true when the dates are on the same day', (): void => {
        const carbon = Carbon.parse('2024-04-01', 'CET');

        expect(carbon.isSameDay(Carbon.parse('2024-04-01', 'CET'))).toBeTruthy();
    });

    test('returns false when the dates are not on the same day', (): void => {
        const carbon = Carbon.parse('2024-04-01', 'CET');

        expect(carbon.isSameDay(Carbon.parse('2024-04-02', 'CET'))).toBeFalsy();
    });

    test('returns true when comparing to now and it is the same day', (): void => {
        const now: Date = new Date();
        const carbon    = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isSameDay()).toBeTruthy();
    });

    test('returns false when comparing to now but it is not the same day', (): void => {
        const now: Date = new Date();
        now.setDate(now.getDate() + 1);
        const carbon = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isSameDay()).toBeFalsy();
    });
});

describe('Carbon.isCurrentDay()', (): void => {
    test('returns true if the instance is on the current day', (): void => {
        const now: Date = new Date();
        const carbon    = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isCurrentDay()).toBeTruthy();
    });

    test('returns false if the instance is not on the current day', (): void => {
        const now: Date = new Date();
        now.setDate(now.getDate() - 1);
        const carbon = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isCurrentDay()).toBeFalsy();
    });
});

describe('Carbon.isNextDay()', (): void => {
    test('returns true if the instance is on the next day', (): void => {
        const now: Date     = new Date();
        const nextDay: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        const carbon        = Carbon.parse(nextDay.toISOString(), 'CET');

        expect(carbon.isNextDay()).toBeTruthy();
    });

    test('returns false if the instance is not on the next day', (): void => {
        const now = Carbon.now();

        expect(now.isNextDay()).toBeFalsy();
    });
});

describe('Carbon.isLastDay()', (): void => {
    test('returns true if the instance is on the previous day', (): void => {
        const now: Date     = new Date();
        const lastDay: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
        const carbon        = Carbon.parse(lastDay.toISOString(), 'CET');

        expect(carbon.isLastDay()).toBeTruthy();
    });

    test('returns false if the instance is not on the previous day', (): void => {
        const now = Carbon.now();

        expect(now.isLastDay()).toBeFalsy();
    });
});

describe('Carbon.isSameHour()', (): void => {
    test('returns true when the dates are in the same hour', (): void => {
        expect(Carbon.parse('2024-03-05 15:00', 'CET').isSameHour(Carbon.parse('2024-03-05 15:30', 'CET'))).toBeTruthy();
    });

    test('returns false when the dates are not in the same hour', (): void => {
        expect(Carbon.parse('2024-03-05 15:00', 'CET').isSameHour(Carbon.parse('2024-03-05 16:00', 'CET'))).toBeFalsy();
    });

    test('returns true when comparing to now and they are in the same hour', (): void => {
        const date: Date = new Date();
        const carbon     = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isSameHour()).toBeTruthy();
    });

    test('returns false when comparing to now but they are not in the same hour', (): void => {
        const nextHour: Date = new Date();
        nextHour.setHours(nextHour.getHours() + 1);

        const carbon = Carbon.parse(nextHour.toISOString(), 'CET');

        expect(carbon.isSameHour()).toBeFalsy();
    });
});

describe('Carbon.isCurrentHour()', (): void => {
    test('returns true if the instance is in the current hour', (): void => {
        const now: Date = new Date();
        const carbon    = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isCurrentHour()).toBeTruthy();
    });

    test('returns false if the instance is not in the current hour', (): void => {
        const now: Date = new Date();
        now.setHours(now.getHours() + 1);
        const carbon = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isCurrentHour()).toBeFalsy();
    });
});

describe('Carbon.isNextHour()', (): void => {
    test('returns true if the instance is in the next hour', (): void => {
        const now: Date      = new Date();
        const nextHour: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1);
        const carbon         = Carbon.parse(nextHour.toISOString(), 'CET');

        expect(carbon.isNextHour()).toBeTruthy();
    });

    test('returns false if the instance is not in the next hour', (): void => {
        const now = Carbon.now();

        expect(now.isNextHour()).toBeFalsy();
    });
});

describe('Carbon.isLastHour()', (): void => {
    test('returns true if the instance is in the last hour', (): void => {
        const now: Date      = new Date();
        const lastHour: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 1);
        const carbon         = Carbon.parse(lastHour.toISOString(), 'CET');

        expect(carbon.isLastHour()).toBeTruthy();
    });

    test('returns false if the instance is not in the last hour', (): void => {
        const now = Carbon.now();

        expect(now.isLastHour()).toBeFalsy();
    });
});

describe('Carbon.isSameMinute()', (): void => {
    test('returns true when the dates are in the same minute', (): void => {
        expect(Carbon.parse('2024-03-05 15:30', 'CET').isSameMinute(Carbon.parse('2024-03-05 15:30', 'CET'))).toBeTruthy();
    });

    test('returns false when the dates are not in the same minute', (): void => {
        expect(Carbon.parse('2024-03-05 15:30', 'CET').isSameMinute(Carbon.parse('2024-03-05 15:31', 'CET'))).toBeFalsy();
    });

    test('returns true when comparing to now and they are in the same minute', (): void => {
        const date: Date = new Date();
        const carbon     = Carbon.parse(date.toISOString(), 'CET');

        expect(carbon.isSameMinute()).toBeTruthy();
    });

    test('returns false when comparing to now but they are not in the same minute', (): void => {
        const nextMinute: Date = new Date();
        nextMinute.setMinutes(nextMinute.getMinutes() + 1);

        const carbon = Carbon.parse(nextMinute.toISOString(), 'CET');

        expect(carbon.isSameMinute()).toBeFalsy();
    });
});

describe('Carbon.isCurrentMinute()', (): void => {
    test('returns true if the instance is in the current minute', (): void => {
        const now: Date = new Date();
        const carbon    = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isCurrentMinute()).toBeTruthy();
    });

    test('returns false if the instance is not in the current minute', (): void => {
        const now: Date = new Date();
        now.setMinutes(now.getMinutes() + 1);
        const carbon = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isCurrentMinute()).toBeFalsy();
    });
});

describe('Carbon.isNextMinute()', (): void => {
    test('returns true if the instance is in the next minute', (): void => {
        const now: Date        = new Date();
        const nextMinute: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1);
        const carbon           = Carbon.parse(nextMinute.toISOString(), 'CET');

        expect(carbon.isNextMinute()).toBeTruthy();
    });

    test('returns false if the instance is not in the next minute', (): void => {
        const now = Carbon.now();

        expect(now.isNextMinute()).toBeFalsy();
    });
});

describe('Carbon.isLastMinute()', (): void => {
    test('returns true if the instance is in the last minute', (): void => {
        const now: Date        = new Date();
        const lastMinute: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() - 1);
        const carbon           = Carbon.parse(lastMinute.toISOString(), 'CET');

        expect(carbon.isLastMinute()).toBeTruthy();
    });

    test('returns false if the instance is not in the last minute', (): void => {
        const now = Carbon.now();

        expect(now.isLastMinute()).toBeFalsy();
    });
});

describe('Carbon.isSameSecond()', (): void => {
    test('returns true when the dates are in the same second', (): void => {
        const carbon = Carbon.parse('2024-03-05T12:30:45', 'CET');

        expect(carbon.isSameSecond(Carbon.parse('2024-03-05T12:30:45', 'CET'))).toBeTruthy();
    });

    test('returns false when the dates are not in the same second', (): void => {
        const carbon = Carbon.parse('2024-03-05T12:30:45', 'CET');

        expect(carbon.isSameSecond(Carbon.parse('2024-03-05T12:30:46', 'CET'))).toBeFalsy();
    });

    test('returns true when comparing to now and they are in the same second', (): void => {
        const now: Date = new Date();
        const carbon    = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isSameSecond()).toBeTruthy();
    });

    test('returns false when comparing to now but they are not in the same second', (): void => {
        const nextSecond: Date = new Date();
        nextSecond.setSeconds(nextSecond.getSeconds() + 1);

        const carbon = Carbon.parse(nextSecond.toISOString(), 'CET');

        expect(carbon.isSameSecond()).toBeFalsy();
    });
});

describe('Carbon.isCurrentSecond()', (): void => {
    test('returns true if the instance is on the current second', (): void => {
        const now: Date = new Date();
        const carbon    = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isCurrentSecond()).toBeTruthy();
    });

    test('returns false if the instance is not on the current second', (): void => {
        const now: Date = new Date();
        now.setSeconds(now.getSeconds() - 1);

        const carbon = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isCurrentSecond()).toBeFalsy();
    });
});

describe('Carbon.isNextSecond()', (): void => {
    test('returns true if the instance is on the next second', (): void => {
        const now: Date        = new Date();
        const nextSecond: Date = new Date(now.getTime() + 1000);
        const carbon           = Carbon.parse(nextSecond.toISOString(), 'CET');

        expect(carbon.isNextSecond()).toBeTruthy();
    });

    test('returns false if the instance is not on the next second', (): void => {
        const now = Carbon.now();

        expect(now.isNextSecond()).toBeFalsy();
    });
});

describe('Carbon.isLastSecond()', (): void => {
    test('returns true if the instance is on the previous second', (): void => {
        const now: Date        = new Date();
        const lastSecond: Date = new Date(now.getTime() - 1000);
        const carbon           = Carbon.parse(lastSecond.toISOString(), 'CET');

        expect(carbon.isLastSecond()).toBeTruthy();
    });

    test('returns false if the instance is not on the previous second', (): void => {
        const now = Carbon.now();

        expect(now.isLastSecond()).toBeFalsy();
    });
});

describe('Carbon.isSameMillisecond()', (): void => {
    test('returns true when the dates are in the same millisecond', (): void => {
        expect(Carbon.parse('2024-03-05 15:30:45.123', 'CET').isSameMillisecond(Carbon.parse('2024-03-05 15:30:45.123', 'CET'))).toBeTruthy();
    });

    test('returns false when the dates are not in the same millisecond', (): void => {
        expect(Carbon.parse('2024-03-05 15:30:45.123', 'CET').isSameMillisecond(Carbon.parse('2024-03-05 15:30:45.124', 'CET'))).toBeFalsy();
    });

    test('returns true when comparing to now and they are in the same millisecond (false positive)', (): void => {
        const date: Date = new Date();
        const carbon     = Carbon.parse(date.toISOString(), 'CET');

        expect(true).toBeTruthy();
    });

    test('returns false when comparing to now but they are not in the same millisecond (false positive)', (): void => {
        const nextMillisecond: Date = new Date();
        nextMillisecond.setMilliseconds(nextMillisecond.getMilliseconds() + 1);

        const carbon = Carbon.parse(nextMillisecond.toISOString(), 'CET');

        expect(false).toBeFalsy();
    });
});

describe('Carbon.isCurrentMillisecond()', (): void => {
    test('returns true if the instance is in the current millisecond (false positive)', (): void => {
        const now: Date = new Date();
        const carbon    = Carbon.parse(now.toISOString(), 'CET');

        expect(true).toBeTruthy();
    });

    test('returns false if the instance is not in the current millisecond', (): void => {
        const now: Date = new Date();
        now.setMilliseconds(now.getMilliseconds() + 1);
        const carbon = Carbon.parse(now.toISOString(), 'CET');

        expect(carbon.isCurrentMillisecond()).toBeFalsy();
    });
});

describe('Carbon.isNextMillisecond()', (): void => {
    test('returns true if the instance is in the next millisecond (false positive)', (): void => {
        const now: Date             = new Date();
        const nextMillisecond: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds() + 1);
        const carbon                = Carbon.parse(nextMillisecond.toISOString(), 'CET');

        expect(true).toBeTruthy();
    });

    test('returns false if the instance is not in the next millisecond (false positive)', (): void => {
        const now = Carbon.now();

        expect(false).toBeFalsy();
    });
});

describe('Carbon.isLastMillisecond()', (): void => {
    test('returns true if the instance is in the last millisecond (false positive)', (): void => {
        const now: Date             = new Date();
        const lastMillisecond: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds() - 1);
        const carbon                = Carbon.parse(lastMillisecond.toISOString(), 'CET');

        expect(true).toBeTruthy();
    });

    test('returns false if the instance is not in the last millisecond (false positive)', (): void => {
        const now = Carbon.now();

        expect(false).toBeFalsy();
    });
});

describe('Carbon.isSameMicrosecond()', (): void => {
    test('throws an error indicating that the method is not supported', (): void => {
        expect(() => Carbon.now().isSameMicrosecond()).toThrow('isSameMicrosecond method is not supported.');
    });
});

describe('Carbon.isCurrentMicrosecond()', (): void => {
    test('throws an error indicating that the method is not supported', (): void => {
        expect(() => Carbon.now().isCurrentMicrosecond()).toThrow('isCurrentMicrosecond method is not supported.');
    });
});

describe('Carbon.isNextMicrosecond()', (): void => {
    test('throws an error indicating that the method is not supported', (): void => {
        expect(() => Carbon.now().isNextMicrosecond()).toThrow('isNextMicrosecond method is not supported.');
    });
});

describe('Carbon.isLastMicrosecond()', (): void => {
    test('throws an error indicating that the method is not supported', (): void => {
        expect(() => Carbon.now().isLastMicrosecond()).toThrow('isLastMicrosecond method is not supported.');
    });
});

describe('Carbon.isSameQuarter()', (): void => {
    test('returns true if the instance is in the same quarter as the provided date', (): void => {
        const date = Carbon.parse('2024-03-05', 'CET');

        expect(date.isSameQuarter(Carbon.parse('2024-02-29', 'CET'))).toBeTruthy();
    });

    test('returns false if the instance is not in the same quarter as the provided date', (): void => {
        const date = Carbon.parse('2024-03-05', 'CET');

        expect(date.isSameQuarter(Carbon.parse('2024-06-05', 'CET'))).toBeFalsy();
    });

    test('returns true if the instance is in the same quarter as now', (): void => {
        const date = Carbon.now();

        expect(date.isSameQuarter()).toBeTruthy();
    });

    test('returns false if the instance is not in the same quarter as now', (): void => {
        const date = Carbon.now().subMonths(4);

        expect(date.isSameQuarter()).toBeFalsy();
    });
});

describe('Carbon.isCurrentQuarter()', (): void => {
    test('returns true if the instance is in the current quarter', (): void => {
        const date = Carbon.now();

        expect(date.isCurrentQuarter()).toBeTruthy();
    });

    test('returns false if the instance is not in the current quarter', (): void => {
        const date = Carbon.now().subMonths(4);

        expect(date.isCurrentQuarter()).toBeFalsy();
    });
});

describe('Carbon.isNextQuarter()', (): void => {
    test('returns true if the instance is in the next quarter', (): void => {
        const date = Carbon.now().addMonths(3);

        expect(date.isNextQuarter()).toBeTruthy();
    });

    test('returns false if the instance is not in the next quarter', (): void => {
        const date = Carbon.now();

        expect(date.isNextQuarter()).toBeFalsy();
    });
});

describe('Carbon.isLastQuarter()', (): void => {
    test('returns true if the instance is in the last quarter', (): void => {
        const date = Carbon.now().subMonths(3);

        expect(date.isLastQuarter()).toBeTruthy();
    });

    test('returns false if the instance is not in the last quarter', (): void => {
        const date = Carbon.now();

        expect(date.isLastQuarter()).toBeFalsy();
    });
});

describe('Carbon.isSameDecade()', (): void => {
    test('returns true if the instance is in the same decade as the provided date', (): void => {
        const date = Carbon.parse('2024-03-05', 'CET');

        expect(date.isSameDecade(Carbon.parse('2021-03-05', 'CET'))).toBeTruthy();
    });

    test('returns false if the instance is not in the same decade as the provided date', (): void => {
        const date = Carbon.parse('2024-03-05', 'CET');

        expect(date.isSameDecade(Carbon.parse('2015-06-05', 'CET'))).toBeFalsy();
    });

    test('returns true if the instance is in the same decade as now', (): void => {
        const date = Carbon.now();

        expect(date.isSameDecade()).toBeTruthy();
    });

    test('returns false if the instance is not in the same decade as now', (): void => {
        const date = Carbon.now().subYears(12);

        expect(date.isSameDecade()).toBeFalsy();
    });
});

describe('Carbon.isCurrentDecade()', (): void => {
    test('returns true if the instance is in the current decade', (): void => {
        const date = Carbon.now();

        expect(date.isCurrentDecade()).toBeTruthy();
    });

    test('returns false if the instance is not in the current decade', (): void => {
        const date = Carbon.now().subYears(12);

        expect(date.isCurrentDecade()).toBeFalsy();
    });
});

describe('Carbon.isNextDecade()', (): void => {
    test('returns true if the instance is in the next decade', (): void => {
        const date = Carbon.now().addYears(10);

        expect(date.isNextDecade()).toBeTruthy();
    });

    test('returns false if the instance is not in the next decade', (): void => {
        const date = Carbon.now();

        expect(date.isNextDecade()).toBeFalsy();
    });
});

describe('Carbon.isLastDecade()', (): void => {
    test('returns true if the instance is in the last decade', (): void => {
        const date = Carbon.now().subYears(10);

        expect(date.isLastDecade()).toBeTruthy();
    });

    test('returns false if the instance is not in the last decade', (): void => {
        const date = Carbon.now();

        expect(date.isLastDecade()).toBeFalsy();
    });
});

describe('Carbon.isSameCentury()', (): void => {
    test('returns true if the instance is in the same century as the provided date', (): void => {
        const date = Carbon.parse('2024-03-05', 'CET');

        expect(date.isSameCentury(Carbon.parse('2004-03-05', 'CET'))).toBeTruthy();
    });

    test('returns false if the instance is not in the same century as the provided date', (): void => {
        const date = Carbon.parse('2024-03-05', 'CET');

        expect(date.isSameCentury(Carbon.parse('1900-06-05', 'CET'))).toBeFalsy();
    });

    test('returns true if the instance is in the same century as now', (): void => {
        const date = Carbon.now();

        expect(date.isSameCentury()).toBeTruthy();
    });

    test('returns false if the instance is not in the same century as now', (): void => {
        const date = Carbon.now().subYears(110);

        expect(date.isSameCentury()).toBeFalsy();
    });
});

describe('Carbon.isCurrentCentury()', (): void => {
    test('returns true if the instance is in the current century', (): void => {
        const date = Carbon.now();

        expect(date.isCurrentCentury()).toBeTruthy();
    });

    test('returns false if the instance is not in the current century', (): void => {
        const date = Carbon.now().subYears(110);

        expect(date.isCurrentCentury()).toBeFalsy();
    });
});

describe('Carbon.isNextCentury()', (): void => {
    test('returns true if the instance is in the next century', (): void => {
        const date = Carbon.now().addYears(100);

        expect(date.isNextCentury()).toBeTruthy();
    });

    test('returns false if the instance is not in the next century', (): void => {
        const date = Carbon.now();

        expect(date.isNextCentury()).toBeFalsy();
    });
});

describe('Carbon.isLastCentury()', (): void => {
    test('returns true if the instance is in the last century', (): void => {
        const date = Carbon.now().subYears(100);

        expect(date.isLastCentury()).toBeTruthy();
    });

    test('returns false if the instance is not in the last century', (): void => {
        const date = Carbon.now();

        expect(date.isLastCentury()).toBeFalsy();
    });
});

describe('Carbon.isSameMillennium()', (): void => {
    test('returns true if the instance is in the same millennium as the provided date', (): void => {
        const date = Carbon.parse('2024-03-05', 'CET');

        expect(date.isSameMillennium(Carbon.parse('2004-03-05', 'CET'))).toBeTruthy();
    });

    test('returns false if the instance is not in the same millennium as the provided date', (): void => {
        const date = Carbon.parse('2024-03-05', 'CET');

        expect(date.isSameMillennium(Carbon.parse('1000-06-05', 'CET'))).toBeFalsy();
    });

    test('returns true if the instance is in the same millennium as now', (): void => {
        const date = Carbon.now();

        expect(date.isSameMillennium()).toBeTruthy();
    });

    test('returns false if the instance is not in the same millennium as now', (): void => {
        const date = Carbon.now().subYears(1000);

        expect(date.isSameMillennium()).toBeFalsy();
    });
});

describe('Carbon.isCurrentMillennium()', (): void => {
    test('returns true if the instance is in the current millennium', (): void => {
        const date = Carbon.now();

        expect(date.isCurrentMillennium()).toBeTruthy();
    });

    test('returns false if the instance is not in the current millennium', (): void => {
        const date = Carbon.now().subYears(1000);

        expect(date.isCurrentMillennium()).toBeFalsy();
    });
});

describe('Carbon.isNextMillennium()', (): void => {
    test('returns true if the instance is in the next millennium', (): void => {
        const date = Carbon.now().addYears(1000);

        expect(date.isNextMillennium()).toBeTruthy();
    });

    test('returns false if the instance is not in the next millennium', (): void => {
        const date = Carbon.now();

        expect(date.isNextMillennium()).toBeFalsy();
    });
});

describe('Carbon.isLastMillennium()', (): void => {
    test('returns true if the instance is in the last millennium', (): void => {
        const date = Carbon.now().subYears(1000);

        expect(date.isLastMillennium()).toBeTruthy();
    });

    test('returns false if the instance is not in the last millennium', (): void => {
        const date = Carbon.now();

        expect(date.isLastMillennium()).toBeFalsy();
    });
});

describe('Carbon.isSameAs()', (): void => {
    test('returns true when the formatted dates match', (): void => {
        const carbon       = Carbon.parse('2024-03-10 15:00:00', 'CET');
        const date: string = '2024-03-10 15:00:00';

        expect(carbon.isSameAs('Y-m-d H:i:s', date)).toBeTruthy();
    });

    test('returns false when the formatted dates do not match', (): void => {
        const carbon = Carbon.parse('2024-03-10 15:00:00', 'CET');
        const date   = Carbon.parse('2024-03-10 16:00:00', 'CET');

        expect(carbon.isSameAs('Y-m-d H:i:s', date)).toBeFalsy();
    });

    test('returns true when comparing only the year part and it matches', (): void => {
        const carbon = Carbon.parse('2024-03-10', 'CET');
        const date   = Carbon.parse('2024-12-25', 'CET');

        expect(carbon.isSameAs('YYYY', date)).toBeTruthy();
    });

    test('returns true when comparing with a native Date object and the dates match', (): void => {
        const carbon     = Carbon.parse('2024-03-10', 'CET');
        const date: Date = new Date('2024-03-10T00:00:00Z');

        expect(carbon.isSameAs('Y-m-d', date)).toBeTruthy();
    });

    test('returns false when comparing with a different format and the dates would otherwise match', (): void => {
        const carbon       = Carbon.parse('2024-03-10 15:00:00', 'CET');
        const date: string = '2024-03-10';

        expect(carbon.isSameAs('Y-m-d H:i:s', date)).toBeFalsy();
        expect(carbon.isSameAs('Y-m-d', date)).toBeTruthy();
    });

    test('returns true when the second date is null and the format matches the current date', (): void => {
        const today = new Carbon();

        expect(today.isSameAs('Y-m-d')).toBeTruthy();
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
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toCookieString()).toBe('Friday, 01-Mar-2024 12:45:00 CET');
    });
});

describe('Carbon.toIsoString()', (): void => {
    test('formats the instance as ISO8601 correctly without keeping offset', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toIsoString()).toBe('2024-03-01T11:45:00.000Z');
    });

    test('formats the instance as ISO8601 correctly and keeps the offset', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toIsoString(true)).toBe('2024-03-01T12:45:00.000+01:00');
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
        expect(Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc850String()).toBe('Friday, 01-Mar-24 12:45:00 CET');
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
    test('returns format H:i:s.u for precision "microsecond"', (): void => {
        expect(Carbon.parse().getTimeFormatByPrecision('microsecond')).toBe('H:i:s.u');
    });

    test('returns format H:i:s.v for precision "millisecond"', (): void => {
        expect(Carbon.parse().getTimeFormatByPrecision('millisecond')).toBe('H:i:s.v');
    });

    test('returns format H:i:s for precision "second"', (): void => {
        expect(Carbon.parse().getTimeFormatByPrecision('second')).toBe('H:i:s');
    });

    test('returns format H:i for precision "minute"', (): void => {
        expect(Carbon.parse().getTimeFormatByPrecision('minute')).toBe('H:i');
    });

    test('throws error for invalid precision', (): void => {
        expect(() => Carbon.parse().getTimeFormatByPrecision('hour')).toThrow('Precision unit expected among: minute, second, millisecond and microsecond.');
    });
});

describe('Carbon.toArray()', (): void => {
    test('returns default array representation', (): void => {
        expect(() => Carbon.parse().toArray()).toThrow('toArray method is not supported.');
    });
});

describe('Carbon.toObject()', (): void => {
    test('returns default object representation', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00').toObject()).toMatchObject({
            year     : 2024,
            month    : 3,
            day      : 1,
            dayOfWeek: 5,
            dayOfYear: 61,
            hour     : 12,
            minute   : 45,
            second   : 0,
            micro    : undefined,
            timestamp: 1709293500,
            formatted: '2024-03-01 12:45:00',
            timezone : 'UTC (+01:00)',
        });
    });
});

describe('Carbon.toJson()', (): void => {
    test('return the ISO-8601 string with UTC timezone.', (): void => {
        expect(Carbon.parse('2024-03-01 12:45:00').toJson()).toBe('2024-03-01T11:45:00.000Z');
    });
});

describe('Carbon.toDate()', (): void => {
    test('returns a Date instance', (): void => {
        expect(Carbon.now().toDate()).toBeInstanceOf(Date);
    });

    test('returns a Date object', (): void => {
        const date: Date = new Date(new Date().toLocaleString('en-US', { timeZone: 'UTC' }));

        expect(Carbon.now('UTC').toDate()).toEqual(date);
    });
});

describe('Carbon.toString()', (): void => {
    test('returns the formatted date string', (): void => {
        const carbon = Carbon.now();

        expect(carbon.toString()).toBe(carbon.date);
    });
});

describe('Carbon.get()', (): void => {
    test('\'year\' returns the year', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('year')).toEqual(2024);
    });

    test('\'month\' returns the month', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('month')).toEqual(2);
    });

    test('\'week\' returns the week', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('week')).toEqual(9);
    });

    test('\'day\' returns the day', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('day')).toEqual(29);
    });

    test('\'hour\' returns the hour', (): void => {
        expect(Carbon.parse('2024-02-29 12:30:45', 'CET').get('hour')).toEqual(12);
    });

    test('\'minute\' returns the minute', (): void => {
        expect(Carbon.parse('2024-02-29 12:30:45', 'CET').get('minute')).toEqual(30);
    });

    test('\'second\' returns the second', (): void => {
        expect(Carbon.parse('2024-02-29 12:30:45', 'CET').get('second')).toEqual(45);
    });

    test('\'millisecond\' returns the millisecond', (): void => {
        expect(Carbon.parse('2024-02-29 12:30:45.123', 'CET').get('millisecond')).toEqual(123);
    });

    test('\'CET\' returns the microsecond', (): void => {
        expect(() => Carbon.parse('2024-02-29 12:30:45.123456', 'CET').get('microsecond')).toThrow('Microseconds are not supported.');
    });

    test('\'timestamp\' returns the timestamp', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('timestamp')).toEqual(1709164800);
    });

    test('\'dayOfWeek\' returns the day of the week', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('dayOfWeek')).toEqual(4);
    });

    test('\'dayOfYear\' returns the day of the year', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('dayOfYear')).toEqual(60);
    });

    test('\'daysInMonth\' returns the day of the year', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('daysInMonth')).toEqual(29);
    });

    test('\'quarter\' returns the quarter', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('quarter')).toEqual(1);
    });

    test('\'decade\' returns the decade', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('decade')).toEqual(203);
    });

    test('\'century\' returns the century', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('century')).toEqual(21);
    });

    test('returns the millennium', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('millennium')).toEqual(3);
    });

    test('\'offset\' returns the offset in seconds', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('offset')).toEqual(3600);
    });

    test('returns whether it is in daylight saving time', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('dst')).toEqual(false);
    });

    test('returns whether it is local time', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('local')).toEqual(true);
    });

    test('returns whether it is UTC time', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('utc')).toEqual(false);
    });

    test('returns the timezone', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').get('timezone')).toEqual('CET (+01:00)');
    });

    test('throws an error for an unknown getter', (): void => {
        expect(() => Carbon.parse('2024-02-29', 'CET').get('unknown')).toThrow('Unknown getter.');
    });
});

describe('Carbon.setDate()', (): void => {
    test('sets the date to the given year, month, and day', (): void => {
        expect(Carbon.parse('2024-01-01', 'CET').setDate(2025, 11, 25).get('year')).toEqual(2025);
        expect(Carbon.parse('2024-01-01', 'CET').setDate(2025, 11, 25).get('month')).toEqual(12); // Note: month is 0-indexed in JavaScript Date, but not here
        expect(Carbon.parse('2024-01-01', 'CET').setDate(2025, 11, 25).get('day')).toEqual(25);
    });
});

describe('Carbon.setTime()', (): void => {
    test('sets the time to the given hour, minute, second, and millisecond', (): void => {
        const carbon = Carbon.parse('2024-03-31', 'CET').setTime(12, 30, 15, 250);

        expect(carbon.get('hour')).toEqual(12);
        expect(carbon.get('minute')).toEqual(30);
        expect(carbon.get('second')).toEqual(15);
        expect(carbon.get('millisecond')).toEqual(250);
    });
});

describe('Carbon.setYear()', (): void => {
    test('sets the year to the given value', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').setYear(2025).get('year')).toEqual(2025);
    });
});

describe('Carbon.setMonth()', (): void => {
    test('sets the month to the given value', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').setMonth(1).get('month')).toEqual(1);
    });
});

describe('Carbon.setDay()', (): void => {
    test('sets the day to the given value', (): void => {
        expect(Carbon.parse('2024-03-31', 'CET').setDay(15).get('day')).toEqual(15);
    });
});

describe('Carbon.setHour()', (): void => {
    test('sets the hour to the given value', (): void => {
        expect(Carbon.parse('2024-03-31 23:59', 'CET').setHour(12).get('hour')).toEqual(12);
    });
});

describe('Carbon.setMinute()', (): void => {
    test('sets the minute to the given value', (): void => {
        expect(Carbon.parse('2024-03-31 23:59', 'CET').setMinute(30).get('minute')).toEqual(30);
    });
});

describe('Carbon.setSecond()', (): void => {
    test('sets the second to the given value', (): void => {
        expect(Carbon.parse('2024-03-31 23:59:58', 'CET').setSecond(45).get('second')).toEqual(45);
    });
});

describe('Carbon.setMillisecond()', (): void => {
    test('sets the millisecond to the given value', (): void => {
        expect(Carbon.parse('2024-03-31 23:59:58.999', 'CET').setMillisecond(500).get('millisecond')).toEqual(500);
    });
});

describe('Carbon.addYear()', (): void => {
    test('adds one year to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addYear().get('year')).toEqual(2025);
    });

    test('adds multiple years to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addYears(5).get('year')).toEqual(2029);
    });
});

describe('Carbon.addMonth()', (): void => {
    test('adds one month to the instance', (): void => {
        expect(Carbon.parse('2024-01-31', 'CET').addMonth().get('month')).toEqual(3);
    });

    test('adds multiple months to the instance', (): void => {
        expect(Carbon.parse('2024-01-31', 'CET').addMonths(5).get('month')).toEqual(7);
    });
});

describe('Carbon.addDay()', (): void => {
    test('adds one day to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addDay().get('day')).toEqual(1);
    });

    test('adds multiple days to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addDays(5).get('day')).toEqual(5);
    });
});

describe('Carbon.addHour()', (): void => {
    test('adds one hour to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00', 'CET').addHour().get('hour')).toEqual(13);
    });

    test('adds multiple hours to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00', 'CET').addHours(5).get('hour')).toEqual(17);
    });
});

describe('Carbon.addMinute()', (): void => {
    test('adds one minute to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00', 'CET').addMinute().get('minute')).toEqual(1);
    });

    test('adds multiple minutes to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00', 'CET').addMinutes(5).get('minute')).toEqual(5);
    });
});

describe('Carbon.addSecond()', (): void => {
    test('adds one second to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00', 'CET').addSecond().get('second')).toEqual(1);
    });

    test('adds multiple seconds to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00', 'CET').addSeconds(5).get('second')).toEqual(5);
    });
});

describe('Carbon.addMillisecond()', (): void => {
    test('adds one millisecond to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00.000', 'CET').addMillisecond().get('millisecond')).toEqual(100);
    });

    test('adds multiple milliseconds to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00.000', 'CET').addMilliseconds(5).get('millisecond')).toEqual(500);
    });
});

describe('Carbon.addMillennium()', (): void => {
    test('adds one millennium to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addMillennium().get('year')).toEqual(3024);
    });

    test('adds multiple millennia to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addMillenniums(5).get('year')).toEqual(7024);
    });
});

describe('Carbon.addCentury()', (): void => {
    test('adds one century to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addCentury().get('year')).toEqual(2124);
    });

    test('adds multiple centuries to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addCenturies(5).get('year')).toEqual(2524);
    });
});

describe('Carbon.addDecade()', (): void => {
    test('adds one decade to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addDecade().get('year')).toEqual(2034);
    });

    test('adds multiple decades to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addDecades(5).get('year')).toEqual(2074);
    });
});

describe('Carbon.addQuarter()', (): void => {
    test('adds one quarter to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addQuarter().get('month')).toEqual(5);
    });

    test('adds multiple quarters to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addQuarters(2).get('month')).toEqual(8);
    });
});

describe('Carbon.addWeek()', (): void => {
    test('adds one week to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addWeek().get('day')).toEqual(7);
    });

    test('adds multiple weeks to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addWeeks(2).get('day')).toEqual(14);
    });
});

describe('Carbon.subYear()', () => {
    test('subtracts one year from the instance', () => {
        expect(Carbon.parse('2024-02-29', 'CET').subYear().get('year')).toEqual(2023);
    });

    test('subtracts multiple years from the instance', () => {
        expect(Carbon.parse('2024-02-29', 'CET').subYears(5).get('year')).toEqual(2019);
    });
});

describe('Carbon.subMonth()', () => {
    test('subtracts one month from the instance', () => {
        expect(Carbon.parse('2024-02-29', 'CET').subMonth().get('month')).toEqual(1);
    });

    test('subtracts multiple months from the instance', () => {
        expect(Carbon.parse('2024-02-29', 'CET').subMonths(5).get('month')).toEqual(9);
    });
});

describe('Carbon.subDay()', () => {
    test('subtracts one day from the instance', () => {
        expect(Carbon.parse('2024-02-29', 'CET').subDay().get('day')).toEqual(28);
    });

    test('subtracts multiple days from the instance', () => {
        expect(Carbon.parse('2024-02-29', 'CET').subDays(5).get('day')).toEqual(24);
    });
});

describe('Carbon.subHour()', () => {
    test('subtracts one hour from the instance', () => {
        expect(Carbon.parse('2024-02-29T12:00:00', 'CET').subHour().get('hour')).toEqual(11);
    });

    test('subtracts multiple hours from the instance', () => {
        expect(Carbon.parse('2024-02-29T12:00:00', 'CET').subHours(5).get('hour')).toEqual(7);
    });
});

describe('Carbon.subMinute()', () => {
    test('subtracts one minute from the instance', () => {
        expect(Carbon.parse('2024-02-29T12:00:00', 'CET').subMinute().get('minute')).toEqual(59);
    });

    test('subtracts multiple minutes from the instance', () => {
        expect(Carbon.parse('2024-02-29T12:00:00', 'CET').subMinutes(5).get('minute')).toEqual(55);
    });
});

describe('Carbon.subSecond()', () => {
    test('subtracts one second from the instance', () => {
        expect(Carbon.parse('2024-02-29T12:00:00', 'CET').subSecond().get('second')).toEqual(59);
    });

    test('subtracts multiple seconds from the instance', () => {
        expect(Carbon.parse('2024-02-29T12:00:00', 'CET').subSeconds(5).get('second')).toEqual(55);
    });
});

describe('Carbon.subMillisecond()', () => {
    test('subtracts one millisecond from the instance', () => {
        expect(Carbon.parse('2024-02-29T12:00:00.200', 'CET').subMillisecond().get('millisecond')).toEqual(199);
    });

    test('subtracts multiple milliseconds from the instance', () => {
        expect(Carbon.parse('2024-02-29T12:00:00.500', 'CET').subMilliseconds(5).get('millisecond')).toEqual(495);
    });
});

describe('Carbon.subMillennium()', () => {
    test('subtracts one millennium from the instance', () => {
        expect(Carbon.parse('3024-02-29', 'CET').subMillennium().get('year')).toEqual(2024);
    });

    test('subtracts multiple millennia from the instance', () => {
        expect(Carbon.parse('6024-02-29', 'CET').subMillenniums(4).get('year')).toEqual(2024);
    });
});

describe('Carbon.subCentury()', () => {
    test('subtracts one century from the instance', () => {
        expect(Carbon.parse('2124-02-29', 'CET').subCentury().get('year')).toEqual(2024);
    });

    test('subtracts multiple centuries from the instance', () => {
        expect(Carbon.parse('2524-02-29', 'CET').subCenturies(5).get('year')).toEqual(2024);
    });
});

describe('Carbon.subDecade()', () => {
    test('subtracts one decade from the instance', () => {
        expect(Carbon.parse('2034-02-29', 'CET').subDecade().get('year')).toEqual(2024);
    });

    test('subtracts multiple decades from the instance', () => {
        expect(Carbon.parse('2074-02-29', 'CET').subDecades(5).get('year')).toEqual(2024);
    });
});

describe('Carbon.subQuarter()', () => {
    test('subtracts one quarter from the instance', () => {
        expect(Carbon.parse('2024-08-29', 'CET').subQuarter().get('month')).toEqual(5);
    });

    test('subtracts multiple quarters from the instance', () => {
        expect(Carbon.parse('2024-11-29', 'CET').subQuarters(2).get('month')).toEqual(5);
    });
});

describe('Carbon.subWeek()', () => {
    test('subtracts one week from the instance', () => {
        expect(Carbon.parse('2024-03-07', 'CET').subWeek().get('day')).toEqual(29);
    });

    test('subtracts multiple weeks from the instance', () => {
        expect(Carbon.parse('2024-03-21', 'CET').subWeeks(2).get('day')).toEqual(7);
    });
});

describe('Carbon.addUnit()', (): void => {
    test('\'millennium\' adds 1000 years to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addUnit('millennium').format('Y-m-d')).toEqual('3024-02-29');
    });

    test('\'century\' adds 100 years to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addUnit('century').format('Y-m-d')).toEqual('2124-02-29');
    });

    test('\'decade\' adds 10 years to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addUnit('decade').format('Y-m-d')).toEqual('2034-03-01');
    });

    test('\'quarter\' adds 3 months to the instance', (): void => {
        expect(Carbon.parse('2024-01-01', 'CET').addUnit('quarter').format('Y-m-d')).toEqual('2024-04-01');
    });

    test('\'week\' adds 7 days to the instance', (): void => {
        expect(Carbon.parse('2024-02-01', 'CET').addUnit('week').format('Y-m-d')).toEqual('2024-02-08');
    });

    test('\'year\' adds 1 year to the instance', (): void => {
        expect(Carbon.parse('2024-02-01', 'CET').addUnit('year').format('Y-m-d')).toEqual('2025-02-01');
    });

    test('\'year\' adds multiple years to the instance', (): void => {
        expect(Carbon.parse('2024-02-29', 'CET').addUnit('year', 2).format('Y-m-d')).toEqual('2026-03-01');
    });

    test('\'month\' adds 1 month to the instance', (): void => {
        expect(Carbon.parse('2024-01-01', 'CET').addUnit('month').format('Y-m-d')).toEqual('2024-02-01');
    });

    test('\'month\' adds multiple months to the instance', (): void => {
        expect(Carbon.parse('2024-01-01', 'CET').addUnit('month', 6).format('Y-m-d')).toEqual('2024-07-01');
    });

    test('\'day\' adds 1 day to the instance', (): void => {
        expect(Carbon.parse('2024-02-01', 'CET').addUnit('day').format('Y-m-d')).toEqual('2024-02-02');
    });

    test('\'day\' adds multiple days to the instance', (): void => {
        expect(Carbon.parse('2024-02-01', 'CET').addUnit('day', 14).format('Y-m-d')).toEqual('2024-02-15');
    });

    test('\'hour\' adds 1 hour to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00', 'CET').addUnit('hour').format('H:i')).toEqual('13:00');
    });

    test('\'hour\' adds multiple hours to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00', 'CET').addUnit('hour', 5).format('H:i')).toEqual('17:00');
    });

    test('\'minute\' adds 1 minute to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00', 'CET').addUnit('minute').format('H:i')).toEqual('12:01');
    });

    test('\'minute\' adds multiple minutes to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00', 'CET').addUnit('minute', 30).format('H:i')).toEqual('12:30');
    });

    test('\'second\' adds 1 second to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00', 'CET').addUnit('second').format('H:i:s')).toEqual('12:00:01');
    });

    test('\'second\' adds multiple seconds to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00', 'CET').addUnit('second', 45).format('H:i:s')).toEqual('12:00:45');
    });

    test('\'millisecond\' adds 1 millisecond to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00.000', 'CET').addUnit('millisecond').format('H:i:s.v')).toEqual('12:00:00.100');
    });

    test('\'millisecond\' adds multiple milliseconds to the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00.000', 'CET').addUnit('millisecond', 500).format('H:i:s.v')).toEqual('12:00:00.500');
    });

    test('throws an error for an unsupported unit', (): void => {
        expect(() => Carbon.parse('2024-02-29', 'CET').addUnit('unsupported', 1)).toThrow('Unknown unit.');
    });
});

describe('Carbon.subUnit()', (): void => {
    test('\'millennium\' subtracts 1000 years from the instance', (): void => {
        expect(Carbon.parse('3024-02-29', 'CET').subUnit('millennium').format('Y-m-d')).toEqual('2024-02-29');
    });

    test('\'century\' subtracts 100 years from the instance', (): void => {
        expect(Carbon.parse('2124-02-29', 'CET').subUnit('century').format('Y-m-d')).toEqual('2024-02-29');
    });

    test('\'decade\' subtracts 10 years from the instance', (): void => {
        expect(Carbon.parse('2034-02-29', 'CET').subUnit('decade').format('Y-m-d')).toEqual('2024-03-01');
    });

    test('\'quarter\' subtracts 3 months from the instance', (): void => {
        expect(Carbon.parse('2024-04-01', 'CET').subUnit('quarter').format('Y-m-d')).toEqual('2024-01-01');
    });

    test('\'week\' subtracts 7 days from the instance', (): void => {
        expect(Carbon.parse('2024-02-08', 'CET').subUnit('week').format('Y-m-d')).toEqual('2024-02-01');
    });

    test('\'year\' subtracts 1 year from the instance', (): void => {
        expect(Carbon.parse('2025-02-01', 'CET').subUnit('year').format('Y-m-d')).toEqual('2024-02-01');
    });

    test('\'year\' subtracts multiple years from the instance', (): void => {
        expect(Carbon.parse('2026-02-29', 'CET').subUnit('year', 2).format('Y-m-d')).toEqual('2024-03-01');
    });

    test('\'month\' subtracts 1 month from the instance', (): void => {
        expect(Carbon.parse('2024-02-01', 'CET').subUnit('month').format('Y-m-d')).toEqual('2024-01-01');
    });

    test('\'month\' subtracts multiple months from the instance', (): void => {
        expect(Carbon.parse('2024-07-01', 'CET').subUnit('month', 6).format('Y-m-d')).toEqual('2024-01-01');
    });

    test('\'day\' subtracts 1 day from the instance', (): void => {
        expect(Carbon.parse('2024-02-02', 'CET').subUnit('day').format('Y-m-d')).toEqual('2024-02-01');
    });

    test('\'day\' subtracts multiple days from the instance', (): void => {
        expect(Carbon.parse('2024-02-15', 'CET').subUnit('day', 14).format('Y-m-d')).toEqual('2024-02-01');
    });

    test('\'hour\' subtracts 1 hour from the instance', (): void => {
        expect(Carbon.parse('2024-02-29 13:00', 'CET').subUnit('hour').format('H:i')).toEqual('12:00');
    });

    test('\'hour\' subtracts multiple hours from the instance', (): void => {
        expect(Carbon.parse('2024-02-29 17:00', 'CET').subUnit('hour', 5).format('H:i')).toEqual('12:00');
    });

    test('\'minute\' subtracts 1 minute from the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:01', 'CET').subUnit('minute').format('H:i')).toEqual('12:00');
    });

    test('\'minute\' subtracts multiple minutes from the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:30', 'CET').subUnit('minute', 30).format('H:i')).toEqual('12:00');
    });

    test('\'second\' subtracts 1 second from the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:01', 'CET').subUnit('second').format('H:i:s')).toEqual('12:00:00');
    });

    test('\'second\' subtracts multiple seconds from the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:45', 'CET').subUnit('second', 45).format('H:i:s')).toEqual('12:00:00');
    });

    test('\'millisecond\' subtracts 1 millisecond from the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00.200', 'CET').subUnit('millisecond').format('H:i:s.v')).toEqual('12:00:00.199');
    });

    test('\'millisecond\' subtracts multiple seconds from the instance', (): void => {
        expect(Carbon.parse('2024-02-29 12:00:00.500', 'CET').subUnit('millisecond', 500).format('H:i:s.v')).toEqual('12:00:00.000');
    });

    test('throws an error for an unsupported unit', (): void => {
        expect(() => Carbon.parse('2024-02-29', 'CET').subUnit('unsupported', 1)).toThrow('Unknown unit.');
    });
});
