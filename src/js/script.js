import colorPalette from "./colorPalette";
import markdown from "./markdown";
if (location.hash != "#markdown") {
    colorPalette();
} else {
    markdown();
}
