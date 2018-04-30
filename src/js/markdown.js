import { h, app } from "hyperapp";
import mdTrans from "./libs/mdTrans";

import Header from "./components/Header";
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
    setInput: input => state => ({ preview: mdTrans(input) }),
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
    },
    downloadFile: trigger => state => {
        const inputText = document.querySelector("#editor").value;
        const file = new Blob([inputText], { type: "text/markdown" });
        const fileURL = URL.createObjectURL(file);
        trigger.href = fileURL;
    }
};

const view = (state, actions) => (
    <div className="">
        <Header
            state={state}
            changeCss={actions.changeCss}
            previewStyles={previewStyles}
        />
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
                    <a
                        className="editorButtons--download"
                        download="inputMarkdown.md"
                        onclick={e => {
                            actions.downloadFile(e.target);
                        }}
                    >
                        download
                    </a>
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
