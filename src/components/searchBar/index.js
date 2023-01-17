import { useState } from "react";

export default function SearchBar({onSubmit}) {

    const [term, setTerm] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Movie Search</label>
          <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} className="bg-red-500" />
        </div>
      </form>
    </div>
  );
}