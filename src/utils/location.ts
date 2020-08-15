type Location = Pick<Coordinates, 'latitude' | 'longitude'>;

export const getDistanceBetweenTwoLocations = (
  locationA: Location,
  locationB: Location,
) => { // miles optional
  const r = 6371; // radius of the earth in km

  const deg2rad = (deg: number) => deg * (Math.PI / 180);
  const square = (x: number) => x ** 2;

  const latA = deg2rad(locationA.latitude);
  const latB = deg2rad(locationB.latitude);

  const latDiff = latB - latA;

  const longDiff = deg2rad(locationB.longitude - locationA.longitude);

  const a = square(Math.sin(latDiff / 2))
    + Math.cos(latA)
    * Math.cos(latB)
    * square(Math.sin(longDiff / 2));

  const distanceInKm = 2 * r * Math.asin(Math.sqrt(a));

  // return miles
  return distanceInKm * 0.621371;
};
