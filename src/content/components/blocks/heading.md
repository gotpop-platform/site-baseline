---
section: main
title: Heading
slug: components/blocks/heading
description: This is a heading description
---
<!-- main -->
## Heading
This is the documentation for the heading component.
[<Heading>Heading</Heading>]


```html
<Heading ignore="true">Heading</Heading>
```

```css
@scope {
  & {
    grid-column: var(--grid-column);
    grid-row: var(--grid-row);
    background-color: var(--background-colour);
    border-radius: var(--border-radius);
    padding: var(--padding);
    display: var(--display);
    view-transition-name: var(--transition-article);

    @container style(--display: grid) {
      grid-template-columns: var(--grid-template-columns);
      grid-template-rows: var(--grid-template-rows);
      row-gap: var(--row-gap);
    }
  }
}
```


