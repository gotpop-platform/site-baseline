/** @jsx jsxFactory */
/** @jsxFrag Fragment */
import { Fragment, jsxFactory } from "@gotpop-platform/package-baseline"

export function CustomElement({ children }: { children?: string }) {
  return (
    <hello-world>
      <template shadowrootmode="open">
        <style>{`
          :host {
            display: block;
            color: var(--slate-900);
            // background: var(--slate-100);
            background: red;
            padding: var(--spacing-md);
            border-radius: var(--radius-md);
          }
        `}</style>
        <slot></slot>
      </template>
      {children}
    </hello-world>
  )
}

// Main component that uses the custom element
export function Shadow() {
  return (
    <>
      <CustomElement>This content will be slotted</CustomElement>

      <CustomElement>Different content in another instance</CustomElement>
    </>
  )
}
