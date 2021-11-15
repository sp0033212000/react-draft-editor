// import React, { useEffect, useState } from 'react'
// import AnnouncementEditor, {
//   AnnouncementEditorContent,
//   AttachmentContentData,
//   convertFromServerData,
// } from '../../src'
//
// // style
// import './style.scss'
//
// const App = () => {
//   const [content, setContent] = useState<AnnouncementEditorContent>([])
//   const [attachments, setAttachments] = useState<Array<AttachmentContentData>>(
//     []
//   )
//
//   // 沒有用到multiple-image的正常，可以試試下面的文章ID換122
//   useEffect(() => {
//     fetch(
//       'http://tsmc-ewc-web-dev.cloud-interactive.com/tsmcWelfare/api/announcement/121'
//     )
//       .then((data) => data.json())
//       .then((response) => {
//         console.log(response.result.data.content)
//
//         setContent(
//           convertFromServerData(JSON.parse(response.result.data.content))
//         )
//         setAttachments(response.result.data.attachLists)
//       })
//   }, [])
//
//   return (
//     <div className="main-theme-padding">
//       <AnnouncementEditor content={content} attachment={attachments} readOnly />
//     </div>
//   )
// }
//
// export default App

import React, { useState } from "react";
import AnnouncementEditor, {
  AnnouncementEditorContent,
  convertFromServerData,
} from "../../src";

const App = () => {
  const [content] = useState<AnnouncementEditorContent>(
    convertFromServerData([
      {
        id: "5ec7af25-70ca-48fe-a3d4-fe96de77101d",
        content: {
          blocks: [
            {
              key: "br1n",
              text: "tttest",
              type: "primary-heading",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
        contentType: "primary-heading",
        type: "editor",
      },
      {
        id: "0bda646a-4f27-4943-aa93-5985d5163619",
        content: {
          blocks: [
            {
              key: "2m3vr",
              text: "sssssssss",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "blfd7",
              text: "ddddd",
              type: "ordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "8c446",
              text: "ffffffeee",
              type: "ordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "fpunf",
              text: "ssssssss",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "d3n46",
              text: "ddddd",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
        contentType: "primary-body",
        type: "editor",
      },
      {
        id: "afb82240-fce1-4293-abbc-3131610a3be8",
        content: {
          blocks: [
            {
              key: "37sti",
              text: "eeeeee",
              type: "unstyled",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "7o10o",
              text: "eeeeeeee",
              type: "unordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
            {
              key: "2jpj8",
              text: "ssssss",
              type: "ordered-list-item",
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [],
              data: {},
            },
          ],
          entityMap: {},
        },
        contentType: "secondary-body",
        type: "editor",
      },
      {
        id: "5ba71704-003e-4000-ab2e-f571f68e596c",
        content: [],
        contentType: "twins",
        type: "multi-image",
      },
    ])
  );

  return <AnnouncementEditor readOnly content={content} attachment={[]} />;
};

export default App;
