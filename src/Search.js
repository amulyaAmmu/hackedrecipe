import React, {useState} from "react";

const Search = ({getQuery}) => {

  const [text, setText] = useState('')

  const onChange = (q) => {
    setText(q)
    getQuery(q)
  }

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search your favorite recipe.."
          value={text}
          autoFocus={true}
          onChange={(e) => onChange(e.target.value)}
        ></input>
      </form>
    </section>
  );
};

export default Search;
