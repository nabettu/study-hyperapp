import { h, app } from "hyperapp";
//@jsx h

const state = {
    red: Math.ceil(Math.random() * 255),
    green: Math.ceil(Math.random() * 255),
    blue: Math.ceil(Math.random() * 255)
};

const actions = {
    setRed: value => state => ({ red: value }),
    setGreen: value => state => ({ green: value }),
    setBlue: value => state => ({ blue: value })
};

const view = (state, actions) => (
    <div className="colorPalette">
        <div
            className="colorPrev"
            style={{
                backgroundColor: `rgb(${state.red},${state.green},${
                    state.blue
                })`
            }}
        />
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
        </ul>
    </div>
);

app(state, actions, view, document.querySelector(".wrapper"));
