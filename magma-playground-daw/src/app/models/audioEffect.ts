import { AudioEffectType } from "./audioEffectType";

export class AudioEffect {
    private id: number;
    public order: number;
    public name: string;
    public audioEffectType: AudioEffectType;

    getId() {
        return this.id;
    }
}