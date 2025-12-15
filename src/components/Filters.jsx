import dropdown_icon from "../assets/icons/dropdown.svg";

function Filter({ filter, active_filter_id, set_active_filter_id }) {
  return (
    <>
      {filter.type === "button" ? (
        <button
          className={`button todo-filter todo-filter-${filter.name}${active_filter_id === filter.id ? " selected" : ""}`}
          onClick={() => set_active_filter_id(filter.id)}
        >
          {filter.name}
        </button>
      ) : (
        <div className="dropdown-wrapper">
          <select name="todo-category-input" className="button todo-filter">
            {filter.options.map(option => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <img src={dropdown_icon} alt="" className="dropdown-icon" />
        </div>
      )}
    </>
  );
}

function Filters({ filters, active_filter_id, set_active_filter_id }) {
  return (
    <div className="todo-filters">
      {filters.map(filter => (
        <Filter key={filter.id} filter={filter} active_filter_id={active_filter_id} set_active_filter_id={set_active_filter_id} />
      ))}
    </div>
  );
}

export default Filters;
