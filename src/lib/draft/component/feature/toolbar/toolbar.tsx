import React, { FunctionComponent, useMemo, useRef, useState } from 'react'
import { EditorState, RichUtils } from 'draft-js'
import classNames from 'classnames'
import style from './toolbar.module.scss'

import { ReactComponent as AlignCenter } from '../../../../../assets/icons/align_center.svg'
import { ReactComponent as AlignLeft } from '../../../../../assets/icons/align_left.svg'
import { ReactComponent as AlignRight } from '../../../../../assets/icons/align_right.svg'
import { ReactComponent as CaretDown } from '../../../../../assets/icons/caret_down.svg'
import { ReactComponent as Link } from '../../../../../assets/icons/link.svg'
import { ReactComponent as TextBold } from '../../../../../assets/icons/text_bold.svg'
import { ReactComponent as TextColor } from '../../../../../assets/icons/text_color.svg'
import { ReactComponent as TextItalic } from '../../../../../assets/icons/text_italic.svg'
import { ReactComponent as TextUnderline } from '../../../../../assets/icons/text_underline.svg'
import { ReactComponent as UnOrderList } from '../../../../../assets/icons/un_order_list.svg'
import { ReactComponent as OrderList } from '../../../../../assets/icons/order_list.svg'
import useAsyncPrompt from '../../../../../hooks/useAsyncPrompt/useAsyncPrompt'
import useInteractiveOutsideTargetHandler from '../../../../../hooks/useInteractiveOutsideTargetHandler'
import { colorMap } from '../../../inlineStyle/inlineStyle'
import {
  createLinkEntity,
  getEntitiesFromSelection,
  getSelectionStateByRange,
  getURLFromLinkEntity,
  isFalse,
  isNotSet,
  isSelectionInRange
} from '../../../../../utils'
import { editLinkEntity } from '../../../../../utils/utils'
import { EditorDefaultStyleType } from '../cEditor'
import DraftLinkPrompt from '../draftLinkPrompt'
import Flexbox from '../../../../../components/common/flexbox'

