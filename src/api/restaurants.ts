export const getRestaurants = async () => {
  const url = 'https://br-challenge-data.s3.amazonaws.com/mockRestaurantData.json';

  try {
    const response = await fetch(
      url,
    );

    console.log('response : ', response);

    if (response.status < 200 || response.status >= 400) {
      throw new Error('Response error');
    }

    const data = await response.json();

    console.log('data : ', data);

    return data;
  } catch (error) {
    // typically log the error to a service like Sentry
    console.error(error);
  }
};
