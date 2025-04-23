// Colors
export const COLORS = {
  primary: {
    DEFAULT: '#5E35B1',
    50: '#EDE7F6',
    100: '#D1C4E9',
    200: '#B39DDB',
    300: '#9575CD',
    400: '#7E57C2',
    500: '#5E35B1',
    600: '#512DA8',
    700: '#4527A0',
    800: '#311B92',
    900: '#1A237E',
  },
  secondary: {
    DEFAULT: '#00ACC1',
    50: '#E0F7FA',
    100: '#B2EBF2',
    200: '#80DEEA',
    300: '#4DD0E1',
    400: '#26C6DA',
    500: '#00ACC1',
    600: '#0097A7',
    700: '#00838F',
    800: '#006064',
    900: '#004D40',
  },
  accent: {
    DEFAULT: '#FF5722',
    100: '#FFF3E0',
    200: '#FFE0B2',
    300: '#FFCC80',
    400: '#FFB74D',
    500: '#FF9800',
    600: '#FF5722',
    700: '#E64A19',
    800: '#D84315',
    900: '#BF360C',
  }
};

// Fonts
export const FONTS = {
  playfair: '"Playfair Display", serif',
  inter: 'Inter, sans-serif',
  montserrat: 'Montserrat, sans-serif',
};

// Organization Types
export const ORGANIZATION_TYPES = [
  { value: "nonprofit", label: "Nonprofit 501(c)(3)" },
  { value: "educational", label: "Educational Institution" },
  { value: "government", label: "Government Agency" },
  { value: "foundation", label: "Foundation" },
  { value: "other", label: "Other" }
];

// Interest Options
export const INTEREST_OPTIONS = [
  { id: "grantWriting", label: "Grant Writing Assistance" },
  { id: "opportunities", label: "Finding Grant Opportunities" },
  { id: "impact", label: "Impact Measurement" },
  { id: "collaboration", label: "Team Collaboration" },
];
