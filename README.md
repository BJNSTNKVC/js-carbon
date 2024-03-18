# Carbon

JavaScript equivalent of Carbon date and time manipulation library.

## Installation & setup

### NPM

You can install the package via npm:

```bash
npm install @bjnstnkvc/carbon
````

and then import it into your project

```javascript
import { Carbon } from '@bjnstnkvc/carbon';
```

### CDN

You can install the package via jsDelivr CDN:

```html

<script src="https://cdn.jsdelivr.net/npm/@bjnstnkvc/carbon/lib/main.min.js"></script>
```

## Usage

### Constructor

Create new Carbon instance.

#### Parameters

- **date** *(optional)* - A string representing the date. Defaults to `null`.
- **timezone** *(optional)* - A string representing the timezone. Defaults to `null`.

#### Example

```javascript
const carbon = new Carbon('2024-03-14');

console.log(carbon); // 2024-03-14 01:00:00.000 UTC (+01:00)
````

```javascript
const carbon = new Carbon('2024-03-14', 'UTC');

console.log(carbon); // 2024-03-14 00:00:00.000 UTC (+00:00)
````

If the `date` is not passed, Carbon return's current date and time.

### now

Get a Carbon instance for the current date and time.

#### Parameters

- **timezone** *(optional)*: A string representing the timezone. Defaults to `null`.

#### Example

```javascript
const carbon = Carbon.now();
```

```javascript
const carbon = Carbon.now('UTC');
```

### parse

Parse the date.

#### Parameters

- **date** *(optional)* - A string representing the date. Defaults to `null`.
- **timezone** *(optional)* - A string representing the timezone. Defaults to `null`.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-14');

console.log(carbon); // 2024-03-14 01:00:00.000 UTC (+01:00)
````

```javascript
const carbon = Carbon.parse('2024-03-14', 'UTC');

console.log(carbon); // 2024-03-14 00:00:00.000 UTC (+00:00)
````

### format

Returns the formatted date string.

### Parameters

- **format** - A string representing the date format.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-14').format('Y-m-d H:i:s');

console.log(carbon); // 2024-03-14 01:00:00
````

The `format` method accepts a string that can contain any combination of the following tokens:

| Format character | Description                                                                                                                                                                                                                         | Example                                 |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|
| d                | Day of the month, 2 digits with leading zeros.                                                                                                                                                                                      | 01 to 31                                |
| D                | A textual representation of a day, three letters.                                                                                                                                                                                   | Mon through Sun                         |
| j                | Day of the month without leading zeros.                                                                                                                                                                                             | 1 to 31                                 |
| l                | A full textual representation of the day of the week.                                                                                                                                                                               | Sunday through Saturday                 |
| N                | ISO 8601 numeric representation of the day of the week.                                                                                                                                                                             | 1 (for Monday) through 7 (for Sunday)   |
| S                | English ordinal suffix for the day of the month, 2 characters.                                                                                                                                                                      | st, nd, rd or th                        |
| w                | Numeric representation of the day of the week.                                                                                                                                                                                      | 0 (for Sunday) through 6 (for Saturday) |
| z                | Numeric representation of the day of the week.                                                                                                                                                                                      | The day of the year (starting from 0)   |
| W                | ISO 8601 week number of year, weeks starting on Monday.                                                                                                                                                                             | 42 (the 42nd week in the year)          |
| F                | A full textual representation of a month, such as January or March.                                                                                                                                                                 | January through December                |
| m                | Numeric representation of a month, with leading zeros.                                                                                                                                                                              | 01 through 12                           |
| M                | A short textual representation of a month, three letters.                                                                                                                                                                           | Jan through Dec                         |
| n                | Numeric representation of a month, without leading zeros.                                                                                                                                                                           | 1 through 12                            |
| t                | Number of days in the given month.                                                                                                                                                                                                  | 28 through 31                           |
| L                | Whether it's a leap year.                                                                                                                                                                                                           | 1 if it is a leap year, 0 otherwise     |
| o                | ISO 8601 week-numbering year. This has the same value as Y, except that if the ISO week number (W) belongs to the previous or next year, that year is used instead.                                                                 | 1999 or 2003                            |
| X                | An expanded full numeric representation of a year, at least 4 digits, with for years BCE, and + for years CE.                                                                                                                       | -0055, +0787, +1999, +10191             |
| x                | An expanded full numeric representation if required, or a standard full numeral representation if possible (like Y). At least four digits. Years BCE are prefixed with a -. Years beyond (and including) 10000 are prefixed by a +. | -0055, 0787, 1999, +10191               |
| Y                | A full numeric representation of a year, at least 4 digits, with for years BCE.                                                                                                                                                     | -0055, 0787, 1999, 2003, 10191          |
| y                | A two-digit representation of a year.                                                                                                                                                                                               | 99 or 03                                |
| a                | Lowercase Ante meridiem and Post meridiem.                                                                                                                                                                                          | am or pm                                |
| A                | Uppercase Ante meridiem and Post meridiem.                                                                                                                                                                                          | AM or PM                                |
| B                | Swatch Internet time.                                                                                                                                                                                                               | 000 through 999                         |
| g                | 12-hour format of an hour without leading zeros.                                                                                                                                                                                    | 1 through 12                            |
| G                | 24-hour format of an hour without leading zeros.                                                                                                                                                                                    | 0 through 23                            |
| h                | 12-hour format of an hour with leading zeros.                                                                                                                                                                                       | 01 through 12                           |
| H                | 24-hour format of an hour with leading zeros.                                                                                                                                                                                       | 00 through 23                           |
| i                | Minutes with leading zeros.                                                                                                                                                                                                         | 00 to 59                                |
| s                | Seconds with leading zeros.                                                                                                                                                                                                         | 00 to 59                                |
| u                | Microseconds.                                                                                                                                                                                                                       | 654321                                  |
| v                | Milliseconds.                                                                                                                                                                                                                       | 654                                     |
| e                | Timezone identifier.                                                                                                                                                                                                                | UTC, GMT, Atlantic/Azores               |
| I                | Whether or not the date is in daylight saving time.                                                                                                                                                                                 | 1 if Daylight Saving Time, 0 otherwise  |
| O                | Difference to Greenwich time (GMT) without colon between hours and minutes.                                                                                                                                                         | +0200                                   |
| P                | Difference to Greenwich time (GMT) with colon between hours and minutes                                                                                                                                                             | +02:00                                  |
| p                | The same as P, but returns Z instead of +00:00.                                                                                                                                                                                     | +02:00                                  |
| T                | Timezone abbreviation, if known; otherwise the GMT offset.                                                                                                                                                                          | EST, MDT, +05                           |
| Z                | Timezone offset in seconds. The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.                                                                                                  | -43200 through 50400                    |
| c                | ISO 8601 date.                                                                                                                                                                                                                      | 2004-02-12T15:19:21+00:00               |
| r                | Seconds since the Unix Epoch.                                                                                                                                                                                                       | January 1 1970 00:00:00 GMT             |
| U                | RFC 2822/RFC 5322 formatted date.                                                                                                                                                                                                   | Thu, 21 Dec 2000 16:01:07 +0200         |