interface Props {
  readOnly?: boolean
  setEditorState?: (editorState: EditorState) => void
  editorState: EditorState
  containerEl: HTMLDivElement | null
  promptRef: JSX.IntrinsicElements['div']['ref']
  styleType: EditorDefaultStyleType
  focusing: boolean
  fixed?: boolean
}
// const toolbar: React.FC<ReadOnlyToolBarProps | ToolBarProps> = ({ editorState, setEditorState, containerEl, styleType, readOnly }) => {
const Toolbar: React.FC<Props> = ({
  editorState,
  setEditorState,
  containerEl,
  styleType,
  readOnly,
  focusing,
  promptRef,
  fixed
}) => {
  const toolbarRef = useRef<HTMLDivElement>(null)
  const axisCache = useRef<{ x: number; y: number } | null>(null)

  // toolbar Position
  const axis = useMemo(() => {
    if (isNotSet(containerEl)) return null
    if (isNotSet(toolbarRef.current)) return null
    if (readOnly) return null
    if (fixed) return null

    const currentSelection = document.getSelection()
    const currentSelectionRangeCount = currentSelection?.rangeCount
    const currentSelectedDOM =
      currentSelectionRangeCount && currentSelectionRangeCount > 0
        ? currentSelection?.getRangeAt(0)
        : null
    const currentSelectedDOMBoundingRect = currentSelectedDOM?.getBoundingClientRect()
    const containerBoundingRect = containerEl.getBoundingClientRect()

    if (isNotSet(currentSelectedDOMBoundingRect)) return null

    // const containerTop = containerBoundingRect.top
    const containerLeft = containerBoundingRect.left
    const selectionTop = currentSelectedDOMBoundingRect.top
    const selectionLeft = currentSelectedDOMBoundingRect.left

    if (selectionLeft === 0 && selectionTop === 0) return axisCache.current

    const selectionHeight = currentSelectedDOMBoundingRect.height + 8 // 8 is offset;
    const containerWidth = containerEl.clientWidth
    const toolbarWidth = toolbarRef.current.scrollWidth
    const toolbarHeight = toolbarRef.current.scrollHeight + 8 // 8 is offset;
    // keep toolbar stay in editor
    const x =
      selectionLeft + toolbarWidth < containerLeft + containerWidth
        ? selectionLeft
        : containerLeft + containerWidth - toolbarWidth
    const y =
      selectionTop - toolbarHeight > 0
        ? selectionTop - toolbarHeight
        : selectionTop + selectionHeight + toolbarHeight

    axisCache.current = { x, y }
    return { x, y }
    // eslint-disable-next-line
  }, [
    // eslint-disable-next-line react-hooks/exhaustive-deps
    editorState.getSelection().getAnchorOffset(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    editorState.getSelection().getAnchorKey(),
    readOnly
  ])

  // URL Prompt
  const { isAsyncPromptOpen, prompt, handleClose, handleConfirm } = useAsyncPrompt<string | false>()

  const isSelectionInLink = useMemo(() => {
    const selection = editorState.getSelection()

    const entities = getEntitiesFromSelection(editorState, 'LINK')
    const entity = entities.find(({ start, end, blockKey }) => {
      return isSelectionInRange(selection, { start, end, blockKey })
    })

    return {
      entity,
      inLink: !!entity
    }
  }, [editorState])

  if (readOnly || (!focusing && !fixed)) return null

  // Style Handler
  const italicStyleHandler = () => {
    setEditorState?.(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
  }

  const boldStyleHandler = () => {
    setEditorState?.(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
  }

  const underlineStyleHandler = () => {
    setEditorState?.(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
  }

  const unOrderListHandler = () => {
    setEditorState?.(RichUtils.toggleBlockType(editorState, 'unordered-list-item'))
  }

  const orderListHandler = () => {
    setEditorState?.(RichUtils.toggleBlockType(editorState, 'ordered-list-item'))
  }

  const linkAttributeHandler = async () => {
    const url = await prompt()
    if (url === false) return

    if (isSelectionInLink.inLink) {
      const entity = isSelectionInLink.entity
      if (!entity) return
      const entitySelection = getSelectionStateByRange(editorState, entity)
      if (url.length === 0) {
        setEditorState?.(RichUtils.toggleLink(editorState, entitySelection, null))
      } else {
        editLinkEntity(editorState, {
          entityKey: entity.entityKey,
          url,
          selectionState: entitySelection
        })
      }
    } else {
      if (url.length === 0) {
        return
      } else {
        setEditorState?.(createLinkEntity(editorState, url))
      }
    }
  }

  const selection = editorState.getSelection()
  const currentBlock = editorState.getCurrentContent().getBlockForKey(selection.getStartKey())
  const blockType = currentBlock.getType()
  // const currentInlineStyle = currentBlock.getInlineStyleAt(selection.getAnchorOffset())
  // console.log(currentInlineStyle.map(style => console.log(style)))

  return (
    <React.Fragment>
      <DraftLinkPrompt
        customRef={promptRef}
        open={isAsyncPromptOpen}
        confirmHandler={handleConfirm}
        cancelHandler={() => handleClose(false)}
        currentSelectionURL={getURLFromLinkEntity(isSelectionInLink.entity)}
      />
      <Flexbox
        customRef={toolbarRef}
        style={{
          top: axis?.y,
          left: axis?.x,
          display: isFalse(fixed) && isNotSet(axis) ? 'none' : undefined
        }}
        className={classNames(
          style['toolbar'],
          fixed ? style['toolbar__fixed'] : style['toolbar__float'],
          isNotSet(axis) && !fixed && style['toolbar__hidden']
        )}
      >
        <button type={'button'} onClick={italicStyleHandler}>
          <TextItalic className={classNames(style['toolbar__iconBtn'])} />
        </button>
        <button type={'button'} onClick={boldStyleHandler}>
          <TextBold className={classNames(style['toolbar__iconBtn'])} />
        </button>
        <button type={'button'} onClick={underlineStyleHandler}>
          <TextUnderline className={classNames(style['toolbar__iconBtn'])} />
        </button>
        <div className={classNames(style['toolbar__divider'])} />
        <ColorPicker
          colorHandler={(color: string) =>
            setEditorState?.(RichUtils.toggleInlineStyle(editorState, color))
          }
        />
        <div className={classNames(style['toolbar__divider'])} />
        <button
          type={'button'}
          className={classNames(
            style['toolbar__link'],
            isSelectionInLink.inLink && style['toolbar__link--active']
          )}
          onClick={linkAttributeHandler}
        >
          <Link className={classNames(style['toolbar__iconBtn'])} />
        </button>
        <div className={classNames(style['toolbar__divider'])} />
        <TextAlignmentPicker
          textAlignHandler={alignType =>
            setEditorState?.(RichUtils.toggleBlockType(editorState, `${styleType}-${alignType}`))
          }
        />
        <div className={classNames(style['toolbar__divider'])} />
        <button type={'button'} onClick={unOrderListHandler}>
          <UnOrderList
            className={classNames(
              style['toolbar__iconBtn'],
              blockType === 'unordered-list-item' && style['toolbar__iconBtn--active']
            )}
          />
        </button>
        <button type={'button'} onClick={orderListHandler}>
          <OrderList
            className={classNames(
              style['toolbar__iconBtn'],
              blockType === 'ordered-list-item' && style['toolbar__iconBtn--active']
            )}
          />
        </button>
      </Flexbox>
    </React.Fragment>
  )
}

export default Toolbar

const ColorPicker: React.FC<{ colorHandler: (color: string) => void }> = ({ colorHandler }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const ref = useRef<HTMLDivElement | null>(null)

  useInteractiveOutsideTargetHandler(ref.current, () => setIsOpen(false))

  return (
    <div ref={ref} className={classNames(style['colorPicker'])}>
      <button type={'button'} onClick={() => setIsOpen(prev => !prev)}>
        <TextColor className={classNames(style['toolbar__iconBtn'])} />
      </button>
      <div
        className={classNames(style['fadeInContainer'], isOpen && style['fadeInContainer__active'])}
      >
        <Flexbox
          wrap={'wrap'}
          justify={'start'}
          className={classNames(style['colorPicker__container'])}
        >
          {Object.keys(colorMap).map(color => (
            <button
              type={'button'}
              key={color}
              className={classNames(style['colorPicker__iconBtn'])}
              style={{ backgroundColor: colorMap[color].color }}
              onClick={() => {
                colorHandler(color)
                setIsOpen(false)
              }}
            />
          ))}
        </Flexbox>
      </div>
    </div>
  )
}

type TextAlignmentType = 'left' | 'center' | 'right'
const TEXT_ALIGNMENT_BUTTON: Array<{
  type: TextAlignmentType
  icon: FunctionComponent<React.SVGProps<SVGSVGElement>>
}> = [
  {
    type: 'left',
    icon: AlignLeft
  },
  {
    type: 'center',
    icon: AlignCenter
  },
  {
    type: 'right',
    icon: AlignRight
  }
]
const TextAlignmentPicker: React.FC<{
  textAlignHandler: (alignType: TextAlignmentType) => void
}> = ({ textAlignHandler }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement | null>(null)

  useInteractiveOutsideTargetHandler(ref.current, () => setIsOpen(false))

  return (
    <div ref={ref}>
      <button
        type={'button'}
        onClick={() => setIsOpen(prev => !prev)}
        className={classNames(style['textAlignmentPicker__toggleBtn'])}
      >
        <AlignLeft className={classNames(style['toolbar__iconBtn'])} />
        <CaretDown />
      </button>
      <div
        className={classNames(style['fadeInContainer'], isOpen && style['fadeInContainer__active'])}
      >
        <Flexbox direction={'col'} className={classNames(style['textAlignmentPicker__container'])}>
          {TEXT_ALIGNMENT_BUTTON.map(align => (
            <button
              type={'button'}
              key={align.type}
              onClick={() => textAlignHandler(align.type)}
              className={classNames(style['textAlignmentPicker__targetBtn'])}
            >
              <align.icon />
            </button>
          ))}
        </Flexbox>
      </div>
    </div>
  )
}
