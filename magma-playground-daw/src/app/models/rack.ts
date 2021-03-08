import { Plugin } from "../api/models/plugin.model";

export class Rack {
    private id: number;
    public plugins: Plugin[];

    getId() {
        return this.id;
    }
}