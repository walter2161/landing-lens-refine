import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Language } from "@/lib/i18n";

const flags = {
  pt: "🇧🇷",
  es: "🇪🇸",
  en: "🇬🇧"
};

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {(Object.keys(flags) as Language[]).map((lang) => (
        <Button
          key={lang}
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(lang)}
          className={`text-2xl p-2 h-auto transition-all ${
            language === lang 
              ? "opacity-100 scale-110" 
              : "opacity-50 hover:opacity-75"
          }`}
          title={lang === 'pt' ? 'Português' : lang === 'es' ? 'Español' : 'English'}
        >
          {flags[lang]}
        </Button>
      ))}
    </div>
  );
};
