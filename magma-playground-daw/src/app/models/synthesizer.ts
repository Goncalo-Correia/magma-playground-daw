import { SynthesizerType } from "./synthesizerType";

export class Synthesizer {
    private id: number;
    public name: string;
    public synthesizerType: SynthesizerType;

    getId() {
        return this.id;
    }
}