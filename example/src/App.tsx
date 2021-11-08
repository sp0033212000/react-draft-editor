import React from "react";
import AnnouncementEditor, {
  AnnouncementEditorRawDataUnity,
  convertFromServerData,
} from "../../src";

const App = () => {
  return (
    <div>
      <AnnouncementEditor
        content={convertFromServerData(MOCK_DATA)}
        attachment={[]}
        readOnly
      />
    </div>
  );
};

export default App;

const MOCK_DATA: AnnouncementEditorRawDataUnity[] = [
  {
    id: "e869f3a7-7b7c-4c8f-9899-ef4c3aeafed3",
    content: {
      blocks: [
        {
          key: "ddq2j",
          text: "奇哥商品提貨券為前一代好禮品揹巾之接續贈品",
          type: "primary-heading-center",
          depth: 0,
          inlineStyleRanges: [{ offset: 0, length: 21, style: "BOLD" }],
          entityRanges: [],
          data: {},
        },
        {
          key: "1njjf",
          text: "每一胎限領一次，已領過揹巾無法再重覆申請",
          type: "primary-heading-center",
          depth: 0,
          inlineStyleRanges: [{ offset: 0, length: 20, style: "BOLD" }],
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
    id: "2904f8b7-61b4-43a1-a25b-eca3364b0a19",
    content: {
      url: "http://tsmc-ewc-admin-sit.cloud-interactive.com/file/attachments/新手爸媽福利包-封面圖_1635929912590jpg",
      name: "新手爸媽福利包-封面圖.jpg",
    },
    contentType: "image",
    type: "image",
  },
  {
    id: "1ee28c51-3aec-4f8b-9aaf-27b5bd631a27",
    content: {
      blocks: [
        {
          key: "1maer",
          text: "好禮項目",
          type: "secondary-heading",
          depth: 0,
          inlineStyleRanges: [{ offset: 0, length: 4, style: "BOLD" }],
          entityRanges: [],
          data: {},
        },
      ],
      entityMap: {},
    },
    contentType: "secondary-heading",
    type: "editor",
  },
  {
    id: "fa2cfa5a-0023-4c33-88f0-2a742c4da511",
    content: {
      blocks: [
        {
          key: "fms8m",
          text: "奇哥仟元提貨券乙份",
          type: "primary-body",
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
    id: "648c38ee-61bc-4fa8-abe3-43dc07c46522",
    content: {
      url: "http://tsmc-ewc-admin-sit.cloud-interactive.com/file/attachments/圖片 1_1635929662336png",
      name: "圖片 1.png",
    },
    contentType: "image",
    type: "image",
  },
  {
    id: "e785a70f-0791-4f52-a3bf-ba85a4d4dacc",
    content: {
      blocks: [
        {
          key: "fms8m",
          text: "適用對象：台積在職員工(含留停)之新生兒(一等親)，每胎乙份。",
          type: "primary-body",
          depth: 0,
          inlineStyleRanges: [{ offset: 0, length: 4, style: "BOLD" }],
          entityRanges: [],
          data: {},
        },
        {
          key: "2njq2",
          text: "受理期間：新生兒出生日起算180個日曆天內需至TRV完成寄件資料登錄。",
          type: "primary-body",
          depth: 0,
          inlineStyleRanges: [{ offset: 0, length: 4, style: "BOLD" }],
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
    id: "d1452cdc-5123-4c6a-ad0d-cc305a534b50",
    content: {
      blocks: [
        {
          key: "1maer",
          text: "作業流程",
          type: "secondary-heading",
          depth: 0,
          inlineStyleRanges: [{ offset: 0, length: 4, style: "BOLD" }],
          entityRanges: [],
          data: {},
        },
      ],
      entityMap: {},
    },
    contentType: "secondary-heading",
    type: "editor",
  },
  {
    id: "fabb6dad-55bc-497a-b7cb-97c9c083f043",
    content: {
      url: "http://tsmc-ewc-admin-sit.cloud-interactive.com/file/attachments/流程 1_1635929708011png",
      name: "流程 1.png",
    },
    contentType: "image",
    type: "image",
  },
  {
    id: "ed9e5910-fdb7-433d-ad05-4c5e4132e4c5",
    content: {
      blocks: [
        {
          key: "fms8m",
          text: "夫妻皆為台積員工由其中一方代表申請即可 ，重複申請視為自費購買並將自薪資扣款。 ",
          type: "ordered-list-item",
          depth: 0,
          inlineStyleRanges: [
            { offset: 0, length: 40, style: "PRIMARY_RED_1" },
            {
              offset: 0,
              length: 40,
              style: "BLACK_2",
            },
            { offset: 0, length: 40, style: "BLACK_1" },
          ],
          entityRanges: [],
          data: {},
        },
        {
          key: "3ikud",
          text: "資格查核以同仁產假/陪產假生效名單為主，同仁無需再提供其它文件；但若您未有相關假勤記錄，需提供出生證明以利核准。",
          type: "ordered-list-item",
          depth: 0,
          inlineStyleRanges: [
            { offset: 0, length: 56, style: "PRIMARY_RED_1" },
            {
              offset: 0,
              length: 56,
              style: "BLACK_2",
            },
            { offset: 0, length: 56, style: "BLACK_1" },
          ],
          entityRanges: [],
          data: {},
        },
        {
          key: "1c4cl",
          text: "寄件頻率每二周一次；若遇特殊狀況，出貨時間將另行通知。",
          type: "ordered-list-item",
          depth: 0,
          inlineStyleRanges: [
            { offset: 0, length: 27, style: "BLACK_2" },
            {
              offset: 0,
              length: 27,
              style: "BLACK_1",
            },
            { offset: 0, length: 27, style: "PRIMARY_RED_1" },
          ],
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
    id: "0d6e8c0e-2878-406e-80be-c59b80f09d51",
    content: {
      blocks: [
        {
          key: "1maer",
          text: "提貨券使用說明",
          type: "secondary-heading",
          depth: 0,
          inlineStyleRanges: [{ offset: 0, length: 7, style: "BOLD" }],
          entityRanges: [],
          data: {},
        },
      ],
      entityMap: {},
    },
    contentType: "secondary-heading",
    type: "editor",
  },
  {
    id: "b5430e96-b4cc-43a7-ab25-643189b6c775",
    content: {
      blocks: [
        {
          key: "fms8m",
          text: "https://sites.google.com/view/chickabiddy/%E9%A6%96%E9%A0%81",
          type: "primary-body",
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [{ offset: 0, length: 60, key: 0 }],
          data: {},
        },
      ],
      entityMap: {
        "0": {
          type: "LINK",
          mutability: "MUTABLE",
          data: {
            url: "https://sites.google.com/view/chickabiddy/%E9%A6%96%E9%A0%81",
          },
        },
      },
    },
    contentType: "primary-body",
    type: "editor",
  },
  {
    id: "4df49793-ffaf-439e-8f80-56ec61529961",
    content: {
      blocks: [
        {
          key: "1maer",
          text: "溫馨提醒",
          type: "secondary-heading",
          depth: 0,
          inlineStyleRanges: [{ offset: 0, length: 4, style: "BOLD" }],
          entityRanges: [],
          data: {},
        },
      ],
      entityMap: {},
    },
    contentType: "secondary-heading",
    type: "editor",
  },
  {
    id: "fd86ebe9-d7a9-4fca-a567-d28004e269f7",
    content: {
      blocks: [
        {
          key: "fms8m",
          text: "請確認所有必填欄位 (有打「*」號者) 皆有填寫，否則寄件資料無法送出。",
          type: "ordered-list-item",
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
        {
          key: "1md9q",
          text: "若無法成功送出，請改用Google Chrome瀏覽器開啟訂購頁面。",
          type: "ordered-list-item",
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        },
        {
          key: "7d2bt",
          text: "如需修改宅配資料，請於訂單填寫完成的下一個星期一前，至「個人專區」修正 (https://trv/MyTRV)，逾期將以最初提供的寄件資料為主。",
          type: "ordered-list-item",
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [{ offset: 37, length: 17, key: 0 }],
          data: {},
        },
      ],
      entityMap: {
        "0": {
          type: "LINK",
          mutability: "MUTABLE",
          data: { url: "https://trv/MyTRV" },
        },
      },
    },
    contentType: "primary-body",
    type: "editor",
  },
];
