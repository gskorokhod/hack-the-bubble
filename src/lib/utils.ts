import Color from "color";

export function randomColor(soft: boolean = true): Color {
    if (soft) {
        return Color.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255).lighten(0.5);
    }
    return Color.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255);
}

export function randomEnum<T extends object>(anEnum: T): T[keyof T] {
    const enumValues = Object.keys(anEnum)
      .map(n => Number.parseInt(n))
      .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][]
    const randomIndex = Math.floor(Math.random() * enumValues.length)
    const randomEnumValue = enumValues[randomIndex]
    return randomEnumValue;
  }