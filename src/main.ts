class Str {
    /**
     * Pad the left side of a string with another.
     *
     * @param { string } value
     * @param { number } length
     * @param { string } pad
     *
     * @return { string }
     */
    static padLeft(value: string, length: number, pad: string = ' '): string {
        const short: number = Math.max(0, length - (value.length ?? 0));

        return pad.repeat(short).substring(0, short) + value;
    }

    /**
     * Pad the right side of a string with another.
     *
     * @param { string } value
     * @param { number } length
     * @param { string } pad
     *
     * @return { string }
     */
    static padRight(value: string, length: number, pad: string = ' '): string {
        const short: number = Math.max(0, length - value.length);

        return value + pad.repeat(short).substring(0, short);
    }

    /**
     * Replace the given value in the given string.
     *
     * @param { string | string[] } search
     * @param { string } replace
     * @param { string } subject
     * @param { boolean } caseSensitive
     *
     * @return { string }
     */
    static replace(search: string | string[], replace: string, subject: string, caseSensitive: boolean = true): string {
        if (!(search instanceof Array)) {
            search = [search];
        }

        search.forEach((term: string | RegExp) => {
            if (!caseSensitive) {
                term = new RegExp(term, 'gi');
            }

            subject = subject.replaceAll(term, replace);
        });

        return subject;
    }

}

class Carbon {
    /**
     * A date/time string.
     *
     * @private
     *
     * @type { string | null }
     */
    #date: string | null;

    /**
     * A timezone string.
     *
     * @private
     *
     * @type { string | null }
     */
    #timezone: string | null;

    /**
     * A date/time string.
     *
     * @private
     * @type { string }
     */
    date: string;

    /**
     * Create new Carbon instance.
     *
     * @param { string | null } date
     * @param { string | null } timezone
     */
    constructor(date: string | null = null, timezone: string | null = null) {
        this.#date     = date;
        this.#timezone = timezone;

        this.date = this.format('Y-m-d H:i:s.v T (P)');
    }

    /**
     * Get a Carbon instance for the current date and time.
     *
     * @param { string| null } timezone
     *
     * @returns { Carbon }
     */
    static now(timezone: string | null = null): Carbon {
        return new Carbon('now', timezone);
    }

    /**
     * Parse the date.
     *
     * @param { string | null } date
     * @param { string | null } timezone
     *
     * @returns { void }
     */
    static parse(date: string | null = null, timezone: string | null = null): Carbon {
        return new Carbon(date, timezone);
    }

