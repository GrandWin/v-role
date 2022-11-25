<template>
  <slot v-if="isVisible" />
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRole } from "./../composable/useRole";

const {
  getRolesState,
  getPermissionsState,
  validateRoles,
  validatePermissions,
} = useRole();

type Roles = "" | "any" | "all" | "unless";
const props = withDefaults(
  defineProps<{
    roles?: string | string[];
    permissions?: string | string[];
    type?: Roles;
    typeRoles?: Roles;
    typePermissions?: Roles;
  }>(),
  {
    roles: "",
    permissions: "",
    type: "",
    typeRoles: "",
    typePermissions: "",
  }
);

const rolesState = computed(() => {
  const type = props.typeRoles || props.type;
  validateRoles(props.roles, type);

  return getRolesState(props.roles, type);
});

const permissionsState = computed(() => {
  const type = props.typePermissions || props.type;
  validatePermissions(props.permissions, type);

  return getPermissionsState(props.permissions, type);
});

const isVisible = computed(() => {
  return rolesState.value && permissionsState.value;
});
</script>
