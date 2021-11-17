import React from "react";
import { CompositeDecorator, ContentState, DraftDecorator } from "draft-js";
import styles from "./index.module.scss";

const findLinkEntities: DraftDecorator["strategy"] = (
  contentBlock,
  callback,
  contentState
) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
};

const DraftLink: React.FC<{
  contentState: ContentState;
  entityKey: string;
  blockKey: string;
  decoratedText: string;
  start: number;
  end: number;
}> = ({ contentState, entityKey, children, blockKey }) => {
  const { url } = contentState.getEntity(entityKey).getData();
  // console.log(contentState.getBlockForKey(blockKey).getInlineStyleAt());

  return (
    <a
      href={url}
      className={styles["draft-link"]}
      title={url}
      rel={"noreferrer noopener"}
      target={"_blank"}
    >
      {children}
    </a>
  );
};

export const decorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: DraftLink,
  },
]);
