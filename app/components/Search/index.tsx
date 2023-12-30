import { FiSearch } from "react-icons/fi"

export function Search() {
  return (
    <form>
      <label htmlFor="" className="sr-only">
        Search
      </label>

      <div className="relative w-full md:w-[60vw] lg:w-[25vw]">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-black ">
          <FiSearch />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full ps-10 p-2.5  focus:outline-none"
          placeholder="Pesquise seu lanche"
          required
        ></input>
      </div>
    </form>
  )
}
