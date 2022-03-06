export default function imageGoals(score) {
  const {
    extraTime, fullTime, penalties,
  } = score;
  const fullTimeStr = `${+fullTime.homeTeam}:${+extraTime.awayTeam} `;
  const extraTimeStr = (+extraTime.homeTeam || +extraTime.awayTeam)&&`(${extraTime.homeTeam}:${extraTime.awayTeam}) `;
  const penaltiesStr = (+penalties.homeTeam || +penalties.awayTeam)&&`(${penalties.homeTeam}:${penalties.awayTeam}) `;
  const result = `${fullTimeStr}${extraTimeStr||''}${penaltiesStr||''}`;
  return result;
}

