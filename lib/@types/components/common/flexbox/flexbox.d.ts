import React from 'react';
declare type SupportedEl = EP<'div'> | EP<'main'> | EP<'footer'> | EP<'header'> | EP<'li'> | EP<'ul'> | EP<'ol'> | EP<'nav'> | EP<'span'> | EP<'aside'> | EP<'label'> | EP<'button'>;
interface DefaultProps extends EP<'div'> {
    as?: undefined;
    customRef?: DivProps['ref'];
}
declare type ElementProps = SupportedEl | DefaultProps;
export interface FlexboxProps {
    condition?: boolean;
    direction?: 'row' | 'col';
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    expand?: boolean;
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}
export declare const Flexbox: React.FC<FlexboxProps & ElementProps>;
export default Flexbox;
