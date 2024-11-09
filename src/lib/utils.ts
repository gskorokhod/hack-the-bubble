import Color from "color";

export function randomColor(soft: boolean = true): Color {
    if (soft) {
        return Color.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255).lighten(0.5);
    }
    return Color.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255);
}

export function randomEnum<T extends object>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum) as unknown as (keyof T)[];
    const key = enumValues[Math.floor(Math.random() * enumValues.length)];
    return anEnum[key];
  }