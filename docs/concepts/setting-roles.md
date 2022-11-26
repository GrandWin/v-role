# Setting Roles

This should be the first step. When you log in or start the application, you must set the roles and permissions.

## Composable

You can import `useRole` composable and setting roles and permissions by methods:

```ts
import { useRole } from "v-role";

const { setRoles, setPermissions } = useRole();
setRoles(["admin", "moderator"]);
setPermissions(["can-write", "can-edit"]);
```

With composable you can do it in components, pinia / vuex stores and navigation guards.

## Global Property

You can access to global property with `$role` in the component instance.

```ts
import { defineComponent } from "vue";

export default defineComponent({
  created() {
    this.$role.setRoles(["admin", "moderator"]);
    this.$role.setPermissions(["can-write", "can-edit"]);
  },
});
```

## Type validations

Type parameters of `setRoles` and `setPermissions`:

```ts
type setRoles = (roles: string[]) => void;
type setPermissions = (permissions: string[]) => void;
```
