import { PluginTypeEnum } from "./enums/pluginTypeEnum";

export class PluginType {
    private id: number;
    private label: string;
    private description: string;
    public pluginTypeEnum: PluginTypeEnum;

    get() {
        return this;
    }
}