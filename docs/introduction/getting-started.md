# Getting started

Install v-role with your favorite package manager:

```sh
pnpm add v-role
# or with yarn
yarn add v-role
# or with npm
npm install v-role
```

:::tip
If your app is using Vue <2.7, you also need to install the composition api: `@vue/composition-api`
:::

## Add plugin

Import plugin and pass it to the app:

```ts
import { createApp } from "vue";
import { VRolePlugin } from "v-role";
import App from "./App.vue";

const app = createApp(App);
app.use(VRolePlugin);

app.mount("#app");
```

The plugin has several useful options:

```ts
interface VRoleOptions {
  superRole?: string; // Role that avoids all role and permission validations
  globalComponent?: boolean; // Register VRole as global component
}
```

## Additionally

The plugin exports the directives and the component, so you can register them by yourself:

```ts
import { VRoleDirective, VPermissionDirective, VRole } from "v-role";

app.directive("role", VRoleDirective);
app.directive("permission", VPermissionDirective);

app.component("VRole", VRole);
```
