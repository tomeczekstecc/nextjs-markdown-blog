export default function getFormattedDate(date: string) {
    return new Intl.DateTimeFormat('pl-Pl', {
        dateStyle: 'long',
    }).format(new Date(date));
}
