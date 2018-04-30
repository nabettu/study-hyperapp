import { h } from "hyperapp";

export default ({ state, actions }) => (
  <ul className="colorNumbers">
    <li>
      <label>Red:</label>
      <input
        type="number"
        value={state.red}
        onchange={e => actions.setRed(e.target.value)}
      />
    </li>
    <li>
      <label>Green:</label>
      <input
        type="number"
        value={state.green}
        onchange={e => actions.setGreen(e.target.value)}
      />
    </li>
    <li>
      <label>Blue:</label>
      <input
        type="number"
        value={state.blue}
        onchange={e => actions.setBlue(e.target.value)}
      />
    </li>
    <li>
      <label>LaterBlue:</label>
      <input
        type="number"
        value={state.blue}
        onchange={e => actions.setLaterBlue(e.target.value)}
      />
    </li>
  </ul>
);
