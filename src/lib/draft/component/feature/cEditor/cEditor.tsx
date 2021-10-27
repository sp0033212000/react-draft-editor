import React, { useCallback, useEffect, useRef, useState } from 'react'
import style from './cEditor.module.scss'

import classNames from 'classnames'
import {
  convertFromRaw,
  DraftBlockType,
  DraftEditorCommand,
  Editor,
  EditorState,
  genKey,
  getDefaultKeyBinding,
  RichUtils
} from 'draft-js'

import { decorator } from '../../../decorator'
import useInteractiveOutsideTargetHandler from '../../../../../hooks/useInteractiveOutsideTargetHandler'
import { customStyleMap, getBlockStyle } from '../../../inlineStyle/inlineStyle'
import { convertEditorStateToServerData, isNotSet } from '../../../../../utils'
import Toolbar from '../toolbar'
import blockRenderMap from '../../../blockRenderMap'

const DEFAULT_PRIMARY_HEADING_CONTENT = convertFromRaw({
  blocks: [
    {
      key: genKey(),
      type: 'primary-heading',
      depth: 0,
      text: '',
      inlineStyleRanges: [],
      entityRanges: []
    }
  ],
  entityMap: {}
})

const DEFAULT_SECONDARY_HEADING_CONTENT = convertFromRaw({
  blocks: [
    {
      key: genKey(),
      type: 'secondary-heading',
      depth: 0,
      text: '',
      inlineStyleRanges: [],
      entityRanges: []
    }
  ],
  entityMap: {}
})

const DEFAULT_PRIMARY_BODY_CONTENT = convertFromRaw({
  blocks: [
    {
      key: genKey(),
      type: 'primary-body',
      depth: 0,
      text: '',
      inlineStyleRanges: [],
      entityRanges: []
    }
  ],
  entityMap: {}
})

const DEFAULT_SECONDARY_BODY_CONTENT = convertFromRaw({
  blocks: [
    {
      key: genKey(),
      type: 'secondary-body',
      depth: 0,
      text: '',
      inlineStyleRanges: [],
      entityRanges: []
    }
  ],
  entityMap: {}
})

export type EditorDefaultStyleType =
  | 'primary-heading'
  | 'secondary-heading'
  | 'primary-body'
  | 'secondary-body'
