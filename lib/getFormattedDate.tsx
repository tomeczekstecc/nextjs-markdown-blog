export default function getFormattedDate(date: string) {
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'long',
    }).format(new Date(date));
}
