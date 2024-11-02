export declare class FeatureFlagService {
    private featureFlags;
    setFeatureFlag(sellerId: string, feature: string, enabled: boolean): void;
    isFeatureEnabled(sellerId: string, feature: string): boolean;
}
