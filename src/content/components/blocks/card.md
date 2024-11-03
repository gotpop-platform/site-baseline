---
section: main
title: Card
slug: components/blocks/card
description: This is a button description
---
<!-- main -->
## Card
This is the documentation for the button component.
[<Button ignore="true">Click me!!</Button>]


```html
<Button ignore="true">Click me!!</Button>
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


