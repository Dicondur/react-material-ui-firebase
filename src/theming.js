import { createMuiTheme } from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import lightBlue from '@material-ui/core/colors/lightBlue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import yellow from '@material-ui/core/colors/yellow';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/deepOrange';
import brown from '@material-ui/core/colors/brown';
import gray from '@material-ui/core/colors/grey';
import blueGray from '@material-ui/core/colors/blueGrey';

import settings from './settings';
import { getColor } from './colors';

const primaryColor = getColor(settings.theme.primaryColor);
const secondaryColor = getColor(settings.theme.secondaryColor);
const dark = settings.theme.dark;

const defaultTheme = createMuiTheme({
  palette: {
    primary: primaryColor.import,
    secondary: secondaryColor.import,
    type: dark ? 'dark' : 'light'
  },

  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
  dark: dark
});

const theming = {};

theming.colors = [
  {
    id: 'red',
    name: 'Red',
    import: red
  },
  {
    id: 'pink',
    name: 'Pink',
    import: pink
  },
  {
    id: 'purple',
    name: 'Purple',
    import: purple
  },
  {
    id: 'deep-purple',
    name: 'Deep Purple',
    import: deepPurple
  },
  {
    id: 'indigo',
    name: 'Indigo',
    import: indigo
  },
  {
    id: 'blue',
    name: 'Blue',
    import: blue
  },
  {
    id: 'light-blue',
    name: 'Light Blue',
    import: lightBlue
  },
  {
    id: 'cyan',
    name: 'Cyan',
    import: cyan
  },
  {
    id: 'teal',
    name: 'Teal',
    import: teal
  },
  {
    id: 'green',
    name: 'Green',
    import: green
  },
  {
    id: 'light-green',
    name: 'Light Green',
    import: lightGreen
  },
  {
    id: 'lime',
    name: 'Lime',
    import: lime
  },
  {
    id: 'yellow',
    name: 'Yellow',
    import: yellow
  },
  {
    id: 'amber',
    name: 'Amber',
    import: amber
  },
  {
    id: 'orange',
    name: 'Orange',
    import: orange
  },
  {
    id: 'deep-orange',
    name: 'Deep Orange',
    import: deepOrange
  },
  {
    id: 'brown',
    name: 'Brown',
    import: brown
  },
  {
    id: 'gray',
    name: 'Gray',
    import: gray
  },
  {
    id: 'blue-gray',
    name: 'Blue Gray',
    import: blueGray
  }
];

theming.currentTheme = defaultTheme;

theming.defaultTheme = theming.currentTheme === defaultTheme;

theming.changeTheme = (theme) => {
  if (!theme) {
    return;
  }

  let primaryColor = theme.primaryColor;
  let secondaryColor = theme.secondaryColor;
  const dark = theme.dark;

  if (!primaryColor || !secondaryColor) {
    return;
  }

  primaryColor = getColor(primaryColor);
  secondaryColor = getColor(secondaryColor);

  theming.currentTheme = createMuiTheme({
    palette: {
      primary: primaryColor.import,
      secondary: secondaryColor.import,
      type: dark ? 'dark' : 'light'
    },

    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    dark: dark
  });
};

theming.resetTheme = () => {
  if (theming.currentTheme === defaultTheme) {
    return;
  }

  theming.currentTheme = defaultTheme;
};

export default theming;
