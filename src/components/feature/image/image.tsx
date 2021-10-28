import React, { useCallback } from "react";
import classNames from "classnames";
import style from "./image.module.scss";

import { isNotEmptyArray, isNotSet, isSet, isTrue } from "../../../utils";
import Flexbox from "../../common/flexbox";
import {
  EditorImageContentData,
  FileUploader,
  UseUploadFiles,
} from "../../../";
import Fragment from "../../common/fragment";
import fakeImage from "../../../assets/images/fake_img.jpg";

interface Props {
  width?: string;
  maxWidth?: string;
  height?: string;
  recommendWidth: number;
  recommendHeight: number;
  data: EditorImageContentData | null | undefined;
  onChange: (image: EditorImageContentData) => void;
  className?: string;
  readOnly?: boolean;
  fileUploader: FileUploader | undefined;
  useUploadFiles: UseUploadFiles | undefined;
  keepAspectRatio?: boolean;
  uploadFilesErrorFeedback:
    | undefined
    | ((error: { title: string; content: string }) => void);
}

const Image: React.FC<Props> = ({
  width,
  maxWidth,
  height,
  data,
  onChange,
  recommendWidth,
  recommendHeight,
  readOnly,
  className,
  fileUploader,
  useUploadFiles,
  keepAspectRatio = false,
  uploadFilesErrorFeedback,
}) => {
  const fileUploadHandler = useCallback(
    async (files: File[]) => {
      if (isNotSet(fileUploader) || isNotSet(plugin)) return;
      const result = await fileUploader(files);
      if (isSet(result) && isNotEmptyArray(result)) {
        const image = result[0];
        onChange({ url: image.filePath, name: image.fileName });
      }
    },
    [onChange]
  );

  const plugin = useUploadFiles?.({
    callback: fileUploadHandler,
    allowTypes: ["image/jpeg", "image/png"],
    isMultiple: false,
    isNeedValidate: true,
    errorFeedback: uploadFilesErrorFeedback,
    disableErrorToast: true,
  });

  return (
    <Flexbox
      style={{ width, height, maxWidth }}
      className={classNames(
        style["image"],
        isSet(data) && style["imageSettle"],
        className
      )}
    >
      <Flexbox
        condition={(isNotSet(data) && !readOnly) || keepAspectRatio}
        style={{ paddingTop: `${(recommendHeight / recommendWidth) * 100}%` }}
        className={classNames(
          style["image__placeholder"],
          isSet(data) && style["image__placeholder--hidden"]
        )}
      />
      <Fragment condition={isSet(data) || isTrue(readOnly)}>
        <img
          aria-readonly={readOnly}
          src={data?.url ? data.url : fakeImage}
          alt={data?.name}
          className={classNames(
            keepAspectRatio && style["image__preview--keepAspectRatio"],
            isSet(data) && style["image__preview--image"],
            isNotSet(data) && readOnly && style["image__preview--placeholder"]
          )}
        />
      </Fragment>
      <Flexbox
        direction={"col"}
        condition={!readOnly}
        className={classNames(
          style["image__functional"],
          isSet(data) && style["image__functional--hidden"],
          isSet(data) && "imageSettle__functional"
        )}
      >
        <button
          onClick={plugin?.createFileInput}
          className={classNames(style["image__functional--btn"])}
        >
          上傳圖片
        </button>
        <p className={classNames(style["image__functional-recommend"])}>
          建議圖片比例{recommendWidth}x{recommendHeight}
        </p>
      </Flexbox>
    </Flexbox>
  );
};

export default Image;
