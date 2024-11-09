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

export function weightedRandom<T extends object>(weights: { [K in keyof T]: number }): keyof T {
    const vals = Object.values(weights) as number[];
    const totalWeight = vals.reduce((sum, weight) => sum + weight, 0);
    const random = Math.random() * totalWeight;
    let cumulativeWeight = 0;
    for (const [key, weight] of Object.entries(weights)) {
        cumulativeWeight += weight as number;
        if (random <= cumulativeWeight) {
            return key as keyof T;
        }
    }
    throw new Error("Should never reach here if weights are properly defined");
}