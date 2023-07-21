import { LOCAL_STORAGE_LAST_DESIGN_KEY } from "@/shared/const/localstorage";
import { FeatureFlags } from "@/shared/types/featureFlags";

const defaultFeatures: FeatureFlags = {
  isAppRedesigned:
    localStorage.getItem(LOCAL_STORAGE_LAST_DESIGN_KEY) === "new",
};

// ! Фичи в ходе сессии не меняются
// ? Именно поэтому их не обязательно делать реaктивными

let featureFlags: FeatureFlags = {
  ...defaultFeatures,
};

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
