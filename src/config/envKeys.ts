// This file allows us to have strong typings with our env keys

// Local Typings
type EnvKey = 'REACT_APP_GOOGLE_MAPS_API_KEY';

// Local Variables
const getEnvKey = (key: EnvKey): string => process.env[key] ?? '';

export const envKeys: Record<EnvKey, string> = {
  REACT_APP_GOOGLE_MAPS_API_KEY: getEnvKey('REACT_APP_GOOGLE_MAPS_API_KEY'),
};
