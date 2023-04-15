export function filterDate(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurants) =>
    restaurants?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filterData;
}
