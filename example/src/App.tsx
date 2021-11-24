import React, { useState } from 'react'
import AnnouncementEditor, {
  AnnouncementEditorContent,
  AttachmentContentData,
  convertFromServerData,
} from '../../src'

// style
import './style.scss'

const App = () => {
  const [content, setContent] = useState<AnnouncementEditorContent>(
    convertFromServerData(
      JSON.parse(
        '[{"id":"f1d00378-e6fc-450d-a01a-26fd3e87641a","content":{"blocks":[{"key":"2mgp0","text":"","type":"primary-heading","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}},"contentType":"primary-heading","type":"editor"},{"id":"a4cf1f5a-366c-49aa-8331-87a4779f3783","content":[{"image":{"url":"http://tsmc-ewc-admin-sit.cloud-interactive.com/file/attachments/狗_1637142333085.jpg","name":"狗.jpg"},"title":"標題\\n第二行","body":"標題\\n第二行"},{"image":{"url":"http://tsmc-ewc-admin-sit.cloud-interactive.com/file/attachments/老鼠_1637142337744.jfif","name":"老鼠.jfif"},"title":"標題","body":"標題"}],"contentType":"twins","type":"multi-image"},{"id":"76bb51ff-fa69-41d2-882d-002a40624c7d","content":[{"image":null,"title":"標題","body":"標題"},{"image":null,"title":"標題","body":"標題"},{"image":null,"title":"標題","body":"標題"}],"contentType":"triplet","type":"multi-image"}]'
      )
    )
  )
  const [attachments, setAttachments] = useState<Array<AttachmentContentData>>(
    []
  )

  // 沒有用到multiple-image的正常，可以試試下面的文章ID換122
  // useEffect(() => {
  //   fetch(
  //     "http://tsmc-ewc-web-dev.cloud-interactive.com/tsmcWelfare/api/announcement/121"
  //   )
  //     .then((data) => data.json())
  //     .then((response) => {
  //       console.log(response.result.data.content);
  //
  //       setContent(
  //         convertFromServerData(JSON.parse(response.result.data.content))
  //       );
  //       setAttachments(response.result.data.attachLists);
  //     });
  // }, []);

  return (
    <div className="main-theme-padding">
      <AnnouncementEditor content={content} attachment={attachments} readOnly />
    </div>
  )
}

export default App
//
// import React, { useState } from "react";
// import { CEditor } from "../../src";
// import { EditorState } from "draft-js";
//
// const App = () => {
//   const [editorState, setEditorState] = useState<EditorState | null>(null);
//
//   return (
//     <CEditor
//       fixedToolbar
//       styleType={"primary-body"}
//       editorState={editorState}
//       setEditorState={setEditorState}
//     />
//   );
// };
//
// export default App;
