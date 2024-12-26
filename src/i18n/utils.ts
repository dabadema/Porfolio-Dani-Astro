import english from './en.json';
import spanish from './es.json';

const LANGUAGES = {
    ENGLISH: 'en',
    SPANISH: 'es',
};

export const getI18N = ({ currentLocale = getBrowserLanguage() }: { currentLocale: string }) => {
    if (currentLocale === LANGUAGES.ENGLISH) return english;
    if (currentLocale === LANGUAGES.SPANISH) return spanish;
    return english;
};

// Función auxiliar para obtener el idioma del navegador
function getBrowserLanguage(): string {
    // Ejecutar solo en el cliente
    if (typeof navigator === 'undefined') return 'en';

    const browserLang = navigator.language.toLowerCase().split('-')[0];
    return browserLang === 'es' ? 'es' : 'en';
}
