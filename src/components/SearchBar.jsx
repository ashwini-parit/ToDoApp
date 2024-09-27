import React from 'react';
import './Search.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '5px', width: '300px', borderRadius: '5px' }}
      />
    </div>
  );
};

export default SearchBar;