export type EditorBlockType = DraftBlockType | EditorDefaultStyleType
const STYLE_EDITOR_STATE: Record<EditorDefaultStyleType, EditorState> = {
  'primary-heading': EditorState.createWithContent(DEFAULT_PRIMARY_HEADING_CONTENT, decorator),
  'secondary-heading': EditorState.createWithContent(DEFAULT_SECONDARY_HEADING_CONTENT, decorator),
  'primary-body': EditorState.createWithContent(DEFAULT_PRIMARY_BODY_CONTENT, decorator),
  'secondary-body': EditorState.createWithContent(DEFAULT_SECONDARY_BODY_CONTENT, decorator)
}
interface Props {
  styleType: EditorDefaultStyleType
  editorState: EditorState | null
  setEditorState: (editorState: EditorState) => void
  readOnly?: boolean
  fixedToolbar?: boolean
  containerClassName?: string
  editorClassName?: string
}
const CEditor: React.FC<Props> = ({
  styleType,
  editorState,
  setEditorState,
  readOnly,
  fixedToolbar,
  containerClassName,
  editorClassName
}) => {
  const [focusing, setFocusing] = useState<boolean>(false)
  const [promptRef, setPromptRef] = useState<HTMLDivElement | null>(null)
  const draftRef = useRef<Editor>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const rawEditorDataString = editorState
    ? JSON.stringify(convertEditorStateToServerData(editorState))
    : null

  useInteractiveOutsideTargetHandler(containerRef.current, () => setFocusing(false), [promptRef])

  useEffect(() => {
    if (isNotSet(editorState)) {
      setEditorState(STYLE_EDITOR_STATE[styleType])
    }
  }, [editorState])

  useEffect(() => {
    focusElement()
  }, [rawEditorDataString])

  const focusElement = useCallback(() => {
    const parentElement = window.getSelection()?.focusNode?.parentElement
    if (isNotSet(parentElement)) return
    parentElement.focus()
  }, [])

  const focusEventHandler = () => {
    if (isNotSet(draftRef.current)) return
    draftRef.current.focus()
    setFocusing(true)
  }

  if (isNotSet(editorState)) return null

  const keyBindingFn = (e: React.KeyboardEvent<{}>): DraftEditorCommand | null => {
    //prevent cursor from selecting the next interactive element
    if (e.key === 'Tab') {
      e.preventDefault()
      // assign a constant for the new editorState
      const newState = RichUtils.onTab(e, editorState, 1)
      // if a new editor state exists, set editor state to new state
      // and return 'handled', otherwise return 'not-handled
      setEditorState(newState)
      return null
    }

    return getDefaultKeyBinding(e)
  }

  // const handlePastedText: ComponentProps<typeof Editor>['handlePastedText'] = (
  //   _,
  //   html,
  //   editorState
  // ) => {
  //   if (isNotSet(html)) return 'not-handled'
  //   const dataFromHTML = convertFromHTML(html)
  //   dataFromHTML.contentBlocks = dataFromHTML.contentBlocks.map(block => {
  //     let handledBlock = block
  //
  //     if (block.getType() === 'unstyled' && isSet(styleType)) {
  //       handledBlock = block.set('type', styleType) as ContentBlock
  //     }
  //     return handledBlock
  //   })
  //   const contentState = ContentState.createFromBlockArray(
  //     dataFromHTML.contentBlocks,
  //     dataFromHTML.entityMap
  //   )
  //   const newEditorState = EditorState.createWithContent(contentState, decorator)
  //   setEditorState(newEditorState)
  //   return 'handled'
  // }

  return (
    <div ref={containerRef} className={classNames(style['cEditor'], containerClassName)}>
      <div
        tabIndex={2}
        onFocus={focusEventHandler}
        className={classNames(style['cEditor__container'], editorClassName)}
      >
        <Toolbar
          fixed={fixedToolbar}
          readOnly={readOnly}
          styleType={styleType}
          editorState={editorState}
          setEditorState={setEditorState}
          containerEl={containerRef.current}
          focusing={focusing}
          promptRef={setPromptRef}
        />
        <div
          className={classNames(
            fixedToolbar && style['cEditor__fixed'],
            style[`cEditor__${styleType}`]
          )}
        >
          <Editor
            readOnly={readOnly}
            ref={draftRef}
            editorState={editorState}
            onChange={setEditorState}
            tabIndex={2}
            blockStyleFn={getBlockStyle(styleType)}
            customStyleMap={customStyleMap}
            blockRenderMap={blockRenderMap}
            keyBindingFn={keyBindingFn}
            // handlePastedText={handlePastedText}
            placeholder={'請輸入內文'}
          />
        </div>
      </div>
    </div>
  )
}

export default CEditor
// export default React.memo(CEditor, (prev, next) => {
//   const prevEditorState = prev.editorState
//   const prevRawDataString = prevEditorState ? convertEditorStateToServerData(prevEditorState) : null
//   const nextEditorState = next.editorState
//   const nextRawDataString = nextEditorState ? convertEditorStateToServerData(nextEditorState) : null
//   if (prevRawDataString !== nextRawDataString) return false
//   if (prev.styleType !== next.styleType) return false
//   if (prev.readOnly !== next.readOnly) return false
//   if (prev.fixedToolbar !== next.fixedToolbar) return false
//   if (prev.containerClassName !== next.containerClassName) return false
//   if (prev.editorClassName !== next.editorClassName) return false
//
//   return true
// })
