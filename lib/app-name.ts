export enum AppName {
  KANT_API = 'kant-api',
  KABAL_INNSTILLINGER = 'kabal-innstillinger',
  KLAGE_KODEVERK = 'klage-kodeverk-api',
}

const APP_NAMES = Object.values(AppName);

export const isAppName = (name: string): name is AppName => APP_NAMES.includes(name as AppName);
