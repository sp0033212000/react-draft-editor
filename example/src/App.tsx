import React, { useState } from "react";
import AnnouncementEditor, {
  AnnouncementEditorContent,
  AttachmentContentData,
} from "../../src";

// style
import "./style.scss";

const App = () => {
  const [content, setContent] = useState<AnnouncementEditorContent>([
    {
      type: "multi-image",
      contentType: "triplet-thin",
      id: "123",
      content: [
        {
          body: "",
          image: { url: "", name: "" },
          title: "",
        },
        {
          body: "",
          image: { url: "", name: "" },
          title: "",
        },
      ],
    },
    {
      type: "multi-image",
      contentType: "twins-thin",
      id: "123",
      content: [
        {
          body: "",
          image: { url: "", name: "" },
          title: "",
        },
        {
          body: "",
          image: { url: "", name: "" },
          title: "",
        },
      ],
    },
  ]);
  const [attachments, setAttachments] = useState<Array<AttachmentContentData>>(
    []
  );

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
  );
};

export default App;

// import React, { useState } from "react";
// import { CEditor } from "../../src";
// import {
//   convertFromRaw,
//   convertToRaw,
//   EditorState,
//   RawDraftContentState,
// } from "draft-js";
// import { decorator } from "../../src/lib/draft/decorator";
//
// const MOCK_DATA: RawDraftContentState = {
//   blocks: [
//     {
//       key: "8oqag",
//       text: "123123123123123",
//       type: "primary-body",
//       depth: 0,
//       inlineStyleRanges: [],
//       entityRanges: [
//         {
//           offset: 0,
//           length: 15,
//           key: 0,
//         },
//       ],
//       data: {},
//     },
//     {
//       key: "e1u7d",
//       text: "",
//       type: "primary-body",
//       depth: 0,
//       inlineStyleRanges: [],
//       entityRanges: [],
//       data: {},
//     },
//     {
//       key: "6kl96",
//       text: "qweqweqweqweqw",
//       type: "primary-body",
//       depth: 0,
//       inlineStyleRanges: [
//         {
//           offset: 0,
//           length: 14,
//           style: "PRIMARY_RED_1",
//         },
//       ],
//       entityRanges: [
//         {
//           offset: 0,
//           length: 14,
//           key: 1,
//         },
//       ],
//       data: {},
//     },
//     {
//       key: "8c320",
//       text: "",
//       type: "primary-body",
//       depth: 0,
//       inlineStyleRanges: [],
//       entityRanges: [],
//       data: {},
//     },
//     {
//       key: "hpk6",
//       text: "13123123123123123",
//       type: "primary-body",
//       depth: 0,
//       inlineStyleRanges: [
//         {
//           offset: 6,
//           length: 7,
//           style: "PRIMARY_RED_1",
//         },
//       ],
//       entityRanges: [
//         {
//           offset: 0,
//           length: 17,
//           key: 2,
//         },
//       ],
//       data: {},
//     },
//   ],
//   entityMap: {
//     "0": {
//       type: "LINK",
//       mutability: "MUTABLE",
//       data: {
//         url: "http://google.com",
//       },
//     },
//     "1": {
//       type: "LINK",
//       mutability: "MUTABLE",
//       data: {
//         url: "http://google.com",
//       },
//     },
//     "2": {
//       type: "LINK",
//       mutability: "MUTABLE",
//       data: {
//         url: "http://google.com",
//       },
//     },
//   },
// };
//
// const App = () => {
//   const [editorState, setEditorState] = useState<EditorState | null>(
//     EditorState.createWithContent(convertFromRaw(MOCK_DATA), decorator)
//   );
//
//   console.log(editorState && convertToRaw(editorState.getCurrentContent()));
//
//   return (
//     <CEditor
//       fixedToolbar
//       styleType={"primary-body"}
//       editorState={editorState}
//       setEditorState={setEditorState}
//       readOnly
//     />
//   );
// };
//
// export default App;
