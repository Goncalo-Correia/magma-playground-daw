import { Rack } from "../api/models/rack.model";
import { AudioEffect } from "./audioEffect";
import { PluginType } from "./pluginType";
import { Sampler } from "./sampler";
import { Synthesizer } from "./synthesizer";

export class Plugin {
    private id: number;
    public name: string;
    public order: number;
    public pluginType: PluginType;
    public audioEffects: AudioEffect[];
    public sampler: Sampler;
    public synthesizer: Synthesizer;

    getId() {
        return this.id;
    }
}