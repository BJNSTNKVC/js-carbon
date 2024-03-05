enum DayOfTheWeek {
    Sunday    = 0,
    Monday    = 1,
    Tuesday   = 2,
    Wednesday = 3,
    Thursday  = 4,
    Friday    = 5,
    Saturday  = 6,
}

enum Constants {
    YearsPerMillennium         = 1000,
    YearsPerCentury            = 100,
    YearsPerDecade             = 10,
    MonthsPerYear              = 12,
    MonthsPerQuarter           = 3,
    QuartersPerYear            = 4,
    WeeksPerYear               = 52,
    WeeksPerMonth              = 4,
    DaysPerYear                = 365,
    DaysPerWeek                = 7,
    HoursPerDay                = 24,
    MinutesPerHour             = 60,
    SecondsPerMinute           = 60,
    SecondsPerHour             = 3600,
    MillisecondsPerSecond      = 1000,
    MillisecondsPerDay         = 86400000,
    MicrosecondsPerMillisecond = 1000,
    MicrosecondsPerSecond      = 1000000
}

class Carbon {
    /**
     * A date/time string.
     *
     * @private
     *
     * @type { Date }
     */
    #date: Date;

    /**
     * A timezone string.
     *
     * @private
     *
     * @type { string | null }
     */
    #timezone: Timezone | null;

    /**
     * Standard to represent date and time information in XML feeds.
     *
     * @private
     * @type { string }
     */
    readonly #ATOM: string = 'Y-m-d\\TH:i:sP';

    /**
     * Standard to represent date and time information in Cookies.
     *
     * @private
     * @type { string }
     */
    readonly #COOKIE: string = 'l, d-M-Y H:i:s T';

    /**
     * International standard covering the worldwide exchange and communication of date and time-related data.
     *
     * @private
     * @type { string }
     */
    readonly #ISO8601: string = 'Y-m-d\\TH:i:sO';

    /**
     * Expanded international standard covering the worldwide exchange and communication of date and time-related data.
     *
     * @private
     * @type { string }
     */
    readonly #ISO8601_EXPANDED: string = 'X-m-d\\TH:i:sP';

    /**
     * Standard for the Format of Arpa Internet Text Messages.
     *
     * @private
     * @type { string }
     */
    readonly #RFC822: string = 'D, d M y H:i:s O';

    /**
     * Standard for Interchange of USENET Messages. (June 1983)
     *
     * @private
     * @type { string }
     */
    readonly #RFC850: string = 'l, d-M-y H:i:s T';

    /**
     * Standard for Interchange of USENET Messages. (December 1987)
     *
     * @private
     * @type { string }
     */
    readonly #RFC1036: string = 'D, d M y H:i:s O';

    /**
     * Standard to represent date and time information in Internet protocols.
     *
     * @private
     * @type { string }
     */
    readonly #RFC1123: string = 'D, d M Y H:i:s O';

    /**
     * Standard for Internet Message Format.
     *
     * @private
     * @type { string }
     */
    readonly #RFC2822: string = 'D, d M Y H:i:s O';

    /**
     * Standard for Date and Time on the Internet.
     *
     * @private
     * @type { string }
     */
    readonly #RFC3339: string = 'Y-m-d\\TH:i:sP';

    /**
     * Extended standard for Date and Time on the Internet.
     *
     * @private
     * @type { string }
     */
    readonly #RFC3339_EXTENDED: string = 'Y-m-d\\TH:i:s.vP';

    /**
     * Standard to represent date and time information in Hypertext Transfer Protocol.
     *
     * @private
     * @type { string }
     */
    readonly #RFC7231: string = 'D, d M Y H:i:s \\G\\M\\T';

    /**
     * Standard to represent date and time information in RSS feeds.
     *
     * @private
     * @type { string }
     */
    readonly #RSS: string = 'D, d M Y H:i:s O';

    /**
     * Standard to represent date and time information in a machine-readable and unambiguous manner.
     *
     * @private
     * @type { string }
     */
    readonly #W3C: string = 'Y-m-d\\TH:i:sP';

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
    constructor(date: string | null = null, timezone: Timezone | null = null) {
        this.#date     = date === null || date === 'now' ? new Date() : new Date(date);
        this.#timezone = timezone;

        this.date = this.format('Y-m-d H:i:s.v T (P)');
    }

