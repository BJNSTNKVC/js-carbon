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
var _Carbon_date, _Carbon_timezone, _Carbon_ATOM, _Carbon_COOKIE, _Carbon_ISO8601, _Carbon_ISO8601_EXPANDED, _Carbon_RFC822, _Carbon_RFC850, _Carbon_RFC1036, _Carbon_RFC1123, _Carbon_RFC2822, _Carbon_RFC3339, _Carbon_RFC3339_EXTENDED, _Carbon_RFC7231, _Carbon_RSS, _Carbon_W3C;
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
    static padLeft(value, length, pad = ' ') {
        var _a;
        const short = Math.max(0, length - ((_a = value.length) !== null && _a !== void 0 ? _a : 0));
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
    static padRight(value, length, pad = ' ') {
        const short = Math.max(0, length - value.length);
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
    static replace(search, replace, subject, caseSensitive = true) {
        if (!(search instanceof Array)) {
            search = [search];
        }
        search.forEach((term) => {
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
     * Create new Carbon instance.
     *
     * @param { string | null } date
     * @param { string | null } timezone
     */
    constructor(date = null, timezone = null) {
        /**
         * A date/time string.
         *
         * @private
         *
         * @type { string | null }
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
         * @type { string }
         */
        _Carbon_ATOM.set(this, 'Y-m-d\\TH:i:sP');
        /**
         * Standard to represent date and time information in Cookies.
         *
         * @private
         * @type { string }
         */
        _Carbon_COOKIE.set(this, 'l, d-M-Y H:i:s T');
        /**
         * International standard covering the worldwide exchange and communication of date and time-related data.
         *
         * @private
         * @type { string }
         */
        _Carbon_ISO8601.set(this, 'Y-m-d\\TH:i:sO');
        /**
         * Expanded international standard covering the worldwide exchange and communication of date and time-related data.
         *
         * @private
         * @type { string }
         */
        _Carbon_ISO8601_EXPANDED.set(this, 'X-m-d\\TH:i:sP');
        /**
         * Standard for the Format of Arpa Internet Text Messages.
         *
         * @private
         * @type { string }
         */
        _Carbon_RFC822.set(this, 'D, d M y H:i:s O');
        /**
         * Standard for Interchange of USENET Messages. (June 1983)
         *
         * @private
         * @type { string }
         */
        _Carbon_RFC850.set(this, 'l, d-M-y H:i:s T');
        /**
         * Standard for Interchange of USENET Messages. (December 1987)
         *
         * @private
         * @type { string }
         */
        _Carbon_RFC1036.set(this, 'D, d M y H:i:s O');
        /**
         * Standard to represent date and time information in Internet protocols.
         *
         * @private
         * @type { string }
         */
        _Carbon_RFC1123.set(this, 'D, d M Y H:i:s O');
        /**
         * Standard for Internet Message Format.
         *
         * @private
         * @type { string }
         */
        _Carbon_RFC2822.set(this, 'D, d M Y H:i:s O');
        /**
         * Standard for Date and Time on the Internet.
         *
         * @private
         * @type { string }
         */
        _Carbon_RFC3339.set(this, 'Y-m-d\\TH:i:sP');
        /**
         * Extended standard for Date and Time on the Internet.
         *
         * @private
         * @type { string }
         */
        _Carbon_RFC3339_EXTENDED.set(this, 'Y-m-d\\TH:i:s.vP');
        /**
         * Standard to represent date and time information in Hypertext Transfer Protocol.
         *
         * @private
         * @type { string }
         */
        _Carbon_RFC7231.set(this, 'D, d M Y H:i:s \\G\\M\\T');
        /**
         * Standard to represent date and time information in RSS feeds.
         *
         * @private
         * @type { string }
         */
        _Carbon_RSS.set(this, 'D, d M Y H:i:s O');
        /**
         * Standard to represent date and time information in a machine-readable and unambiguous manner.
         *
         * @private
         * @type { string }
         */
        _Carbon_W3C.set(this, 'Y-m-d\\TH:i:sP');
        /**
         * A date/time string.
         *
         * @private
         * @type { string }
         */
        Object.defineProperty(this, "date", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _Carbon_date, date, "f");
        __classPrivateFieldSet(this, _Carbon_timezone, timezone, "f");
        this.date = this.format('Y-m-d H:i:s.v T (P)');
    }
    /**
     * Get a Carbon instance for the current date and time.
     *
     * @param { string| null } timezone
     *
     * @returns { Carbon }
     */
    static now(timezone = null) {
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
    static parse(date = null, timezone = null) {
        return new Carbon(date, timezone);
    }
    /**
     * Returns the formatted date string.
     *
     * @param { string } format
     *
     * @returns { string }
     */
    format(format) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            fractionalSecondDigits: 3,
            hour12: false,
            timeZone: (_a = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _a !== void 0 ? _a : undefined,
        };
        const instance = __classPrivateFieldGet(this, _Carbon_date, "f") === 'now' || __classPrivateFieldGet(this, _Carbon_date, "f") === null ? new Date() : new Date(__classPrivateFieldGet(this, _Carbon_date, "f"));
        if (instance.toString() === 'Invalid Date') {
            return 'Invalid Date';
        }
        let date = '';
        let days = [];
        let months = [];
        const now = new Date(instance.toLocaleString('en-US', options));
        const month = now.getMonth();
        const dayOfTheWeek = now.getDay();
        const dayOfTheMonth = now.getDate();
        const year = now.getFullYear();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const milliseconds = now.getMilliseconds();
        const elements = format.match(/\\?.|./g);
        for (const element of elements) {
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
                    let suffix = { 1: 'st', 2: 'nd', 3: 'rd', 21: 'st', 22: 'nd', 23: 'rd', 31: 'st' };
                    date += (_b = suffix[dayOfTheMonth]) !== null && _b !== void 0 ? _b : 'th';
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
                    let day = 1000 * 60 * 60 * 24;
                    const currentDay = Math.floor(diff / day);
                    date += currentDay - 1;
                    break;
                }
                // ISO 8601 week number of year, weeks starting on Monday (e.g., 42 (the 42nd week in the year))
                case 'W': {
                    let parsedDate = new Date(Date.UTC(year, month, dayOfTheMonth));
                    let weekDay = parsedDate.getUTCDay() || 7;
                    parsedDate.setUTCDate(parsedDate.getUTCDate() + 4 - weekDay);
                    let yearStart = new Date(Date.UTC(parsedDate.getUTCFullYear(), 0, 1));
                    let weekNumber = Math.ceil((((parsedDate - yearStart) / 86400000) + 1) / 7);
                    date += Str.padLeft(weekNumber, 1, '0');
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
                    const utcHours = now.getUTCHours();
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
                    date += Intl.DateTimeFormat('en-us', { timeZone: (_c = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _c !== void 0 ? _c : undefined }).resolvedOptions().timeZone;
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
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'longOffset', timeZone: (_d = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _d !== void 0 ? _d : undefined, })
                        .split(', ')
                        .pop()
                        .trim();
                    date += timeZoneData.length !== 3 ? timeZoneData.substring(3).replace(':', '') : '+0000';
                    break;
                }
                // Difference to Greenwich time (GMT) with colon between hours and minutes (e.g., +02:00)
                case 'P': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'longOffset', timeZone: (_e = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _e !== void 0 ? _e : undefined, })
                        .split(', ')
                        .pop()
                        .trim();
                    date += timeZoneData.length !== 3 ? timeZoneData.substring(3) : '+00:00';
                    break;
                }
                // The same as P, but returns Z instead of +00:00 (e.g., +02:00)
                case 'p': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'longOffset', timeZone: (_f = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _f !== void 0 ? _f : undefined, })
                        .split(', ')
                        .pop()
                        .trim();
                    date += timeZoneData === 'GMT' ? 'Z' : timeZoneData.substring(3);
                    break;
                }
                // Timezone abbreviation, if known; otherwise the GMT offset (e.g., EST, MDT, +05)
                case 'T': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'short', timeZone: (_g = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _g !== void 0 ? _g : undefined, })
                        .split(', ')
                        .pop()
                        .trim();
                    date += timeZoneData.replace('GMT', 'UTC').split(/[+-]/)[0];
                    break;
                }
                // Timezone offset in seconds.
                // The offset for timezones west of UTC is always negative,
                // and for those east of UTC is always positive. (e.g., -43200 through 50400)
                case 'Z': {
                    const timeZoneData = now.toLocaleDateString('en-us', { timeZoneName: 'short', timeZone: (_h = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _h !== void 0 ? _h : undefined, })
                        .split(', ')
                        .pop()
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
    toISOString(keepOffset = false) {
        if (keepOffset) {
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
        return [];
    }
    /**
     * Get default object representation.
     *
     * @returns { object }
     */
    toObject() {
        return {};
    }
    // toJson(): string {
    //     return '';
    // }
    /**
     * Return native Date object matching the current instance.
     *
     * @returns { Date }
     */
    toDate() {
        var _a;
        return new Date(new Date().toLocaleString('en-US', { timeZone: (_a = __classPrivateFieldGet(this, _Carbon_timezone, "f")) !== null && _a !== void 0 ? _a : undefined }));
    }
    /**
     * Format the instance as a string.
     *
     * @returns { string }
     */
    toString() {
        return this.date;
    }
}
_Carbon_date = new WeakMap(), _Carbon_timezone = new WeakMap(), _Carbon_ATOM = new WeakMap(), _Carbon_COOKIE = new WeakMap(), _Carbon_ISO8601 = new WeakMap(), _Carbon_ISO8601_EXPANDED = new WeakMap(), _Carbon_RFC822 = new WeakMap(), _Carbon_RFC850 = new WeakMap(), _Carbon_RFC1036 = new WeakMap(), _Carbon_RFC1123 = new WeakMap(), _Carbon_RFC2822 = new WeakMap(), _Carbon_RFC3339 = new WeakMap(), _Carbon_RFC3339_EXTENDED = new WeakMap(), _Carbon_RFC7231 = new WeakMap(), _Carbon_RSS = new WeakMap(), _Carbon_W3C = new WeakMap();
if (typeof exports != 'undefined') {
    module.exports.Carbon = Carbon;
}
// Hack to test this code, global is not available in the browser.
if (typeof global !== 'undefined') {
    const _global = global;
    _global.Carbon = Carbon;
}
//# sourceMappingURL=main.js.map