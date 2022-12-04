# API

All API of the plugin. All examples actual for options API.

## roles

Get reactive state of current roles:

- Type: `Ref<string[]>`
- Example:
  ```ts
  const { roles } = useRole();
  ```

## permissions

Get reactive state of current permissions:

- Type: `Ref<string[]>`
- Example
  ```ts
  const { permissions } = useRole();
  ```

## isSuperUser

Get the state of whether the current user is a super user:

- Type: `ComputedRef<boolean>`
- Example:
  ```ts
  const { isSuperUser } = useRole();
  ```

## addRoles()

- Type: `(roles: string | string[]) => void`
- Example:
  ```ts
  const { addRoles } = useRole();
  addRoles("admin");
  ```

## addPermissions()

- Type: `(permissions: string | string[]) => void`
- Example:
  ```ts
  const { addPermissions } = useRole();
  addPermissions("can-edit");
  ```

## removeRoles()

- Type: `(roles: string | string[]) => void`
- Example:
  ```ts
  const { removeRoles } = useRole();
  removeRoles("admin");
  ```

## removePermissions()

- Type: `(permissions: string | string[]) => void`
- Example:
  ```ts
  const { removePermissions } = useRole();
  removePermissions("can-edit");
  ```

## setRoles()

- Type: `(roles: string[]) => void`
- Example:
  ```ts
  const { setRoles } = useRole();
  setRoles(["admin"]);
  ```

## setPermissions()

- Type: `(permissions: string[]) => void`
- Example:
  ```ts
  const { setPermissions } = useRole();
  setPermissions(["can-edit"]);
  ```

## hasRole()

- Type: `(role: string) => boolean`
- Example:
  ```ts
  const { hasRole } = useRole();
  hasRole("admin");
  ```

## hasAnyRole()

- Type: `(roles: string[]) => boolean`
- Example:
  ```ts
  const { hasAnyRole } = useRole();
  hasAnyRole(["admin", "moderator"]);
  ```

## hasAllRoles()

- Type: `(roles: string[]) => boolean`
- Example:
  ```ts
  const { hasAllRoles } = useRole();
  hasAllRoles(["admin", "moderator"]);
  ```

## hasPermission()

- Type: `(permission: string) => boolean`
- Example:
  ```ts
  const { hasPermission } = useRole();
  hasPermission("admin");
  ```

## hasAnyPermission()

- Type: `(permissions: string[]) => boolean`
- Example:
  ```ts
  const { hasAnyPermission } = useRole();
  hasAnyPermission(["admin", "moderator"]);
  ```

## hasAllPermissions()

- Type: `(permissions: string[]) => boolean`
- Example:
  ```ts
  const { hasAllPermissions } = useRole();
  hasAllPermissions(["admin", "moderator"]);
  ```

## unlessRole()

- Type: `(roles: string | string[]) => boolean`
- Example:
  ```ts
  const { unlessRole } = useRole();
  unlessRole("admin");
  unlessRole(["admin", "moderator"]);
  ```

## unlessPermission()

- Type: `(permissions: string | string[]) => boolean`
- Example:
  ```ts
  const { unlessPermission } = useRole();
  unlessPermission("can-edit");
  ```

## getRolesState()

- Type: `(value: string | string[], arg?: string) => boolean`
- Example:
  ```ts
  const { getRolesState } = useRole();
  getRolesState("admin", "unless");
  ```

## getPermissionsState()

- Type: `(value: string | string[], arg?: string) => boolean`
- Example:
  ```ts
  const { getPermissionsState } = useRole();
  getPermissionsState("can-edit", "unless");
  ```

## validateRoles()

- Type: `(value: unknown, arg?: string) => void`
- Example:
  ```ts
  const { validateRoles } = useRole();
  validateRoles("admin", "unless");
  ```

## validatePermissions()

- Type: `(value: unknown, arg?: string) => void`
- Example:
  ```ts
  const { validatePermissions } = useRole();
  validatePermissions("can-edit", "unless");
  ```

## args

- Type:
  ```ts
  interface args {
    string: string[];
    array: string[];
    readonly all: string[];
  }
  ```
- Example:
  ```ts
  const { args } = useRole();
  ```
