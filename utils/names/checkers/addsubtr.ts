import themes from '../grouped/anzan';
import {ThemeName} from '../../../ThemeName';

export const isAddsubtr = (theme:ThemeName|string) =>
    // @ts-ignore
    themes.includes(theme);