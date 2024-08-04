// import Header from "@components/Header"
// import jsxFactory from "@utils/jsxFactory"
// import { useCSS } from "src/hooks/useCSS"

// type CircleProps = { title: string; text: string }

// export const useName = import.meta.file
//   .split(".")
//   .shift()
//   ?.toLowerCase()

// const Circle = async ({ title, text }: CircleProps) => {
//   const { css } = useCSS({ meta: import.meta })
//   const headerItem = await Header()

//   return (
//     <section class={useName}>
//       <style>{css}</style>
//       {headerItem}
//       {/* <article>
//         <h1>{title}</h1>
//         <p>{text}</p>
//       </article> */}
//       <div className="container">
//         <div popovertarget="mypopover">
//           Toggle the popover
//         </div>
//         <div id="mypopover" popover>
//           Popover content
//         </div>
//       </div>
//       <div class="container">
//         <div class="circle"></div>
//         <div class="circle"></div>
//         <div class="circle"></div>
//         <div class="circle"></div>
//         <div class="circle"></div>
//       </div>
//     </section>
//   )
// }

// export default Circle
