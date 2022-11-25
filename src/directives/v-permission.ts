import { type Directive, type DirectiveBinding, watch } from "vue";
import type { Binding, RoleNode, VRoleData } from "./../plugin/v-role";
import { useRole } from "./../composable/useRole";

const { permissions, getPermissionsState, validatePermissions } = useRole();

function initVPermission(el: HTMLElement, vnode: RoleNode) {
  const vroleData = vnode.props?.__vroleData || {
    parentElement: el.parentElement as HTMLElement,
    vIfElement: document.createComment("v-if"),
    roleState: vnode.props?.__vroleData?.roleState,
    permissionState: vnode.props?.__vroleData?.permissionState,
  };

  if (!vnode.props) {
    vnode.props = {
      __vroleData: vroleData,
    };
  } else if (!vnode.props.__vroleData) {
    vnode.props.__vroleData = vroleData;
  }
}

function handleHTMLElementDOM(
  el: HTMLElement,
  vroleData: VRoleData,
  state: boolean
) {
  if (state && !el.parentElement) {
    vroleData.parentElement.replaceChild(el, vroleData.vIfElement);
  } else if (!state && el.parentElement) {
    vroleData.parentElement.replaceChild(vroleData.vIfElement, el);
  }
}

function handlePermissionsDOM(
  el: HTMLElement,
  vnode: RoleNode,
  isPermissionsValid: boolean
) {
  let isRolesValid = true;

  if (vnode.props?.__vroleData) {
    isRolesValid = vnode.props.__vroleData.roleState ?? true;
    vnode.props.__vroleData.permissionState = isPermissionsValid;
  } else {
    return;
  }

  const vroleData = vnode.props.__vroleData;

  if (!isRolesValid) {
    return;
  }

  handleHTMLElementDOM(el, vroleData, isPermissionsValid);
}

function handlePermissions(
  el: HTMLElement,
  binding: DirectiveBinding<Binding>,
  vnode: RoleNode
) {
  const bindingValue =
    typeof binding.value === "function" ? binding.value() : binding.value;

  validatePermissions(bindingValue, binding.arg);
  const isPermissionsValid = getPermissionsState(bindingValue, binding.arg);

  handlePermissionsDOM(el, vnode, isPermissionsValid);
}

const VPermissionDirective: Directive<HTMLElement, Binding> = {
  mounted(el, binding, vnode: RoleNode) {
    initVPermission(el, vnode);
    handlePermissions(el, binding, vnode);

    watch(permissions, () => {
      handlePermissions(el, binding, vnode);
    });
  },
  updated(el, binding, vnode) {
    handlePermissions(el, binding, vnode);
  },
};

export { VPermissionDirective };
