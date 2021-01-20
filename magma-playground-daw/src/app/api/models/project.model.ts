import { Track } from "./track.model";

export class Project {
    id: number;
    name: string;
    description: string;
    createdOn: Date;
    updatedOn: Date;
    tracks: Track[];
}