import { TrackTypeEnum } from "./enums/trackTypeEnum";

export class TrackType {
    private id: number;
    private label: string;
    private description: string;
    public trackTypeEnum: TrackTypeEnum;

    get() {
        return this;
    }
}