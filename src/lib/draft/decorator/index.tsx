import { CompositeDecorator, ContentState, DraftDecorator } from 'draft-js'
import React from 'react'

const findLinkEntities: DraftDecorator['strategy'] = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity()
    return entityKey !== null && contentState.getEntity(entityKey).getType() === 'LINK'
  }, callback)
}

const DraftLink: React.FC<{ contentState: ContentState; entityKey: string }> = ({
  contentState,
  entityKey,
  children
}) => {
  const { url } = contentState.getEntity(entityKey).getData()

  return (
    <a
      href={url}
      style={{ color: '#16C0C0', textDecoration: 'underline' }}
      title={url}
      rel={'noreferrer noopener'}
      target={'_blank'}
    >
      {children}
    </a>
  )
}

export const decorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: DraftLink
  }
])