#### Limitations

Microseconds (`'u`) re not supported due to JavaScript's Date object limitations.

### isLocal

Determines if the instance's date and time are in the local timezone.

#### Examples

```javascript
const carbon = Carbon.now().isLocal();

console.log(carbon); // true
```

```javascript
const carbon = Carbon.now('UTC').isLocal();

console.log(carbon); // false
```

> **Note:** In the provided example, the local timezone is Central European Standard Time (CET). Therefore, the example
> returns `true`, indicating that the Carbon instance's date and time are indeed in the local timezone.

### isUtc

Determines if the instance's date and time are in the UTC timezone.

#### Examples

```javascript
const carbon = Carbon.now('UTC').isUtc();

console.log(carbon); // true
```

```javascript
const carbon = Carbon.now().isUtc();

console.log(carbon); // false
```

> **Note:** In the provided example, if the Carbon instance is created with the 'UTC' timezone, then `isUtc()`
> returns `true`, indicating that the date and time are indeed in the UTC timezone. Conversely, if the instance is
> created
> without specifying 'UTC' (thus using the local timezone, which is Central European Standard Time (CET) in this
> case), `isUtc()` returns `false`.

### isValid

Determines if the instance's date and time is valid.

#### Examples

```javascript
const carbon = new Carbon('2024-03-14');

console.log(carbon.isValid()); // true
```

```javascript
const carbon = new Carbon('invalid date');

console.log(carbon.isValid()); // false
```

### isDst

Determines if the instance's date and time is in daylight saving time.

#### Examples

```javascript
const carbon = new Carbon('2024-07-14');

console.log(carbon.isDst()); // true
```

```javascript
const carbon = new Carbon('2024-03-14');

console.log(carbon.isDst()); // false
```

### isMonday

Determines if the instance's day is Monday.

#### Examples

```javascript
const carbon = new Carbon('2024-01-01');

console.log(carbon.isMonday()); // true
```

```javascript
const carbon = new Carbon('2024-01-02');

console.log(carbon.isMonday()); // false
```

### isTuesday

Determines if the instance's day is Tuesday.

#### Examples

```javascript
const carbon = new Carbon('2024-01-02');

console.log(carbon.isTuesday()); // true
```

```javascript
const carbon = new Carbon('2024-01-03');

console.log(carbon.isTuesday()); // false
```

### isWednesday

Determines if the instance's day is Wednesday.

#### Examples

```javascript
const carbon = new Carbon('2024-01-03');

console.log(carbon.isWednesday()); // true
```

```javascript
const carbon = new Carbon('2024-01-04');

console.log(carbon.isWednesday()); // false
```

### isThursday

Determines if the instance's day is Thursday.

#### Examples

```javascript
const carbon = new Carbon('2024-01-04');

console.log(carbon.isThursday()); // true
```

```javascript
const carbon = new Carbon('2024-01-05');

console.log(carbon.isThursday()); // false
```

### isFriday

Determines if the instance's day is Friday.

#### Examples

```javascript
const carbon = new Carbon('2024-01-05');

console.log(carbon.isFriday()); // true
```

```javascript
const carbon = new Carbon('2024-01-06');

console.log(carbon.isFriday()); // false
```

### isSaturday

Determines if the instance's day is Saturday.

#### Examples

```javascript
const carbon = new Carbon('2024-01-06');

console.log(carbon.isSaturday()); // true
```

```javascript
const carbon = new Carbon('2024-01-07');

console.log(carbon.isSaturday()); // false
```

### isSunday

Determines if the instance's day is Sunday.

##### Examples

```javascript
const carbon = new Carbon('2024-01-07');

console.log(carbon.isSunday()); // true
```

```javascript
const carbon = new Carbon('2024-01-08');

console.log(carbon.isSunday()); // false
```

### isSameAs

Compares the formatted values of the two dates.

#### Parameters

- **format** *(required)* - A string representing the format of the dates to be compared.
- **date** *(optional)* - An instance of `Carbon`, a `Date` object, a string representing a date, or `null`. Defaults
  to `null`.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-10 15:00:00', 'CET');
const date   = '2024-03-10 15:00:00';

console.log(carbon.isSameAs('Y-m-d H:i:s', date)); // true
```

```javascript
const carbon = Carbon.parse('2024-03-10 15:00:00', 'CET');
const date   = Carbon.parse('2024-03-10 16:00:00', 'CET');

console.log(carbon.isSameAs('Y-m-d H:i:s', date)); // false
```

```javascript
const carbon = Carbon.parse('2024-03-10', 'CET');
const date   = Carbon.parse('2024-12-25', 'CET');

console.log(carbon.isSameAs('YYYY', date)); // true
```

```javascript
const carbon = Carbon.parse('2024-03-10', 'CET');
const date   = new Date('2024-03-10T00:00:00Z');

console.log(carbon.isSameAs('Y-m-d', date)); // true
```

```javascript
const carbon = Carbon.parse('2024-03-10 15:00:00', 'CET');
const date   = '2024-03-10';

console.log(carbon.isSameAs('Y-m-d H:i:s', date)); // false
console.log(carbon.isSameAs('Y-m-d', date)); // true
```

```javascript
const today = new Carbon();

console.log(today.isSameAs('Y-m-d')); // true
```

### isSameYear

Determine if the given date is in the same year as the instance. If null passed, compare to now (with the same
timezone).

#### Parameters

- **date** *(optional)* - An instance of `Carbon`, a string representing a date, or `null`. Defaults to `null`.

#### Example

```javascript
const carbon = Carbon.parse('2024-01-01', 'CET');
const date   = Carbon.parse('2024-12-31', 'CET');

console.log(carbon.isSameYear(date)); // true
```

```javascript
const carbon = Carbon.parse('2024-01-01', 'CET');
const date   = Carbon.parse('2025-01-01', 'CET');

console.log(carbon.isSameYear(date)); // false
```

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameYear()); // true
```

```javascript
const date = new Date();
date.setFullYear(date.getFullYear() + 1);
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameYear()); // false
```

### isCurrentYear

Determine if the instance is in the same year as the current moment.

#### Example

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isCurrentYear()); // true
```

```javascript
const date = new Date();
date.setFullYear(date.getFullYear() + 1);
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isCurrentYear()); // false
```

### isNextYear

Determine if the instance is in the same year as the current moment next year.

#### Example

```javascript
const nextYear = new Date();
nextYear.setFullYear(nextYear.getFullYear() + 1);
const carbon = Carbon.parse(nextYear.toISOString(), 'CET');

console.log(carbon.isNextYear()); // true
```

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isNextYear()); // false
```

### isLastYear

Determine if the instance is in the same year as the current moment last year.

#### Example

