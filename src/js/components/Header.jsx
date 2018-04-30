import { h } from "hyperapp";

export default ({ state, changeCss, previewStyles }) => (
  <header id="header">
    <h1>Hyperapp Markdown Editor!!!</h1>
    <select onchange={e => changeCss(e.target.value)}>
      {previewStyles.map(previewStyle => {
        return <option value={previewStyle}>{previewStyle}</option>;
      })}
    </select>
  </header>
);
