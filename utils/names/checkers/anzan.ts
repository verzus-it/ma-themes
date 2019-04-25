import themes from '../grouped/anzan';
import {ThemeName} from '../../../ThemeName';

export const isAnzan = (theme:ThemeName|string) =>
    // @ts-ignore
    themes.includes(theme);