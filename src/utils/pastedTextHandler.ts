import { EditorState, Modifier } from "draft-js";

class PastedTextHandler {
  constructor(
    private readonly text: string,
    // @ts-ignore
    private readonly html: string | undefined,
    private readonly editorState: EditorState
  ) {}

  get selection() {
    return this.editorState.getSelection();
  }

  get contentState() {
    return this.editorState.getCurrentContent();
  }

  public getNewContent() {
    if (this.isSelectionInRange())
      return Modifier.replaceText(this.contentState, this.selection, this.text);
    else
      return Modifier.insertText(this.contentState, this.selection, this.text);
  }

  public getNewState() {
    return EditorState.push(
      this.editorState,
      this.getNewContent(),
      "insert-characters"
    );
  }

  private isSelectionInRange() {
    const selection = this.editorState.getSelection();
    const start = selection.getStartOffset();
    const end = selection.getEndOffset();

    const startKey = selection.getStartKey();
    const endKey = selection.getEndKey();

    if (startKey === endKey) return start !== end;

    return true;
  }
}

export default PastedTextHandler;
