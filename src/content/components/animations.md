---
title: "Animations"
id: "animations"
author: "John Doe"
date: "2023-10-01"
slug: "components/animations"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl in lacinia aliquam, nulla nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi. Sed auctor, nunc nec ultrices aliquet, nisl nunc tincidunt nunc, id tincidunt mi nisl a nunc. Nulla facilisi."
---

<!-- main -->

# Header 1

## Header 2

### Header 3

**Bold text**

_Italic text_

[Link](https://example.com)

```
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
