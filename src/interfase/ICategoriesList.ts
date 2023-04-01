export default interface ICategoriesList {
  key: string;
  type: string;
  subtype?: Array<Subtype>;
  toggled: boolean;
}

type Subtype = {
  subtypeKey: string;
  subtype: string;
  subtypeToggled: boolean;
}

export type SelectType = {
  value: string,
  label: string
}