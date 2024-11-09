import Color from "color";

export function randomColor(soft: boolean = true): Color {
    if (soft) {
        return Color.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255).lighten(0.5);
    }
    return Color.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255);
}