```javascript
const lastYear = new Date();
lastYear.setFullYear(lastYear.getFullYear() - 1);
const carbon = Carbon.parse(lastYear.toISOString(), 'CET');

console.log(carbon.isLastYear()); // true
```

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isLastYear()); // false
```

### isSameMonth

Determine if the given date is in the same month as the instance. If null passed, compare to now (with the same
timezone).

#### Parameters

- **date** *(optional)* - An instance of `Carbon`, a string representing a date, or `null`. Defaults to `null`.

#### Example

```javascript
const carbon = Carbon.parse('2024-01-15', 'CET');
const date   = Carbon.parse('2024-01-31', 'CET');

console.log(carbon.isSameMonth(date)); // true
```

```javascript
const carbon = Carbon.parse('2024-01-01', 'CET');
const date   = Carbon.parse('2024-02-01', 'CET');

console.log(carbon.isSameMonth(date)); // false
```

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameMonth()); // true
```

```javascript
const date = new Date();
date.setMonth(date.getMonth() + 1);
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameMonth()); // false
```

> **Notice:** The comparison is based on the format 'Y-m'.

### isCurrentMonth

Determine if the instance is in the same month as the current moment.

#### Example

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isCurrentMonth()); // true
```

```javascript
const date = new Date();
date.setMonth(date.getMonth() - 1);
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isCurrentMonth()); // false
```

> **Notice:** The comparison is based on the format 'Y-m'.

### isNextMonth

Determine if the instance is in the same month as the current moment next month.

#### Example

```javascript
const nextMonth = new Date();
nextMonth.setMonth(nextMonth.getMonth() + 1);
const carbon = Carbon.parse(nextMonth.toISOString(), 'CET');

console.log(carbon.isNextMonth()); // true
```

```javascript
const date = Carbon.now();

console.log(date.isNextMonth()); // false
```

> **Notice:** The comparison is based on the format 'Y-m'.

### isLastMonth

Determine if the instance is in the same month as the current moment last month.

#### Example

```javascript
const lastMonth = new Date();
lastMonth.setMonth(lastMonth.getMonth() - 1);
const carbon = Carbon.parse(lastMonth.toISOString(), 'CET');

console.log(carbon.isLastMonth()); // true
```

```javascript
const date = Carbon.now();

console.log(date.isLastMonth()); // false
```

> **Notice:** The comparison is based on the format 'Y-m'.

### isSameWeek

Determine if the given date is in the same week as the instance. If null passed, compare to now (with the same
timezone).

#### Parameters

- **date** *(optional)* - An instance of `Carbon`, a string representing a date, or `null`. Defaults to `null`.

#### Example

```javascript
const startOfWeek = Carbon.parse('2024-03-04', 'CET');
const endOfWeek   = Carbon.parse('2024-03-10', 'CET');

console.log(startOfWeek.isSameWeek(endOfWeek)); // true
```

```javascript
const startOfWeek = Carbon.parse('2024-03-04', 'CET');
const nextWeek    = Carbon.parse('2024-03-11', 'CET');

console.log(startOfWeek.isSameWeek(nextWeek)); // false
```

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameWeek()); // true
```

```javascript
const nextWeek = new Date();
nextWeek.setDate(nextWeek.getDate() + 7);

const carbon = Carbon.parse(nextWeek.toISOString(), 'CET');

console.log(carbon.isSameWeek()); // false
```

> **Notice:** The comparison is based on the format 'o-W'.

### isCurrentWeek

Determine if the instance is in the same week as the current moment.

#### Example

```javascript
const now    = new Date();
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentWeek()); // true
```

```javascript
const now = new Date();
now.setDate(now.getDate() + 7);
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentWeek()); // false
```

> **Notice:** The comparison is based on the format 'o-W'.

### isNextWeek

Determine if the instance is in the same week as the current moment next week.

#### Example

```javascript
const now      = new Date();
const nextWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
const carbon   = Carbon.parse(nextWeek.toISOString(), 'CET');

console.log(carbon.isNextWeek()); // true if in the same week as next week, false otherwise
```

```javascript
const now = Carbon.now();

console.log(now.isNextWeek()); // false
```

> **Notice:** The comparison is based on the format 'o-W'.

### isLastWeek

Determine if the instance is in the same week as the current moment last week.

#### Example

```javascript
const now      = new Date();
const lastWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
const carbon   = Carbon.parse(lastWeek.toISOString(), 'CET');

console.log(carbon.isLastWeek()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isLastWeek()); // false
```

> **Notice:** The comparison is based on the format 'o-W'.

### isSameDay

Determine if the given date is in the same day as the instance. If null passed, compare to now (with the same timezone).

#### Parameters

- **date** *(optional)* - An instance of `Carbon`, a string representing a date, or `null`. Defaults to `null`.

#### Example

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameDay()); // true
```

```javascript
const nextDay = new Date();
nextDay.setDate(nextDay.getDate() + 1);

const carbon = Carbon.parse(nextDay.toISOString(), 'CET');

console.log(carbon.isSameDay()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d'.

### isCurrentDay

Determine if the instance is in the same day as the current moment.

#### Example

```javascript
const now    = new Date();
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentDay()); // true
```

```javascript
const now = new Date();
now.setDate(now.getDate() + 1);
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentDay()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d'.

### isNextDay

Determine if the instance is in the same day as the current moment next day.

#### Example

```javascript
const now     = new Date();
const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
const carbon  = Carbon.parse(nextDay.toISOString(), 'CET');

console.log(carbon.isNextDay()); // true if in the same day as next day, false otherwise
```

```javascript
const now = Carbon.now();

console.log(now.isNextDay()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d'.

### isLastDay

Determine if the instance is in the same day as the current moment last day.

#### Example

```javascript
const now     = new Date();
const lastDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
const carbon  = Carbon.parse(lastDay.toISOString(), 'CET');

console.log(carbon.isLastDay()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isLastDay()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d'.

### isSameHour

Determine if the given date is in the same hour as the instance. If null passed, compare to now (with the same
timezone).

#### Parameters

- **date** *(optional)* - An instance of `Carbon`, a string representing a date, or `null`. Defaults to `null`.

#### Example

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameHour()); // true
```

```javascript
const nextHour = new Date();
nextHour.setHours(nextHour.getHours() + 1);

const carbon = Carbon.parse(nextHour.toISOString(), 'CET');

console.log(carbon.isSameHour()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d H'.

### isCurrentHour

Determine if the instance is in the same hour as the current moment.

#### Example

```javascript
const now    = new Date();
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentHour()); // true
```

```javascript
const now = new Date();
now.setHours(now.getHours() + 1);
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentHour()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d H'.

### isNextHour

Determine if the instance is in the same hour as the current moment next hour.

#### Example

```javascript
const now      = new Date();
const nextHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1);
const carbon   = Carbon.parse(nextHour.toISOString(), 'CET');

console.log(carbon.isNextHour()); // true if in the same hour as next hour, false otherwise
```

```javascript
const now = Carbon.now();

console.log(now.isNextHour()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d H'.

### isLastHour

Determine if the instance is in the same hour as the current moment last hour.

#### Example

```javascript
const now      = new Date();
const lastHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 1);
const carbon   = Carbon.parse(lastHour.toISOString(), 'CET');

