import { useLang } from '../LanguageContext';
import translations from './translations.json';

export function TranslatedText({ text }: { text: string }) {
  const { lang } = useLang();
  
  if (lang === 'en' || !text) return <>{text}</>;
  
  const normalized = text.replace(/\s+/g, ' ').trim();
  const dict = (translations as any)[normalized];
  
  if (!dict || !dict[lang]) {
    // If not found, return original
    return <>{text}</>;
  }
  
  const t = dict[lang];
  const leading = text.match(/^\s*/)?.[0] || '';
  const trailing = text.match(/\s*$/)?.[0] || '';
  
  return <>{leading}{t}{trailing}</>;
}
