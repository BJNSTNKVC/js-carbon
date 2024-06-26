enum DayOfTheWeek {
    Sunday    = 0,
    Monday    = 1,
    Tuesday   = 2,
    Wednesday = 3,
    Thursday  = 4,
    Friday    = 5,
    Saturday  = 6,
}

enum MonthOfTheYear {
    January   = 0,
    February  = 1,
    March     = 2,
    April     = 3,
    May       = 4,
    June      = 5,
    July      = 6,
    August    = 7,
    September = 8,
    October   = 9,
    November  = 10,
    December  = 11
}

enum Constant {
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
    DaysPerMonth               = 30.436875,
    HoursPerDay                = 24,
    MinutesPerHour             = 60,
    SecondsPerMinute           = 60,
    SecondsPerHour             = 3600,
    MillisecondsPerSecond      = 1000,
    MillisecondsPerDay         = 86400000,
    MicrosecondsPerMillisecond = 1000,
    MicrosecondsPerSecond      = 1000000,
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
     *
     * @type { string }
     */
    readonly #ATOM: string = 'Y-m-d\\TH:i:sP';

    /**
     * Standard to represent date and time information in Cookies.
     *
     * @private
     *
     * @type { string }
     */
    readonly #COOKIE: string = 'l, d-M-Y H:i:s T';

    /**
     * International standard covering the worldwide exchange and communication of date and time-related data.
     *
     * @private
     *
     * @type { string }
     */
    readonly #ISO8601: string = 'Y-m-d\\TH:i:sO';

    /**
     * Expanded international standard covering the worldwide exchange and communication of date and time-related data.
     *
     * @private
     *
     * @type { string }
     */
    readonly #ISO8601_EXPANDED: string = 'X-m-d\\TH:i:sP';

    /**
     * Standard for the Format of Arpa Internet Text Messages.
     *
     * @private
     *
     * @type { string }
     */
    readonly #RFC822: string = 'D, d M y H:i:s O';

    /**
     * Standard for Interchange of USENET Messages. (June 1983)
     *
     * @private
     *
     * @type { string }
     */
    readonly #RFC850: string = 'l, d-M-y H:i:s T';

    /**
     * Standard for Interchange of USENET Messages. (December 1987)
     *
     * @private
     *
     * @type { string }
     */
    readonly #RFC1036: string = 'D, d M y H:i:s O';

    /**
     * Standard to represent date and time information in Internet protocols.
     *
     * @private
     *
     * @type { string }
     */
    readonly #RFC1123: string = 'D, d M Y H:i:s O';

    /**
     * Standard for Internet Message Format.
     *
     * @private
     *
     * @type { string }
     */
    readonly #RFC2822: string = 'D, d M Y H:i:s O';

    /**
     * Standard for Date and Time on the Internet.
     *
     * @private
     *
     * @type { string }
     */
    readonly #RFC3339: string = 'Y-m-d\\TH:i:sP';

    /**
     * Extended standard for Date and Time on the Internet.
     *
     * @private
     *
     * @type { string }
     */
    readonly #RFC3339_EXTENDED: string = 'Y-m-d\\TH:i:s.vP';

    /**
     * Standard to represent date and time information in Hypertext Transfer Protocol.
     *
     * @private
     *
     * @type { string }
     */
    readonly #RFC7231: string = 'D, d M Y H:i:s \\G\\M\\T';

    /**
     * Standard to represent date and time information in RSS feeds.
     *
     * @private
     *
     * @type { string }
     */
    readonly #RSS: string = 'D, d M Y H:i:s O';

    /**
     * Standard to represent date and time information in a machine-readable and unambiguous manner.
     *
     * @private
     *
     * @type { string }
     */
    readonly #W3C: string = 'Y-m-d\\TH:i:sP';

    /**
     * A date/time string.
     *
     * @private
     *
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
     * Year of this instance.
     *
     * @returns { number }
     */
    get year(): number {
        return this.get('year') as number;
    }

    /**
     * Month of this instance.
     *
     * @returns { number }
     */
    get month(): number {
        return this.get('month') as number;
    }

    /**
     * Week of this instance.
     *
     * @returns { number }
     */
    get week(): number {
        return this.get('week') as number;
    }

    /**
     * Day of this instance.
     *
     * @returns { number }
     */
    get day(): number {
        return this.get('day') as number;
    }

    /**
     * Day of the week of this instance (0 for Sunday through 6 for Saturday).
     *
     * @returns { number }
     */
    get dayOfWeek(): number {
        return this.get('dayOfWeek') as number;
    }

    /**
     * Day of the year of this instance.
     *
     * @returns { number }
     */
    get dayOfYear(): number {
        return this.get('dayOfYear') as number;
    }

    /**
     * Number of days in the given month.
     *
     * @returns { number }
     */
    get daysInMonth(): number {
        return this.get('daysInMonth') as number;
    }

    /**
     * Hour of this instance.
     *
     * @returns { number }
     */
    get hour(): number {
        return this.get('hour') as number;
    }

    /**
     * Minute of this instance.
     *
     * @returns { number }
     */
    get minute(): number {
        return this.get('minute') as number;
    }

    /**
     * Second of this instance.
     *
     * @returns { number }
     */
    get second(): number {
        return this.get('second') as number;
    }

    /**
     * Millisecond of this instance.
     *
     * @returns { number }
     */
    get millisecond(): number {
        return this.get('millisecond') as number;
    }

    /**
     * Microsecond of this instance.
     *
     * @returns { number }
     */
    get microsecond(): number {
        return this.get('microsecond') as number;
    }

    /**
     * Seconds since the Unix Epoch.
     *
     * @returns { number }
     */
    get timestamp(): number {
        return this.get('timestamp') as number;
    }

    /**
     * Quarter of this instance.
     *
     * @returns { number }
     */
    get quarter(): number {
        return this.get('quarter') as number;
    }

    /**
     * Decade of this instance.
     *
     * @returns { number }
     */
    get decade(): number {
        return this.get('decade') as number;
    }

    /**
     * Century of this instance.
     *
     * @returns { number }
     */
    get century(): number {
        return this.get('century') as number;
    }

    /**
     * Millennium of this instance.
     *
     * @returns { number }
     */
    get millennium(): number {
        return this.get('millennium') as number;
    }

