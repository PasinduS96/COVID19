export async function getLocal() {
  try {
    let stats = await fetch(
      "https://hpb.health.gov.lk/api/get-current-statistical"
    );

    let result = await stats.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getAWS() {
  try {
    let stats = await fetch(
      "https://covid-19sl.s3-ap-northeast-1.amazonaws.com/data.json"
    );

    let result = await stats.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getCountyData() {
  try {
    let stats = await fetch("https://pomber.github.io/covid19/timeseries.json");

    let result = await stats.json();
    return result;
  } catch (error) {
    throw error;
  }
}
