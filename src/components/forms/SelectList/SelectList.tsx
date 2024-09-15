import { jsxFactory, useCSS } from "utils"

type SelectListProps = {
  SelectListName?: string
}

export const useName = import.meta.file
  .split(".")
  .shift()
  ?.toLowerCase()

const SelectList = () => {
  const { css } = useCSS({ meta: import.meta })

  return (
    <selectlist className={useName} id="browser-filter">
      <button type="selectlist">
        <selectedoption></selectedoption>
      </button>
      <option value="edge" checked="">
        Edge
      </option>
      <option value="chrome">Chrome</option>
      <option value="firefox">Firefox</option>
      <option value="brave">Brave</option>
      <option value="safari">Safari</option>
      <option value="opera">Opera</option>
    </selectlist>
  )
}

export default SelectList
