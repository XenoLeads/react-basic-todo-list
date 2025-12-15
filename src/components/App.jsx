import { useState } from "react";
import Header from "./Header";
import Filters from "./Filters";

const filters = [
  {
    id: 1,
    type: "button",
    name: "all",
  },
  {
    id: 2,
    type: "button",
    name: "active",
  },
  {
    id: 3,
    type: "button",
    name: "completed",
  },
  {
    id: 4,
    type: "dropdown",
    name: "category",
    options: [
      {
        id: 5,
        name: "default",
      },
    ],
  },
];

function App() {
  const [activeFilterId, setActiveFilterId] = useState(1);

  function set_active_filter_id(id) {
    const index = filters.findIndex(filter => filter.id === id);
    if (index < 0) return;
    setActiveFilterId(id);
  }

  return (
    <>
      <Header />
      <Filters filters={filters} active_filter_id={activeFilterId} set_active_filter_id={set_active_filter_id} />
    </>
  );
}

export default App;
