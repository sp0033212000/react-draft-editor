import { ContentBlock, DraftStyleMap } from 'draft-js'
import { isNotSet } from '../../../utils'

export function getBlockStyle(defaultType: string) {
  return (block: ContentBlock) => {
    let type = block.getType()

    if (type === 'unstyled' || isNotSet(type)) {
      type = defaultType || 'unstyled'
    }

    switch (type) {
      case 'blockquote':
        return 'RichEditor-blockquote'
      case 'left':
        return 'draft-align-left'
      case 'center':
        return 'draft-align-center'
      case 'right':
        return 'draft-align-right'
      // Primary Heading
      case 'primary-heading':
        return 'draft-primary-heading'
      case 'primary-heading-left':
        return 'draft-primary-heading draft-align-left'
      case 'primary-heading-center':
        return 'draft-primary-heading draft-align-center'
      case 'primary-heading-right':
        return 'draft-primary-heading draft-align-right'
      // Secondary Heading
      case 'secondary-heading':
        return 'draft-secondary-heading'
      case 'secondary-heading-left':
        return 'draft-secondary-heading draft-align-left'
      case 'secondary-heading-center':
        return 'draft-secondary-heading draft-align-center'
      case 'secondary-heading-right':
        return 'draft-secondary-heading draft-align-right'
      // Primary Body
      case 'primary-body':
        return 'draft-primary-body'
      case 'primary-body-left':
        return 'draft-primary-body draft-align-left'
      case 'primary-body-center':
        return 'draft-primary-body draft-align-center'
      case 'primary-body-right':
        return 'draft-primary-body draft-align-right'
      // Secondary Body
      case 'secondary-body':
        return 'draft-secondary-body'
      case 'secondary-body-left':
        return 'draft-secondary-body draft-align-left'
      case 'secondary-body-center':
        return 'draft-secondary-body draft-align-center'
      case 'secondary-body-right':
        return 'draft-secondary-body draft-align-right'

      // // List
      // case 'unordered-list-item':
      //   return 'draft-unordered-list'
      // case 'ordered-list-item':
      //   return 'draft-ordered-list'
      default:
        return defaultType || ''
    }
  }
}

export const styleMap: DraftStyleMap = {}

export const colorMap: DraftStyleMap = {
  PRIMARY_RED_1: {
    color: '#DF3232', // EWC Red
  },
  PRIMARY_RED_2: {
    color: '#C62829', // EWC Red2
  },
  PRIMARY_RED_3: {
    color: '#F3BBBB', // EWC Red3
  },
  PRIMARY_RED_4: {
    color: '#FFF4F4', // EWC Lavenderblush
  },
  SECONDARY_GREEN_1: {
    color: '#16C0C0', // EWC Green
  },
  SECONDARY_GREEN_2: {
    color: '#0FA0A0', // EWC Green2
  },
  SECONDARY_GREEN_3: {
    color: '#7FDCDC', // EWC Green3
  },
  SECONDARY_GREEN_4: {
    color: '#E3F2F5', // EWC Mintcream
  },
  GRAY_1: {
    color: '#515151', // EWC Gray (Midnight)
  },
  GRAY_2: {
    color: '#636363', // EWC Gray (Dark Gray)
  },
  GRAY_3: {
    color: '#C2C2C2', // EWC Gray (Medium Gray)
  },
  GRAY_4: {
    color: '#ECECEC', // EWC Gray (Gray)
  },
  GRAY_5: {
    color: '#F4F4F4', // EWC Gray (Light Gray)
  },
  BLACK_1: {
    color: '#282828', // EWC Black2 (Tints)
  },
  BLACK_2: {
    color: '#333333', // EWC BG Dark (Background – Dark)
  },
  WHITE_1: {
    color: '#FFFFFF', // EWC White
  },
  WHITE_2: {
    color: '#FBFBFB', // EWC BG Light
  },
}

export const customStyleMap = { ...colorMap, ...styleMap }