console.log(carbon.isLastHour()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isLastHour()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d H'.

### isSameMinute

Determine if the given date is in the same minute as the instance. If null passed, compare to now (with the same
timezone).

#### Parameters

- **date** *(optional)* - An instance of `Carbon`, a string representing a date, or `null`. Defaults to `null`.

#### Example

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameMinute()); // true
```

```javascript
const nextMinute = new Date();
nextMinute.setMinutes(nextMinute.getMinutes() + 1);

const carbon = Carbon.parse(nextMinute.toISOString(), 'CET');

console.log(carbon.isSameMinute()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d H:i'.

### isCurrentMinute

Determine if the instance is in the same minute as the current moment.

#### Example

```javascript
const now    = new Date();
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentMinute()); // true
```

```javascript
const now = new Date();
now.setMinutes(now.getMinutes() + 1);
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentMinute()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d H:i'.

### isNextMinute

Determine if the instance is in the same minute as the current moment next minute.

#### Example

```javascript
const now        = new Date();
const nextMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1);
const carbon     = Carbon.parse(nextMinute.toISOString(), 'CET');

console.log(carbon.isNextMinute()); // true if in the same minute as next minute, false otherwise
```

```javascript
const now = Carbon.now();

console.log(now.isNextMinute()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d H:i'.

### isLastMinute

Determine if the instance is in the same minute as the current moment last minute.

#### Example

```javascript
const now        = new Date();
const lastMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() - 1);
const carbon     = Carbon.parse(lastMinute.toISOString(), 'CET');

console.log(carbon.isLastMinute()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isLastMinute()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d H:i'.

### isSameMillisecond

Determine if the given date is in the same millisecond as the instance. If null passed, compare to now (with the same
timezone).

#### Parameters

- **date** *(optional)* - An instance of `Carbon`, a string representing a date, or `null`. Defaults to `null`.

#### Example

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameMillisecond()); // true
```

```javascript
const nextMillisecond = new Date();
nextMillisecond.setMilliseconds(nextMillisecond.getMilliseconds() + 1);

const carbon = Carbon.parse(nextMillisecond.toISOString(), 'CET');

console.log(carbon.isSameMillisecond()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d H:i:s.v'.

### isCurrentMillisecond

Determine if the instance is in the same millisecond as the current moment.

#### Example

```javascript
const now    = new Date();
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentMillisecond()); // true
```

```javascript
const now = new Date();
now.setMilliseconds(now.getMilliseconds() + 1);
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentMillisecond()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d H:i:s.v'.

### isNextMillisecond

Determine if the instance is in the same millisecond as the current moment next millisecond.

#### Example

```javascript
const now             = new Date();
const nextMillisecond = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds() + 1);
const carbon          = Carbon.parse(nextMillisecond.toISOString(), 'CET');

console.log(carbon.isNextMillisecond()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isNextMillisecond()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d H:i:s.v'.

### isLastMillisecond

Determine if the instance is in the same millisecond as the current moment last millisecond.

#### Example

```javascript
const now             = new Date();
const lastMillisecond = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds() - 1);
const carbon          = Carbon.parse(lastMillisecond.toISOString(), 'CET');

console.log(carbon.isLastMillisecond()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isLastMillisecond()); // false
```

> **Notice:** The comparison is based on the format 'Y-m-d H:i:s.v'.

### isSameQuarter

Determine if the given date is in the same quarter as the instance. If null passed, compare to now (with the same
timezone).

#### Parameters

- **date** *(optional)* - An instance of `Carbon`, a string representing a date, or `null`. Defaults to `null`.

#### Example

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameQuarter()); // true
```

```javascript
const nextQuarter = new Date();
nextQuarter.setMonth(nextQuarter.getMonth() + 3);

const carbon = Carbon.parse(nextQuarter.toISOString(), 'CET');

console.log(carbon.isSameQuarter()); // false
```

### isCurrentQuarter

Determine if the instance is in the same quarter as the current moment.

#### Example

```javascript
const now    = new Date();
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentQuarter()); // true
```

```javascript
const now = new Date();
now.setMonth(now.getMonth() + 3);
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentQuarter()); // false
```

### isNextQuarter

Determine if the instance is in the same quarter as the current moment next quarter.

#### Example

```javascript
const now         = new Date();
const nextQuarter = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());
const carbon      = Carbon.parse(nextQuarter.toISOString(), 'CET');

console.log(carbon.isNextQuarter()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isNextQuarter()); // false
```

### isLastQuarter

Determine if the instance is in the same quarter as the current moment last quarter.

#### Example

```javascript
const now         = new Date();
const lastQuarter = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
const carbon      = Carbon.parse(lastQuarter.toISOString(), 'CET');

console.log(carbon.isLastQuarter()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isLastQuarter()); // false
```

### isSameDecade

Determine if the given date is in the same decade as the instance. If null passed, compare to now (with the same
timezone).

#### Parameters

- **date** *(optional)* - An instance of `Carbon`, a string representing a date, or `null`. Defaults to `null`.

#### Example

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameDecade()); // true
```

```javascript
const nextDecade = new Date();
nextDecade.setFullYear(nextDecade.getFullYear() + 10);

const carbon = Carbon.parse(nextDecade.toISOString(), 'CET');

console.log(carbon.isSameDecade()); // false
```

### isCurrentDecade

Determine if the instance is in the same decade as the current moment.

#### Example

```javascript
const now    = new Date();
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentDecade()); // true
```

```javascript
const now = new Date();
now.setFullYear(now.getFullYear() + 10);
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentDecade()); // false
```

### isNextDecade

Determine if the instance is in the same decade as the current moment next decade.

#### Example

```javascript
const now        = new Date();
const nextDecade = new Date(now.getFullYear() + 10, now.getMonth(), now.getDate());
const carbon     = Carbon.parse(nextDecade.toISOString(), 'CET');

console.log(carbon.isNextDecade()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isNextDecade()); // false
```

### isLastDecade

Determine if the instance is in the same decade as the current moment last decade.

#### Example

```javascript
const now        = new Date();
const lastDecade = new Date(now.getFullYear() - 10, now.getMonth(), now.getDate());
const carbon     = Carbon.parse(lastDecade.toISOString(), 'CET');

console.log(carbon.isLastDecade()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isLastDecade()); // false
```

### isSameCentury

Determine if the given date is in the same century as the instance. If null passed, compare to now (with the same
timezone).

#### Parameters

- **date** *(optional)* - An instance of `Carbon`, a string representing a date, or `null`. Defaults to `null`.

#### Example

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameCentury()); // true
```

```javascript
const nextCentury = new Date();
nextCentury.setFullYear(nextCentury.getFullYear() + 100);

const carbon = Carbon.parse(nextCentury.toISOString(), 'CET');

console.log(carbon.isSameCentury()); // false
```

### isCurrentCentury

Determine if the instance is in the same century as the current moment.

#### Example

```javascript
const now    = new Date();
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentCentury()); // true
```

```javascript
const now = new Date();
now.setFullYear(now.getFullYear() + 100);
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentCentury()); // false
```

### isNextCentury

Determine if the instance is in the same century as the current moment next century.

