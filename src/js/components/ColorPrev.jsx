import { h } from "hyperapp";

export default ({ state }) => (
  <div
    className="colorPrev"
    style={{
      backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
    }}
  />
);
