import { SynthesizerTypeEnum } from "./enums/synthesizerTypeEnum";

export class SynthesizerType {
    private id: number;
    private label: string;
    private description: string;
    public SynthesizerTypeEnum: SynthesizerTypeEnum;

    get() {
        return this;
    }
}