#### Example

```javascript
const now         = new Date();
const nextCentury = new Date(now.getFullYear() + 100, now.getMonth(), now.getDate());
const carbon      = Carbon.parse(nextCentury.toISOString(), 'CET');

console.log(carbon.isNextCentury()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isNextCentury()); // false
```

### isLastCentury

Determine if the instance is in the same century as the current moment last century.

#### Example

```javascript
const now         = new Date();
const lastCentury = new Date(now.getFullYear() - 100, now.getMonth(), now.getDate());
const carbon      = Carbon.parse(lastCentury.toISOString(), 'CET');

console.log(carbon.isLastCentury()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isLastCentury()); // false
```

### isSameMillennium

Determine if the given date is in the same millennium as the instance. If null passed, compare to now (with the same
timezone).

#### Parameters

- **date** *(optional)* - An instance of `Carbon`, a string representing a date, or `null`. Defaults to `null`.

#### Example

```javascript
const date   = new Date();
const carbon = Carbon.parse(date.toISOString(), 'CET');

console.log(carbon.isSameMillennium()); // true
```

```javascript
const nextMillennium = new Date();
nextMillennium.setFullYear(nextMillennium.getFullYear() + 1000);

const carbon = Carbon.parse(nextMillennium.toISOString(), 'CET');

console.log(carbon.isSameMillennium()); // false
```

### isCurrentMillennium

Determine if the instance is in the same millennium as the current moment.

#### Example

```javascript
const now    = new Date();
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentMillennium()); // true
```

```javascript
const now = new Date();
now.setFullYear(now.getFullYear() + 1000);
const carbon = Carbon.parse(now.toISOString(), 'CET');

console.log(carbon.isCurrentMillennium()); // false
```

### isNextMillennium

Determine if the instance is in the same millennium as the current moment next millennium.

#### Example

```javascript
const now            = new Date();
const nextMillennium = new Date(now.getFullYear() + 1000, now.getMonth(), now.getDate());
const carbon         = Carbon.parse(nextMillennium.toISOString(), 'CET');

console.log(carbon.isNextMillennium()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isNextMillennium()); // false
```

### isLastMillennium

Determine if the instance is in the same millennium as the current moment last millennium.

#### Example

```javascript
const now            = new Date();
const lastMillennium = new Date(now.getFullYear() - 1000, now.getMonth(), now.getDate());
const carbon         = Carbon.parse(lastMillennium.toISOString(), 'CET');

console.log(carbon.isLastMillennium()); // true
```

```javascript
const now = Carbon.now();

console.log(now.isLastMillennium()); // false
```

### toDateString

Format the instance as date.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toDateString();

console.log(carbon); // 2024-03-01
```

### toFormattedDateString

Format the instance as a formatted date.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toFormattedDateString();

console.log(carbon); // Mar 1, 2024
```

### toFormattedDayDateString

Format the instance with the day and a formatted date.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toFormattedDayDateString();

console.log(carbon); // Fri, Mar 1, 2024
```

### toTimeString

Format the instance as time.

#### Parameters

- **precision** *(optional)* - A string representing given unit precision. Defaults to `second`.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toTimeString('millisecond');

console.log(carbon); // 12:45:00.000
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toTimeString('second');

console.log(carbon); // 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toTimeString('minute');

console.log(carbon); // 12:45
```

### toDateTimeString

Format the instance as date and time.

#### Parameters

- **precision** *(optional)* - A string representing given unit precision. Defaults to `second`.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeString('millisecond');

console.log(carbon); // 2024-03-01 12:45:00.000
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeString('second');

console.log(carbon); // 2024-03-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeString('minute');

console.log(carbon); // 2024-03-01 12:45
```

### toDateTimeLocalString

Format the instance as date and time T-separated with no timezone.

#### Parameters

- **precision** *(optional)* - A string representing given unit precision. Defaults to `second`.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeLocalString('millisecond');

console.log(carbon); // 2024-03-01T12:45:00.000
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeLocalString('second');

console.log(carbon); // 2024-03-01T12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toDateTimeLocalString('minute');

console.log(carbon); // 2024-03-01T12:45
```

### toDayDateTimeString

Format the instance with day, date and time.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toDayDateTimeString();

console.log(carbon); // Fri, Mar 1, 2024 12:45 PM
```

### toAtomString

Format the instance as ATOM.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toAtomString();

console.log(carbon); // 2024-03-01T12:45:00+01:00
```

### toCookieString

Format the instance as COOKIE.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toCookieString();

console.log(carbon); // Friday, 01-Mar-2024 12:45:00 CET
```

### toIsoString

Format the instance as ISO8601.

#### Parameters

- **keepOffset** *(optional)* - Pass true to keep the date offset, else forced to UTC. Defaults to `false`.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toIsoString();

console.log(carbon); // 2024-03-01T11:45:00.000Z
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toIsoString(true);

console.log(carbon); // 2024-03-01T12:45:00.000+01:00
```

### toIso8601String

Format the instance as ISO8601.

#### Parameters

- **extended** *(optional)* - Determine whether to return extended format standard for Date and Time on the Internet.
  Defaults to `false`.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toIso8601String();

console.log(carbon); // 2024-03-01T12:45:00+0100
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toIso8601String(true);

console.log(carbon); // +2024-03-01T12:45:00+01:00
```

### toIso8601ZuluString

Convert the instance to UTC and return as Zulu ISO8601.

#### Parameters

- **precision** *(optional)* - A string representing given unit precision. Defaults to `second`.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toIso8601ZuluString('millisecond');

console.log(carbon); // 2024-03-01T11:45:00.000Z
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toIso8601ZuluString('second');

console.log(carbon); // 2024-03-01T11:45:00Z
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toIso8601ZuluString('minute');

console.log(carbon); // 2024-03-01T11:45Z
```

### toRfc822String

Format the instance as RFC822.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc822String();

console.log(carbon); // Fri, 01 Mar 24 12:45:00 +0100
```

### toRfc850String

Format the instance as RFC850.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc850String();

console.log(carbon); // Friday, 01-Mar-24 12:45:00 CET
```

### toRfc1036String

Format the instance as RFC1036.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc1036String();

console.log(carbon); // Fri, 01 Mar 24 12:45:00 +0100
```

### toRfc1123String

Format the instance as RFC1123.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc1123String();

console.log(carbon); // Fri, 01 Mar 2024 12:45:00 +0100
```

### toRfc2822String

Format the instance as RFC2822.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc2822String();

console.log(carbon); // Fri, 01 Mar 2024 12:45:00 +0100
```

### toRfc3339String

Format the instance as RFC3339.

#### Parameters

- **extended** *(optional)* - Determine whether to return extended format standard for Date and Time on the Internet.
  Defaults to `false`.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc3339String();

console.log(carbon); // 2024-03-01T12:45:00+01:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc3339String(true);

console.log(carbon); // 2024-03-01T12:45:00.000+01:00
```

### toRfc7231String

Format the instance as RFC7231.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toRfc7231String();

