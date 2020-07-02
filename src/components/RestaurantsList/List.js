import React from 'react';

const List = (props) => {
  const { stores } = props;
  if (!stores || stores.length === 0) return <p>No stores, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Nossas Lojas</h2>
      {stores.map((store) => {
        return (
          <li key={store.id} className='list'>
            <span className='store-text'>{store.slug} </span>
            <span className='store-description'>{store.slug.is_open}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;