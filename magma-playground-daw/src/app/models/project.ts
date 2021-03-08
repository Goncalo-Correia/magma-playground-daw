import { Track } from "../api/models/track.model";

export class Project {
    private id: number;
    public name: string;
    public createdOn: Date;
    public updatedOn: Date;
    public isTemplate: boolean;
    public isDefault: boolean;
    public tracks: Track[];

    getId() {
        return this.id;
    }
}