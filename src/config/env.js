const KEYS = [
  'VITE_QUESTIONS_API_URL',
  'VITE_SPECIALIZATIONS_API_URL',
  'VITE_SKILLS_API_URL',
  'VITE_QUESTION_BY_ID_API_URL',
];

export const CONFIG = KEYS.reduce((obj, key) => {
  obj[key] = import.meta.env[key];
  return obj;
}, {});

const validateConfig = () => {
  const filter = Object.keys(CONFIG).filter(
    (key) => CONFIG[key] === undefined || CONFIG[key] === '',
  );
  if (filter.length) {
    console.warn(
      `Не заданы переменные окружения: ${filter.join('\n')}\nПроверьте файл .env (образец — .env.example).\nЗапросы к API могут не работать.`,
    );
  }
};

validateConfig();
