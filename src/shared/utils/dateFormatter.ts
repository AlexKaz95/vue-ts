export enum DATE_FORMAT {
    DATE = 'date',
    TIME = 'time',
    DATE_TIME = 'date_time',

}

export function dateFormatter(value: Date, format: DATE_FORMAT = DATE_FORMAT.DATE){
    const options: Intl.DateTimeFormatOptions = {};

    if (format.includes('date')){
        options.day = '2-digit';
        options.month = 'long';
        options.year = 'numeric';
    }

    if (format.includes('time')) {
        options.hour = '2-digit';
        options.minute = '2-digit';
        options.second = '2-digit';
    }

    return new Intl.DateTimeFormat('ru-RU', options).format(value);
}