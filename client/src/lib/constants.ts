// Colors - Warmer color scheme
export const COLORS = {
  primary: {
    DEFAULT: '#F06C47', // Warm orange/coral as primary color
    50: '#FFF5F0',
    100: '#FEEAE0',
    200: '#FDD5C2',
    300: '#FCBFA3',
    400: '#FAAA85',
    500: '#F06C47',
    600: '#E85C3A',
    700: '#D94C2D',
    800: '#C43C20',
    900: '#A32C14',
  },
  secondary: {
    DEFAULT: '#825C46', // Warm brown as secondary color
    50: '#F5F0EB',
    100: '#EBE1D7',
    200: '#D7C3AF',
    300: '#C3A587',
    400: '#AA8A6C',
    500: '#825C46',
    600: '#734F3C',
    700: '#634332',
    800: '#553728',
    900: '#463022',
  },
  accent: {
    DEFAULT: '#F9B949', // Golden accent
    100: '#FFF8E1',
    200: '#FFECB3',
    300: '#FFE082',
    400: '#FFD54F',
    500: '#F9B949',
    600: '#FFA000',
    700: '#FF8F00',
    800: '#FF6F00',
    900: '#FF5722',
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