    /**
     * Returns the formatted date string.
     *
     * @param { string } format
     *
     * @returns { string }
     */
    format(format: string): string {
        const options: object = {
            year                  : 'numeric',
            month                 : 'numeric',
            day                   : 'numeric',
            hour                  : 'numeric',
            minute                : 'numeric',
            second                : 'numeric',
            fractionalSecondDigits: 3,
            hour12                : false,
            timeZone              : this.#timezone ?? undefined,
        };

        const instance: Date = this.#date === 'now' || this.#date === null ? new Date() : new Date(this.#date);

        if (instance.toString() === 'Invalid Date') {
            return 'Invalid Date';
        }

        let date: string     = '';
        let days: string[]   = [];
        let months: string[] = [];

        const now: Date = new Date(instance.toLocaleString('en-US', options));

        const month: number         = now.getMonth();
        const dayOfTheWeek: number  = now.getDay();
        const dayOfTheMonth: number = now.getDate();
        const year: number          = now.getFullYear();
        const hours: number         = now.getHours();
        const minutes: number       = now.getMinutes();
        const seconds: number       = now.getSeconds();
        const milliseconds: number  = now.getMilliseconds();

        const elements: RegExpMatchArray | null = format.match(/\\?.|./g);

        for (const element of elements!) {
            switch (element) {
                // Day of the month, 2 digits with leading zeros (e.g., 01 to 31)
                case 'd':
                    date += Str.padLeft(dayOfTheMonth.toString(), 2, '0');

                    break;

                // A textual representation of a day, three letters (e.g., Mon through Sun)
                case 'D':
                    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];
                    date += days[dayOfTheWeek];

                    break;

                // Day of the month without leading zeros (e.g., 1 to 31)
                case 'j':
                    date += dayOfTheMonth;

                    break;

                // A full textual representation of the day of the week (e.g., Sunday through Saturday)
                case 'l':
                    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    date += days[dayOfTheWeek];

                    break;

                // ISO 8601 numeric representation of the day of the week (e.g., 1 (for Monday) through 7 (for Sunday))
                case 'N':
                    date += dayOfTheWeek;

                    break;

                // English ordinal suffix for the day of the month, 2 characters (e.g., st, nd, rd or th)
                case 'S': {
                    let suffix: { [key: number]: string } = { 1: 'st', 2: 'nd', 3: 'rd', 21: 'st', 22: 'nd', 23: 'rd', 31: 'st' };
                    date += suffix[dayOfTheMonth] ?? 'th';

                    break;
                }
                // Numeric representation of the day of the week (e.g., 0 (for Sunday) through 6 (for Saturday))
                case 'w':
                    date += dayOfTheWeek;

                    break;

                // Numeric representation of the day of the week (e.g., The day of the year (starting from 0))
                case 'z': {
                    let start: Date          = new Date(year, 0, 0);
                    let diff: number         = ((now as unknown as number) - (start as unknown as number)) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
                    let day: number          = 1000 * 60 * 60 * 24;
                    const currentDay: number = Math.floor(diff / day);
                    date += currentDay - 1;

                    break;
                }
                // ISO 8601 week number of year, weeks starting on Monday (e.g., 42 (the 42nd week in the year))
                case 'W': {
                    let parsedDate: Date = new Date(Date.UTC(year, month, dayOfTheMonth));
                    let weekDay: number  = parsedDate.getUTCDay() || 7;
                    parsedDate.setUTCDate(parsedDate.getUTCDate() + 4 - weekDay);
                    let yearStart: Date    = new Date(Date.UTC(parsedDate.getUTCFullYear(), 0, 1));
                    let weekNumber: number = Math.ceil(((((parsedDate as unknown as number) - (yearStart as unknown as number)) / 86400000) + 1) / 7);

                    date += Str.padLeft((weekNumber as unknown as string), 1, '0');

                    break;
                }
                // A full textual representation of a month, such as January or March (e.g., January through December)
                case 'F':
                    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                    date += months[month];

                    break;

                // Numeric representation of a month, with leading zeros (e.g., 01 through 12)
                case 'm': {
                    const currentMonth = month + 1;
                    date += Str.padLeft(currentMonth.toString(), 2, '0');

                    break;
                }
                // A short textual representation of a month, three letters (e.g., Jan through Dec)
                case 'M':
                    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    date += months[month];

                    break;

                // Numeric representation of a month, without leading zeros (e.g., 1 through 12)
                case 'n':
                    date += month + 1;

                    break;

                // Number of days in the given month (e.g., 28 through 31)
                case 't':
                    date += new Date(year, month + 1, 0).getDate();

                    break;

                // Whether it's a leap year (e.g., 1 if it is a leap year, 0 otherwise)
                case 'L':
                    date += new Date(year, 1, 29).getMonth() === 1 ? '1' : '0';

                    break;

                // ISO 8601 week-numbering year. This has the same value as Y,
                // except that if the ISO week number (W) belongs to the previous or next year,
                // that year is used instead. (e.g., 1999 or 2003)
                case 'o':
                    date += now.toISOString().substring(0, 4);

                    break;

                // An expanded full numeric representation of a year, at least 4 digits, with - for years BCE, and + for years CE. (e.g., -0055, +0787, +1999, +10191)
                case 'X':
                    date += year < 0 ? '-' + year : '+' + year;

                    break;

                // An expanded full numeric representation if required,
                // or a standard full numeral representation if possible (like Y).
                // At least four digits. Years BCE are prefixed with a -.
                // Years beyond (and including) 10000 are prefixed by a +. (e.g., -0055, 0787, 1999, +10191)
                case 'x':
                    date += year < 10000 ? year : '-' + year;

                    break;

                // A full numeric representation of a year, at least 4 digits, with - for years BCE. (e.g., -0055, 0787, 1999, 2003, 10191)
                case 'Y':
                    date += year;

                    break;

                // A two-digit representation of a year (e.g., 99 or 03)
                case 'y':
                    date += year.toString().substring(2);

                    break;

                // Lowercase Ante meridiem and Post meridiem (e.g., am or pm)
                case 'a':
                    date += hours < 12 ? 'am' : 'pm';

                    break;

                // Uppercase Ante meridiem and Post meridiem (e.g., AM or PM)
                case 'A':
                    date += hours < 12 ? 'AM' : 'PM';

                    break;

                // Swatch Internet time (e.g., 000 through 999)
                case 'B': {
                    const utcHours   = now.getUTCHours();
                    const utcMinutes = now.getUTCMinutes();
                    const utcSeconds = now.getUTCSeconds();

                    date += Math.floor((((utcHours + 1) % 24) + utcMinutes / 60 + utcSeconds / 3600) * 1000 / 24);

                    break;
                }
                // 12-hour format of an hour without leading zeros (e.g., 1 through 12)
                case 'g':
                    date += hours > 12 ? hours - 12 : hours;

                    break;

                // 24-hour format of an hour without leading zeros (e.g., 0 through 23)
                case 'G':
                    date += hours;

                    break;

                // 12-hour format of an hour with leading zeros (e.g., 01 through 12)
                case 'h':
                    date += Str.padLeft((hours > 12 ? hours - 12 : hours).toString(), 2, '0');

                    break;

                // 24-hour format of an hour with leading zeros (e.g., 00 through 23)
                case 'H':
                    date += Str.padLeft(hours.toString(), 2, '0');

                    break;

                // Minutes with leading zeros (e.g., 00 to 59)
                case 'i':
                    date += Str.padLeft(minutes.toString(), 2, '0');

                    break;

                // Seconds with leading zeros (e.g., 00 to 59)
                case 's':
                    date += Str.padLeft(seconds.toString(), 2, '0');

                    break;

                // Microseconds. (e.g., 654321)
                case 'u':
                    // date += Str.padRight((milliseconds * 1000).toString(), 6, '0');
                    throw new Error('Microseconds are not supported at the moment.');

                // Milliseconds. (e.g., 654)
                case 'v': {
                    date += Str.padLeft(milliseconds.toString(), 3, '0');

                    break;
                }

                // Timezone identifier (e.g., UTC, GMT, Atlantic/Azores)
                case 'e': {
                    date += Intl.DateTimeFormat('en-us', { timeZone: this.#timezone ?? undefined }).resolvedOptions().timeZone;

                    break;
                }

                // Whether the date is in daylight saving time (e.g., 1 if Daylight Saving Time, 0 otherwise)
                case 'I': {
                    let january: number = new Date(year, 0, 1).getTimezoneOffset();
                    let july: number    = new Date(year, 6, 1).getTimezoneOffset();

                    date += Math.max(january, july) !== now.getTimezoneOffset() ? '1' : '0';

                    break;
                }
                // Difference to Greenwich time (GMT) without colon between hours and minutes (e.g., +0200)
                case 'O': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'longOffset', timeZone: this.#timezone ?? undefined, })
                        .split(', ')
                        .pop()!
                        .trim();

                    date += timeZoneData.length !== 3 ? timeZoneData.substring(3).replace(':', '') : '+0000';

                    break;
                }

                // Difference to Greenwich time (GMT) with colon between hours and minutes (e.g., +02:00)
                case 'P': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'longOffset', timeZone: this.#timezone ?? undefined, })
                        .split(', ')
                        .pop()!
                        .trim();

                    date += timeZoneData.length !== 3 ? timeZoneData.substring(3) : '+00:00';

                    break;
                }

                // The same as P, but returns Z instead of +00:00 (e.g., +02:00)
                case 'p': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'longOffset', timeZone: this.#timezone ?? undefined, })
                        .split(', ')
                        .pop()!
                        .trim();

                    date += timeZoneData === 'GMT' ? 'Z' : timeZoneData.substring(3);

                    break;
                }

                // Timezone abbreviation, if known; otherwise the GMT offset (e.g., EST, MDT, +05)
                case 'T': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'short', timeZone: this.#timezone ?? undefined, })
                        .split(', ')
                        .pop()!
                        .trim();

                    date += timeZoneData.replace('GMT', 'UTC').split(/[+-]/)[0];

                    break;
                }

