import React from 'react';

const UseVacansies = () => {
  const [id, setId] = React.useState();

  const changeIdVacansies = (id) => {
    setId(id);
  };

  return { changeIdVacansies, id };
};

export default UseVacansies;
