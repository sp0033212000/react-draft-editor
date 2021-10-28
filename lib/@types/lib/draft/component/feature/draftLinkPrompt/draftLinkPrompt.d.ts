import React from "react";
interface Props {
    open: boolean;
    confirmHandler: (url: string) => void;
    cancelHandler: () => void;
    currentSelectionURL: string | null;
    customRef: JSX.IntrinsicElements["div"]["ref"];
}
declare const DraftLinkPrompt: React.FC<Props>;
export default DraftLinkPrompt;