    /**
     * Timezone offset in seconds from UTC.
     *
     * @returns { number }
     */
    get offset(): number {
        return this.get('offset') as number;
    }

    /**
     * Daylight savings time indicator.
     *
     * @returns { boolean }
     */
    get dst(): boolean {
        return this.get('dst') as boolean;
    }

    /**
     * Determine if the timezone is local.
     *
     * @returns { boolean }
     */
    get local(): boolean {
        return this.get('local') as boolean;
    }

    /**
     * Determine if the timezone is UTC.
     *
     * @returns { boolean }
     */
    get utc(): boolean {
        return this.get('utc') as boolean;
    }

    /**
     * Current timezone.
     *
     * @returns { string }
     */
    get timezone(): string {
        return this.get('timezone') as string;
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
     * Get a Carbon instance for today.
     *
     * @param { string | null } timezone
     *
     * @returns { Carbon }
     */
    static today(timezone: Timezone | null = null): Carbon {
        const today: Carbon = Carbon.now(timezone);

        return today.setTime(0, 0, 0, 0);
    }

    /**
     * Get a Carbon instance for tomorrow.
     *
     * @param { string | null } timezone
     *
     * @returns { Carbon }
     */
    static tomorrow(timezone: Timezone | null = null): Carbon {
        const today: Carbon = Carbon.today(timezone);

        return today.addDay();
    }

    /**
     * Get a Carbon instance for yesterday.
     *
     * @param { string | null } timezone
     *
     * @returns { Carbon }
     */
    static yesterday(timezone: Timezone | null = null): Carbon {
        const today: Carbon = Carbon.today(timezone);

        return today.subDay();
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
                    date += now.toLocaleString('en-US', { weekday: 'short' });

                    break;

                // Day of the month without leading zeros (e.g., 1 to 31)
                case 'j':
                    date += dayOfTheMonth;

                    break;

                // A full textual representation of the day of the week (e.g., Sunday through Saturday)
                case 'l':
                    date += now.toLocaleString('en-US', { weekday: 'long' });

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
                    let day: number          = Constant.MillisecondsPerDay;
                    const currentDay: number = Math.floor(diff / day);

                    date += currentDay;

                    break;
                }
                // ISO 8601 week number of year, weeks starting on Monday (e.g., 42 (the 42nd week in the year))
                case 'W': {
                    let parsedDate: Date = new Date(Date.UTC(year, month, dayOfTheMonth));
                    let weekDay: number  = parsedDate.getUTCDay() || 7;

                    parsedDate.setUTCDate(parsedDate.getUTCDate() + 4 - weekDay);

                    let yearStart: Date    = new Date(Date.UTC(parsedDate.getUTCFullYear(), 0, 1));
                    let weekNumber: number = Math.ceil(((((parsedDate as unknown as number) - (yearStart as unknown as number)) / Constant.MillisecondsPerDay) + 1) / Constant.DaysPerWeek);

                    date += weekNumber.toString().padStart(2, '0');

                    break;
                }

                // A full textual representation of a month, such as January or March (e.g., January through December)
                case 'F':
                    date += now.toLocaleString('en-US', { month: 'long' });

                    break;

                // Numeric representation of a month, with leading zeros (e.g., 01 through 12)
                case 'm': {
                    const currentMonth: number = month + 1;
                    date += currentMonth.toString().padStart(2, '0');

                    break;
                }

                // A short textual representation of a month, three letters (e.g., Jan through Dec)
                case 'M':
                    date += now.toLocaleString('en-US', { month: 'short' });

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

                    date += Math.floor((((hours + 1) % Constant.HoursPerDay) + minutes / Constant.MinutesPerHour + seconds / Constant.SecondsPerHour) * Constant.MillisecondsPerSecond / Constant.HoursPerDay)
                        .toString()
                        .padStart(3, '0');

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

                    const offsetInSeconds: number = hours * Constant.SecondsPerHour + minutes * Constant.SecondsPerMinute;

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
                    date += Math.floor(now.getTime() / Constant.MillisecondsPerSecond);

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
     * Determines if the instance is a leap year.
     *
     * @returns { boolean }
     */
    isLeapYear(): boolean {
        return this.format('L') === '1';
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
     * Determines if the instance is a weekday.
     *
     * @returns { boolean }
     */
    isWeekday(): boolean {
        return !this.isWeekend();
    }

    /**
     * Determines if the instance is a weekend day.
     *
     * @returns { boolean }
     */
    isWeekend(): boolean {
        return [DayOfTheWeek.Saturday, DayOfTheWeek.Sunday].includes(this.dayOfWeek);
    }

    /**
     * Determines if the instance is today.
     *
     * @returns { boolean }
     */
    isToday(): boolean {
        return this.toDateString() === Carbon.today(this.#timezone).toDateString();
    }

    /**
     * Determines if the instance is tomorrow.
     *
     * @returns { boolean }
     */
    isTomorrow(): boolean {
        return this.toDateString() === Carbon.tomorrow(this.#timezone).toDateString();
    }

    /**
     * Determines if the instance is yesterday.
     *
     * @returns { boolean }
     */
    isYesterday(): boolean {
        return this.toDateString() === Carbon.yesterday(this.#timezone).toDateString();
    }

    /**
     * Determines if the instance is a specific day of the week.
     *
     * @param { string | number } day
     *
     * @returns { boolean }
     */
    isDayOfWeek(day: DayOfTheWeek | string): boolean {
        const daysOfWeek: { [key: string]: number } = {
            'sunday'   : 0,
            'monday'   : 1,
            'tuesday'  : 2,
            'wednesday': 3,
            'thursday' : 4,
            'friday'   : 5,
            'saturday' : 6,
        };

        return this.dayOfWeek === (typeof day === 'string' ? daysOfWeek[day.toLowerCase()] : day);
    }

    /**
     * Determines if the instance is the birthday.
     *
     * @param { Carbon | string | null } date
     *
     * @returns { boolean }
     */
    isBirthday(date: Carbon | string | null = null): boolean {
        return this.isSameAs('md', date);
    }

    /**
     * Determines if today is the last day of the Month.
     *
     * @returns { boolean }
     */
    isLastOfMonth(): boolean {
        return this.day === this.daysInMonth;
    }

    /**
     * Determines if the instance is start of day.
     *
     * @param { boolean } checkMilliseconds
     *
     * @return { boolean }
     */
    isStartOfDay(checkMilliseconds: boolean = false): boolean {
        return checkMilliseconds
            ? this.format('H:i:s.v') === '00:00:00.000'
            : this.format('H:i:s') === '00:00:00';
    }

    /**
     * Determines if the instance is end of day.
     *
     * @param { boolean } checkMilliseconds
     *
     * @return { boolean }
     */
    isEndOfDay(checkMilliseconds: boolean = false): boolean {
        return checkMilliseconds
            ? this.format('H:i:s.v') === '23:59:59.999'
            : this.format('H:i:s') === '23:59:59';
    }

    /**
     * Determines if the instance is midnight.
     *
     * @return { boolean }
     */
    isMidnight(): boolean {
        return this.isStartOfDay();
    }

    /**
     * Determines if the instance is midday.
     *
     * @return { boolean }
     */
    isMidday(): boolean {
        return this.format('G:i:s') === '12:00:00';
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
        return this.year === this.#resolveCarbon().addYear().year;
    }

    /**
     * Determine if the instance is in the same year as the current moment last year.
     *
     * @return { boolean }
     */
    isLastYear(): boolean {
        return this.year === this.#resolveCarbon().subYear().year;
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
        return this.format('Y-m') === this.#resolveCarbon().addMonth().format('Y-m');
    }

    /**
     * Determine if the instance is in the same month as the current moment last month.
     *
     * @returns { boolean }
     */
    isLastMonth(): boolean {
        return this.format('Y-m') === this.#resolveCarbon().subMonth().format('Y-m');
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
        return this.format('o-W') === this.#resolveCarbon().addWeek().format('o-W');
    }

    /**
     * Determine if the instance is in the same week as the current moment last week.
     *
     * @returns { boolean }
     */
    isLastWeek(): boolean {
        return this.format('o-W') === this.#resolveCarbon().subWeek().format('o-W');
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
        return this.format('Y-m-d') === this.#resolveCarbon().addDay().format('Y-m-d');
    }

    /**
     * Determine if the instance is in the same day as the current moment last day.
     */
    isLastDay(): boolean {
        return this.format('Y-m-d') === this.#resolveCarbon().subDay().format('Y-m-d');
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
        return this.format('Y-m-d H') === this.#resolveCarbon().addHour().format('Y-m-d H');
    }

    /**
     * Determine if the instance is in the same hour as the current moment last hour.
     *
     * @returns { boolean }
     */
    isLastHour(): boolean {
        return this.format('Y-m-d H') === this.#resolveCarbon().subHour().format('Y-m-d H');
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
        return this.format('Y-m-d H:i') === this.#resolveCarbon().addMinute().format('Y-m-d H:i');
    }

    /**
     * Determine if the instance is in the same minute as the current moment last minute.
     *
     * @returns { boolean }
     */
    isLastMinute(): boolean {
        return this.format('Y-m-d H:i') === this.#resolveCarbon().subMinute().format('Y-m-d H:i');
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
        return this.format('Y-m-d H:i:s') === this.#resolveCarbon().addSecond().format('Y-m-d H:i:s');
    }

    /**
     * Determine if the instance is in the same second as the current moment last second.
     *
     * @returns { boolean }
     */
    isLastSecond(): boolean {
        return this.format('Y-m-d H:i:s') === this.#resolveCarbon().subSecond().format('Y-m-d H:i:s');
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
        return this.format('Y-m-d H:i:s.v') === this.#resolveCarbon().addMillisecond().format('Y-m-d H:i:s.v');
    }

    /**
     * Determine if the instance is in the same millisecond as the current moment last millisecond.
     *
     * @returns { boolean }
     */
    isLastMillisecond(): boolean {
        return this.format('Y-m-d H:i:s.v') === this.#resolveCarbon().subMillisecond().format('Y-m-d H:i:s.v');
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
     * Determine if the given date is in the same quarter as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameQuarter(date: Carbon | Date | string | null = null): boolean {
        return this.quarter === this.#resolveCarbon(date).quarter;
    }

    /**
     * Determine if the instance is in the same quarter as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentQuarter(): boolean {
        return this.quarter === this.#resolveCarbon(new Date).quarter;
    }

    /**
     * Determine if the instance is in the same quarter as the current moment next quarter.
     *
     * @returns { boolean }
     */
    isNextQuarter(): boolean {
        return this.quarter === this.#resolveCarbon().addQuarter().quarter;
    }

    /**
     * Determine if the instance is in the same quarter as the current moment last quarter.
     *
     * @returns { boolean }
     */
    isLastQuarter(): boolean {
        return this.quarter === this.#resolveCarbon().subQuarter().quarter;
    }

    /**
     * Determine if the given date is in the same decade as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameDecade(date: Carbon | Date | string | null = null): boolean {
        return this.decade === this.#resolveCarbon(date).decade;
    }

    /**
     * Determine if the instance is in the same decade as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentDecade(): boolean {
        return this.decade === this.#resolveCarbon(new Date).decade;
    }

    /**
     * Determine if the instance is in the same decade as the current moment next decade.
     *
     * @returns { boolean }
     */
    isNextDecade(): boolean {
        return this.decade === this.#resolveCarbon().addDecade().decade;
    }

    /**
     * Determine if the instance is in the same decade as the current moment last decade.
     *
     * @returns { boolean }
     */
    isLastDecade(): boolean {
        return this.decade === this.#resolveCarbon().subDecade().decade;
    }

    /**
     * Determine if the given date is in the same century as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameCentury(date: Carbon | Date | string | null = null): boolean {
        return this.century === this.#resolveCarbon(date).century;
    }

    /**
     * Determine if the instance is in the same century as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentCentury(): boolean {
        return this.century === this.#resolveCarbon(new Date).century;
    }

    /**
     * Determine if the instance is in the same century as the current moment next century.
     *
     * @returns { boolean }
     */
    isNextCentury(): boolean {
        return this.century === this.#resolveCarbon().addCentury().century;
    }

    /**
     * Determine if the instance is in the same century as the current moment last century.
     *
     * @returns { boolean }
     */
    isLastCentury(): boolean {
        return this.century === this.#resolveCarbon().subCentury().century;
    }

    /**
     * Determine if the given date is in the same millennium as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameMillennium(date: Carbon | Date | string | null = null): boolean {
        return this.millennium === this.#resolveCarbon(date).millennium;
    }

    /**
     * Determine if the instance is in the same millennium as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentMillennium(): boolean {
        return this.millennium === this.#resolveCarbon(new Date).millennium;
    }

    /**
     * Determine if the instance is in the same millennium as the current moment next millennium.
     *
     * @returns { boolean }
     */
    isNextMillennium(): boolean {
        return this.millennium === this.#resolveCarbon().addMillennium().millennium;
    }

    /**
     * Determine if the instance is in the same millennium as the current moment last millennium.
     *
     * @returns { boolean }
     */
    isLastMillennium(): boolean {
        return this.millennium === this.#resolveCarbon().subMillennium().millennium;
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
     * @param { Carbon | Date | string | null } date
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
        return new Date(this.#date.toLocaleString('en-US', { timeZone: this.#timezone ?? undefined }));
    }

    /**
     * Format the instance as a string.
     *
     * @returns { string }
     */
    toString(): string {
        return this.date;
    }

    /**
     * Get a part of the Carbon object.
     *
     * @param { string } value
     *
     * @returns { string | number | boolean }
     */
    get(value: CarbonGetter): string | number | boolean {
        switch (value) {
            case 'year': {
                return parseInt(this.format('Y'));
            }

            case 'month': {
                return parseInt(this.format('n'));
            }

            case 'week': {
                return parseInt(this.format('W'));
            }

            case 'day': {
                return parseInt(this.format('j'));
            }

            case 'hour': {
                return parseInt(this.format('G'));
            }

            case 'minute': {
                return parseInt(this.format('i'));
            }

            case 'second': {
                return parseInt(this.format('s'));
            }

            case 'millisecond': {
                return parseInt(this.format('v'));
            }

            case 'microsecond': {
                return parseInt(this.format('u'));
            }

            case 'timestamp': {
                return parseInt(this.format('U'));
            }

            case 'dayOfWeek': {
                return parseInt(this.format('w'));
            }

            case 'dayOfYear': {
                return parseInt(this.format('z'));
            }

            case 'daysInMonth': {
                return parseInt(this.format('t'));
            }

            case 'quarter': {
                return Math.ceil(this.get('month') as number / Constant.MonthsPerQuarter);
            }

            case 'decade': {
                return Math.ceil(this.get('year') as number / Constant.YearsPerDecade);
            }

            case 'century': {
                let factor: number = 1;
                let year: number   = this.get('year') as number;

                if (year < 0) {
                    year   = -year;
                    factor = -1;
                }

                return factor * Math.ceil(year / Constant.YearsPerCentury);
            }

            case 'millennium': {
                let factor: number = 1;
                let year: number   = this.get('year') as number;

                if (year < 0) {
                    year   = -year;
                    factor = -1;
                }

                return factor * Math.ceil(year / Constant.YearsPerMillennium);
            }

            case 'offset': {
                return parseInt(this.format('Z'));
            }

            case 'dst': {
                return this.format('I') === '1';
            }

            case 'local': {
                return parseInt(this.format('Z')) / Constant.SecondsPerMinute === this.#date.getTimezoneOffset() * -1;
            }

            case 'utc': {
                return parseInt(this.format('Z')) / Constant.SecondsPerHour === 0;
            }

            case 'timezone': {
                return this.format('T (P)');
            }

            default:
                throw new Error(`Unknown getter.`);
        }
    }

    /**
     * Set current instance year to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setYear(value: number): Carbon {
        return this.setUnit('year', value);
    }

    /**
     * Set current instance month to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setMonth(value: number): Carbon {
        return this.setUnit('month', value);
    }

    /**
     * Set current instance day to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setDay(value: number): Carbon {
        return this.setUnit('day', value);
    }

    /**
     * Set current instance hour to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setHour(value: number): Carbon {
        return this.setUnit('hour', value);
    }

    /**
     * Set current instance minute to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setMinute(value: number): Carbon {
        return this.setUnit('minute', value);
    }

    /**
     * Set current instance second to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setSecond(value: number): Carbon {
        return this.setUnit('second', value);
    }

    /**
     * Set current instance millisecond to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setMillisecond(value: number): Carbon {
        return this.setUnit('millisecond', value);
    }

    /**
     * Set the date with gregorian year, month and day numbers.
     *
     * @param { number } year
     * @param { number } month
     * @param { number } day
     *
     * @returns { Carbon }
     */
    setDate(year: number, month: number, day: number): Carbon {
        this.#date.setFullYear(year);
        this.#date.setMonth(month);
        this.#date.setDate(day);

        return Carbon.parse(this.#date.toISOString(), this.#timezone);
    }

    /**
     * Resets the current time of the Carbon object to a different time.
     *
     * @param { number } hour
     * @param { number } minute
     * @param { number } second
     * @param { number } millisecond
     *
     * @returns { Carbon }
     */
    setTime(hour: number, minute: number, second: number, millisecond: number): Carbon {
        const diffInMinutes: number      = (this.#date.getTimezoneOffset() / Constant.SecondsPerMinute) * -1;
        const offsetInHours: number      = this.offset / Constant.SecondsPerHour;
        const offsetInMinutes: number    = offsetInHours % 1 * Constant.MinutesPerHour;
        const localOffsetInHours: number = Math.round(diffInMinutes);

        this.#date.setHours(hour - (Math[offsetInHours >= 0 ? 'floor' : 'round'](offsetInHours)) + localOffsetInHours);
        this.#date.setMinutes(minute - offsetInMinutes);
        this.#date.setSeconds(second);
        this.#date.setMilliseconds(millisecond);

        return Carbon.parse(this.#date.toISOString(), this.#timezone);
    }

    /**
     * Set specified unit to new given value.
     *
     * @param { string } unit
     * @param { number | null } value
     *
     * @returns { Carbon }
     */
    setUnit(unit: DateUnit, value: number | null = null): Carbon {
        const dateUnits: string[] = ['year', 'month', 'day'];
        const timeUnits: string[] = ['hour', 'minute', 'second', 'millisecond'];

        if (dateUnits.includes(unit)) {
            const [year, month, day]: number[] = dateUnits.map((name: string): number => {
                if (name === unit) {
                    return value as number;
                }

                return this.get(name as CarbonGetter) as number;
            });

            return this.setDate(year as number, month as number - 1, day as number);
        }

        const [hour, minute, second, millisecond]: number[] = timeUnits.map((name: string): number => {
            if (name === unit) {
                return value as number;
            }

            return this.get(name as CarbonGetter) as number;
        });

        return this.setTime(hour as number, minute as number, second as number, millisecond as number);
    }

    /**
     * Add one year to the instance.
     *
     * @returns { Carbon }
     */
    addYear(): Carbon {
        return this.addUnit('year', 1);
    }

    /**
     * Add years to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addYears(value: number = 1): Carbon {
        return this.addUnit('year', value);
    }

    /**
     * Add month to the instance.
     *
     * @returns { Carbon }
     */
    addMonth(): Carbon {
        return this.addUnit('month', 1);
    }

    /**
     * Add months to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addMonths(value: number = 1): Carbon {
        return this.addUnit('month', value);
    }

    /**
     * Add day to the instance.
     *
     * @returns { Carbon }
     */
    addDay(): Carbon {
        return this.addUnit('day', 1);
    }

    /**
     * Add days to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addDays(value: number = 1): Carbon {
        return this.addUnit('day', value);
    }

    /**
     * Add hour to the instance.
     *
     * @returns { Carbon }
     */
    addHour(): Carbon {
        return this.addUnit('hour', 1);
    }

    /**
     * Add hour to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addHours(value: number = 1): Carbon {
        return this.addUnit('hour', value);
    }

    /**
     * Add minute to the instance.
     *
     * @returns { Carbon }
     */
    addMinute(): Carbon {
        return this.addUnit('minute', 1);
    }

    /**
     * Add minutes to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addMinutes(value: number = 1): Carbon {
        return this.addUnit('minute', value);
    }

    /**
     * Add second to the instance.
     *
     * @returns { Carbon }
     */
    addSecond(): Carbon {
        return this.addUnit('second', 1);
    }

    /**
     * Add seconds to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addSeconds(value: number = 1): Carbon {
        return this.addUnit('second', value);
    }

    /**
     * Add millisecond to the instance.
     *
     * @returns { Carbon }
     */
    addMillisecond(): Carbon {
        return this.addUnit('millisecond', 1);
    }

    /**
     * Add milliseconds to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addMilliseconds(value: number = 1): Carbon {
        return this.addUnit('millisecond', value);
    }

    /**
     * Add millennium to the instance.
     *
     * @returns { Carbon }
     */
    addMillennium(): Carbon {
        return this.addUnit('millennium', 1);
    }

    /**
     * Add millenniums to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addMillenniums(value: number = 1): Carbon {
        return this.addUnit('millennium', value);
    }

    /**
     * Add century to the instance.
     *
     * @returns { Carbon }
     */
    addCentury(): Carbon {
        return this.addUnit('century', 1);
    }

    /**
     * Add centuries to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addCenturies(value: number = 1): Carbon {
        return this.addUnit('century', value);
    }

    /**
     * Add decade to the instance.
     *
     * @returns { Carbon }
     */
    addDecade(): Carbon {
        return this.addUnit('decade', 1);
    }

    /**
     * Add decades to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addDecades(value: number = 1): Carbon {
        return this.addUnit('decade', value);
    }

    /**
     * Add quarter to the instance.
     *
     * @returns { Carbon }
     */
    addQuarter(): Carbon {
        return this.addUnit('quarter', 1);
    }

    /**
     * Add quarters to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addQuarters(value: number = 1): Carbon {
        return this.addUnit('quarter', value);
    }

    /**
     * Add week to the instance.
     *
     * @returns { Carbon }
     */
    addWeek(): Carbon {
        return this.addUnit('week', 1);
    }

    /**
     * Add weeks to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addWeeks(value: number = 1): Carbon {
        return this.addUnit('week', value);
    }

    /**
     * Subtract one year from the instance.
     *
     * @returns { Carbon }
     */
    subYear(): Carbon {
        return this.subUnit('year', 1);
    }

    /**
     * Subtract years from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subYears(value: number = 1): Carbon {
        return this.subUnit('year', value);
    }

    /**
     * Subtract month from the instance.
     *
     * @returns { Carbon }
     */
    subMonth(): Carbon {
        return this.subUnit('month', 1);
    }

    /**
     * Subtract months from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subMonths(value: number = 1): Carbon {
        return this.subUnit('month', value);
    }

    /**
     * Subtract day from the instance.
     *
     * @returns { Carbon }
     */
    subDay(): Carbon {
        return this.subUnit('day', 1);
    }

    /**
     * Subtract days from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subDays(value: number = 1): Carbon {
        return this.subUnit('day', value);
    }

    /**
     * Subtract hour from the instance.
     *
     * @returns { Carbon }
     */
    subHour(): Carbon {
        return this.subUnit('hour', 1);
    }

    /**
     * Subtract hour from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subHours(value: number = 1): Carbon {
        return this.subUnit('hour', value);
    }

    /**
     * Subtract minute from the instance.
     *
     * @returns { Carbon }
     */
    subMinute(): Carbon {
        return this.subUnit('minute', 1);
    }

    /**
     * Subtract minutes from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subMinutes(value: number = 1): Carbon {
        return this.subUnit('minute', value);
    }

    /**
     * Subtract second from the instance.
     *
     * @returns { Carbon }
     */
    subSecond(): Carbon {
        return this.subUnit('second', 1);
    }

    /**
     * Subtract seconds from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subSeconds(value: number = 1): Carbon {
        return this.subUnit('second', value);
    }

    /**
     * Subtract millisecond from the instance.
     *
     * @returns { Carbon }
     */
    subMillisecond(): Carbon {
        return this.subUnit('millisecond', 1);
    }

    /**
     * Subtract milliseconds from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subMilliseconds(value: number = 1): Carbon {
        return this.subUnit('millisecond', value);
    }

    /**
     * Subtract millennium from the instance.
     *
     * @returns { Carbon }
     */
    subMillennium(): Carbon {
        return this.subUnit('millennium', 1);
    }

    /**
     * Subtract millenniums from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subMillenniums(value: number = 1): Carbon {
        return this.subUnit('millennium', value);
    }

    /**
     * Subtract century from the instance.
     *
     * @returns { Carbon }
     */
    subCentury(): Carbon {
        return this.subUnit('century', 1);
    }

    /**
     * Subtract centuries from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subCenturies(value: number = 1): Carbon {
        return this.subUnit('century', value);
    }

    /**
     * Subtract decade from the instance.
     *
     * @returns { Carbon }
     */
    subDecade(): Carbon {
        return this.subUnit('decade', 1);
    }

    /**
     * Subtract decades from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subDecades(value: number = 1): Carbon {
        return this.subUnit('decade', value);
    }

    /**
     * Subtract quarter from the instance.
     *
     * @returns { Carbon }
     */
    subQuarter(): Carbon {
        return this.subUnit('quarter', 1);
    }

    /**
     * Subtract quarters from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subQuarters(value: number = 1): Carbon {
        return this.subUnit('quarter', value);
    }

    /**
     * Subtract week from the instance.
     *
     * @returns { Carbon }
     */
    subWeek(): Carbon {
        return this.subUnit('week', 1);
    }

    /**
     * Subtract weeks from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subWeeks(value: number = 1): Carbon {
        return this.subUnit('week', value);
    }

    /**
     * Add given units to the current instance.
     *
     * @param { string } unit
     * @param { number | null } value
     *
     * @returns { Carbon }
     */
    addUnit(unit: DateUnit | MetaUnit, value: number = 1): Carbon {
        const metaUnits: { [key: string]: (number | string)[] } = {
            'millennium': [Constant.YearsPerMillennium, 'year'],
            'century'   : [Constant.YearsPerCentury, 'year'],
            'decade'    : [Constant.YearsPerDecade, 'year'],
            'quarter'   : [Constant.MonthsPerQuarter, 'month'],
            'week'      : [Constant.DaysPerWeek, 'day']
        };

        if (metaUnits[unit]) {
            const factor: number = (metaUnits[unit])![0] as number;
            unit                 = (metaUnits[unit])![1] as DateUnit | MetaUnit;

            value = value * factor;
        }

        try {
            return this.setUnit(unit as DateUnit, this.get(unit as CarbonGetter) as number + value);
        } catch (exception) {
            throw Error(`Unknown unit.`);
        }
    }

    /**
     * Subtract given units to the current instance.
     *
     * @param { string } unit
     * @param { number | null } value
     *
     * @return static
     */
    subUnit(unit: DateUnit | MetaUnit, value: number = 1): Carbon {
        return this.addUnit(unit, -value);
    }

    /**
     * Get the difference as a DateInterval instance.
     *
     * @param { Carbon | Date | string | null } date
     * @param { boolean } absolute
     *
     * @return { DateInterval }
     */
    diff(date: Carbon | Date | string | null = null, absolute: boolean = false): DateInterval {
        date = this.#resolveCarbon(date);

        return new DateInterval(this.#date, date.#date, absolute);
    }

    /**
     * Get the difference in milliseconds rounded down.
     *
     * @param { Carbon | Date | string | null } date
     * @param { boolean } absolute
     *
     * @return { number }
     */
    diffInMilliseconds(date: Carbon | Date | string | null = null, absolute: boolean = true): number {
        const diff: DateInterval  = this.diff(date);
        const diffInHours: number = (diff.m || diff.y ? diff.days : diff.d) * Constant.HoursPerDay;

        const value: number = Math.round((((diffInHours + diff.h) * Constant.MinutesPerHour + diff.i) * Constant.SecondsPerMinute + (diff.s)) * Constant.MillisecondsPerSecond);

        return absolute || !diff.invert ? value : -value;
    }

    /**
     * Get the difference in seconds rounded down.
     *
     * @param { Carbon | Date | string | null } date
     * @param { boolean } absolute
     *
     * @return { number }
     */
    diffInSeconds(date: Carbon | Date | string | null = null, absolute: boolean = true): number {
        let diff: DateInterval = this.diff(date);

        if (diff.days === 0) {
            diff = Carbon.fixDiffInterval(diff, absolute);
        }

        let value: number = ((((diff.m || diff.y ? diff.days : diff.d) * Constant.HoursPerDay) + diff.h) * Constant.MinutesPerHour + diff.i) * Constant.SecondsPerMinute + diff.s;

        return absolute || !diff.invert ? value : -value;
    }

    /**
     * Get the difference in minutes rounded down.
     *
     * @param { Carbon | Date | string | null } date
     * @param { boolean } absolute
     *
     * @return { number }
     */
    diffInMinutes(date: Carbon | Date | string | null = null, absolute: boolean = true): number {
        return Math[absolute ? 'floor' : 'ceil'](this.diffInSeconds(date, absolute) / Constant.SecondsPerMinute);
    }

    /**
     * Get the difference in hours rounded down.
     *
     * @param { Carbon | Date | string | null } date
     * @param { boolean } absolute
     *
     * @return { number }
     */
    diffInHours(date: Carbon | Date | string | null = null, absolute: boolean = true): number {
        return Math[absolute ? 'floor' : 'ceil'](this.diffInSeconds(date, absolute) / Constant.SecondsPerMinute / Constant.MinutesPerHour);
    }

    /**
     * Get the difference in days rounded down.
     *
     * @param { Carbon | Date | string | null } date
     * @param { boolean } absolute
     *
     * @return { number }
     */
    diffInDays(date: Carbon | Date | string | null = null, absolute: boolean = true): number {
        return Math[absolute ? 'floor' : 'ceil'](this.diffInSeconds(date, absolute) / Constant.SecondsPerMinute / Constant.MinutesPerHour / Constant.HoursPerDay);
    }

    /**
     * Get the difference in weeks rounded down.
     *
     * @param { Carbon | Date | string | null } date
     * @param { boolean } absolute
     *
     * @return { number }
     */
    diffInWeeks(date: Carbon | Date | string | null = null, absolute: boolean = true): number {
        return Math[absolute ? 'floor' : 'ceil'](this.diffInDays(date, absolute) / Constant.DaysPerWeek);
    }

    /**
     * Get the difference in months rounded down.
     *
     * @param { Carbon | Date | string | null } date
     * @param { boolean } absolute
     *
     * @return { number }
     */
    diffInMonths(date: Carbon | Date | string | null = null, absolute: boolean = true): number {
        const [yearStart, monthStart, dayStart]: string[] = this.format('Y-m-dHisv').split('-');
        const [yearEnd, monthEnd, dayEnd]: string[]       = this.#resolveCarbon(date).format('Y-m-dHisv').split('-');

        const diffInYears: number  = parseInt(yearEnd as string) - parseInt(yearStart as string);
        const diffInMonths: number = parseInt(monthEnd as string) - parseInt(monthStart as string);

        let diff: number = diffInYears * Constant.MonthsPerYear + diffInMonths;

        if (diff > 0) {
            diff -= (parseInt(dayStart as string) > parseInt(dayEnd as string) ? 1 : 0);
        } else if (diff < 0) {
            diff += (parseInt(dayStart as string) < parseInt(dayEnd as string) ? 1 : 0);
        }

        return absolute ? Math.abs(diff) : diff;
    }

    /**
     * Get the difference in quarters rounded down.
     *
     * @param { Carbon | Date | string | null } date
     * @param { boolean } absolute
     *
     * @return int
     */
    diffInQuarters(date: Carbon | Date | string | null = null, absolute: boolean = true): number {
        return Math[absolute ? 'floor' : 'ceil'](this.diffInMonths(date, absolute) / Constant.MonthsPerQuarter);
    }

    /**
     * Get the difference in years.
     *
     * @param { Carbon | Date | string | null } date
     * @param { boolean } absolute
     *
     * @return int
     */
    diffInYears(date: Carbon | Date | string | null = null, absolute: boolean = true): number {
        return parseInt(this.diff(date, absolute).format('%r%y'));
    }

    /**
     * Fixes the given DateInterval to create a CarbonInterval.
     *
     * @param { DateInterval } diff
     * @param { boolean } absolute
     *
     * @returns { DateInterval }
     *
     * @see https://bugs.php.net/bug.php?id=77145
     */
    static fixDiffInterval(diff: DateInterval, absolute: boolean): DateInterval {
        if (diff.f > 0 && diff.y === -1 && diff.m === 11 && diff.d >= 27 && diff.h === 23 && diff.i === 59 && diff.s === 59) {
            diff.y      = 0;
            diff.m      = 0;
            diff.d      = 0;
            diff.h      = 0;
            diff.i      = 0;
            diff.s      = 0;
            diff.f      = (1000000 - Math.round(diff.f * 1000000)) / 1000000;
            diff.invert = absolute ? 0 : diff.invert;
        }

        return diff;
    }
}

class DateInterval {
    /**
     * Number of years.
     *
     * @type { number }
     */
    #y: number = 0;

    /**
     * Number of months.
     *
     * @type { number }
     */
    #m: number = 0;

    /**
     * Number of days.
     *
     * @type { number }
     */
    #d: number = 0;

    /**
     * Number of hours.
     *
     * @type { number }
     */
    #h: number = 0;

    /**
     * Number of minutes.
     *
     * @type { number }
     */
    #i: number = 0;

    /**
     * Number of seconds.
     *
     * @type { number }
     */
    #s: number = 0;

    /**
     * Number of milliseconds.
     *
     * @type { number }
     */
    #f: number = 0;

    /**
     * Total number of days the interval spans.
     *
     * @type { number }
     */
    #days: number = 0;

    /**
     * Is 1 if the interval is inverted and 0 otherwise
     *
     * @type { number }
     */
    #invert: number = 0;

    /**
     * Formatted interval.
     *
     * @type { string }
     */
    interval: string;

    /**
     * Get number of years for the given Interval.
     *
     * @returns { number }
     */
    get y(): number {
        return this.#y;
    }

    /**
     * Get number of months for the given Interval.
     *
     * @returns { number }
     */
    get m(): number {
        return this.#m;
    }

    /**
     * Get number of days for the given Interval.
     *
     * @returns { number }
     */
    get d(): number {
        return this.#d;
    }

    /**
     * Get number of hours for the given Interval.
     *
     * @returns { number }
     */
    get h(): number {
        return this.#h;
    }

    /**
     * Get number of minutes for the given Interval.
     *
     * @returns { number }
     */
    get i(): number {
        return this.#i;
    }

    /**
     * Get number of seconds for the given Interval.
     *
     * @returns { number }
     */
    get s(): number {
        return this.#s;
    }

    /**
     * Get number of milliseconds for the given Interval.
     *
     * @returns { number }
     */
    get f(): number {
        return this.#f;
    }

    /**
     * Get total number of days the interval spans.
     *
     * @returns { number }
     */
    get days(): number {
        return this.#days;
    }

    /**
     * Get inversion for the given Interval.
     *
     * @returns { number }
     */
    get invert(): number {
        return this.#invert;
    }

    /**
     * Set number of years for the given Interval.
     *
     * @param { number } value
     */
    set y(value: number) {
        this.#y = value;
    }

    /**
     * Set number of months for the given Interval.
     *
     * @param { number } value
     */
    set m(value: number) {
        this.#m = value;
    }

    /**
     * Set number of days for the given Interval.
     *
     * @param { number } value
     */
    set d(value: number) {
        this.#d = value;
    }

    /**
     * Set number of hours for the given Interval.
     *
     * @param { number } value
     */
    set h(value: number) {
        this.#h = value;
    }

    /**
     * Set number of minutes for the given Interval.
     *
     * @param { number } value
     */
    set i(value: number) {
        this.#i = value;
    }

    /**
     * Set number of seconds for the given Interval.
     *
     * @param { number } value
     */
    set s(value: number) {
        this.#s = value;
    }

    /**
     * Set number of milliseconds for the given Interval.
     *
     * @param { number } value
     */
    set f(value: number) {
        this.#f = value;
    }

    /**
     * Set inversion for the given Interval.
     *
     * @param { number } value
     */
    set invert(value: number) {
        this.#invert = value;
    }

    /**
     * Set total number of days the interval spans.
     *
     * @param { number } value
     */
    set days(value: number) {
        this.#days = value;
    }

    /**
     * Create new DateInterval instance.
     *
     * @param { Date } base
     * @param { Date } target
     * @param { boolean } absolute
     */
    constructor(base: Date, target: Date, absolute: boolean = false) {
        const start: Date    = base < target ? base : target;
        const end: Date      = base > target ? base : target;
        const invert: number = base > target ? 1 : 0;

        const daysPerMonth = (month: number, year: number): number => {
            if ([MonthOfTheYear.January, MonthOfTheYear.March, MonthOfTheYear.May, MonthOfTheYear.July, MonthOfTheYear.August, MonthOfTheYear.October, MonthOfTheYear.December].includes(month)) {
                return 31;
            }

            if ([MonthOfTheYear.April, MonthOfTheYear.June, MonthOfTheYear.September, MonthOfTheYear.November].includes(month)) {
                return 30;
            }

            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
                return 29;
            }

            return 28;
        };

        let diffInMilliseconds: number = Math.abs(start.getTime() - end.getTime());
        let years: number              = end.getFullYear() - start.getFullYear();
        let months: number             = end.getMonth() - start.getMonth();
        let days: number               = end.getDate() - start.getDate();
        let hours: number              = end.getHours() - start.getHours();
        let minutes: number            = end.getMinutes() - start.getMinutes();
        let seconds: number            = end.getSeconds() - start.getSeconds();
        let milliseconds: number       = end.getMilliseconds() - start.getMilliseconds();

        if (milliseconds < 0) {
            milliseconds += Constant.MillisecondsPerSecond;
            seconds -= 1;
        }

        if (seconds < 0) {
            seconds += Constant.SecondsPerMinute;
            minutes -= 1;
        }

        if (minutes < 0) {
            minutes += Constant.MinutesPerHour;
            hours -= 1;
        }

        if (hours < 0) {
            hours += Constant.HoursPerDay;
        }

        if (days < 0) {
            days += daysPerMonth(start.getMonth(), start.getFullYear());
            months -= 1;

            if (!invert) {
                days -= Number(daysPerMonth(start.getMonth(), start.getFullYear()) === daysPerMonth(end.getMonth(), end.getFullYear()));
            }
        }

        if (days === 0 && invert) {
            days = 31;
            months -= 1;
        }

        if (months < 0) {
            months += Constant.MonthsPerYear;
            years -= 1;
        }

        this.y        = Math.floor(years);
        this.m        = months;
        this.d        = Math.max(days - invert, 0);
        this.h        = hours;
        this.i        = minutes;
        this.s        = seconds;
        this.f        = milliseconds;
        this.days     = Math.floor(diffInMilliseconds / Constant.MillisecondsPerDay);
        this.invert   = invert;
        this.interval = absolute ? this.toString().replace('-', '+') : this.toString();
    }

    /**
     * Formats the interval.
     *
     * @param { string } format
     *
     * @returns { string }
     */
    format(format: string): string {
        let interval: string = '';

        const elements: RegExpMatchArray | null = format.match(/%?.|./g);

        for (const element of elements!) {
            switch (element) {
                // Years, numeric, at least 2 digits with leading 0 (e.g., 01, 03)
                case '%Y':
                    interval += this.y.toString().padStart(2, '0');

                    break;

                // Years, numeric 0 (e.g., 1, 3)
                case '%y':
                    interval += this.y;

                    break;

                // Months, numeric, at least 2 digits with leading 0 (e.g., 01, 03, 12)
                case '%M':
                    interval += this.m.toString().padStart(2, '0');

                    break;

                // Months, numeric (e.g., 1, 3, 12)
                case '%m':
                    interval += this.m;

                    break;

                // Days, numeric, at least 2 digits with leading 0 (e.g., 01, 03, 31)
                case '%D':
                    interval += this.d.toString().padStart(2, '0');

                    break;

                // Days, numeric (e.g., 1, 3, 31)
                case '%d':
                    interval += this.d;

                    break;

                // Total number of days (e.g., 4, 18, 8123)
                case '%a':
                    interval += this.days;

                    break;

                // Hours, numeric, at least 2 digits with leading 0 (e.g., 01, 03, 23)
                case '%H':
                    interval += this.h.toString().padStart(2, '0');

                    break;

                // Hours, numeric (e.g., 1, 3, 23)
                case '%h':
                    interval += this.h;

                    break;

                // Minutes, numeric, at least 2 digits with leading 0 (e.g., 01, 03, 59)
                case '%I':
                    interval += this.i.toString().padStart(2, '0');

                    break;

                // Minutes, numeric (e.g., 1, 3, 59)
                case '%i':
                    interval += this.i;

                    break;

                // Seconds, numeric, at least 2 digits with leading 0 (e.g., 01, 03, 57)
                case '%S':
                    interval += this.s.toString().padStart(2, '0');

                    break;

                // Seconds, numeric (e.g., 1, 3, 57)
                case '%s':
                    interval += this.s;

                    break;

                // Milliseconds, numeric, at least 3 digits with leading 0 (e.g., 007, 052, 428)
                case '%F':
                    interval += this.f.toString().padStart(3, '0');

                    break;

                // Milliseconds, numeric (e.g., 7, 52, 428)
                case '%f':
                    interval += this.f;

                    break;

                // Sign "-" when negative, "+" when positive (e.g., -, +)
                case '%R':
                    interval += this.invert ? '-' : '+';

                    break;

                // Sign "-" when negative, empty when positive (e.g., -,)
                case '%r':
                    interval += this.invert ? '-' : '';

                    break;

                default:
                    interval += element.length >= 2 && element.indexOf('%') > -1 ? element.replace('%', '') : element;
            }
        }

        return interval;

    }

    /**
     * Returns the formatted interval.
     *
     * @returns { string }
     */
    toJson(): object {
        return {
            y       : this.y,
            m       : this.m,
            d       : this.d,
            h       : this.h,
            i       : this.i,
            s       : this.s,
            f       : this.f,
            days    : this.days,
            invert  : this.invert,
            interval: this.interval
        };
    }

    /**
     * Returns the formatted interval.
     *
     * @returns { string }
     */
    toString(): string {
        const years: string  = this.y ? `%${this.y}y` : '';
        const months: string = this.m ? `%${this.m}m` : '';
        const days: string   = this.d ? `%${this.d}d` : '';
        const format: string = `%R ${years} ${months} ${days} %H:%I:%S.%F`.replace(/ +(?= )/g, '');

        return this.format(format);
    }
}

if (typeof exports != 'undefined') {
    module.exports.Carbon = Carbon;
}

// Hack to test this code, global is not available in the browser.
if (typeof global !== 'undefined') {
    const _global: any = global;

    _global.Carbon       = Carbon;
    _global.DateInterval = DateInterval;
}