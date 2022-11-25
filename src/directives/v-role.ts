import { type Directive, type DirectiveBinding, watch } from "vue";
import type { Binding, RoleNode, VRoleData } from "./../plugin/v-role";
import { useRole } from "./../composable/useRole";

const { roles, validateRoles, getRolesState } = useRole();

function initVRole(el: HTMLElement, vnode: RoleNode) {
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

function handleRolesDOM(
  el: HTMLElement,
  vnode: RoleNode,
  isRolesValid: boolean
) {
  let isPermissionsValid = true;

  if (vnode.props?.__vroleData) {
    isPermissionsValid = vnode.props.__vroleData.permissionState ?? true;
    vnode.props.__vroleData.roleState = isRolesValid;
  } else {
    return;
  }

  const vroleData = vnode.props.__vroleData;

  if (!isPermissionsValid) {
    return;
  }

  handleHTMLElementDOM(el, vroleData, isRolesValid);
}

function handleRoles(
  el: HTMLElement,
  binding: DirectiveBinding<Binding>,
  vnode: RoleNode
) {
  const bindingValue =
    typeof binding.value === "function" ? binding.value() : binding.value;

  validateRoles(bindingValue, binding.arg);
  const isRolesValid = getRolesState(bindingValue, binding.arg);

  handleRolesDOM(el, vnode, isRolesValid);
}

const VRoleDirective: Directive<HTMLElement, Binding> = {
  mounted(el, binding, vnode: RoleNode) {
    initVRole(el, vnode);
    handleRoles(el, binding, vnode);

    watch(roles, () => {
      handleRoles(el, binding, vnode);
    });
  },
  updated(el, binding, vnode: RoleNode) {
    handleRoles(el, binding, vnode);
  },
};

export { VRoleDirective };
