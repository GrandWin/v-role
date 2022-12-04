# Navigation Guards

If you are using [vue-router](https://router.vuejs.org/) you can configure route validation with meta fields.

## Typescript

For the first [declare meta fields](https://router.vuejs.org/guide/advanced/meta.html#typescript):

```ts
declare module "vue-router" {
  interface RouteMeta {
    roles?: string[];
  }
}
```

## Navigation guard

Write your own navigation guard:

```ts
function validateRole(to, from, next) {
  if (to.meta.roles) {
    const { hasAnyRole } = useRole();
    hasAnyRole(to.meta.roles) ? next() : next(from);
  } else {
    next();
  }
}
```

Put it in the router:

```ts
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(validateRole);
```

Now you can specify which roles can enter the route and which can't:

```ts
const routes = [
  {
    path: "/",
    component: IndexPage,
    meta: {
      roles: ["admin", "moderator"],
    },
  },
];
```

Also you can write navigation guards for permissions.
