import "server-only";
import type { Locale } from "../i18n-config";
import en from "./en";
import sl from "./sl";

export type ITranslations = typeof en;

const dictionaries = { en, sl };

export const getDictionary = (locale: Locale): ITranslations =>
  (dictionaries[locale] as ITranslations) ?? dictionaries.en;
