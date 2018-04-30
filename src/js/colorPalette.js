import { h, app } from "hyperapp";
import ColorNumbers from "./components/ColorNumbers";
import ColorPrev from "./components/ColorPrev";
//@jsx h

const state = {
    red: Math.ceil(Math.random() * 255),
    green: Math.ceil(Math.random() * 255),
    blue: Math.ceil(Math.random() * 255)
};

const actions = {
    setRed: value => state => ({ red: value }),
    setGreen: value => state => ({ green: value }),
    setBlue: value => state => ({ blue: value }),
    setLaterBlue: value => async (state, actions) => {
        await new Promise(done => setTimeout(done, 1000));
        actions.setBlue(value);
    }
};

const view = (state, actions) => (
    <div className="colorPalette">
        <ColorPrev state={state} />
        <ColorNumbers state={state} actions={actions} />
    </div>
);

export default () => {
    app(state, actions, view, document.querySelector(".wrapper"));
};
