import React from 'react';
declare type DivProps = JSX.IntrinsicElements['div'];
interface Props extends Omit<DivProps, 'onClick'> {
    visible: boolean;
    onBackdrop?: DivProps['onClick'];
    disableDefaultZIndex?: boolean;
    customRef?: DivProps['ref'];
}
export declare const Modal: React.FC<Props>;
export default Modal;
