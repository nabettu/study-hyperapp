import { h, app } from "hyperapp";
import markdown from "./libs/markdown";
//@jsx h

const previewStyles = ["original", "github", "air"];
const editorItems = [
    {
        name: "strong",
        before: "**",
        after: "**"
    },
    {
        name: "italic",
        before: "*",
        after: "*"
    },
    {
        name: "strikethrough",
        before: "~~",
        after: "~~"
    },
    {
        name: "link",
        before: "[",
        after: "]()"
    }
];

const state = {
    preview: "",
    previewStyle: previewStyles[0]
};

const actions = {
    setInput: input => state => ({ preview: markdown(input) }),
    changeCss: input => state => ({ previewStyle: input }),
    addEditorItem: itemType => (state, actions) => {
        const editor = document.querySelector("#editor");
        const oldInput = editor.value;
        const posStart = editor.selectionStart;
        const posEnd = editor.selectionEnd;

        editor.value =
            oldInput.substring(0, posStart) +
            itemType.before +
            oldInput.substring(posStart, posEnd) +
            itemType.after +
            oldInput.substring(posEnd, oldInput.length);
        editor.focus();
        editor.selectionStart = posStart + itemType.before.length;
        editor.selectionEnd =
            posStart +
            itemType.before.length +
            oldInput.substring(posStart, posEnd).length;
        actions.setInput(editor.value);
    }
};

const view = (state, actions) => (
    <div className="">
        <header id="header">
            <h1>Hyperapp Markdown Editor!!!</h1>
            <select onchange={e => actions.changeCss(e.target.value)}>
                {previewStyles.map(previewStyle => {
                    return <option value={previewStyle}>{previewStyle}</option>;
                })}
            </select>
        </header>
        <article id="main">
            <section id="inputMarkdown">
                <div id="editorButtons">
                    {editorItems.map(editorItem => {
                        return (
                            <button
                                className={"editorButtons--" + editorItem.name}
                                value={editorItem.name}
                                onclick={e => {
                                    actions.addEditorItem(editorItem);
                                }}
                            >
                                {editorItem.name}
                            </button>
                        );
                    })}
                </div>
                <textarea
                    id="editor"
                    placeholder="# input markdown"
                    oninput={e => actions.setInput(e.target.value)}
                />
            </section>
            <section id="previewHtml">
                <div
                    id="preview"
                    data-css={state.previewStyle}
                    innerHTML={state.preview}
                />
            </section>
        </article>
    </div>
);

export default () => {
    app(state, actions, view, document.querySelector(".wrapper"));
};
