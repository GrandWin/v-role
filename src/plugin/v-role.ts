import { type Plugin, type VNode } from "vue";
import { useRole } from "./../composable/useRole";
import { VRoleDirective } from "./../directives/v-role";
import { VPermissionDirective } from "./../directives/v-permission";
import VRole from "./../components/VRole.vue";

export type Binding = string | string[] | (() => string | string[]);

export interface VRoleData {
  parentElement: HTMLElement;
  vIfElement: Comment;
  roleState?: boolean;
  permissionState?: boolean;
}

export type RoleNode = VNode<
  unknown,
  HTMLElement,
  {
    __vroleData?: VRoleData;
  }
>;

interface VRoleOptions {
  superRole?: string;
  globalComponent?: boolean;
}

const VRolePlugin: Plugin = {
  install(app, options?: VRoleOptions) {
    const { setSuperRole } = useRole();

    app.directive("role", VRoleDirective);
    app.directive("permission", VPermissionDirective);

    if (!options) {
      return;
    }

    const { superRole, globalComponent } = options;

    if (superRole) {
      setSuperRole(superRole);
    }

    if (globalComponent) {
      app.component("VRole", VRole);
    }
  },
};

export { VRolePlugin };
