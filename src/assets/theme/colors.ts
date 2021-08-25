export const COLORS = {
  primary: '#4361EE',
  secondary: '#3f37C9',
  accent: '#4895EF',
  danger: '#F72585',
  success: '#4CC9F0',
  grey: '#ADB5BD',
  white: '#FFF',
  black: '#000',
} as const;
export type COLORS_KEYS = keyof typeof COLORS;
