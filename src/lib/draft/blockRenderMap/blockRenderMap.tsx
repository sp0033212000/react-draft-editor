import React from "react";
import Draft, { DraftBlockRenderConfig, DraftBlockType } from "draft-js";
import Immutable from "immutable";
import classNames from "classnames";
import style from "./blockRenderMap.module.scss";

const UnOrderListBlockWrapper: React.FC = ({ children }) => {
  return (
    <ul
      className={classNames(
        "public-DraftStyleDefault-ul",
        style["draft-list"],
        style["draft-list__un-order"]
      )}
    >
      {children}
    </ul>
  );
};
const OrderListBlockWrapper: React.FC = ({ children }) => {
  return (
    <ol
      className={classNames(
        "public-DraftStyleDefault-ol",
        style["draft-list"],
        style["draft-list__order"]
      )}
    >
      {children}
    </ol>
  );
};
const blockRenderObject: Record<DraftBlockType, DraftBlockRenderConfig> = {
  "unordered-list-item": {
    element: "li",
    wrapper: <UnOrderListBlockWrapper />,
  },
  "ordered-list-item": {
    element: "li",
    wrapper: <OrderListBlockWrapper />,
  },
};
const blockRenderMap = Immutable.Map<DraftBlockType, DraftBlockRenderConfig>(
  blockRenderObject
);

export default Draft.DefaultDraftBlockRenderMap.merge(blockRenderMap);
