# VRole component

The VRole component is designed when directives fail. For example, when we need to check several elements at once or component has multi-root.

## Register component

You can import VRole from package or <a href="/introduction/getting-started.html#add-plugin">register it globally</a>.

```vue
<template>
  <VRole role="admin">
    <div>Some content</div>
    <div>One more content</div>
  </VRole>
</template>

<script>
import VRole from "v-role";
</script>
```

## How to use

You can pass roles and permissions in the same way as in the directives. The component has the same behavior as the directives.

```vue
<template>
  <VRole role="admin" permission="can-edit">
    <div>You are admin!</div>
    <div>You can edit!</div>
  </VRole>
</template>
```

## Arguments

To pass arguments you need to use `roleArg` or `permissionArg`.

```vue
<template>
  <VRole
    :role="['admin', 'moderator']"
    role-arg="any"
    permission="can-edit"
    permission-arg="unless"
  >
    <div>You are admin or moderator!</div>
    <div>You can't edit!</div>
  </VRole>
</template>
```

Also you can use `arg` for the general argument of roles and permissions

```vue
<template>
  <VRole :role="['admin', 'moderator']" permission="can-edit" arg="unless">
    <div>You aren't admin or moderator</div>
    <div>You can edit!</div>
  </VRole>
</template>
```

## Typescript

```ts
type Args = "" | "any" | "all" | "unless";

defineProps<{
  role?: string | string[];
  roleArg?: Args;
  permission?: string | string[];
  permissionArg?: Args;
  arg?: Args;
}>();
```
