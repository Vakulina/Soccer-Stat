export default function filterCompetitionList(state) {
  let data = [];
  const filterCallback = (match) => {
    return match.name.toLowerCase().includes(state.Filter.trim());
  }

  if (state.typeOfCompetitions === 'leages') {
    data = (state.Filter) ? state.ListLeages.filter(filterCallback) : state.ListLeages;
  }
  if (state.typeOfCompetitions === 'teams') {
    data = (state.Filter) ? state.ListTeams.filter(filterCallback) : state.ListTeams;
  }

  return data;
}