type PrecisionUnit = 'microsecond' | 'millisecond' | 'second' | 'minute';

type Timezone = 'CET' | 'CST6CDT' | 'Cuba' | 'EET' | 'Egypt' | 'Eire' | 'EST' | 'EST5EDT' | 'GB' | 'GB-Eire' | 'GMT' | 'GMT+0' | 'GMT-0' | 'GMT0' | 'Greenwich' | 'Hongkong' | 'HST' | 'Iceland' | 'Iran' | 'Israel' | 'Jamaica' | 'Japan' | 'Kwajalein' | 'Libya' | 'MET' | 'MST' | 'MST7MDT' | 'Navajo' | 'NZ' | 'NZ-CHAT' | 'Poland' | 'Portugal' | 'PRC' | 'PST8PDT' | 'ROC' | 'ROK' | 'Singapore' | 'Turkey' | 'UCT' | 'Universal' | 'UTC' | 'W-SU' | 'WET' | 'Zulu' | 'Africa/Abidjan' | 'Africa/Accra' | 'Africa/Addis_Ababa' | 'Africa/Algiers' | 'Africa/Asmera' | 'Africa/Bamako' | 'Africa/Bangui' | 'Africa/Banjul' | 'Africa/Bissau' | 'Africa/Blantyre' | 'Africa/Brazzaville' | 'Africa/Bujumbura' | 'Africa/Cairo' | 'Africa/Casablanca' | 'Africa/Ceuta' | 'Africa/Conakry' | 'Africa/Dakar' | 'Africa/Dar_es_Salaam' | 'Africa/Djibouti' | 'Africa/Douala' | 'Africa/El_Aaiun' | 'Africa/Freetown' | 'Africa/Gaborone' | 'Africa/Harare' | 'Africa/Johannesburg' | 'Africa/Juba' | 'Africa/Kampala' | 'Africa/Khartoum' | 'Africa/Kigali' | 'Africa/Kinshasa' | 'Africa/Lagos' | 'Africa/Libreville' | 'Africa/Lome' | 'Africa/Luanda' | 'Africa/Lubumbashi' | 'Africa/Lusaka' | 'Africa/Malabo' | 'Africa/Maputo' | 'Africa/Maseru' | 'Africa/Mbabane' | 'Africa/Mogadishu' | 'Africa/Monrovia' | 'Africa/Nairobi' | 'Africa/Ndjamena' | 'Africa/Niamey' | 'Africa/Nouakchott' | 'Africa/Ouagadougou' | 'Africa/Porto-Novo' | 'Africa/Sao_Tome' | 'Africa/Tripoli' | 'Africa/Tunis' | 'Africa/Windhoek' | 'America/Adak' | 'America/Anchorage' | 'America/Anguilla' | 'America/Antigua' | 'America/Araguaina' | 'America/Argentina/La_Rioja' | 'America/Argentina/Rio_Gallegos' | 'America/Argentina/Salta' | 'America/Argentina/San_Juan' | 'America/Argentina/San_Luis' | 'America/Argentina/Tucuman' | 'America/Argentina/Ushuaia' | 'America/Aruba' | 'America/Asuncion' | 'America/Bahia' | 'America/Bahia_Banderas' | 'America/Barbados' | 'America/Belem' | 'America/Belize' | 'America/Blanc-Sablon' | 'America/Boa_Vista' | 'America/Bogota' | 'America/Boise' | 'America/Buenos_Aires' | 'America/Cambridge_Bay' | 'America/Campo_Grande' | 'America/Cancun' | 'America/Caracas' | 'America/Catamarca' | 'America/Cayenne' | 'America/Cayman' | 'America/Chicago' | 'America/Chihuahua' | 'America/Ciudad_Juarez' | 'America/Coral_Harbour' | 'America/Cordoba' | 'America/Costa_Rica' | 'America/Creston' | 'America/Cuiaba' | 'America/Curacao' | 'America/Danmarkshavn' | 'America/Dawson' | 'America/Dawson_Creek' | 'America/Denver' | 'America/Detroit' | 'America/Dominica' | 'America/Edmonton' | 'America/Eirunepe' | 'America/El_Salvador' | 'America/Fort_Nelson' | 'America/Fortaleza' | 'America/Glace_Bay' | 'America/Godthab' | 'America/Goose_Bay' | 'America/Grand_Turk' | 'America/Grenada' | 'America/Guadeloupe' | 'America/Guatemala' | 'America/Guayaquil' | 'America/Guyana' | 'America/Halifax' | 'America/Havana' | 'America/Hermosillo' | 'America/Indiana/Knox' | 'America/Indiana/Marengo' | 'America/Indiana/Petersburg' | 'America/Indiana/Tell_City' | 'America/Indiana/Vevay' | 'America/Indiana/Vincennes' | 'America/Indiana/Winamac' | 'America/Indianapolis' | 'America/Inuvik' | 'America/Iqaluit' | 'America/Jamaica' | 'America/Jujuy' | 'America/Juneau' | 'America/Kentucky/Monticello' | 'America/Kralendijk' | 'America/La_Paz' | 'America/Lima' | 'America/Los_Angeles' | 'America/Louisville' | 'America/Lower_Princes' | 'America/Maceio' | 'America/Managua' | 'America/Manaus' | 'America/Marigot' | 'America/Martinique' | 'America/Matamoros' | 'America/Mazatlan' | 'America/Mendoza' | 'America/Menominee' | 'America/Merida' | 'America/Metlakatla' | 'America/Mexico_City' | 'America/Miquelon' | 'America/Moncton' | 'America/Monterrey' | 'America/Montevideo' | 'America/Montserrat' | 'America/Nassau' | 'America/New_York' | 'America/Nipigon' | 'America/Nome' | 'America/Noronha' | 'America/North_Dakota/Beulah' | 'America/North_Dakota/Center' | 'America/North_Dakota/New_Salem' | 'America/Ojinaga' | 'America/Panama' | 'America/Pangnirtung' | 'America/Paramaribo' | 'America/Phoenix' | 'America/Port-au-Prince' | 'America/Port_of_Spain' | 'America/Porto_Velho' | 'America/Puerto_Rico' | 'America/Punta_Arenas' | 'America/Rainy_River' | 'America/Rankin_Inlet' | 'America/Recife' | 'America/Regina' | 'America/Resolute' | 'America/Rio_Branco' | 'America/Santa_Isabel' | 'America/Santarem' | 'America/Santiago' | 'America/Santo_Domingo' | 'America/Sao_Paulo' | 'America/Scoresbysund' | 'America/Sitka' | 'America/St_Barthelemy' | 'America/St_Johns' | 'America/St_Kitts' | 'America/St_Lucia' | 'America/St_Thomas' | 'America/St_Vincent' | 'America/Swift_Current' | 'America/Tegucigalpa' | 'America/Thule' | 'America/Thunder_Bay' | 'America/Tijuana' | 'America/Toronto' | 'America/Tortola' | 'America/Vancouver' | 'America/Whitehorse' | 'America/Winnipeg' | 'America/Yakutat' | 'America/Yellowknife' | 'Antarctica/Casey' | 'Antarctica/Davis' | 'Antarctica/DumontDUrville' | 'Antarctica/Macquarie' | 'Antarctica/Mawson' | 'Antarctica/McMurdo' | 'Antarctica/Palmer' | 'Antarctica/Rothera' | 'Antarctica/Syowa' | 'Antarctica/Troll' | 'Antarctica/Vostok' | 'Arctic/Longyearbyen' | 'Asia/Aden' | 'Asia/Almaty' | 'Asia/Amman' | 'Asia/Anadyr' | 'Asia/Aqtau' | 'Asia/Aqtobe' | 'Asia/Ashgabat' | 'Asia/Atyrau' | 'Asia/Baghdad' | 'Asia/Bahrain' | 'Asia/Baku' | 'Asia/Bangkok' | 'Asia/Barnaul' | 'Asia/Beirut' | 'Asia/Bishkek' | 'Asia/Brunei' | 'Asia/Calcutta' | 'Asia/Chita' | 'Asia/Choibalsan' | 'Asia/Colombo' | 'Asia/Damascus' | 'Asia/Dhaka' | 'Asia/Dili' | 'Asia/Dubai' | 'Asia/Dushanbe' | 'Asia/Famagusta' | 'Asia/Gaza' | 'Asia/Hebron' | 'Asia/Hong_Kong' | 'Asia/Hovd' | 'Asia/Irkutsk' | 'Asia/Jakarta' | 'Asia/Jayapura' | 'Asia/Jerusalem' | 'Asia/Kabul' | 'Asia/Kamchatka' | 'Asia/Karachi' | 'Asia/Katmandu' | 'Asia/Khandyga' | 'Asia/Krasnoyarsk' | 'Asia/Kuala_Lumpur' | 'Asia/Kuching' | 'Asia/Kuwait' | 'Asia/Macau' | 'Asia/Magadan' | 'Asia/Makassar' | 'Asia/Manila' | 'Asia/Muscat' | 'Asia/Nicosia' | 'Asia/Novokuznetsk' | 'Asia/Novosibirsk' | 'Asia/Omsk' | 'Asia/Oral' | 'Asia/Phnom_Penh' | 'Asia/Pontianak' | 'Asia/Pyongyang' | 'Asia/Qatar' | 'Asia/Qostanay' | 'Asia/Qyzylorda' | 'Asia/Rangoon' | 'Asia/Riyadh' | 'Asia/Saigon' | 'Asia/Sakhalin' | 'Asia/Samarkand' | 'Asia/Seoul' | 'Asia/Shanghai' | 'Asia/Singapore' | 'Asia/Srednekolymsk' | 'Asia/Taipei' | 'Asia/Tashkent' | 'Asia/Tbilisi' | 'Asia/Tehran' | 'Asia/Thimphu' | 'Asia/Tokyo' | 'Asia/Tomsk' | 'Asia/Ulaanbaatar' | 'Asia/Urumqi' | 'Asia/Ust-Nera' | 'Asia/Vientiane' | 'Asia/Vladivostok' | 'Asia/Yakutsk' | 'Asia/Yekaterinburg' | 'Asia/Yerevan' | 'Atlantic/Azores' | 'Atlantic/Bermuda' | 'Atlantic/Canary' | 'Atlantic/Cape_Verde' | 'Atlantic/Faeroe' | 'Atlantic/Madeira' | 'Atlantic/Reykjavik' | 'Atlantic/South_Georgia' | 'Atlantic/St_Helena' | 'Atlantic/Stanley' | 'Australia/Adelaide' | 'Australia/Brisbane' | 'Australia/Broken_Hill' | 'Australia/Currie' | 'Australia/Darwin' | 'Australia/Eucla' | 'Australia/Hobart' | 'Australia/Lindeman' | 'Australia/Lord_Howe' | 'Australia/Melbourne' | 'Australia/Perth' | 'Australia/Sydney' | 'Europe/Amsterdam' | 'Europe/Andorra' | 'Europe/Astrakhan' | 'Europe/Athens' | 'Europe/Belgrade' | 'Europe/Berlin' | 'Europe/Bratislava' | 'Europe/Brussels' | 'Europe/Bucharest' | 'Europe/Budapest' | 'Europe/Busingen' | 'Europe/Chisinau' | 'Europe/Copenhagen' | 'Europe/Dublin' | 'Europe/Gibraltar' | 'Europe/Guernsey' | 'Europe/Helsinki' | 'Europe/Isle_of_Man' | 'Europe/Istanbul' | 'Europe/Jersey' | 'Europe/Kaliningrad' | 'Europe/Kiev' | 'Europe/Kirov' | 'Europe/Lisbon' | 'Europe/Ljubljana' | 'Europe/London' | 'Europe/Luxembourg' | 'Europe/Madrid' | 'Europe/Malta' | 'Europe/Mariehamn' | 'Europe/Minsk' | 'Europe/Monaco' | 'Europe/Moscow' | 'Europe/Oslo' | 'Europe/Paris' | 'Europe/Podgorica' | 'Europe/Prague' | 'Europe/Riga' | 'Europe/Rome' | 'Europe/Samara' | 'Europe/San_Marino' | 'Europe/Sarajevo' | 'Europe/Saratov' | 'Europe/Simferopol' | 'Europe/Skopje' | 'Europe/Sofia' | 'Europe/Stockholm' | 'Europe/Tallinn' | 'Europe/Tirane' | 'Europe/Ulyanovsk' | 'Europe/Uzhgorod' | 'Europe/Vaduz' | 'Europe/Vatican' | 'Europe/Vienna' | 'Europe/Vilnius' | 'Europe/Volgograd' | 'Europe/Warsaw' | 'Europe/Zagreb' | 'Europe/Zaporozhye' | 'Europe/Zurich' | 'Indian/Antananarivo' | 'Indian/Chagos' | 'Indian/Christmas' | 'Indian/Cocos' | 'Indian/Comoro' | 'Indian/Kerguelen' | 'Indian/Mahe' | 'Indian/Maldives' | 'Indian/Mauritius' | 'Indian/Mayotte' | 'Indian/Reunion' | 'Pacific/Apia' | 'Pacific/Auckland' | 'Pacific/Bougainville' | 'Pacific/Chatham' | 'Pacific/Easter' | 'Pacific/Efate' | 'Pacific/Enderbury' | 'Pacific/Fakaofo' | 'Pacific/Fiji' | 'Pacific/Funafuti' | 'Pacific/Galapagos' | 'Pacific/Gambier' | 'Pacific/Guadalcanal' | 'Pacific/Guam' | 'Pacific/Honolulu' | 'Pacific/Johnston' | 'Pacific/Kiritimati' | 'Pacific/Kosrae' | 'Pacific/Kwajalein' | 'Pacific/Majuro' | 'Pacific/Marquesas' | 'Pacific/Midway' | 'Pacific/Nauru' | 'Pacific/Niue' | 'Pacific/Norfolk' | 'Pacific/Noumea' | 'Pacific/Pago_Pago' | 'Pacific/Palau' | 'Pacific/Pitcairn' | 'Pacific/Ponape' | 'Pacific/Port_Moresby' | 'Pacific/Rarotonga' | 'Pacific/Saipan' | 'Pacific/Tahiti' | 'Pacific/Tarawa' | 'Pacific/Tongatapu' | 'Pacific/Truk' | 'Pacific/Wake' | 'Pacific/Wallis';

