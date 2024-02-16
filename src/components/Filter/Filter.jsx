const Filter = ({ value, handleChange }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input type='text' value={value} onChange={handleChange} placeholder='Search...' />
      </label>
    </>
  );
};

export default Filter;
