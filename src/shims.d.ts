import type {
  GlobalComponents,
  ComponentCustomProperties,
} from "@vue/runtime-core";
import { useRole } from "./composable/useRole";
import VRole from "./components/VRole.vue";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $role: ReturnType<typeof useRole>;
  }
  export interface GlobalComponents {
    VRole: typeof VRole;
  }
}

export {};
