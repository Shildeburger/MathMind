const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
  return Object.keys(object).reduce((acc, key) => ({ ...acc, [key]: `:${key}` }), {}) as Record<keyof T, string>;
};

export const getAllModesRoute = () => '/';

export const classicModeRouteParams = getRouteParams({ MathMind: true });
export type classicModeRouteParams = typeof classicModeRouteParams;
export const getClassicModeRoute = ({ MathMind }: classicModeRouteParams) => `/gamemods/${MathMind}`;
