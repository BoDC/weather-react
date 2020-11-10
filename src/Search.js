import React from "react";

export default function Search() {
  return (
    <form id="search-form">
      <input
        type="search"
        placeholder="Search city"
        autocomplete="off"
        id="text-input-here"
      />
      <input type="submit" value="Enter" class="button" />
      <button id="huidig">
        {" "}
        <i class="fas fa-map-pin"></i> Current Location
      </button>
    </form>
  );
}
