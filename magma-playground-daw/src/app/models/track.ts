import { Rack } from "../api/models/rack.model";
import { TrackType } from "./trackType";

export class Track {
    private id: number;
    public order: number;
    public name: string;
    public volume: number;
    public pan: number;
    public trackType: TrackType;
    public rack: Rack;

    getId() {
        return this.id;
    }
}