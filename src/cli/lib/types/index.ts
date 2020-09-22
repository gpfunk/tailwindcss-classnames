import {defaultTailwindConfig} from '../../lib/defaultTailwindConfig';

export type TTailwindCSSConfig = Partial<typeof defaultTailwindConfig>;

export type TConfigFuture = {
  removeDeprecatedGapUtilities?: boolean;
};

export type TConfigTheme = TThemeItems & {extend?: TThemeItems};

export type TConfigVariants = typeof defaultTailwindConfig.variants;

type TThemeItems = typeof defaultTailwindConfig.theme;