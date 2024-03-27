"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Carbon_instances, _a, _Carbon_date, _Carbon_timezone, _Carbon_ATOM, _Carbon_COOKIE, _Carbon_ISO8601, _Carbon_ISO8601_EXPANDED, _Carbon_RFC822, _Carbon_RFC850, _Carbon_RFC1036, _Carbon_RFC1123, _Carbon_RFC2822, _Carbon_RFC3339, _Carbon_RFC3339_EXTENDED, _Carbon_RFC7231, _Carbon_RSS, _Carbon_W3C, _Carbon_resolveCarbon;
var DayOfTheWeek;
(function (DayOfTheWeek) {
    DayOfTheWeek[DayOfTheWeek["Sunday"] = 0] = "Sunday";
    DayOfTheWeek[DayOfTheWeek["Monday"] = 1] = "Monday";
    DayOfTheWeek[DayOfTheWeek["Tuesday"] = 2] = "Tuesday";
    DayOfTheWeek[DayOfTheWeek["Wednesday"] = 3] = "Wednesday";
    DayOfTheWeek[DayOfTheWeek["Thursday"] = 4] = "Thursday";
    DayOfTheWeek[DayOfTheWeek["Friday"] = 5] = "Friday";
    DayOfTheWeek[DayOfTheWeek["Saturday"] = 6] = "Saturday";
})(DayOfTheWeek || (DayOfTheWeek = {}));
var Constant;
(function (Constant) {
    Constant[Constant["YearsPerMillennium"] = 1000] = "YearsPerMillennium";
    Constant[Constant["YearsPerCentury"] = 100] = "YearsPerCentury";
    Constant[Constant["YearsPerDecade"] = 10] = "YearsPerDecade";
    Constant[Constant["MonthsPerYear"] = 12] = "MonthsPerYear";
    Constant[Constant["MonthsPerQuarter"] = 3] = "MonthsPerQuarter";
    Constant[Constant["QuartersPerYear"] = 4] = "QuartersPerYear";
    Constant[Constant["WeeksPerYear"] = 52] = "WeeksPerYear";
    Constant[Constant["WeeksPerMonth"] = 4] = "WeeksPerMonth";
    Constant[Constant["DaysPerYear"] = 365] = "DaysPerYear";
    Constant[Constant["DaysPerWeek"] = 7] = "DaysPerWeek";
    Constant[Constant["HoursPerDay"] = 24] = "HoursPerDay";
    Constant[Constant["MinutesPerHour"] = 60] = "MinutesPerHour";
    Constant[Constant["SecondsPerMinute"] = 60] = "SecondsPerMinute";
    Constant[Constant["SecondsPerHour"] = 3600] = "SecondsPerHour";
    Constant[Constant["MillisecondsPerSecond"] = 1000] = "MillisecondsPerSecond";
    Constant[Constant["MillisecondsPerDay"] = 86400000] = "MillisecondsPerDay";
    Constant[Constant["MicrosecondsPerMillisecond"] = 1000] = "MicrosecondsPerMillisecond";
    Constant[Constant["MicrosecondsPerSecond"] = 1000000] = "MicrosecondsPerSecond";
})(Constant || (Constant = {}));
class Carbon {
    /**
     * Create new Carbon instance.
     *
     * @param { string | null } date
     * @param { string | null } timezone
     */
    constructor(date = null, timezone = null) {
        _Carbon_instances.add(this);
        /**
         * A date/time string.
         *
         * @private
         *
         * @type { Date }
         */
        _Carbon_date.set(this, void 0);
        /**
         * A timezone string.
         *
         * @private
         *
         * @type { string | null }
         */
        _Carbon_timezone.set(this, void 0);
        /**
         * Standard to represent date and time information in XML feeds.
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_ATOM.set(this, 'Y-m-d\\TH:i:sP');
        /**
         * Standard to represent date and time information in Cookies.
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_COOKIE.set(this, 'l, d-M-Y H:i:s T');
        /**
         * International standard covering the worldwide exchange and communication of date and time-related data.
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_ISO8601.set(this, 'Y-m-d\\TH:i:sO');
        /**
         * Expanded international standard covering the worldwide exchange and communication of date and time-related data.
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_ISO8601_EXPANDED.set(this, 'X-m-d\\TH:i:sP');
        /**
         * Standard for the Format of Arpa Internet Text Messages.
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_RFC822.set(this, 'D, d M y H:i:s O');
        /**
         * Standard for Interchange of USENET Messages. (June 1983)
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_RFC850.set(this, 'l, d-M-y H:i:s T');
        /**
         * Standard for Interchange of USENET Messages. (December 1987)
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_RFC1036.set(this, 'D, d M y H:i:s O');
        /**
         * Standard to represent date and time information in Internet protocols.
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_RFC1123.set(this, 'D, d M Y H:i:s O');
        /**
         * Standard for Internet Message Format.
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_RFC2822.set(this, 'D, d M Y H:i:s O');
        /**
         * Standard for Date and Time on the Internet.
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_RFC3339.set(this, 'Y-m-d\\TH:i:sP');
        /**
         * Extended standard for Date and Time on the Internet.
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_RFC3339_EXTENDED.set(this, 'Y-m-d\\TH:i:s.vP');
        /**
         * Standard to represent date and time information in Hypertext Transfer Protocol.
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_RFC7231.set(this, 'D, d M Y H:i:s \\G\\M\\T');
        /**
         * Standard to represent date and time information in RSS feeds.
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_RSS.set(this, 'D, d M Y H:i:s O');
        /**
         * Standard to represent date and time information in a machine-readable and unambiguous manner.
         *
         * @private
         *
         * @type { string }
         */
        _Carbon_W3C.set(this, 'Y-m-d\\TH:i:sP');
        /**
         * A date/time string.
         *
         * @private
         *
         * @type { string }
         */
        Object.defineProperty(this, "date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _Carbon_date, date === null || date === 'now' ? new Date() : new Date(date), "f");
        __classPrivateFieldSet(this, _Carbon_timezone, timezone, "f");
        this.date = this.format('Y-m-d H:i:s.v T (P)');
    }
    /**
     * Year of this instance.
     *
     * @returns { number }
     */
    get year() {
        return this.get('year');
    }
    /**
     * Month of this instance.
     *
     * @returns { number }
     */
    get month() {
        return this.get('month');
    }
    /**
     * Week of this instance.
     *
     * @returns { number }
     */
    get week() {
        return this.get('week');
    }
    /**
     * Day of this instance.
     *
     * @returns { number }
     */
    get day() {
        return this.get('day');
    }
    /**
     * Day of the week of this instance (0 for Sunday through 6 for Saturday).
     *
     * @returns { number }
     */
    get dayOfWeek() {
        return this.get('dayOfWeek');
    }
    /**
     * Day of the year of this instance.
     *
     * @returns { number }
     */
    get dayOfYear() {
        return this.get('dayOfYear');
    }
    /**
     * Number of days in the given month.
     *
     * @returns { number }
     */
    get daysInMonth() {
        return this.get('daysInMonth');
    }
    /**
     * Hour of this instance.
     *
     * @returns { number }
     */
    get hour() {
        return this.get('hour');
    }
    /**
     * Minute of this instance.
     *
     * @returns { number }
     */
    get minute() {
        return this.get('minute');
    }
    /**
     * Second of this instance.
     *
     * @returns { number }
     */
    get second() {
        return this.get('second');
    }
    /**
     * Millisecond of this instance.
     *
     * @returns { number }
     */
    get millisecond() {
        return this.get('millisecond');
    }
    /**
     * Microsecond of this instance.
     *
     * @returns { number }
     */
    get microsecond() {
        return this.get('microsecond');
    }
    /**
     * Seconds since the Unix Epoch.
     *
     * @returns { number }
     */
    get timestamp() {
        return this.get('timestamp');
    }
    /**
     * Quarter of this instance.
     *
     * @returns { number }
     */
    get quarter() {
        return this.get('quarter');
    }
    /**
     * Decade of this instance.
     *
     * @returns { number }
     */
    get decade() {
        return this.get('decade');
    }
    /**
     * Century of this instance.
     *
     * @returns { number }
     */
    get century() {
        return this.get('century');
    }
    /**
     * Millennium of this instance.
     *
     * @returns { number }
     */
    get millennium() {
        return this.get('millennium');
    }
    /**
     * Timezone offset in seconds from UTC.
     *
     * @returns { number }
     */
    get offset() {
        return this.get('offset');
    }
    /**
     * Daylight savings time indicator.
     *
     * @returns { boolean }
     */
    get dst() {
        return this.get('dst');
    }
    /**
     * Determine if the timezone is local.
     *
     * @returns { boolean }
     */
    get local() {
        return this.get('local');
    }
    /**
     * Determine if the timezone is UTC.
     *
     * @returns { boolean }
     */
    get utc() {
        return this.get('utc');
    }
    /**
     * Current timezone.
     *
     * @returns { string }
     */
    get timezone() {
        return this.get('timezone');
    }
    /**
     * Get a Carbon instance for the current date and time.
     *
     * @param { string | null } timezone
     *
     * @returns { Carbon }
     */
    static now(timezone = null) {
        return new _a('now', timezone);
    }
    /**
     * Get a Carbon instance for today.
     *
     * @param { string | null } timezone
     *
     * @returns { Carbon }
     */
    static today(timezone = null) {
        const today = _a.now(timezone);
        return today.setTime(0, 0, 0, 0);
    }
    /**
     * Get a Carbon instance for tomorrow.
     *
     * @param { string | null } timezone
     *
     * @returns { Carbon }
     */
    static tomorrow(timezone = null) {
        const today = _a.today(timezone);
        return today.addDays(today.offset > Constant.SecondsPerHour ? 0 : 1);
    }
    /**
     * Get a Carbon instance for yesterday.
     *
     * @param { string | null } timezone
     *
     * @returns { Carbon }
     */
    static yesterday(timezone = null) {
        const today = _a.today(timezone);
        return today.subDays(today.offset > Constant.SecondsPerHour ? 2 : 1);
    }
    /**
     * Parse the date.
     *
     * @param { string | null } date
     * @param { string | null } timezone
     *
     * @returns { void }
     */
    static parse(date = null, timezone = null) {
        return new _a(date, timezone);
    }
    /**
     * Returns the formatted date string.
     *
     * @param { string } format
     *
     * @returns { string }
     */
    format(format) {
        var _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (__classPrivateFieldGet(this, _Carbon_date, "f").toString() === 'Invalid Date') {
            return 'Invalid Date';
        }
        let date = '';
        const now = new Date(__classPrivateFieldGet(this, _Carbon_date, "f").toLocaleString('en-US', { timeZone: (_b = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _b !== void 0 ? _b : undefined }));
        const month = now.getMonth();
        const dayOfTheWeek = now.getDay();
        const dayOfTheMonth = now.getDate();
        const year = now.getFullYear();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const elements = format.match(/\\?.|./g);
        for (const element of elements) {
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
                    let suffix = { 1: 'st', 2: 'nd', 3: 'rd', 21: 'st', 22: 'nd', 23: 'rd', 31: 'st' };
                    date += (_c = suffix[dayOfTheMonth]) !== null && _c !== void 0 ? _c : 'th';
                    break;
                }
                // Numeric representation of the day of the week (e.g., 0 (for Sunday) through 6 (for Saturday))
                case 'w':
                    date += dayOfTheWeek;
                    break;
                // Numeric representation of the day of the week (e.g., The day of the year (starting from 0))
                case 'z': {
                    let start = new Date(year, 0, 0);
                    let diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
                    let day = Constant.MillisecondsPerDay;
                    const currentDay = Math.floor(diff / day);
                    date += currentDay;
                    break;
                }
                // ISO 8601 week number of year, weeks starting on Monday (e.g., 42 (the 42nd week in the year))
                case 'W': {
                    let parsedDate = new Date(Date.UTC(year, month, dayOfTheMonth));
                    let weekDay = parsedDate.getUTCDay() || 7;
                    parsedDate.setUTCDate(parsedDate.getUTCDate() + 4 - weekDay);
                    let yearStart = new Date(Date.UTC(parsedDate.getUTCFullYear(), 0, 1));
                    let weekNumber = Math.ceil((((parsedDate - yearStart) / Constant.MillisecondsPerDay) + 1) / Constant.DaysPerWeek);
                    date += weekNumber.toString().padStart(2, '0');
                    break;
                }
                // A full textual representation of a month, such as January or March (e.g., January through December)
                case 'F':
                    date += now.toLocaleString('en-US', { month: 'long' });
                    break;
                // Numeric representation of a month, with leading zeros (e.g., 01 through 12)
                case 'm': {
                    const currentMonth = month + 1;
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
                    const hours = now.getUTCHours();
                    const minutes = now.getUTCMinutes();
                    const seconds = now.getUTCSeconds();
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
                    date += __classPrivateFieldGet(this, _Carbon_date, "f").getMilliseconds().toString().padEnd(3, '0');
                    break;
                }
                // Timezone identifier (e.g., UTC, GMT, Atlantic/Azores)
                case 'e': {
                    date += Intl.DateTimeFormat('en-us', { timeZone: (_d = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _d !== void 0 ? _d : undefined }).resolvedOptions().timeZone;
                    break;
                }
                // Whether the date is in daylight saving time (e.g., 1 if Daylight Saving Time, 0 otherwise)
                case 'I': {
                    let january = new Date(year, 0, 1).getTimezoneOffset();
                    let july = new Date(year, 6, 1).getTimezoneOffset();
                    date += Math.max(january, july) !== now.getTimezoneOffset() ? '1' : '0';
                    break;
                }
                // Difference to Greenwich time (GMT) without colon between hours and minutes (e.g., +0200)
                case 'O': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'longOffset', timeZone: (_e = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _e !== void 0 ? _e : undefined, })
                        .split(', ')
                        .pop()
                        .trim();
                    date += timeZoneData.length !== 3 ? timeZoneData.substring(3).replace(':', '') : '+0000';
                    break;
                }
                // Difference to Greenwich time (GMT) with colon between hours and minutes (e.g., +02:00)
                case 'P': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'longOffset', timeZone: (_f = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _f !== void 0 ? _f : undefined, })
                        .split(', ')
                        .pop()
                        .trim();
                    date += timeZoneData.length !== 3 ? timeZoneData.substring(3) : '+00:00';
                    break;
                }
                // The same as P, but returns Z instead of +00:00 (e.g., +02:00)
                case 'p': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'longOffset', timeZone: (_g = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _g !== void 0 ? _g : undefined, })
                        .split(', ')
                        .pop()
                        .trim();
                    date += timeZoneData === 'GMT' ? 'Z' : timeZoneData.substring(3);
                    break;
                }
                // Timezone abbreviation, if known; otherwise the GMT offset (e.g., EST, MDT, +05)
                case 'T': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'short', timeZone: (_h = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _h !== void 0 ? _h : undefined, })
                        .split(', ')
                        .pop()
                        .trim();
                    date += (_j = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _j !== void 0 ? _j : timeZoneData.replace('GMT', 'UTC').split(/[+-]/)[0];
                    break;
                }
                // Timezone offset in seconds.
                // The offset for timezones west of UTC is always negative,
                // and for those east of UTC is always positive. (e.g., -43200 through 50400)
                case 'Z': {
                    const timezone = now.toLocaleDateString('en-us', { timeZoneName: 'longOffset', timeZone: (_k = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _k !== void 0 ? _k : undefined });
                    const symbol = timezone.match(/[+-]/);
                    const data = timezone.split(/[+-]/);
                    const sign = symbol ? symbol.pop() : '+';
                    const offset = data.length === 2 ? data[1] : '0:00';
                    const hours = parseInt(offset.split(':')[0]);
                    const minutes = parseInt(offset.split(':')[1]);
                    const offsetInSeconds = hours * Constant.SecondsPerHour + minutes * Constant.SecondsPerMinute;
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
    isLocal() {
        return this.local;
    }
    /**
     * Determine if the instance's date and time are in the UTC timezone.
     *
     * @returns { boolean }
     */
    isUtc() {
        return this.utc;
    }
    /**
     * Determine if the instance's date and time is valid.
     *
     * @returns { boolean }
     */
    isValid() {
        return !isNaN(__classPrivateFieldGet(this, _Carbon_date, "f").getFullYear()) && (__classPrivateFieldGet(this, _Carbon_date, "f").getFullYear() !== 0);
    }
    /**
     * Determine if the instance's date and time in a daylight saving time.
     *
     * @returns { boolean }
     */
    isDst() {
        return this.dst;
    }
    /**
     * Determines if the instance is a leap year.
     *
     * @returns { boolean }
     */
    isLeapYear() {
        return this.format('L') === '1';
    }
    /**
     * Determine if the instance's day is Monday.
     *
     * @returns { boolean }
     */
    isMonday() {
        return this.dayOfWeek === DayOfTheWeek.Monday;
    }
    /**
     * Determine if the instance's day is Tuesday.
     *
     * @returns { boolean }
     */
    isTuesday() {
        return this.dayOfWeek === DayOfTheWeek.Tuesday;
    }
    /**
     * Determine if the instance's day is Wednesday.
     *
     * @returns { boolean }
     */
    isWednesday() {
        return this.dayOfWeek === DayOfTheWeek.Wednesday;
    }
    /**
     * Determine if the instance's day is Thursday.
     *
     * @returns { boolean }
     */
    isThursday() {
        return this.dayOfWeek === DayOfTheWeek.Thursday;
    }
    /**
     * Determine if the instance's day is Friday.
     *
     * @returns { boolean }
     */
    isFriday() {
        return this.dayOfWeek === DayOfTheWeek.Friday;
    }
    /**
     * Determine if the instance's day is Saturday.
     *
     * @returns { boolean }
     */
    isSaturday() {
        return this.dayOfWeek === DayOfTheWeek.Saturday;
    }
    /**
     * Determine if the instance's day is Sunday.
     *
     * @returns { boolean }
     */
    isSunday() {
        return this.dayOfWeek === DayOfTheWeek.Sunday;
    }
    /**
     * Determines if the instance is a weekday.
     *
     * @returns { boolean }
     */
    isWeekday() {
        return !this.isWeekend();
    }
    /**
     * Determines if the instance is a weekend day.
     *
     * @returns { boolean }
     */
    isWeekend() {
        return [DayOfTheWeek.Saturday, DayOfTheWeek.Sunday].includes(this.dayOfWeek);
    }
    /**
     * Determines if the instance is today.
     *
     * @returns { boolean }
     */
    isToday() {
        return this.toDateString() === _a.today(__classPrivateFieldGet(this, _Carbon_timezone, "f")).toDateString();
    }
    /**
     * Determines if the instance is tomorrow.
     *
     * @returns { boolean }
     */
    isTomorrow() {
        return this.toDateString() === _a.tomorrow(__classPrivateFieldGet(this, _Carbon_timezone, "f")).toDateString();
    }
    /**
     * Determines if the instance is yesterday.
     *
     * @returns { boolean }
     */
    isYesterday() {
        return this.toDateString() === _a.yesterday(__classPrivateFieldGet(this, _Carbon_timezone, "f")).toDateString();
    }
    /**
     * Determines if the instance is a specific day of the week.
     *
     * @param { string | number } day
     *
     * @returns { boolean }
     */
    isDayOfWeek(day) {
        const daysOfWeek = {
            'sunday': 0,
            'monday': 1,
            'tuesday': 2,
            'wednesday': 3,
            'thursday': 4,
            'friday': 5,
            'saturday': 6,
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
    isBirthday(date = null) {
        return this.isSameAs('md', date);
    }
    /**
     * Determines if today is the last day of the Month.
     *
     * @returns { boolean }
     */
    isLastOfMonth() {
        return this.day === this.daysInMonth;
    }
    /**
     * Determines if the instance is start of day.
     *
     * @param { boolean } checkMilliseconds
     *
     * @return { boolean }
     */
    isStartOfDay(checkMilliseconds = false) {
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
    isEndOfDay(checkMilliseconds = false) {
        return checkMilliseconds
            ? this.format('H:i:s.v') === '23:59:59.999'
            : this.format('H:i:s') === '23:59:59';
    }
    /**
     * Determines if the instance is midnight.
     *
     * @return { boolean }
     */
    isMidnight() {
        return this.isStartOfDay();
    }
    /**
     * Determines if the instance is midday.
     *
     * @return { boolean }
     */
    isMidday() {
        return this.format('G:i:s') === '12:00:00';
    }
    /**
     * Determine if the given date is in the same year as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | string | null } date
     *
     * @returns { boolean }
     */
    isSameYear(date = null) {
        return this.isSameAs('Y', date);
    }
    /**
     * Determine if the instance is in the same year as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentYear() {
        return this.isSameAs('Y', new Date);
    }
    /**
     * Determine if the instance is in the same year as the current moment next year.
     */
    isNextYear() {
        return this.year === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).addYear().year;
    }
    /**
     * Determine if the instance is in the same year as the current moment last year.
     *
     * @return { boolean }
     */
    isLastYear() {
        return this.year === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).subYear().year;
    }
    /**
     * Determine if the given date is in the same month as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameMonth(date = null) {
        return this.isSameAs('Y-m', date);
    }
    /**
     * Determine if the instance is in the same month as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentMonth() {
        return this.isSameAs('Y-m', new Date);
    }
    /**
     * Determine if the instance is in the same month as the current moment next month.
     *
     * @returns { boolean }
     */
    isNextMonth() {
        return this.format('Y-m') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).addMonth().format('Y-m');
    }
    /**
     * Determine if the instance is in the same month as the current moment last month.
     *
     * @returns { boolean }
     */
    isLastMonth() {
        return this.format('Y-m') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).subMonth().format('Y-m');
    }
    /**
     * Determine if the given date is in the same week as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameWeek(date = null) {
        return this.isSameAs('o-W', date);
    }
    /**
     * Determine if the instance is in the same week as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentWeek() {
        return this.isSameAs('o-W', new Date);
    }
    /**
     * Determine if the instance is in the same week as the current moment next week.
     *
     * @returns { boolean }
     */
    isNextWeek() {
        return this.format('o-W') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).addWeek().format('o-W');
    }
    /**
     * Determine if the instance is in the same week as the current moment last week.
     *
     * @returns { boolean }
     */
    isLastWeek() {
        return this.format('o-W') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).subWeek().format('o-W');
    }
    /**
     * Determine if the given date is in the same day as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameDay(date = null) {
        return this.isSameAs('Y-m-d', date);
    }
    /**
     * Determine if the instance is in the same day as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentDay() {
        return this.isSameAs('Y-m-d', new Date);
    }
    /**
     * Determine if the instance is in the same day as the current moment next day.
     *
     * @returns { boolean }
     */
    isNextDay() {
        return this.format('Y-m-d') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).addDay().format('Y-m-d');
    }
    /**
     * Determine if the instance is in the same day as the current moment last day.
     */
    isLastDay() {
        return this.format('Y-m-d') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).subDay().format('Y-m-d');
    }
    /**
     * Determine if the given date is in the same hour as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameHour(date = null) {
        return this.isSameAs('Y-m-d H', date);
    }
    /**
     * Determine if the instance is in the same hour as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentHour() {
        return this.isSameAs('Y-m-d H', new Date);
    }
    /**
     * Determine if the instance is in the same hour as the current moment next hour.
     *
     * @returns { boolean }
     */
    isNextHour() {
        return this.format('Y-m-d H') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).addHour().format('Y-m-d H');
    }
    /**
     * Determine if the instance is in the same hour as the current moment last hour.
     *
     * @returns { boolean }
     */
    isLastHour() {
        return this.format('Y-m-d H') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).subHour().format('Y-m-d H');
    }
    /**
     * Determine if the given date is in the same minute as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameMinute(date = null) {
        return this.isSameAs('Y-m-d H:i', date);
    }
    /**
     * Determine if the instance is in the same minute as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentMinute() {
        return this.isSameAs('Y-m-d H:i', new Date);
    }
    /**
     * Determine if the instance is in the same minute as the current moment next minute.
     *
     * @return { boolean }
     */
    isNextMinute() {
        return this.format('Y-m-d H:i') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).addMinute().format('Y-m-d H:i');
    }
    /**
     * Determine if the instance is in the same minute as the current moment last minute.
     *
     * @returns { boolean }
     */
    isLastMinute() {
        return this.format('Y-m-d H:i') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).subMinute().format('Y-m-d H:i');
    }
    /**
     * Determine if the given date is in the same second as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameSecond(date = null) {
        return this.isSameAs('Y-m-d H:i:s', date);
    }
    /**
     * Determine if the instance is in the same second as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentSecond() {
        return this.isSameAs('Y-m-d H:i:s', new Date);
    }
    /**
     * Determine if the instance is in the same second as the current moment next second.
     *
     * @returns { boolean }
     */
    isNextSecond() {
        return this.format('Y-m-d H:i:s') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).addSecond().format('Y-m-d H:i:s');
    }
    /**
     * Determine if the instance is in the same second as the current moment last second.
     *
     * @returns { boolean }
     */
    isLastSecond() {
        return this.format('Y-m-d H:i:s') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).subSecond().format('Y-m-d H:i:s');
    }
    /**
     * Determine if the given date is in the same millisecond as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameMillisecond(date = null) {
        return this.isSameAs('Y-m-d H:i:s.v', date);
    }
    /**
     * Determine if the instance is in the same millisecond as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentMillisecond() {
        return this.isSameAs('Y-m-d H:i:s.v', new Date);
    }
    /**
     * Determine if the instance is in the same millisecond as the current moment next millisecond.
     *
     * @returns { boolean }
     */
    isNextMillisecond() {
        return this.format('Y-m-d H:i:s.v') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).addMillisecond().format('Y-m-d H:i:s.v');
    }
    /**
     * Determine if the instance is in the same millisecond as the current moment last millisecond.
     *
     * @returns { boolean }
     */
    isLastMillisecond() {
        return this.format('Y-m-d H:i:s.v') === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).subMillisecond().format('Y-m-d H:i:s.v');
    }
    /**
     * Determine if the given date is in the same millisecond as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameMicrosecond(date = null) {
        throw new Error('isSameMicrosecond method is not supported.');
    }
    /**
     * Determine if the instance is in the same millisecond as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentMicrosecond() {
        throw new Error('isCurrentMicrosecond method is not supported.');
    }
    /**
     * Determine if the instance is in the same millisecond as the current moment next millisecond.
     *
     * @returns { boolean }
     */
    isNextMicrosecond() {
        throw new Error('isNextMicrosecond method is not supported.');
    }
    /**
     * Determine if the instance is in the same millisecond as the current moment last millisecond.
     *
     * @returns { boolean }
     */
    isLastMicrosecond() {
        throw new Error('isLastMicrosecond method is not supported.');
    }
    /**
     * Determine if the given date is in the same quarter as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameQuarter(date = null) {
        return this.quarter === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this, date).quarter;
    }
    /**
     * Determine if the instance is in the same quarter as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentQuarter() {
        return this.quarter === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this, new Date).quarter;
    }
    /**
     * Determine if the instance is in the same quarter as the current moment next quarter.
     *
     * @returns { boolean }
     */
    isNextQuarter() {
        return this.quarter === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).addQuarter().quarter;
    }
    /**
     * Determine if the instance is in the same quarter as the current moment last quarter.
     *
     * @returns { boolean }
     */
    isLastQuarter() {
        return this.quarter === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).subQuarter().quarter;
    }
    /**
     * Determine if the given date is in the same decade as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameDecade(date = null) {
        return this.decade === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this, date).decade;
    }
    /**
     * Determine if the instance is in the same decade as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentDecade() {
        return this.decade === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this, new Date).decade;
    }
    /**
     * Determine if the instance is in the same decade as the current moment next decade.
     *
     * @returns { boolean }
     */
    isNextDecade() {
        return this.decade === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).addDecade().decade;
    }
    /**
     * Determine if the instance is in the same decade as the current moment last decade.
     *
     * @returns { boolean }
     */
    isLastDecade() {
        return this.decade === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).subDecade().decade;
    }
    /**
     * Determine if the given date is in the same century as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameCentury(date = null) {
        return this.century === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this, date).century;
    }
    /**
     * Determine if the instance is in the same century as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentCentury() {
        return this.century === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this, new Date).century;
    }
    /**
     * Determine if the instance is in the same century as the current moment next century.
     *
     * @returns { boolean }
     */
    isNextCentury() {
        return this.century === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).addCentury().century;
    }
    /**
     * Determine if the instance is in the same century as the current moment last century.
     *
     * @returns { boolean }
     */
    isLastCentury() {
        return this.century === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).subCentury().century;
    }
    /**
     * Determine if the given date is in the same millennium as the instance. If null passed, compare to now (with the same timezone).
     *
     * @param { Carbon | Date | string | null } date
     *
     * @returns { boolean }
     */
    isSameMillennium(date = null) {
        return this.millennium === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this, date).millennium;
    }
    /**
     * Determine if the instance is in the same millennium as the current moment.
     *
     * @returns { boolean }
     */
    isCurrentMillennium() {
        return this.millennium === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this, new Date).millennium;
    }
    /**
     * Determine if the instance is in the same millennium as the current moment next millennium.
     *
     * @returns { boolean }
     */
    isNextMillennium() {
        return this.millennium === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).addMillennium().millennium;
    }
    /**
     * Determine if the instance is in the same millennium as the current moment last millennium.
     *
     * @returns { boolean }
     */
    isLastMillennium() {
        return this.millennium === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this).subMillennium().millennium;
    }
    /**
     * Compares the formatted values of the two dates.
     *
     * @param { string } format
     * @param { Carbon | Date | string | null } date
     *
     * @return { boolean }
     */
    isSameAs(format, date = null) {
        return this.format(format) === __classPrivateFieldGet(this, _Carbon_instances, "m", _Carbon_resolveCarbon).call(this, date).format(format);
    }
    /**
     * Format the instance as date.
     *
     * @return { string }
     */
    toDateString() {
        return this.format('Y-m-d');
    }
    /**
     * Format the instance as readable date.
     *
     * @return { string }
     */
    toFormattedDateString() {
        return this.format('M j, Y');
    }
    /**
     * Format the instance with the day, and a readable date.
     *
     * @return { string }
     */
    toFormattedDayDateString() {
        return this.format('D, M j, Y');
    }
    /**
     * Format the instance as time.
     *
     * @param { string } precision
     *
     * @return { string }
     */
    toTimeString(precision = 'second') {
        return this.format(this.getTimeFormatByPrecision(precision));
    }
    /**
     * Format the instance as date and time.
     *
     * @param { string } precision
     *
     * @return { string }
     */
    toDateTimeString(precision = 'second') {
        return this.format(`Y-m-d ${this.getTimeFormatByPrecision(precision)}`);
    }
    /**
     * Format the instance as date and time T-separated with no timezone.
     *
     * @param { string } precision
     *
     * @return { string }
     */
    toDateTimeLocalString(precision = 'second') {
        return this.format(`Y-m-d\\T${this.getTimeFormatByPrecision(precision)}`);
    }
    /**
     * Format the instance with day, date and time.
     *
     * @return { string }
     */
    toDayDateTimeString() {
        return this.format('D, M j, Y g:i A');
    }
    /**
     * Format the instance as ATOM.
     *
     * @return { string }
     */
    toAtomString() {
        return this.format(__classPrivateFieldGet(this, _Carbon_ATOM, "f"));
    }
    /**
     * Format the instance as COOKIE.
     *
     * @return { string }
     */
    toCookieString() {
        return this.format(__classPrivateFieldGet(this, _Carbon_COOKIE, "f"));
    }
    /**
     * Format the instance as ISO8601.
     *
     * @param { boolean } keepOffset
     *
     * @return { string }
     */
    toIsoString(keepOffset = false) {
        if (!keepOffset) {
            __classPrivateFieldSet(this, _Carbon_timezone, 'UTC', "f");
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
    toIso8601String(extended = false) {
        return extended
            ? this.format(__classPrivateFieldGet(this, _Carbon_ISO8601_EXPANDED, "f"))
            : this.format(__classPrivateFieldGet(this, _Carbon_ISO8601, "f"));
    }
    /**
     * Convert the instance to UTC and return as Zulu ISO8601.
     *
     * @param { string } precision
     *
     * @return { string }
     */
    toIso8601ZuluString(precision = 'second') {
        __classPrivateFieldSet(this, _Carbon_timezone, 'UTC', "f");
        return this.format(`Y-m-d\\T${this.getTimeFormatByPrecision(precision)}\\Z`);
    }
    /**
     * Format the instance as RFC822.
     *
     * @return { string }
     */
    toRfc822String() {
        return this.format(__classPrivateFieldGet(this, _Carbon_RFC822, "f"));
    }
    /**
     * Format the instance as RFC850.
     *
     * @return { string }
     */
    toRfc850String() {
        return this.format(__classPrivateFieldGet(this, _Carbon_RFC850, "f"));
    }
    /**
     * Format the instance as RFC1036.
     *
     * @return { string }
     */
    toRfc1036String() {
        return this.format(__classPrivateFieldGet(this, _Carbon_RFC1036, "f"));
    }
    /**
     * Format the instance as RFC1123.
     *
     * @return { string }
     */
    toRfc1123String() {
        return this.format(__classPrivateFieldGet(this, _Carbon_RFC1123, "f"));
    }
    /**
     * Format the instance as RFC2822.
     *
     * @return { string }
     */
    toRfc2822String() {
        return this.format(__classPrivateFieldGet(this, _Carbon_RFC2822, "f"));
    }
    /**
     * Format the instance as RFC3339.
     *
     * @param { boolean } extended
     *
     * @return { string }
     */
    toRfc3339String(extended = false) {
        return extended
            ? this.format(__classPrivateFieldGet(this, _Carbon_RFC3339_EXTENDED, "f"))
            : this.format(__classPrivateFieldGet(this, _Carbon_RFC3339, "f"));
    }
    /**
     * Format the instance as RFC7231.
     *
     * @return { string }
     */
    toRfc7231String() {
        __classPrivateFieldSet(this, _Carbon_timezone, 'UTC', "f");
        return this.format(__classPrivateFieldGet(this, _Carbon_RFC7231, "f"));
    }
    /**
     * Format the instance as RSS.
     *
     * @return { string }
     */
    toRssString() {
        return this.format(__classPrivateFieldGet(this, _Carbon_RSS, "f"));
    }
    /**
     * Format the instance as W3C.
     *
     * @return { string }
     */
    toW3cString() {
        return this.format(__classPrivateFieldGet(this, _Carbon_W3C, "f"));
    }
    /**
     * Return a format from H:i to H:i:s.u according to given unit precision.
     *
     * @param { string } precision
     *
     * @return { string }
     */
    getTimeFormatByPrecision(precision) {
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
    toArray() {
        throw new Error('toArray method is not supported.');
    }
    /**
     * Get default object representation.
     *
     * @returns { object }
     */
    toObject() {
        return {
            year: this.year,
            month: this.month,
            day: this.day,
            dayOfWeek: this.dayOfWeek,
            dayOfYear: this.dayOfYear,
            hour: this.hour,
            minute: this.minute,
            second: this.second,
            micro: undefined,
            timestamp: this.timestamp,
            formatted: this.format('Y-m-d H:i:s'),
            timezone: this.timezone,
        };
    }
    /**
     * Return the ISO-8601 string with UTC timezone.
     *
     * @returns { string }
     */
    toJson() {
        return this.toIsoString();
    }
    /**
     * Return native Date object matching the current instance.
     *
     * @returns { Date }
     */
    toDate() {
        var _b;
        return new Date(__classPrivateFieldGet(this, _Carbon_date, "f").toLocaleString('en-US', { timeZone: (_b = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _b !== void 0 ? _b : undefined }));
    }
    /**
     * Format the instance as a string.
     *
     * @returns { string }
     */
    toString() {
        return this.date;
    }
    /**
     * Get a part of the Carbon object.
     *
     * @param { string } value
     *
     * @returns { string | number | boolean }
     */
    get(value) {
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
                return Math.ceil(this.get('month') / Constant.MonthsPerQuarter);
            }
            case 'decade': {
                return Math.ceil(this.get('year') / Constant.YearsPerDecade);
            }
            case 'century': {
                let factor = 1;
                let year = this.get('year');
                if (year < 0) {
                    year = -year;
                    factor = -1;
                }
                return factor * Math.ceil(year / Constant.YearsPerCentury);
            }
            case 'millennium': {
                let factor = 1;
                let year = this.get('year');
                if (year < 0) {
                    year = -year;
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
                return parseInt(this.format('Z')) / Constant.SecondsPerMinute === __classPrivateFieldGet(this, _Carbon_date, "f").getTimezoneOffset() * -1;
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
    setYear(value) {
        return this.setUnit('year', value);
    }
    /**
     * Set current instance month to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setMonth(value) {
        return this.setUnit('month', value);
    }
    /**
     * Set current instance day to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setDay(value) {
        return this.setUnit('day', value);
    }
    /**
     * Set current instance hour to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setHour(value) {
        return this.setUnit('hour', value);
    }
    /**
     * Set current instance minute to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setMinute(value) {
        return this.setUnit('minute', value);
    }
    /**
     * Set current instance second to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setSecond(value) {
        return this.setUnit('second', value);
    }
    /**
     * Set current instance millisecond to the given value.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    setMillisecond(value) {
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
    setDate(year, month, day) {
        __classPrivateFieldGet(this, _Carbon_date, "f").setFullYear(year);
        __classPrivateFieldGet(this, _Carbon_date, "f").setMonth(month);
        __classPrivateFieldGet(this, _Carbon_date, "f").setDate(day);
        return _a.parse(__classPrivateFieldGet(this, _Carbon_date, "f").toISOString(), __classPrivateFieldGet(this, _Carbon_timezone, "f"));
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
    setTime(hour, minute, second, millisecond) {
        const diffInMinutes = (__classPrivateFieldGet(this, _Carbon_date, "f").getTimezoneOffset() / Constant.SecondsPerMinute) * -1;
        const offsetInHours = this.offset / Constant.SecondsPerHour;
        const offsetInMinutes = offsetInHours % 1 * Constant.MinutesPerHour;
        const localOffsetInHours = Math.round(diffInMinutes);
        __classPrivateFieldGet(this, _Carbon_date, "f").setHours(hour - (Math[offsetInHours >= 0 ? 'floor' : 'round'](offsetInHours)) + localOffsetInHours);
        __classPrivateFieldGet(this, _Carbon_date, "f").setMinutes(minute - offsetInMinutes);
        __classPrivateFieldGet(this, _Carbon_date, "f").setSeconds(second);
        __classPrivateFieldGet(this, _Carbon_date, "f").setMilliseconds(millisecond);
        return _a.parse(__classPrivateFieldGet(this, _Carbon_date, "f").toISOString(), __classPrivateFieldGet(this, _Carbon_timezone, "f"));
    }
    /**
     * Set specified unit to new given value.
     *
     * @param { string } unit
     * @param { number | null } value
     *
     * @returns { Carbon }
     */
    setUnit(unit, value = null) {
        const dateUnits = ['year', 'month', 'day'];
        const timeUnits = ['hour', 'minute', 'second', 'millisecond'];
        if (dateUnits.includes(unit)) {
            const [year, month, day] = dateUnits.map((name) => {
                if (name === unit) {
                    return value;
                }
                return this.get(name);
            });
            return this.setDate(year, month - 1, day);
        }
        const [hour, minute, second, millisecond] = timeUnits.map((name) => {
            if (name === unit) {
                return value;
            }
            return this.get(name);
        });
        return this.setTime(hour, minute, second, millisecond);
    }
    /**
     * Add one year to the instance.
     *
     * @returns { Carbon }
     */
    addYear() {
        return this.addUnit('year', 1);
    }
    /**
     * Add years to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addYears(value = 1) {
        return this.addUnit('year', value);
    }
    /**
     * Add month to the instance.
     *
     * @returns { Carbon }
     */
    addMonth() {
        return this.addUnit('month', 1);
    }
    /**
     * Add months to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addMonths(value = 1) {
        return this.addUnit('month', value);
    }
    /**
     * Add day to the instance.
     *
     * @returns { Carbon }
     */
    addDay() {
        return this.addUnit('day', 1);
    }
    /**
     * Add days to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addDays(value = 1) {
        return this.addUnit('day', value);
    }
    /**
     * Add hour to the instance.
     *
     * @returns { Carbon }
     */
    addHour() {
        return this.addUnit('hour', 1);
    }
    /**
     * Add hour to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addHours(value = 1) {
        return this.addUnit('hour', value);
    }
    /**
     * Add minute to the instance.
     *
     * @returns { Carbon }
     */
    addMinute() {
        return this.addUnit('minute', 1);
    }
    /**
     * Add minutes to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addMinutes(value = 1) {
        return this.addUnit('minute', value);
    }
    /**
     * Add second to the instance.
     *
     * @returns { Carbon }
     */
    addSecond() {
        return this.addUnit('second', 1);
    }
    /**
     * Add seconds to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addSeconds(value = 1) {
        return this.addUnit('second', value);
    }
    /**
     * Add millisecond to the instance.
     *
     * @returns { Carbon }
     */
    addMillisecond() {
        return this.addUnit('millisecond', 1);
    }
    /**
     * Add milliseconds to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addMilliseconds(value = 1) {
        return this.addUnit('millisecond', value);
    }
    /**
     * Add millennium to the instance.
     *
     * @returns { Carbon }
     */
    addMillennium() {
        return this.addUnit('millennium', 1);
    }
    /**
     * Add millenniums to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addMillenniums(value = 1) {
        return this.addUnit('millennium', value);
    }
    /**
     * Add century to the instance.
     *
     * @returns { Carbon }
     */
    addCentury() {
        return this.addUnit('century', 1);
    }
    /**
     * Add centuries to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addCenturies(value = 1) {
        return this.addUnit('century', value);
    }
    /**
     * Add decade to the instance.
     *
     * @returns { Carbon }
     */
    addDecade() {
        return this.addUnit('decade', 1);
    }
    /**
     * Add decades to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addDecades(value = 1) {
        return this.addUnit('decade', value);
    }
    /**
     * Add quarter to the instance.
     *
     * @returns { Carbon }
     */
    addQuarter() {
        return this.addUnit('quarter', 1);
    }
    /**
     * Add quarters to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addQuarters(value = 1) {
        return this.addUnit('quarter', value);
    }
    /**
     * Add week to the instance.
     *
     * @returns { Carbon }
     */
    addWeek() {
        return this.addUnit('week', 1);
    }
    /**
     * Add weeks to the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    addWeeks(value = 1) {
        return this.addUnit('week', value);
    }
    /**
     * Subtract one year from the instance.
     *
     * @returns { Carbon }
     */
    subYear() {
        return this.subUnit('year', 1);
    }
    /**
     * Subtract years from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subYears(value = 1) {
        return this.subUnit('year', value);
    }
    /**
     * Subtract month from the instance.
     *
     * @returns { Carbon }
     */
    subMonth() {
        return this.subUnit('month', 1);
    }
    /**
     * Subtract months from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subMonths(value = 1) {
        return this.subUnit('month', value);
    }
    /**
     * Subtract day from the instance.
     *
     * @returns { Carbon }
     */
    subDay() {
        return this.subUnit('day', 1);
    }
    /**
     * Subtract days from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subDays(value = 1) {
        return this.subUnit('day', value);
    }
    /**
     * Subtract hour from the instance.
     *
     * @returns { Carbon }
     */
    subHour() {
        return this.subUnit('hour', 1);
    }
    /**
     * Subtract hour from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subHours(value = 1) {
        return this.subUnit('hour', value);
    }
    /**
     * Subtract minute from the instance.
     *
     * @returns { Carbon }
     */
    subMinute() {
        return this.subUnit('minute', 1);
    }
    /**
     * Subtract minutes from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subMinutes(value = 1) {
        return this.subUnit('minute', value);
    }
    /**
     * Subtract second from the instance.
     *
     * @returns { Carbon }
     */
    subSecond() {
        return this.subUnit('second', 1);
    }
    /**
     * Subtract seconds from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subSeconds(value = 1) {
        return this.subUnit('second', value);
    }
    /**
     * Subtract millisecond from the instance.
     *
     * @returns { Carbon }
     */
    subMillisecond() {
        return this.subUnit('millisecond', 1);
    }
    /**
     * Subtract milliseconds from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subMilliseconds(value = 1) {
        return this.subUnit('millisecond', value);
    }
    /**
     * Subtract millennium from the instance.
     *
     * @returns { Carbon }
     */
    subMillennium() {
        return this.subUnit('millennium', 1);
    }
    /**
     * Subtract millenniums from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subMillenniums(value = 1) {
        return this.subUnit('millennium', value);
    }
    /**
     * Subtract century from the instance.
     *
     * @returns { Carbon }
     */
    subCentury() {
        return this.subUnit('century', 1);
    }
    /**
     * Subtract centuries from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subCenturies(value = 1) {
        return this.subUnit('century', value);
    }
    /**
     * Subtract decade from the instance.
     *
     * @returns { Carbon }
     */
    subDecade() {
        return this.subUnit('decade', 1);
    }
    /**
     * Subtract decades from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subDecades(value = 1) {
        return this.subUnit('decade', value);
    }
    /**
     * Subtract quarter from the instance.
     *
     * @returns { Carbon }
     */
    subQuarter() {
        return this.subUnit('quarter', 1);
    }
    /**
     * Subtract quarters from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subQuarters(value = 1) {
        return this.subUnit('quarter', value);
    }
    /**
     * Subtract week from the instance.
     *
     * @returns { Carbon }
     */
    subWeek() {
        return this.subUnit('week', 1);
    }
    /**
     * Subtract weeks from the instance.
     *
     * @param { number } value
     *
     * @returns { Carbon }
     */
    subWeeks(value = 1) {
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
    addUnit(unit, value = 1) {
        const metaUnits = {
            'millennium': [Constant.YearsPerMillennium, 'year'],
            'century': [Constant.YearsPerCentury, 'year'],
            'decade': [Constant.YearsPerDecade, 'year'],
            'quarter': [Constant.MonthsPerQuarter, 'month'],
            'week': [Constant.DaysPerWeek, 'day']
        };
        if (metaUnits[unit]) {
            const factor = (metaUnits[unit])[0];
            unit = (metaUnits[unit])[1];
            value = value * factor;
        }
        try {
            return this.setUnit(unit, this.get(unit) + value);
        }
        catch (exception) {
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
    subUnit(unit, value = 1) {
        return this.addUnit(unit, -value);
    }
}
_a = Carbon, _Carbon_date = new WeakMap(), _Carbon_timezone = new WeakMap(), _Carbon_ATOM = new WeakMap(), _Carbon_COOKIE = new WeakMap(), _Carbon_ISO8601 = new WeakMap(), _Carbon_ISO8601_EXPANDED = new WeakMap(), _Carbon_RFC822 = new WeakMap(), _Carbon_RFC850 = new WeakMap(), _Carbon_RFC1036 = new WeakMap(), _Carbon_RFC1123 = new WeakMap(), _Carbon_RFC2822 = new WeakMap(), _Carbon_RFC3339 = new WeakMap(), _Carbon_RFC3339_EXTENDED = new WeakMap(), _Carbon_RFC7231 = new WeakMap(), _Carbon_RSS = new WeakMap(), _Carbon_W3C = new WeakMap(), _Carbon_instances = new WeakSet(), _Carbon_resolveCarbon = function _Carbon_resolveCarbon(date = null) {
    if (!date) {
        date = _a.now(__classPrivateFieldGet(this, _Carbon_timezone, "f"));
    }
    if (typeof date === 'string') {
        date = _a.parse(date, __classPrivateFieldGet(this, _Carbon_timezone, "f"));
    }
    if (date instanceof Date) {
        date = _a.parse(date.toString(), __classPrivateFieldGet(this, _Carbon_timezone, "f"));
    }
    return date;
};
if (typeof exports != 'undefined') {
    module.exports.Carbon = Carbon;
}
// Hack to test this code, global is not available in the browser.
if (typeof global !== 'undefined') {
    const _global = global;
    _global.Carbon = Carbon;
}
//# sourceMappingURL=main.js.map