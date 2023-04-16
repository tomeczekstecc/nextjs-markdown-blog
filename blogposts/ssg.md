---
title: 'Dwa sposoby pre-renderingu w Next.js, cz.II Server-side Rendering'
date: '2023-04-16'
spoiler: Static Generation v.s. Server-side Rendering.
---

Twórcy Next.js oferują dwa sposoby pre-renderingu: **Static Generation** i **Server-side Rendering**. Rekomendują
używanie
**Static Generation**. W tym wpisie opiszę, kiedy warto użyć **Server-side Rendering**.

### Server-side Rendering

Server-side Rendering to metoda pre-renderingu, która generuje kod HTML podczas wykonywania żądania. Kod HTML jest
generowany za każdym razem, gdy użytkownik odwiedza stronę. Tak więc strona jest dostępna dopiero po wykonaniu żądania
do
serwera. Jest to najmniej wydajny sposób pre-renderingu.

Server-side Rendering jest najlepszym wyborem, gdy strona wymaga danych, które nie są dostępne podczas budowania
aplikacji. Na przykład dane zalogowanego użytkownika. W takim przypadku musimy użyć **Server-side Rendering**.

### Kiedy najlepiej użyć Static Generation?

Static Generation jest najlepszym wyborem, gdy budujemy:

- dynamiczne strony
- strony, które wymagają danych użytkownika
- strony, które wymagają danych, które nie są dostępne podczas budowania aplikacji
- aplikacje webowe z dużą ilością dynamicznych danych, których jeszcze nie mamy
- aplikacje webowe z dużą ilością danych pobieranych z zewnętrznych źródeł np API lub baz danych

