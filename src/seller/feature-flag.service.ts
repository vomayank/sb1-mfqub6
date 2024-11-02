import { Injectable } from '@nestjs/common';

@Injectable()
export class FeatureFlagService {
  private featureFlags: Map<string, Map<string, boolean>> = new Map();

  setFeatureFlag(sellerId: string, feature: string, enabled: boolean) {
    if (!this.featureFlags.has(sellerId)) {
      this.featureFlags.set(sellerId, new Map());
    }
    this.featureFlags.get(sellerId).set(feature, enabled);
  }

  isFeatureEnabled(sellerId: string, feature: string): boolean {
    return this.featureFlags.get(sellerId)?.get(feature) || false;
  }
}