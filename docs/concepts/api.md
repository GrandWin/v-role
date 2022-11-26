# API

All API of v-role

## Get ref of roles:

```ts
const { roles } = useRole();
this.$role.roles;

type roles = Ref<string[]>;
```

## Get ref of permissions:

```ts
const { permissions } = useRole();
this.$role.permissions;

type permissions = Ref<string[]>;
```

## Is super user:

```ts
const { isSuperUser } = useRole();
this.$role.isSuperUser;

type isSuperUser = ComputedRef<boolean>;
```

## Set roles:

```ts
const { setRoles } = useRole();
setRoles(["admin"]);
this.$role.setRoles(["admin"]);

type setRoles = (roles: string[]) => void;
```

## Set permissions:

```ts
const { setPermissions } = useRole();
setPermissions(["can-edit"]);
this.$role.setPermissions(["can-edit"]);

type setPermissions = (permissions: string[]) => void;
```

## Check has role:

```ts
const { hasRole } = useRole();
hasRole("admin");
this.$role.hasRole("admin");

type hasRole = (role: string) => boolean;
```

## Check has any role:

```ts
const { hasAnyRole } = useRole();
hasAnyRole(["admin", "moderator"]);
this.$role.hasAnyRole(["admin", "moderator"]);

type hasAnyRole = (roles: string[]) => boolean;
```

## Check has all roles:

```ts
const { hasAllRoles } = useRole();
hasAllRoles(["admin", "moderator"]);
this.$role.hasAllRoles(["admin", "moderator"]);

type hasAllRoles = (roles: string[]) => boolean;
```

## Check has permission:

```ts
const { hasPermission } = useRole();
hasPermission("admin");
this.$role.hasPermission("admin");

type hasPermission = (permission: string) => boolean;
```

## Check has any permission:

```ts
const { hasAnyPermission } = useRole();
hasAnyPermission(["admin", "moderator"]);
this.$role.hasAnyPermission(["admin", "moderator"]);

type hasAnyPermission = (permissions: string[]) => boolean;
```

## Check has all permissions:

```ts
const { hasAllPermissions } = useRole();
hasAllPermissions(["admin", "moderator"]);
this.$role.hasAllPermissions(["admin", "moderator"]);

type hasAllPermissions = (permissions: string[]) => boolean;
```

## Check unless role:

```ts
const { unlessRole } = useRole();
unlessRole("admin");
this.$role.unlessRole("admin");

type unlessRole = (roles: string | string[]) => boolean;
```

## Check unless permission:

```ts
const { unlessPermission } = useRole();
unlessPermission("can-edit");
this.$role.unlessPermission("can-edit");

type unlessPermission = (permissions: string | string[]) => boolean;
```

## Get roles state:

```ts
const { getRolesState } = useRole();
getRolesState("admin", "unless");
this.$role.getRolesState("admin", "unless");

type getRolesState = (value: string | string[], arg?: string) => boolean;
```

## Get permissions state:

```ts
const { getPermissionsState } = useRole();
getPermissionsState("can-edit", "unless");
this.$role.getPermissionsState("can-edit", "unless");

type getPermissionsState = (value: string | string[], arg?: string) => boolean;
```

## Validate roles:

```ts
const { validateRoles } = useRole();
validateRoles("admin", "unless");
this.$role.validateRoles("admin", "unless");

type validateRoles = (value: unknown, arg?: string) => void;
```

## Validate permissions:

```ts
const { validatePermissions } = useRole();
validatePermissions("can-edit", "unless");
this.$role.validatePermissions("can-edit", "unless");

type validatePermissions = (value: unknown, arg?: string) => void;
```

## Arguments

```ts
const { args } = useRole();
this.$role.args;

interface args {
  string: string[];
  array: string[];
  readonly all: string[];
}
```
