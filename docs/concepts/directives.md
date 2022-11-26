# Directives

The directive will validate the roles and permissions. It will create or destroy the component or DOM element whether or not it meets the condition.

## Roles

Check for a specific role:

```html
<div v-role="'writer'">Some content</div>
```

Check for any role in a list:

```html
<div v-role:any="['admin', 'moderator']">Some content</div>
```

Check for all roles:

```html
<div v-role:all="['admin', 'moderator']">Some content</div>
```

Check for unless role:

```html
<div v-role:unless="'admin'">You aren't an admin!</div>

<div v-role:unless="['admin', 'moderator']">
  You aren't admin and moderator!
</div>
```

## Permissions

Check for a specific permission:

```html
<div v-permission="'can-write'">You can write!</div>
```

Check for any permission in a list:

```html
<div v-permission:any="['can-write', 'can-read']">You can write or read!</div>
```

Check for all permissions:

```html
<div v-permission:all="['can-write', 'can-read']">You can write and read!</div>
```

Check for unless permission:

```html
<div v-permission:unless="'can-write'">You can't write!</div>

<div v-permission:unless="['can-write', 'can-read']">
  You can't write and read!
</div>
```

## Roles & Permissions

Check for role and permission:

```html
<div v-role="'admin'" v-permission:unless="'can-write'">
  You are admin and you can't write!
</div>

<!-- You can use any combination of directives -->
```

## Type validations

Without arguments

```ts
type empty = string | (() => string);
```

With any or all argument

```ts
type anyOrAll = string[] | (() => string[]);
```

With unless argument

```ts
type unless = string | string[] | (() => string | string[]);
```

## Note

- Super role avoids all checks
- You can dynamically change the current roles and permissions, also you can pass ref or computed property in directives. DOM will be automatically change
- If you passed the wrong type to the directive, then an error will be thrown
- Directives can't be used on template tag and multi-root elements due limitations of Vue.

## Beware! These cases will be fail

Template tag:

```html
<template v-role="'admin'">
  <div>Some content</div>
  <div>One more content</div>
</template>
```

Multi-root component:

```vue
<template>
  <AppHeader v-role="'admin'"></AppHeader>
</template>

<script>
app.component("AppHeader", {
  template: `
    <div>Some Content</div>
    <div>One more content</div>
  `,
});
</script>
```
