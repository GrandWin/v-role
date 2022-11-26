import { ref, computed } from "vue";
import { isString, isArray } from "./../utils/helpers";

const args = {
  string: ["unless"],
  array: ["any", "all", "unless"],
  get all() {
    return [...this.string, ...this.array];
  },
};

const superRole = ref<string | null>(null);
const _roles = ref<string[]>([]);
const _permissions = ref<string[]>([]);
export function useRole() {
  function setRoles(roles: string[]) {
    _roles.value = roles;
  }

  function setPermissions(permissions: string[]) {
    _permissions.value = permissions;
  }

  function setSuperRole(role: string) {
    superRole.value = role;
  }

  const isSuperUser = computed(() => {
    return !!superRole.value && _roles.value.includes(superRole.value);
  });

  function hasRole(role: string) {
    return isSuperUser.value || _roles.value.includes(role);
  }

  function hasAnyRole(roles: string[]) {
    return isSuperUser.value || roles.some((role) => hasRole(role));
  }

  function hasAllRoles(roles: string[]) {
    return isSuperUser.value || roles.every((role) => hasRole(role));
  }

  function hasPermission(permission: string) {
    return isSuperUser.value || _permissions.value.includes(permission);
  }

  function hasAnyPermission(permissions: string[]) {
    return isSuperUser.value || permissions.some((role) => hasPermission(role));
  }

  function hasAllPermissions(permissions: string[]) {
    return (
      isSuperUser.value || permissions.every((role) => hasPermission(role))
    );
  }

  function unlessRole(roles: string | string[]) {
    return isString(roles) ? !hasRole(roles) : !hasAnyRole(roles);
  }

  function unlessPermission(permissions: string | string[]) {
    return isString(permissions)
      ? !hasPermission(permissions)
      : hasAnyPermission(permissions);
  }

  function getRolesState(value: string | string[], arg?: string) {
    if (isString(value)) {
      if (arg === "unless") {
        return unlessRole(value);
      }

      if (!arg) {
        return hasRole(value);
      }
    }

    if (isArray(value)) {
      if (arg === "any") {
        return hasAnyRole(value);
      }
      if (arg === "all") {
        return hasAllRoles(value);
      }
      if (arg === "unless") {
        return unlessRole(value);
      }
    }

    return false;
  }

  function getPermissionsState(value: string | string[], arg?: string) {
    if (isString(value)) {
      if (arg === "unless") {
        return unlessPermission(value);
      }

      if (!arg) {
        return hasPermission(value);
      }
    }

    if (isArray(value)) {
      if (arg === "any") {
        return hasAnyPermission(value);
      }
      if (arg === "all") {
        return hasAllPermissions(value);
      }
      if (arg === "unless") {
        return unlessPermission(value);
      }
    }

    return false;
  }

  function validateRoles(value: unknown, arg?: string | undefined) {
    if (arg) {
      if (!args.all.includes(arg)) {
        throw new Error(`unexpected directive argument: ${arg}`);
      }

      if (
        args.array.includes(arg) &&
        !args.string.includes(arg) &&
        !isArray(value)
      ) {
        throw new Error("value must be an array");
      }

      if (args.array.includes(arg) && isArray(value)) {
        value.forEach((el) => {
          if (!isString(el)) {
            throw new Error("array values must be string");
          }
        });
      }

      if (
        args.string.includes(arg) &&
        !args.array.includes(arg) &&
        !isString(value)
      ) {
        throw new Error("value must be a string");
      }
    }

    if (!arg) {
      if (!isString(value)) {
        throw new Error("value must be a string");
      }
    }
  }

  function validatePermissions(value: unknown, arg?: string) {
    if (arg) {
      if (!args.all.includes(arg)) {
        throw new Error(`unexpected directive argument: ${arg}`);
      }

      if (
        args.array.includes(arg) &&
        !args.string.includes(arg) &&
        !isArray(value)
      ) {
        throw new Error("value must be an array");
      }

      if (args.array.includes(arg) && isArray(value)) {
        value.forEach((el) => {
          if (!isString(el)) {
            throw new Error("array values must be string");
          }
        });
      }

      if (
        args.string.includes(arg) &&
        !args.array.includes(arg) &&
        !isString(value)
      ) {
        throw new Error("value must be a string");
      }
    }

    if (!arg) {
      if (!isString(value)) {
        throw new Error("value must be a string");
      }
    }
  }

  return {
    roles: _roles,
    permissions: _permissions,
    isSuperUser,
    setRoles,
    setPermissions,
    setSuperRole,
    hasRole,
    hasAnyRole,
    hasAllRoles,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    unlessRole,
    unlessPermission,
    getRolesState,
    getPermissionsState,
    validateRoles,
    validatePermissions,
    args,
  };
}
