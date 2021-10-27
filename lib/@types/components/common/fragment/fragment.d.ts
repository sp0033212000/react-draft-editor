import React, { ComponentProps } from 'react';
interface Props extends ComponentProps<typeof React.Fragment> {
    condition?: boolean;
}
declare const Fragment: React.FC<Props>;
export default Fragment;
