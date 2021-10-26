import { ValidationMap, WeakValidationMap } from "react";

declare global {
  interface FCWithoutComponent<P = {}> {
    propTypes?: WeakValidationMap<P> | undefined;
    contextTypes?: ValidationMap<any> | undefined;
    defaultProps?: Partial<P> | undefined;
    displayName?: string | undefined;
  }

  type EP<E extends keyof JSX.IntrinsicElements> = Omit<
    JSX.IntrinsicElements[E],
    "ref"
  > & {
    as?: E;
    customRef?: JSX.IntrinsicElements[E]["ref"];
  };

  type MainProps = JSX.IntrinsicElements["main"];
  type AsideProps = JSX.IntrinsicElements["aside"];
  type DivProps = JSX.IntrinsicElements["div"];
  type LiProps = JSX.IntrinsicElements["li"];
}

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
}
