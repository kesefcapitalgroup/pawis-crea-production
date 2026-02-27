import en from "./messages/en.json";
import es from "./messages/es.json";

declare module "next-intl" {
  interface AppConfig {
    Messages: typeof en;
    Messages: typeof es;
  }
}
