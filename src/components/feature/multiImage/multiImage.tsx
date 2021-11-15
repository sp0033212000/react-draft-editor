import React, { useCallback } from "react";
import classNames from "classnames";
import Textarea from "react-textarea-autosize";
import style from "./multiImage.module.scss";

import { deepClone, isNotEmptyString, isNotSet, isSet } from "../../../utils";

import Flexbox from "../../common/flexbox";
import Image from "../../feature/image";
import {
  EditorImageContentData,
  FileUploader,
  UseUploadFiles,
} from "../../../";
import Fragment from "../../common/fragment";

interface Data {
  image: EditorImageContentData;
  title: string;
  body: string;
}

interface Props {
  data: Array<Data>;
  onChange: (data: Array<Data>) => void;
  readOnly?: boolean;
  contentType: "twins" | "triplet";
  fileUploader: FileUploader | undefined;
  useUploadFiles: UseUploadFiles | undefined;
  uploadFilesErrorFeedback:
    | undefined
    | ((error: { title: string; content: string }) => void);
}

const MultiImage: React.FC<Props> = ({
  data,
  contentType,
  onChange,
  readOnly,
  fileUploader,
  useUploadFiles,
  uploadFilesErrorFeedback,
}) => {
  const changeHandler = useCallback(
    (index: number, newData: Partial<Data>) => {
      const target = data?.[index] || { image: null, title: "", body: "" };
      let result = deepClone(data || []);
      result[index] = { ...target, ...newData };
      onChange(result);
    },
    [data]
  );

  return (
    <Flexbox className={classNames(style["multiImage"])} align={"start"}>
      {[
        ...new Array(
          contentType === "twins" ? 2 : contentType === "triplet" ? 3 : 0
        ),
      ].map((_, index) => {
        const recommendSize = contentType === "twins" ? 540 : 360;
        const itemData = data?.[index];

        return (
          <Flexbox
            className={classNames(style["multiImage__contentBox"])}
            key={index}
            // style={{
            //   width: `${100 / ary.length}%`,
            // }}
            direction={"col"}
          >
            <Image
              width={"100%"}
              recommendWidth={recommendSize}
              recommendHeight={recommendSize * (2 / 3)}
              data={itemData?.image}
              onChange={(image) => changeHandler(index, { image })}
              readOnly={readOnly}
              className={classNames(style["multiImage__image"])}
              fileUploader={fileUploader}
              useUploadFiles={useUploadFiles}
              keepAspectRatio
              uploadFilesErrorFeedback={uploadFilesErrorFeedback}
            />
            <Fragment
              condition={
                !readOnly ||
                (isSet(itemData?.title) && isNotEmptyString(itemData?.title))
              }
            >
              <Textarea
                className={classNames(
                  style["multiImage__textarea"],
                  style["multiImage__textarea--title"]
                )}
                readOnly={readOnly}
                placeholder={"請輸入標題"}
                value={itemData?.title}
                onChange={(event) =>
                  changeHandler(index, { title: event.target.value })
                }
              />
            </Fragment>
            <Fragment
              condition={
                !readOnly ||
                (isSet(itemData?.title) && isNotEmptyString(itemData?.title))
              }
            >
              <Textarea
                className={classNames(
                  style["multiImage__textarea"],
                  style["multiImage__textarea--body"]
                )}
                readOnly={readOnly}
                placeholder={"請輸入內容文字"}
                value={itemData?.body}
                onChange={(event) =>
                  changeHandler(index, { body: event.target.value })
                }
              />
            </Fragment>
          </Flexbox>
        );
      })}
    </Flexbox>
  );
};

export default MultiImage;
