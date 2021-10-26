import React, { ComponentProps } from 'react'

import { isFalse } from '../../../utils'

interface Props extends ComponentProps<typeof React.Fragment> {
  condition?: boolean
}
const Fragment: React.FC<Props> = ({ condition = true, children, ...props }) => {
  if (isFalse(condition)) return null

  return <React.Fragment {...props}>{children}</React.Fragment>
}

export default Fragment