type DateRepresentation = {
    year: number
    month: number
    day: number
    dayOfWeek: number
    dayOfYear: number
    hour: number
    minute: number
    second: number
    micro: number | undefined,
    timestamp: number
    formatted: string
    timezone: string
}

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
    #timezone: string | null;

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
    constructor(date: string | null = null, timezone: string | null = null) {
        this.#date     = !date || date === 'now' ? new Date() : new Date(date);
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

        if (this.#date.toString() === 'Invalid Date') {
            return 'Invalid Date';
        }

        let date: string     = '';
        let days: string[]   = [];
        let months: string[] = [];

        const now: Date = new Date(this.#date.toLocaleString('en-US', options));

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
                    throw new Error('Microseconds are not supported.');

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
    toISOString(keepOffset: boolean = false): string {
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
     * @returns { object<{year: number, month: number, day: number, dayOfWeek: number, dayOfYear: number, hour: number, minute: number, second: number, micro: number | undefined, timestamp: number, formatted: string, timezone: string}> }
     */
    toObject(): DateRepresentation {
        return {
            year     : this.#date.getFullYear(),
            month    : this.#date.getMonth() + 1,
            day      : this.#date.getDate(),
            dayOfWeek: Number(this.format('N')),
            dayOfYear: Number(this.format('z')),
            hour     : this.#date.getHours(),
            minute   : this.#date.getMinutes(),
            second   : this.#date.getSeconds(),
            micro    : undefined,
            timestamp: this.#date.valueOf(),
            formatted: this.format('Y-m-d H:i:s'),
            timezone : this.format('T (P)'),
        };
    }

    /**
     * Return the ISO-8601 string with UTC timezone.
     *
     * @returns { string }
     */
    toJson(): string {
        return this.toISOString();
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