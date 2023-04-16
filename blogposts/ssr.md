---
title: 'Dwa sposoby pre-renderingu w Next.js, cz.I Static Generation'
date: '2023-04-15'
spoiler: Pre-rendering vs. Server-side Rendering.
---

Next.js oferuje dwa sposoby pre-renderingu: **Static Generation** i **Server-side Rendering**. Różnica polega na *
*momencie**, w którym generuje się kod HTML strony.

W tym pierwszym wpisie z serii o Next.js, skupię się na **Static Generation**. W kolejnych wpisach opiszę **Server-side
Rendering**.

### Static Generation

Static Generation to metoda pre-renderingu, która generuje kod HTML podczas budowania aplikacji. Wygenerowany kod HTML
jest następnie _ponownie_ używany przy każdym żądaniu. Tak więc strona jest dostępna od razu, bez żadnych dodatkowych
żądań do serwera.
To najszybszy i rekomendowany sposób pre-renderingu w Next.js.

Niestety, jak wszystko w życiu, nie ma nic idealnego. Static Generation ma pewne ograniczenia. Nie jest możliwe
wygenerowanie kodu HTML podczas wykonywania żądania. Dlatego też nie można użyć danych, które są dostępne tylko
podczas wykonywania żądania. Takie dane muszą być pobierane z serwera.

Najczęściej używane dane, które nie są dostępne podczas budowania aplikacji, to dane użytkownika. Na przykład dane
zalogowanego użytkownika. W takim przypadku musimy użyć **Server-side Rendering**.

### Kiedy najlepiej użyć Static Generation?

Static Generation jest najlepszym wyborem, gdy budujemy:

- statyczne strony
- strony, które nie wymagają danych użytkownika
- strony, które wymagają danych, które są dostępne podczas budowania aplikacji
- blogi
- strony z produktami
- dokumentacja
- strony z informacjami o firmie, projekcie lub zespołach