    /**
     * Get a Carbon instance for the current date and time.
     *
     * @param { string | null } timezone
     *
     * @returns { Carbon }
     */
    static now(timezone: Timezone | null = null): Carbon {
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
    static parse(date: string | null = null, timezone: Timezone | null = null): Carbon {
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
        if (this.#date.toString() === 'Invalid Date') {
            return 'Invalid Date';
        }

        let date: string = '';

        const now: Date = new Date(this.#date.toLocaleString('en-US', { timeZone: this.#timezone ?? undefined }));

        const month: number         = now.getMonth();
        const dayOfTheWeek: number  = now.getDay();
        const dayOfTheMonth: number = now.getDate();
        const year: number          = now.getFullYear();
        const hours: number         = now.getHours();
        const minutes: number       = now.getMinutes();
        const seconds: number       = now.getSeconds();

        const elements: RegExpMatchArray | null = format.match(/\\?.|./g);

        for (const element of elements!) {
            switch (element) {
                // Day of the month, 2 digits with leading zeros (e.g., 01 to 31)
                case 'd':
                    date += dayOfTheMonth.toString().padStart(2, '0');

                    break;

                // A textual representation of a day, three letters (e.g., Mon through Sun)
                case 'D':
                    date += now.toLocaleString('default', { weekday: 'short' });

                    break;

                // Day of the month without leading zeros (e.g., 1 to 31)
                case 'j':
                    date += dayOfTheMonth;

                    break;

                // A full textual representation of the day of the week (e.g., Sunday through Saturday)
                case 'l':
                    date += now.toLocaleString('default', { weekday: 'long' });

                    break;

                // ISO 8601 numeric representation of the day of the week (e.g., 1 (for Monday) through 7 (for Sunday))
                case 'N':
                    date += dayOfTheWeek === 0 ? DayOfTheWeek.Sunday : dayOfTheWeek;

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
                    let day: number          = Constants.MillisecondsPerDay;
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
                    let weekNumber: number = Math.ceil(((((parsedDate as unknown as number) - (yearStart as unknown as number)) / Constants.MillisecondsPerDay) + 1) / Constants.DaysPerWeek);

                    date += weekNumber.toString().padStart(2, '0');

                    break;
                }
                // A full textual representation of a month, such as January or March (e.g., January through December)
                case 'F':
                    date += now.toLocaleString('default', { month: 'long' });

                    break;

                // Numeric representation of a month, with leading zeros (e.g., 01 through 12)
                case 'm': {
                    const currentMonth: number = month + 1;
                    date += currentMonth.toString().padStart(2, '0');

                    break;
                }
                // A short textual representation of a month, three letters (e.g., Jan through Dec)
                case 'M':
                    date += now.toLocaleString('default', { month: 'short' });

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
                    const hours: number   = now.getUTCHours();
                    const minutes: number = now.getUTCMinutes();
                    const seconds: number = now.getUTCSeconds();

                    date += Math.floor((((hours + 1) % Constants.HoursPerDay) + minutes / Constants.MinutesPerHour + seconds / Constants.SecondsPerHour) * Constants.MillisecondsPerSecond / Constants.HoursPerDay);

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
                    date += (hours > 12 ? hours - 12 : hours).toString().padStart(2, '0');

                    break;

                // 24-hour format of an hour with leading zeros (e.g., 00 through 23)
                case 'H':
                    date += hours.toString().padStart(2, '0');

                    break;

                // Minutes with leading zeros (e.g., 00 to 59)
                case 'i':
                    date += minutes.toString().padStart(2, '0');

                    break;

                // Seconds with leading zeros (e.g., 00 to 59)
                case 's':
                    date += seconds.toString().padStart(2, '0');

                    break;

                // Microseconds. (e.g., 654321)
                case 'u':
                    throw new Error('Microseconds are not supported.');

                // Milliseconds. (e.g., 654)
                case 'v': {
                    date += this.#date.getMilliseconds().toString().padEnd(3, '0');

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

                    date += this.#timezone ?? timeZoneData.replace('GMT', 'UTC').split(/[+-]/)[0];

                    break;
                }

                // Timezone offset in seconds.
                // The offset for timezones west of UTC is always negative,
                // and for those east of UTC is always positive. (e.g., -43200 through 50400)
                case 'Z': {
                    const timezone: string                = now.toLocaleDateString('en-us', { timeZoneName: 'longOffset', timeZone: this.#timezone ?? undefined });
                    const symbol: RegExpMatchArray | null = timezone.match(/[+-]/);
                    const data: string[]                  = timezone.split(/[+-]/);

                    const sign: string   = symbol ? symbol.pop()! : '+';
                    const offset: string = data.length === 2 ? (data[1] as string) : '0:00';

                    const hours: number   = parseInt(offset.split(':')[0] as string);
                    const minutes: number = parseInt(offset.split(':')[1] as string);

                    const offsetInSeconds: number = hours * Constants.SecondsPerHour + minutes * Constants.SecondsPerMinute;

                    date += `${sign}${offsetInSeconds}`;

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
                    date += Math.floor(now.getTime() / Constants.MillisecondsPerSecond);

                    break;
                }

                default:
                    date += element.length >= 2 && element.indexOf('\\') > -1 ? element.replace('\\', '') : element;
            }
        }

        return date;
    }

    /**
     * Determine if the instance's date and time are in the local timezone.
     *
     * @returns { boolean }
     */
    isLocal(): boolean {
        return this.local;
    }

    /**
     * Determine if the instance's date and time are in the UTC timezone.
     *
     * @returns { boolean }
     */
    isUtc(): boolean {
        return this.utc;
    }

    /**
     * Determine if the instance's date and time is valid.
     *
     * @returns { boolean }
     */
    isValid(): boolean {
        return !isNaN(this.#date.getFullYear()) && (this.#date.getFullYear() !== 0);
    }

    /**
     * Determine if the instance's date and time in a daylight saving time.
     *
     * @returns { boolean }
     */
    isDst(): boolean {
        return this.dst;
    }

    /**
     * Determine if the instance's day is Monday.
     *
     * @returns { boolean }
     */
    isMonday(): boolean {
        return this.dayOfWeek === DayOfTheWeek.Monday;
    }

    /**
     * Determine if the instance's day is Tuesday.
     *
     * @returns { boolean }
     */
    isTuesday(): boolean {
        return this.dayOfWeek === DayOfTheWeek.Tuesday;
    }

    /**
     * Determine if the instance's day is Wednesday.
     *
     * @returns { boolean }
     */
    isWednesday(): boolean {
        return this.dayOfWeek === DayOfTheWeek.Wednesday;
    }

    /**
     * Determine if the instance's day is Thursday.
     *
     * @returns { boolean }
     */
    isThursday(): boolean {
        return this.dayOfWeek === DayOfTheWeek.Thursday;
    }

    /**
     * Determine if the instance's day is Friday.
     *
     * @returns { boolean }
     */
    isFriday(): boolean {
        return this.dayOfWeek === DayOfTheWeek.Friday;
    }

    /**
     * Determine if the instance's day is Saturday.
     *
     * @returns { boolean }
     */
    isSaturday(): boolean {
        return this.dayOfWeek === DayOfTheWeek.Saturday;
    }

    /**
     * Determine if the instance's day is Sunday.
     *
     * @returns { boolean }
     */
    isSunday(): boolean {
        return this.dayOfWeek === DayOfTheWeek.Sunday;
    }

    /**
     * Determine if the given date is in the same year as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | string | null } date
     *
     * @returns { boolean }
     */
    isSameYear(date: Carbon | string | null = null): boolean {
        return this.isSameAs('Y', date);
    }

    /**
     * Determine if the instance is in the same year as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentYear(): boolean {
        return this.isSameAs('Y', new Date);
    }

    /**
     * Determine if the instance is in the same year as the current moment next year.
     */
    isNextYear(): boolean {
        const now: Carbon = Carbon.now();

        return this.year === now.year + 1;
    }

    /**
     * Determine if the instance is in the same year as the current moment last year.
     *
     * @return { boolean }
     */
    isLastYear(): boolean {
        const now: Carbon = Carbon.now();

        return this.year === now.year - 1;
    }

    /**
     * Determine if the given date is in the same month as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameMonth(date: Carbon | Date | string | null = null): boolean {
        return this.isSameAs('Y-m', date);
    }

    /**
     * Determine if the instance is in the same month as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentMonth(): boolean {
        return this.isSameAs('Y-m', new Date);
    }

    /**
     * Determine if the instance is in the same month as the current moment next month.
     *
     * @returns { boolean }
     */
    isNextMonth(): boolean {
        const now: Carbon   = Carbon.now();
        const month: string = (now.month + 1).toString().padStart(2, '0');

        return this.format('Y-m') === `${now.year}-${month}`;
    }

    /**
     * Determine if the instance is in the same month as the current moment last month.
     *
     * @returns { boolean }
     */
    isLastMonth(): boolean {
        const now: Carbon   = Carbon.now();
        const month: string = (now.month - 1).toString().padStart(2, '0');

        return this.format('Y-m') === `${now.year}-${month}`;
    }

    /**
     * Determine if the given date is in the same week as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameWeek(date: Carbon | Date | string | null = null): boolean {
        return this.isSameAs('o-W', date);
    }

    /**
     * Determine if the instance is in the same week as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentWeek(): boolean {
        return this.isSameAs('o-W', new Date);
    }

    /**
     * Determine if the instance is in the same week as the current moment next week.
     *
     * @returns { boolean }
     */
    isNextWeek(): boolean {
        const now: Carbon  = Carbon.now();
        const week: string = (now.week + 1).toString().padStart(2, '0');

        return this.format('o-W') === `${now.year}-${week}`;
    }

    /**
     * Determine if the instance is in the same week as the current moment last week.
     *
     * @returns { boolean }
     */
    isLastWeek(): boolean {
        const now: Carbon  = Carbon.now();
        const week: string = (now.week - 1).toString().padStart(2, '0');

        return this.format('o-W') === `${now.year}-${week}`;
    }

    /**
     * Determine if the given date is in the same day as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameDay(date: Carbon | Date | string | null = null): boolean {
        return this.isSameAs('Y-m-d', date);
    }

    /**
     * Determine if the instance is in the same day as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentDay(): boolean {
        return this.isSameAs('Y-m-d', new Date);
    }

    /**
     * Determine if the instance is in the same day as the current moment next day.
     *
     * @returns { boolean }
     */
    isNextDay(): boolean {
        const now: Carbon   = Carbon.now();
        const year: string  = now.format('Y');
        const month: string = now.format('m');
        const day: string   = (now.day + 1).toString().padStart(2, '0');

        return this.format('Y-m-d') === `${year}-${month}-${day}`;
    }

    /**
     * Determine if the instance is in the same day as the current moment last day.
     */
    isLastDay(): boolean {
        const now: Carbon   = Carbon.now();
        const year: string  = now.format('Y');
        const month: string = now.format('m');
        const day: string   = (now.day - 1).toString().padStart(2, '0');

        return this.format('Y-m-d') === `${year}-${month}-${day}`;
    }

    /**
     * Determine if the given date is in the same hour as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameHour(date: Carbon | Date | string | null = null): boolean {
        return this.isSameAs('Y-m-d H', date);
    }

    /**
     * Determine if the instance is in the same hour as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentHour(): boolean {
        return this.isSameAs('Y-m-d H', new Date);
    }

    /**
     * Determine if the instance is in the same hour as the current moment next hour.
     *
     * @returns { boolean }
     */
    isNextHour(): boolean {
        const now: Carbon   = Carbon.now();
        const year: string  = now.format('Y');
        const month: string = now.format('m');
        const day: string   = now.format('d');
        const hour: string  = (now.hour + 1).toString().padStart(2, '0');

        return this.format('Y-m-d H') === `${year}-${month}-${day} ${hour}`;
    }

    /**
     * Determine if the instance is in the same hour as the current moment last hour.
     *
     * @returns { boolean }
     */
    isLastHour(): boolean {
        const now: Carbon   = Carbon.now();
        const year: string  = now.format('Y');
        const month: string = now.format('m');
        const day: string   = now.format('d');
        const hour: string  = (now.hour - 1).toString().padStart(2, '0');

        return this.format('Y-m-d H') === `${year}-${month}-${day} ${hour}`;
    }

    /**
     * Determine if the given date is in the same minute as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameMinute(date: Carbon | Date | string | null = null): boolean {
        return this.isSameAs('Y-m-d H:i', date);
    }

    /**
     * Determine if the instance is in the same minute as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentMinute(): boolean {
        return this.isSameAs('Y-m-d H:i', new Date);
    }

    /**
     * Determine if the instance is in the same minute as the current moment next minute.
     *
     * @return { boolean }
     */
    isNextMinute(): boolean {
        const now: Carbon    = Carbon.now();
        const year: string   = now.format('Y');
        const month: string  = now.format('m');
        const day: string    = now.format('d');
        const hour: string   = now.format('H');
        const minute: string = (now.minute + 1).toString().padStart(2, '0');

        return this.format('Y-m-d H:i') === `${year}-${month}-${day} ${hour}:${minute}`;
    }

    /**
     * Determine if the instance is in the same minute as the current moment last minute.
     *
     * @returns { boolean }
     */
    isLastMinute(): boolean {
        const now: Carbon    = Carbon.now();
        const year: string   = now.format('Y');
        const month: string  = now.format('m');
        const day: string    = now.format('d');
        const hour: string   = now.format('H');
        const minute: string = (now.minute - 1).toString().padStart(2, '0');

        return this.format('Y-m-d H:i') === `${year}-${month}-${day} ${hour}:${minute}`;
    }

    /**
     * Determine if the given date is in the same second as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameSecond(date: Carbon | Date | string | null = null): boolean {
        return this.isSameAs('Y-m-d H:i:s', date);
    }

    /**
     * Determine if the instance is in the same second as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentSecond(): boolean {
        return this.isSameAs('Y-m-d H:i:s', new Date);
    }

    /**
     * Determine if the instance is in the same second as the current moment next second.
     *
     * @returns { boolean }
     */
    isNextSecond(): boolean {
        const now: Carbon    = Carbon.now();
        const year: string   = now.format('Y');
        const month: string  = now.format('m');
        const day: string    = now.format('d');
        const hour: string   = now.format('H');
        const minute: string = now.format('i');
        const second: string = (now.second + 1).toString().padStart(2, '0');

        return this.format('Y-m-d H:i:s') === `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }

    /**
     * Determine if the instance is in the same second as the current moment last second.
     *
     * @returns { boolean }
     */
    isLastSecond(): boolean {
        const now: Carbon    = Carbon.now();
        const year: string   = now.format('Y');
        const month: string  = now.format('m');
        const day: string    = now.format('d');
        const hour: string   = now.format('H');
        const minute: string = now.format('i');
        const second: string = (now.second - 1).toString().padStart(2, '0');

        return this.format('Y-m-d H:i:s') === `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    }

    /**
     * Determine if the given date is in the same millisecond as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameMillisecond(date: Carbon | Date | string | null = null): boolean {
        return this.isSameAs('Y-m-d H:i:s.v', date);
    }

    /**
     * Determine if the instance is in the same millisecond as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentMillisecond(): boolean {
        return this.isSameAs('Y-m-d H:i:s.v', new Date);
    }

    /**
     * Determine if the instance is in the same millisecond as the current moment next millisecond.
     *
     * @returns { boolean }
     */
    isNextMillisecond(): boolean {
        const now                 = Carbon.now();
        const year                = now.format('Y');
        const month               = now.format('m');
        const day                 = now.format('d');
        const hour                = now.format('H');
        const minute              = now.format('m');
        const second              = now.format('s');
        const millisecond: string = (now.millisecond + 1).toString().padEnd(3, '0');

        return this.format('Y-m-d H:i:s.v') === `${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond}`;
    }

    /**
     * Determine if the instance is in the same millisecond as the current moment last millisecond.
     *
     * @returns { boolean }
     */
    isLastMillisecond(): boolean {
        const now                 = Carbon.now();
        const year                = now.format('Y');
        const month               = now.format('m');
        const day                 = now.format('d');
        const hour                = now.format('H');
        const minute              = now.format('m');
        const second              = now.format('s');
        const millisecond: string = (now.millisecond - 1).toString().padEnd(3, '0');

        return this.format('Y-m-d H:i:s.v') === `${year}-${month}-${day} ${hour}:${minute}:${second}.${millisecond}`;
    }

    /**
     * Determine if the given date is in the same millisecond as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameMicrosecond(date: Carbon | Date | string | null = null): boolean {
        throw new Error('isSameMicrosecond method is not supported.');
    }

    /**
     * Determine if the instance is in the same millisecond as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentMicrosecond(): boolean {
        throw new Error('isCurrentMicrosecond method is not supported.');
    }

    /**
     * Determine if the instance is in the same millisecond as the current moment next millisecond.
     *
     * @returns { boolean }
     */
    isNextMicrosecond(): boolean {
        throw new Error('isNextMicrosecond method is not supported.');
    }

    /**
     * Determine if the instance is in the same millisecond as the current moment last millisecond.
     *
     * @returns { boolean }
     */
    isLastMicrosecond(): boolean {
        throw new Error('isLastMicrosecond method is not supported.');
    }

    /**
     * Compares the formatted values of the two dates.
     *
     * @param { string } format
     * @param { Carbon | Date | string | null } date
     *
     * @return { boolean }
     */
    isSameAs(format: string, date: Carbon | Date | string | null = null): boolean {
        return this.format(format) === this.#resolveCarbon(date).format(format);
    }

    /**
     * Resolves the date to a Carbon instance.
     *
     * @private
     *
     * @param { Carbon | Date | string | null} date
     *
     * @return { Carbon }
     */
    #resolveCarbon(date: Carbon | Date | string | null = null): Carbon {
        if (!date) {
            date = Carbon.now(this.#timezone);
        }

        if (typeof date === 'string') {
            date = Carbon.parse(date, this.#timezone);
        }

        if (date instanceof Date) {
            date = Carbon.parse(date.toString(), this.#timezone);
        }

        return date;
    }

    /**
     * Format the instance as date.
     *
     * @return { string }
     */
    toDateString(): string {
        return this.format('Y-m-d');
    }

    /**
     * Format the instance as readable date.
     *
     * @return { string }
     */
    toFormattedDateString(): string {
        return this.format('M j, Y');
    }

    /**
     * Format the instance with the day, and a readable date.
     *
     * @return { string }
     */
    toFormattedDayDateString(): string {
        return this.format('D, M j, Y');
    }

    /**
     * Format the instance as time.
     *
     * @param { string } precision
     *
     * @return { string }
     */
    toTimeString(precision: PrecisionUnit = 'second'): string {
        return this.format(this.getTimeFormatByPrecision(precision));
    }

    /**
     * Format the instance as date and time.
     *
     * @param { string } precision
     *
     * @return { string }
     */
    toDateTimeString(precision: PrecisionUnit = 'second'): string {
        return this.format(`Y-m-d ${this.getTimeFormatByPrecision(precision)}`);
    }

    /**
     * Format the instance as date and time T-separated with no timezone.
     *
     * @param { string } precision
     *
     * @return { string }
     */
    toDateTimeLocalString(precision: PrecisionUnit = 'second'): string {
        return this.format(`Y-m-d\\T${this.getTimeFormatByPrecision(precision)}`);
    }

    /**
     * Format the instance with day, date and time.
     *
     * @return { string }
     */
    toDayDateTimeString(): string {
        return this.format('D, M j, Y g:i A');
    }

    /**
     * Format the instance as ATOM.
     *
     * @return { string }
     */
    toAtomString(): string {
        return this.format(this.#ATOM);
    }

    /**
     * Format the instance as COOKIE.
     *
     * @return { string }
     */
    toCookieString(): string {
        return this.format(this.#COOKIE);
    }

    /**
     * Format the instance as ISO8601.
     *
     * @param { boolean } keepOffset
     *
     * @return { string }
     */
    toIsoString(keepOffset: boolean = false): string {
        if (!keepOffset) {
            this.#timezone = 'UTC';

            return this.format('Y-m-d\\TH:i:s.vp');
        }

        return this.format('Y-m-d\\TH:i:s.vP');
    }

    /**
     * Format the instance as ISO8601.
     *
     * @param { boolean } extended
     *
     * @return { string }
     */
    toIso8601String(extended: boolean = false): string {
        return extended
            ? this.format(this.#ISO8601_EXPANDED)
            : this.format(this.#ISO8601);
    }

    /**
     * Convert the instance to UTC and return as Zulu ISO8601.
     *
     * @param { string } precision
     *
     * @return { string }
     */
    toIso8601ZuluString(precision: PrecisionUnit = 'second'): string {
        this.#timezone = 'UTC';

        return this.format(`Y-m-d\\T${this.getTimeFormatByPrecision(precision)}\\Z`);
    }

    /**
     * Format the instance as RFC822.
     *
     * @return { string }
     */
    toRfc822String(): string {
        return this.format(this.#RFC822);
    }

    /**
     * Format the instance as RFC850.
     *
     * @return { string }
     */
    toRfc850String(): string {
        return this.format(this.#RFC850);
    }

    /**
     * Format the instance as RFC1036.
     *
     * @return { string }
     */
    toRfc1036String(): string {
        return this.format(this.#RFC1036);
    }

    /**
     * Format the instance as RFC1123.
     *
     * @return { string }
     */
    toRfc1123String(): string {
        return this.format(this.#RFC1123);
    }

    /**
     * Format the instance as RFC2822.
     *
     * @return { string }
     */
    toRfc2822String(): string {
        return this.format(this.#RFC2822);
    }

    /**
     * Format the instance as RFC3339.
     *
     * @param { boolean } extended
     *
     * @return { string }
     */
    toRfc3339String(extended: boolean = false): string {
        return extended
            ? this.format(this.#RFC3339_EXTENDED)
            : this.format(this.#RFC3339);
    }

    /**
     * Format the instance as RFC7231.
     *
     * @return { string }
     */
    toRfc7231String(): string {
        this.#timezone = 'UTC';

        return this.format(this.#RFC7231);
    }

    /**
     * Format the instance as RSS.
     *
     * @return { string }
     */
    toRssString(): string {
        return this.format(this.#RSS);
    }

    /**
     * Format the instance as W3C.
     *
     * @return { string }
     */
    toW3cString(): string {
        return this.format(this.#W3C);
    }

    /**
     * Return a format from H:i to H:i:s.u according to given unit precision.
     *
     * @param { string } precision
     *
     * @return { string }
     */
    getTimeFormatByPrecision(precision: PrecisionUnit): string {
        switch (precision) {
            case 'microsecond':
                return 'H:i:s.u';

            case 'millisecond':
                return 'H:i:s.v';

            case 'second':
                return 'H:i:s';

            case 'minute':
                return 'H:i';

            default:
                throw new Error('Precision unit expected among: minute, second, millisecond and microsecond.');
        }
    }

    /**
     * Get default array representation.
     *
     * @returns { string[] }
     */
    toArray(): string[] {
        throw new Error('toArray method is not supported.');
    }

    /**
     * Get default object representation.
     *
     * @returns { object }
     */
    toObject(): DateRepresentation {
        return {
            year     : this.year,
            month    : this.month,
            day      : this.day,
            dayOfWeek: this.dayOfWeek,
            dayOfYear: this.dayOfYear,
            hour     : this.hour,
            minute   : this.minute,
            second   : this.second,
            micro    : undefined,
            timestamp: this.timestamp,
            formatted: this.format('Y-m-d H:i:s'),
            timezone : this.timezone,
        };
    }

    /**
     * Return the ISO-8601 string with UTC timezone.
     *
     * @returns { string }
     */
    toJson(): string {
        return this.toIsoString();
    }

    /**
     * Return native Date object matching the current instance.
     *
     * @returns { Date }
     */
    toDate(): Date {
        return new Date(new Date().toLocaleString('en-US', { timeZone: this.#timezone ?? undefined }));
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