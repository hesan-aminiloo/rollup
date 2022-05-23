import axios from 'axios';

const trackEvent = async () => {
  try {
    console.log('TRACK EVENT');
    const { data } = await axios.get('https://swapi.dev/api/people/1');
    return data;
  } catch (E) {
    console.log(E);
    return false;
  }
};

const daysToYears = (days: number): number => {
  console.log('DAYS', days);
  return days + 1;
}

export {
  trackEvent,
  daysToYears
}