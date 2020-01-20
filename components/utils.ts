import axios from 'axios';

export function getTime(timeNow, inputTime) {
    const now = timeNow.toDateString();
    return new Date(`${now} ${inputTime}`);
}

export function getTimeNow() {
    return new Date(Date.now());
}

export function getPosition(results) {
    const now = getTimeNow();
    const sunSet = getTime(now, results.sunset);
    const sunRise = getTime(now, results.sunrise);

    const fullDay = sunSet.valueOf() - sunRise.valueOf();
    const untilNow = now.valueOf() - sunRise.valueOf();
    return 180 * untilNow / fullDay;
}

export async function getLocation() : Promise<Coordinates> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            resolve(coords);
        }, (error) => {
            reject(error);
        });
    });
}

export async function getSunTimeData(coords: Coordinates) {
    const { latitude, longitude } = coords;
    const response = await axios.post("api/times", { latitude, longitude });
    const { sunrise, sunset } : { sunset: number, sunrise: number } = response.data;
    return { sunrise, sunset };
};
