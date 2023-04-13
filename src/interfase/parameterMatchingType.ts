export interface IFormElement {
  from: HTMLInputElement,
  to: HTMLInputElement,
};

export type BrendType = {
  brend: string,
  count: number,
};

export type ParameterMatchingProps = {
  setTotalCount: (a: number) => void,
}