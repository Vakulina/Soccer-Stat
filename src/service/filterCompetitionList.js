export default function filterCompetitionList(state) {
  let data;
  const filterCallback = (match) => {

    const filterData = (data) => {
      return data.toLowerCase().includes(state.Filter.trim())
    }
    return filterData(match.name) || filterData(match.area.name)
  }

  if (state.typeOfCompetitions === 'leages') {
    data = (state.Filter) ? state.ListLeages.filter(filterCallback) : state.ListLeages;
  }
  if (state.typeOfCompetitions === 'teams') {
    data = (state.Filter) ? state.ListTeams.filter(filterCallback) : state.ListTeams;
  }
  return data;
}