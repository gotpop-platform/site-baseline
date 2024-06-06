import h from "@utils/jsxFactory"
import { useCSS } from "src/hooks/useCSS"
import { brandsData, type Brand } from "./Brands.data"

type BrandsProps = { title?: string; text?: string }

const BrandItem = async ({
  classData,
  icon,
  tooltip,
}: Brand) => {
  return (
    <button
      class={`trigger ${classData}`}
      popovertarget={classData}
    >
      {icon}
      <div
        class={`tooltip ${classData}`}
        popover="auto"
        id={classData}
      >
        {tooltip}
      </div>
    </button>
  )
}

const Brands = async ({ title, text }: BrandsProps) => {
  const { css, useName } = useCSS({ meta: import.meta })

  const icons = await Promise.all(
    brandsData.map(async (brand) => await BrandItem(brand))
  )

  return (
    <aside class={useName}>
      <style>{css}</style>
      <div class="inner">
        <div class="icons">{icons}</div>
        <span class="disclaimer">
          None of these companies use this framework
        </span>
      </div>
    </aside>
  )
}

export default Brands
