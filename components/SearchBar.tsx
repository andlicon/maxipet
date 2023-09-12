import Raact from "react";
import { useSearch } from "../hooks/useSearch";

const SearchBar = () => {
  const {
    search,
    handleSearch,
    isEmpty } = useSearch();

  return (
    <div className="searchBar">
      <input type="text" placeholder="Buscador" value={search} onChange={handleSearch} className="searchBar__input rounded" />
      <i className={`bi bi-search searchBar__icon ${isEmpty ? "show" : "hide"}`}></i>
    </div>
  )
}
export default SearchBar;
