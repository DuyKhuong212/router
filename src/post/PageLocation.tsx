import React from 'react'
import { useLocation } from 'react-router-dom';

const PageLocation = () => {
    const location = useLocation();
    const id_ = location.state.id;
    console.log(id_)

  return (
    <div>This id: {id_}</div>
  )
}

export default PageLocation