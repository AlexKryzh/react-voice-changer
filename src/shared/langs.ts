interface ILangValue {
    nativeName: string;
}

export interface ILang {
    [key: string]: ILangValue;
}

export const langs :ILang = {
    en: { nativeName: 'English' },
    es: { nativeName: 'Español' }
};