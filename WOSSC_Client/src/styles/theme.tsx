import { DarkTheme, DefaultTheme, Theme } from 'react-native-paper';

export const appColours = {
  primary: '#005030',
  accent: '#ffc00f',
}

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...appColours
  },
};

export const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...appColours
  },
}

export const getCurrentTheme = (profile:{settings:{isDarkThemeEnabled:boolean}}) =>
{
  if ((profile?.settings?.isDarkThemeEnabled ?? null) === null)
    return defaultTheme;

  if (profile.settings.isDarkThemeEnabled)
  {
    return darkTheme;
  }

  return defaultTheme;
}