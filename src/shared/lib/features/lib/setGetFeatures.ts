import { FeatureFlags } from "@/shared/types/featureFlags";

// ! Фичи в ходе сессии не меняются
// ? Именно поэтому их не обязательно делать реaктивными

let featureFlags: FeatureFlags = {};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
  return featureFlags[flag];
}
export function getAllFeatureFlags() {
  return featureFlags;
}
