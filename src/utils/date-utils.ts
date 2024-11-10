export const getCurrentDate = (): string => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

export let formatDate = (
  locale: Intl.LocalesArgument,
  options: Intl.DateTimeFormatOptions,
  date: Parameters<Intl.DateTimeFormat['format']>[0]
): string => {
  try {
    // Проверяем корректность переданной локали с использованием списка поддерживаемых локалей
    const availableLocales = Intl.DateTimeFormat.supportedLocalesOf(locale);
    const validLocale = availableLocales.length ? locale : 'ru-RU'; // Если локаль не поддерживается, использовать 'en-US'

    return new Intl.DateTimeFormat(validLocale, options).format(date);
  } catch (error) {
    console.error("Некорректная локаль, используем 'ru-RU'", error);
    return new Intl.DateTimeFormat('ru-RU', options).format(date);
  }
};

export const calculateDaysLeft = (completedAt: string) => {
  const today = new Date();
  const deadline = new Date(completedAt);

  if (isNaN(deadline.getTime())) {
    throw new Error('Указана неверная дата завершения!');
  }

  const startOfToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const startOfDeadline = new Date(
    deadline.getFullYear(),
    deadline.getMonth(),
    deadline.getDate()
  );

  const difference = startOfDeadline.getTime() - startOfToday.getTime();

  const daysLeft = Math.ceil(difference / (1000 * 3600 * 24));

  return daysLeft;
};