                // Timezone offset in seconds.
                // The offset for timezones west of UTC is always negative,
                // and for those east of UTC is always positive. (e.g., -43200 through 50400)
                case 'Z': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'short', timeZone: this.#timezone ?? undefined, })
                        .split(', ')
                        .pop()!
                        .trim();

                    date += timeZoneData === 'GMT' ? 0 : parseInt(timeZoneData.substring(3)) * 3600;

                    break;
                }

                // ISO 8601 date (e.g., 2004-02-12T15:19:21+00:00)
                case 'c': {
                    date += `${this.format('Y-m-d\\TH:i:sP')}`;

                    break;
                }
                // RFC 2822/RFC 5322 formatted date (e.g., Thu, 21 Dec 2000 16:01:07 +0200)
                case 'r': {
                    date += this.format('D, d M Y H:i:s O');

                    break;
                }

                // Seconds since the Unix Epoch (e.g., January 1, 1970 00:00:00 GMT)
                case 'U': {
                    date += Math.floor(now.getTime() / 1000);

                    break;
                }

                default:
                    date += element.length >= 2 && element.indexOf('\\') > -1 ? element.replace('\\', '') : element;
            }
        }

        return date;
    }

    /**
     * Format the instance as a string.
     *
     * @returns { string }
     */
    toString(): string {
        return this.date;
    }
}

if (typeof exports != 'undefined') {
    module.exports.Carbon = Carbon;
}

// Hack to test this code, global is not available in the browser.
if (typeof global !== 'undefined') {
    const _global: any = global;

    _global.Carbon = Carbon;
}