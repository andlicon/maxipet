import Raact from 'react';

const SearchBar = () => {
  return (
    <div className='searchBar'>
      <input type="text" placeholder='Buscador' className='searchBar__input rounded'/>
      <i className="bi bi-search searchBar__icon"></i>
    </div>
  )
}
export default SearchBar;