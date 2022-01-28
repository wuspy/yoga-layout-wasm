import { ExperimentalFeature } from "./enums";
export declare class Config {
    static create(): Config;
    static destroy(config: Config): any;
    free(): void;
    isExperimentalFeatureEnabled(feature: ExperimentalFeature): boolean;
    setExperimentalFeatureEnabled(feature: ExperimentalFeature, enabled: boolean): void;
    setPointScaleFactor(factor: number): void;
    setUseWebDefaults(useWebDefaults: boolean): void;
    getUseWebDefaults(): boolean;
}
