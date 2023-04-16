---
title: 'When to use Static Generation v.s. Server-side Rendering'
date: '2020-01-01'
spoiler: Static Generation v.s. Server-side Rendering.
--- 

We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.


If you cannot pre-render a page ahead of a user's request, you can do it on-demand:
- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page ahead of a user's request?" If the answer is yes, then you should choose Static Generation. If not, then Server-side Rendering might be a good fit.

