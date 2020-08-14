type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const request = async <T>(
  url: string,
  method: Method = 'GET',
) => {
  try {
    const response = await fetch(url, { method });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data: T = await response.json();

    return data;
  } catch (error) {
    // typically log the error to a service like Sentry
    console.error(error);
    throw error;
  }
};

export const getRequest = <T>(url: string): Promise<T> => request(url, 'GET');
