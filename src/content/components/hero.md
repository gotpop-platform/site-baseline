----
section: header
title: header
slug: best-slug
description: This is a description
----

---
section: header
title: header
---
# Header Section
Content for the header...
---
title: header
section: main
---
## Main Section
Content for the main area...
---
section: footer
title: Liam
---
## Footer Section
Content for the footer...
```css
@keyframes rounded-mask-reveal {
  from {
    clip-path: inset(10% 10% 10% 10% round 30px);
  }
  to {
    clip-path: inset(0% 0% 0% 0% round 30px);
  }
}

video {
  animation: rounded-mask-reveal linear both;
  animation-timeline: view();
  animation-range: cover 0% cover 50%;
}
```