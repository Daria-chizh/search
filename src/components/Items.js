import React from 'react';
import { useSelector } from 'react-redux';

export default function Items() {
  const { items, loading, error, search } = useSelector(state => state.skills);

  const hasQuery = search.trim().length > 0;
  if (!hasQuery) {
    return <div>Type something to search...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (loading) {
    return <div>searching...</div>;
  }

  return (
    <ul>
      {items.map(o => <li key={o.id}>{o.name}</li>)}
    </ul>
  );
}
