# v-role - vue role manager

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![License][license-src]][license-href]

v-role makes it easy to manage roles and permissions.

## ⚙️ Features

- Use via directives or component
- Handle routes access
- Support Composition API and Options API
- First class Typescript support

[📖 Read more](https://grandwin.github.io/v-role/)

## ✨ Quick setup

1. Install `v-role` dependency to your project

```sh
pnpm install v-role # or npm install v-role
```

2. Import plugin and pass it to the app:

```ts
import { createApp } from "vue";
import { VRolePlugin } from "v-role";
import App from "./App.vue";

const app = createApp(App);
app.use(VRolePlugin);

app.mount("#app");
```

3. Set up roles and permissions

```ts
import { useRole } from "v-role";

const { setRoles, setPermissions } = useRole();
setRoles(["admin", "moderator"]);
setPermissions(["can-write", "can-edit"]);
```

4. Use v-role or v-permission directives

```html
<div v-role="'admin'" v-permission:any="['can-write', 'can-read']">
  You can write or read!
</div>
```

## 🔒 License

[MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/v-role/latest.svg
[npm-version-href]: https://npmjs.com/package/v-role
[npm-downloads-src]: https://img.shields.io/npm/dm/v-role
[npm-downloads-href]: https://npmjs.com/package/v-role
[github-actions-ci-src]: https://github.com/grandwin/v-role/workflows/Deploy/badge.svg
[github-actions-ci-href]: https://github.com/grandwin/v-role/actions?query=workflow%3ADeploy
[license-src]: https://img.shields.io/npm/l/v-role
[license-href]: https://npmjs.com/package/v-role
