import { VariantEnum } from "../enum/Button.enum";

export interface ButtonInterface {
  variant?: VariantEnum;
  block?: boolean;
  children?: string | JSX.Element;
}