console.log(carbon); // Fri, 01 Mar 2024 11:45:00 GMT
```

### toRssString

Format the instance as RSS.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toRssString();

console.log(carbon); // Fri, 01 Mar 2024 12:45:00 +0100
```

### toW3cString

Format the instance as W3C.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toW3cString();

console.log(carbon); // 2024-03-01T12:45:00+01:00
```

### getTimeFormatByPrecision

Return a format from H:i to H:i:s.u according to given unit precision.

#### Parameters

- **precision** *(optional)* - A string representing given unit precision. Defaults to `second`.

#### Example

```javascript
const carbon = Carbon.now().getTimeFormatByPrecision('millisecond');

console.log(carbon); // H:i:s.v
```

```javascript
const carbon = Carbon.now().getTimeFormatByPrecision('second');

console.log(carbon); // H:i:s
```

```javascript
const carbon = Carbon.now().getTimeFormatByPrecision('minute');

console.log(carbon); // H:i
```

### toObject

Get default object representation.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toObject();

console.log(carbon);
```

```json
{
    "year"     : 2024,
    "month"    : 3,
    "day"      : 1,
    "dayOfWeek": 5,
    "dayOfYear": 61,
    "hour"     : 12,
    "minute"   : 45,
    "second"   : 0,
    "micro"    : undefined,
    "timestamp": 1709293500,
    "formatted": "2024-03-01 12:45:00",
    "timezone" : "CET (+01:00)"
}
```

### toJson

Return the ISO-8601 string with UTC timezone.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toJson();

console.log(carbon); // 2024-03-01T11:45:00.000Z
```

### toDate

Return native Date object matching the current instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toDate();

console.log(carbon); // Date: "2024-03-01T11:45:00.000Z" 
```

### toString

Format the instance as a string.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00', 'CET').toString();

console.log(carbon); // 2024-03-01 12:45:00.000 CET (+01:00)
```

### get

Retrieve specific parts of the Carbon object using various keys.

#### Example

##### year

Get the year.

```javascript
const carbon = Carbon.parse('2024-03-16').get('year');

console.log(carbon); // 2024
```

##### month

Get the month number (1-12).

```javascript
const carbon = Carbon.parse('2024-03-16').get('month');

console.log(carbon); // 3
```

##### week

Get the week number of the year.

```javascript
const carbon = Carbon.parse('2024-03-16').get('week');

console.log(carbon); // 11
```

##### day

Get the day of the month.

```javascript
const carbon = Carbon.parse('2024-03-16').get('day');

console.log(carbon); // 16
```

##### hour

Get the hour of the day (0-23).

```javascript
const carbon = Carbon.parse('2024-03-16 15:00').get('hour');

console.log(carbon); // 15
```

##### minute

Get the minute.

```javascript
const carbon = Carbon.parse('2024-03-16 15:30').get('minute');

console.log(carbon); // 30
```

##### second

Get the second.

```javascript
const carbon = Carbon.parse('2024-03-16 15:30:45').get('second');

console.log(carbon); // 45
```

##### millisecond

Get the millisecond.

```javascript
const carbon = Carbon.parse('2024-03-16 12:00:00.123').get('millisecond');

console.log(carbon);  // 123
```

##### timestamp

Get the Unix timestamp.

```javascript
const carbon = Carbon.parse('2024-03-16 12:00:00').get('timestamp');

console.log(carbon); // 1710586800 
```

##### dayOfWeek

Get the day of the week (0 for Sunday, 6 for Saturday).

```javascript
const carbon = Carbon.parse('2024-03-16').get('dayOfWeek');

console.log(carbon); // 6
```

##### dayOfYear

Get the day of the year (1-365/366).

```javascript
const carbon = Carbon.parse('2024-03-16').get('dayOfYear');

console.log(carbon); // 76
```

##### quarter

Get the quarter of the year (1-4).

```javascript
const carbon = Carbon.parse('2024-03-16').get('quarter');

console.log(carbon); // 1
```

##### decade

Get the decade.

```javascript
const carbon = Carbon.parse('2024-03-16').get('decade');

console.log(carbon); // 203
```

##### century

Get the century.

```javascript
const carbon = Carbon.parse('2024-03-16').get('century');

console.log(carbon); // 21
```

##### millennium

Get the millennium.

```javascript
const carbon = Carbon.parse('2024-03-16').get('millennium');

console.log(carbon); // 3
```

##### offset

Get the timezone offset in seconds from UTC.

```javascript
const carbon = Carbon.parse('2024-03-16', 'CET').get('offset');

console.log(carbon); // 3600
```

##### dst

Check if daylight saving time is in effect.

```javascript
const carbon = Carbon.parse('2024-07-14').get('dst');

console.log(carbon); // true
```

```javascript
const carbon = Carbon.parse('2024-03-14').get('dst');

console.log(carbon); // false
```

##### local

Check if the date is in local time.

```javascript
const carbon = Carbon.now().get('local');

console.log(carbon); // true
```

```javascript
const carbon = Carbon.now('UTC').get('local');

console.log(carbon); // false
```

> **Note:** In the provided example, the local timezone is Central European Standard Time (CET). Therefore, the example
> returns `true`, indicating that the Carbon instance's date and time are indeed in the local timezone.

##### utc

Check if the date is in UTC time.

```javascript
const carbon = Carbon.parse('2024-03-16', 'UTC').get('utc');

console.log(carbon); // true
```

```javascript
const carbon = Carbon.parse('2024-03-16', 'CET').get('utc');

console.log(carbon); // false
```

##### timezone

Get the timezone identifier.

```javascript
const carbon = Carbon.parse('2024-03-16', 'CET').get('timezone');

console.log(carbon); // CET (+01:00)
```

### setUnit

Set a specified unit of the `Carbon` object to a new given value and return the updated `Carbon` object.

#### Parameters

- **unit** - A string representing the date. A string representing the unit to be
  updated (`year`, `month`, `day`, `hour`, `minute`, `second`, and `millisecond`).
- **value** *(optional)* - The new value for the specified unit. Defaults to `null` (returns current value of the unit).

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('year', 2025);

console.log(carbon); // 2025-03-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('month', 8);

console.log(carbon); // 2024-08-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('day', 15);

console.log(carbon); // 2024-03-15 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('hour', 18);

console.log(carbon); // 2024-03-01 18:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('minute', 30);

console.log(carbon); // 2024-03-01 12:30:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('second', 59);

console.log(carbon); // 2024-03-01 12:45:59
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('millisecond', 500);

console.log(carbon); // 2024-03-01 12:45:00.500
```

### setYear

Set the current instance's year to the given value.

#### Parameters

- **value** - The year to set the current `Carbon` instance to.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setYear(2025);

console.log(carbon); // 2025-03-01 12:45:00
```

### setMonth

Set the current instance's month to the given value.

#### Parameters

- **value** - The month to set the current `Carbon` instance to.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setMonth(5);

console.log(carbon); // 2024-05-01 12:45:00
```

### setDay

Set the current instance's day to the given value.

#### Parameters

- **value** - The day to set the current `Carbon` instance to.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setDay(15);

