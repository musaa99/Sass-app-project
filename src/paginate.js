import _ from "lodash";

// return a single page of countries sliced from the total collection of items
export function adminPaginate(countries, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(countries).slice(startIndex).take(pageSize).value();
}

export function standardPaginate(countries, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(countries).slice(startIndex).take(pageSize).value();
}
