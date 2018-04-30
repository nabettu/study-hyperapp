import { h, app } from "hyperapp";
import markdown from "./libs/markdown";
//@jsx h

const previewStyles = ["original", "github", "air"];

const state = {
    preview: "",
    previewStyle: previewStyles[0]
};

const actions = {
    setInput: input => state => ({ preview: markdown(input) }),
    changeCss: input => state => ({ previewStyle: input })
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