console.log(carbon); // 2024-03-15 12:45:00
```

### setHour

Set the current instance's hour to the given value.

#### Parameters

- **value** - The hour to set the current `Carbon` instance to.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setHour(18);

console.log(carbon); // 2024-03-01 18:45:00
```

### setMinute

Set the current instance's minute to the given value.

#### Parameters

- **value** - The minute to set the current `Carbon` instance to.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setMinute(30);

console.log(carbon); // 2024-03-01 12:30:00
```

### setSecond

Set the current instance's second to the given value.

#### Parameters

- **value** - The second to set the current `Carbon` instance to.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setSecond(59);

console.log(carbon); // 2024-03-01 12:45:59
```

### setMillisecond

Set the current instance's millisecond to the given value.

#### Parameters

- **value** - The millisecond to set the current `Carbon` instance to.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setMillisecond(500);

console.log(carbon); // 2024-03-01 12:45:00.500
```

### setDate

Set the date with Gregorian year, month, and day numbers.

#### Parameters

- **year** - The year in the Gregorian calendar.
- **month** - The month (0-11) in the Gregorian calendar.
- **day** - The day of the month (1-31) in the Gregorian calendar.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setDate(2025, 5, 15);

console.log(carbon); // 2025-06-15 12:45:00
```

### setTime

Reset the current time of the `Carbon` object to a different time.

#### Parameters

- **hour** - The hour (0-23) of the new time.
- **minute** - The minute (0-59) of the new time.
- **second** - The second (0-59) of the new time.
- **millisecond** - The millisecond (0-999) of the new time.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setTime(18, 30, 45, 500);

console.log(carbon); // 2024-03-01 18:30:45.500
```

### setUnit

Set a specified unit to a new given value on the `Carbon` object.

#### Parameters

- **unit** - The date or time unit (`year`, `month`, `day`, `hour`, `minute`, `second`, `millisecond`) to update.
- **value** - The new value for the specified unit. If `null`, no change is made to that unit.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('year', 2025);

console.log(carbon); // 2025-03-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('month', 11);

console.log(carbon); // 2024-12-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('day', 15);

console.log(carbon); // 2024-03-15 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('hour', 18);

console.log(carbon); // 2024-03-01 18:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('minute', 30);

console.log(carbon); // 2024-03-01 12:30:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('second', 45);

console.log(carbon); // 2024-03-01 12:45:45
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').setUnit('millisecond', 500);

console.log(carbon); // 2024-03-01 12:45:00.500
```

### addUnit

Add the given units to the current `Carbon` instance.

#### Parameters

- **unit** - The unit to add (e.g., 'year', 'month', 'day', 'hour', etc.).
- **value** - The number of units to add. Default is 1.

#### Returns

A new `Carbon` instance with the specified units added.

#### Examples

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addUnit('year', 2);

console.log(carbon); // 2026-03-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addUnit('month', 3);

console.log(carbon); // 2024-06-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addUnit('day', 5);

console.log(carbon); // 2024-03-06 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addUnit('hour', 10);

console.log(carbon); // 2024-03-02 22:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addUnit('minute', 30);

console.log(carbon); // 2024-03-01 13:15:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addUnit('second', 20);

console.log(carbon); // 2024-03-01 12:45:20
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addUnit('millisecond', 500);

console.log(carbon); // 2024-03-01 12:45:00.500
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addUnit('millennium', 1);

console.log(carbon); // 3024-03-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addUnit('century', 1);

console.log(carbon); // 2124-03-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addUnit('decade', 1);

console.log(carbon); // 2034-03-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addUnit('quarter', 1);

console.log(carbon); // 2024-06-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addUnit('week', 1);

console.log(carbon); // 2024-03-08 12:45:00
```

### addYear

Add one year to the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addYear();

console.log(carbon); // 2025-03-01 12:45:00
```

### addYears

Add years to the `Carbon` instance.

#### Parameters

- **value** - The number of years to add.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addYears(5);

console.log(carbon); // 2029-03-01 12:45:00
```

### addMonth

Add one month to the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addMonth();

console.log(carbon); // 2024-04-01 12:45:00
```

### addMonths

Add months to the `Carbon` instance.

#### Parameters

- **value** - The number of months to add.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addMonths(2);

console.log(carbon); // 2024-05-01 12:45:00
```

### addDay

Add one day to the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addDay();

console.log(carbon); // 2024-03-02 12:45:00
```

### addDays

Add days to the `Carbon` instance.

#### Parameters

- **value** - The number of days to add.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addDays(3);

console.log(carbon); // 2024-03-04 12:45:00
```

### addHour

Add one hour to the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addHour();

console.log(carbon); // 2024-03-01 13:45:00
```

### addHours

Add hours to the `Carbon` instance.

#### Parameters

- **value** - The number of hours to add.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addHours(2);

console.log(carbon); // 2024-03-01 14:45:00
```

### addMinute

Add one minute to the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addMinute();

console.log(carbon); // 2024-03-01 12:46:00
```

### addMinutes

Add minutes to the `Carbon` instance.

#### Parameters

- **value** - The number of minutes to add.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addMinutes(30);

console.log(carbon); // 2024-03-01 13:15:00
```

### addSecond

Add one second to the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addSecond();

console.log(carbon); // 2024-03-01 12:45:01
```

### addSeconds

Add seconds to the `Carbon` instance.

#### Parameters

- **value** - The number of seconds to add.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addSeconds(30);

console.log(carbon); // 2024-03-01 12:45:30
```

### addMillisecond

Add one millisecond to the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addMillisecond();

console.log(carbon); // 2024-03-01 12:45:00.001
```

### addMilliseconds

Add milliseconds to the `Carbon` instance.

#### Parameters

- **value** - The number of milliseconds to add.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addMilliseconds(500);

console.log(carbon); // 2024-03-01 12:45:00.500
```

### addMillennium

Add one millennium to the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addMillennium();

console.log(carbon); // 3024-03-01 12:45:00
```

### addMillenniums

Add millenniums to the `Carbon` instance.

#### Parameters

- **value** - The number of millenniums to add.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addMillenniums(2);

console.log(carbon); // 5024-03-01 12:45:00
```

### addCentury

Add one century to the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addCentury();

console.log(carbon); // 2124-03-01 12:45:00
```

### addCenturies

Add centuries to the `Carbon` instance.

#### Parameters

- **value** - The number of centuries to add.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addCenturies(2);

console.log(carbon); // 2324-03-01 12:45:00
```

### addDecade

Add one decade to the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addDecade();

console.log(carbon); // 2034-03-01 12:45:00
```

### addDecades

Add decades to the `Carbon` instance.

#### Parameters

- **value** - The number of decades to add.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addDecades(2);

console.log(carbon); // 2044-03-01 12:45:00
```

### addQuarter

Add one quarter to the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addQuarter();

console.log(carbon); // 2024-06-01 12:45:00
```

### addQuarters

Add quarters to the `Carbon` instance.

#### Parameters

- **value** - The number of quarters to add.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addQuarters(2);

