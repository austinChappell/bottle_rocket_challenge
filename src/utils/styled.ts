import styled, { CreateStyled } from '@emotion/styled';
import { useTheme } from 'emotion-theming';
import { MapTypeStyle } from 'google-map-react';

import colors from 'constants/colors';

export type Color = keyof typeof colors;

export interface Theme {
  backgroundColor: string;
  colors: {
    black: string;
    primaryDark: string;
    primaryLight: string;
    white: string;
  };
  mapStyles: MapTypeStyle[];
  palette: {
    navBarBackground: Color;
    navBarText: Color;
  };
}

export type ThemeVariant = 'dark' | 'light';

export const themes: Record<ThemeVariant, Theme> = {
  dark: {
    backgroundColor: colors.black,
    colors: {
      black: colors.white,
      primaryDark: '#34b379',
      primaryLight: '#43e895',
      white: colors.black,
    },
    mapStyles: [
      { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
      { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
      {
        elementType: 'labels.text.fill',
        featureType: 'poi',
        stylers: [{ color: '#d59563', visibility: 'off' }],
      },
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'poi.park',
        stylers: [{ visibility: 'on' }],
      },
      {
        elementType: 'geometry',
        featureType: 'poi.park',
        stylers: [{ color: '#263c3f' }],
      },
      {
        elementType: 'geometry',
        featureType: 'road',
        stylers: [{ color: '#38414e' }],
      },
      {
        elementType: 'geometry.stroke',
        featureType: 'road',
        stylers: [{ color: '#212a37' }],
      },
      {
        elementType: 'labels.text.fill',
        featureType: 'road',
        stylers: [{ color: '#9ca5b3' }],
      },
      {
        elementType: 'geometry',
        featureType: 'road.highway',
        stylers: [{ color: '#746855' }],
      },
      {
        elementType: 'geometry.stroke',
        featureType: 'road.highway',
        stylers: [{ color: '#1f2835' }],
      },
      {
        elementType: 'labels.text.fill',
        featureType: 'road.highway',
        stylers: [{ color: '#f3d19c' }],
      },
      {
        featureType: 'transit',
        stylers: [{ color: '#2f3948' }],
      },
      {
        elementType: 'labels.text.fill',
        featureType: 'transit.station',
        stylers: [{ color: '#d59563' }],
      },
      {
        elementType: 'geometry',
        featureType: 'water',
        stylers: [{ color: '#17263c' }],
      },
      {
        elementType: 'labels.text.fill',
        featureType: 'water',
        stylers: [{ color: '#515c6d' }],
      },
      {
        elementType: 'labels.text.stroke',
        featureType: 'water',
        stylers: [{ color: '#17263c' }],
      },
    ],
    palette: {
      navBarBackground: 'black',
      navBarText: 'primaryLight',
    },
  },
  light: {
    backgroundColor: colors.white,
    colors,
    mapStyles: [
      {
        featureType: 'poi',
        stylers: [{ visibility: 'off' }],
      },
      {
        featureType: 'poi.park',
        stylers: [{ visibility: 'on' }],
      },
    ],
    palette: {
      navBarBackground: 'primaryLight',
      navBarText: 'white',
    },
  },
};

export const useAppTheme = () => useTheme<Theme>();

export default styled as CreateStyled<Theme>;