console.log(carbon); // 2024-09-01 12:45:00
```

### addWeek

Add one week to the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addWeek();

console.log(carbon); // 2024-03-08 12:45:00
```

### addWeeks

Add weeks to the `Carbon` instance.

#### Parameters

- **value** - The number of weeks to add.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').addWeeks(2);

console.log(carbon); // 2024-03-15 12:45:00
```

### subUnit

Subtract the given units from the current `Carbon` instance.

#### Parameters

- **unit** - The unit to subtract (e.g., 'year', 'month', 'day', 'hour', etc.).
- **value** - The number of units to subtract. Default is 1.

#### Returns

A new `Carbon` instance with the specified units subtracted.

#### Examples

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subUnit('year', 2);

console.log(carbon); // 2022-03-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subUnit('month', 3);

console.log(carbon); // 2023-12-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subUnit('day', 5);

console.log(carbon); // 2024-02-25 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subUnit('hour', 10);

console.log(carbon); // 2024-02-29 02:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subUnit('minute', 30);

console.log(carbon); // 2024-03-01 12:15:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subUnit('second', 20);

console.log(carbon); // 2024-03-01 12:44:40
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subUnit('millisecond', 500);

console.log(carbon); // 2024-03-01 12:44:59.500
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subUnit('millennium', 1);

console.log(carbon); // 1024-03-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subUnit('century', 1);

console.log(carbon); // 1924-03-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subUnit('decade', 1);

console.log(carbon); // 2014-03-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subUnit('quarter', 1);

console.log(carbon); // 2023-12-01 12:45:00
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subUnit('week', 1);

console.log(carbon); // 2024-02-23 12:45:00
```

### subYears

Subtract years from the `Carbon` instance.

#### Parameters

- **value** - The number of years to subtract.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subYears(2);

console.log(carbon); // 2022-03-01 12:45:00
```

### subMonth

Subtract one month from the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subMonth();

console.log(carbon); // 2024-02-01 12:45:00
```

### subMonths

Subtract months from the `Carbon` instance.

#### Parameters

- **value** - The number of months to subtract.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subMonths(2);

console.log(carbon); // 2024-01-01 12:45:00
```

### subDay

Subtract one day from the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subDay();

console.log(carbon); // 2024-02-29 12:45:00
```

### subDays

Subtract days from the `Carbon` instance.

#### Parameters

- **value** - The number of days to subtract.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subDays(2);

console.log(carbon); // 2024-02-28 12:45:00
```

### subHour

Subtract one hour from the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subHour();

console.log(carbon); // 2024-03-01 11:45:00
```

### subHours

Subtract hours from the `Carbon` instance.

#### Parameters

- **value** - The number of hours to subtract.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subHours(2);

console.log(carbon); // 2024-03-01 10:45:00
```

### subMinute

Subtract one minute from the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subMinute();

console.log(carbon); // 2024-03-01 12:44:00
```

### subMinutes

Subtract minutes from the `Carbon` instance.

#### Parameters

- **value** - The number of minutes to subtract.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subMinutes(2);

console.log(carbon); // 2024-03-01 12:43:00
```

### subSecond

Subtract one second from the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subSecond();

console.log(carbon); // 2024-03-01 12:44:59
```

### subSeconds

Subtract seconds from the `Carbon` instance.

#### Parameters

- **value** - The number of seconds to subtract.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00').subSeconds(2);

console.log(carbon); // 2024-03-01 12:44:58
```

### subMillisecond

Subtract one millisecond from the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00.123').subMillisecond();

console.log(carbon); // 2024-03-01 12:45:00.122
```

### subMilliseconds

Subtract milliseconds from the `Carbon` instance.

#### Parameters

- **value** - The number of milliseconds to subtract.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00.123').subMilliseconds(30);

console.log(carbon); // 2024-03-01 12:45:00.093
```

### subMillennium

Subtract one millennium (1000 years) from the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('3024-03-01 12:45:00').subMillennium();

console.log(carbon); // 2024-03-01 12:45:00
```

### subMillenniums

Subtract millenniums from the `Carbon` instance.

#### Parameters

- **value** - The number of millenniums to subtract.

#### Example

```javascript
const carbon = Carbon.parse('5024-03-01 12:45:00').subMillenniums(2);

console.log(carbon); // 3024-03-01 12:45:00
```

### subCentury

Subtract one century (100 years) from the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2124-03-01 12:45:00').subCentury();

console.log(carbon); // 2024-03-01 12:45:00
```

### subCenturies

Subtract centuries from the `Carbon` instance.

#### Parameters

- **value** - The number of centuries to subtract.

#### Example

```javascript
const carbon = Carbon.parse('2324-03-01 12:45:00').subCenturies(2);

console.log(carbon); // 2124-03-01 12:45:00
```

### subDecade

Subtract one decade (10 years) from the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2034-03-01 12:45:00').subDecade();

console.log(carbon); // 2024-03-01 12:45:00
```

### subDecades

Subtract decades from the `Carbon` instance.

#### Parameters

- **value** - The number of decades to subtract.

#### Example

```javascript
const carbon = Carbon.parse('2054-03-01 12:45:00').subDecades(2);

console.log(carbon); // 2034-03-01 12:45:00
```

### subQuarter

Subtract one quarter (3 months) from the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-06-01 12:45:00').subQuarter();

console.log(carbon); // 2024-03-01 12:45:00
```

### subQuarters

Subtract quarters from the `Carbon` instance.

#### Parameters

- **value** - The number of quarters to subtract.

#### Example

```javascript
const carbon = Carbon.parse('2025-03-01 12:45:00').subQuarters(4);

console.log(carbon); // 2024-03-01 12:45:00
```

### subWeek

Subtract one week (7 days) from the `Carbon` instance.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-08 12:45:00').subWeek();

console.log(carbon); // 2024-03-01 12:45:00
```

### subWeeks

Subtract weeks from the `Carbon` instance.

#### Parameters

- **value** - The number of weeks to subtract.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-29 12:45:00').subWeeks(4);

console.log(carbon); // 2024-03-01 12:45:00
```

### Chaining Method Calls

You can chain multiple `set`, `add` or `sub` methods together to conveniently update multiple components of a `Carbon` instance in one
line.

#### Example

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00')
    .setYear(2025)
    .setMonth(5)
    .setDay(15)
    .setHour(18)
    .setMinute(30)
    .setSecond(45)
    .setMillisecond(500);

console.log(carbon); // 2025-06-15 18:30:45.500 UTC (+02:00)
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00')
    .addYears(2)
    .addMonths(3)
    .addDays(5)
    .addHours(10)
    .addMinutes(30)
    .addSeconds(20)
    .addMilliseconds(500);

console.log(carbon); // 2026-06-06 23:15:20.500 UTC (+02:00)
```

```javascript
const carbon = Carbon.parse('2024-03-01 12:45:00')
    .subYears(2)
    .subMonths(3)
    .subDays(5)
    .subHours(10)
    .subMinutes(30)
    .subSeconds(20)
    .subMilliseconds(500);

console.log(carbon); // 2021-11-26 02:14:39.500 UTC (+01:00)
```

