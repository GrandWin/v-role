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

type Args = "" | "any" | "all" | "unless";
const props = withDefaults(
  defineProps<{
    role?: string | string[];
    roleArg?: Args;
    permission?: string | string[];
    permissionArg?: Args;
    arg?: Args;
  }>(),
  {
    role: "",
    roleArg: "",
    permission: "",
    permissionArg: "",
    arg: "",
  }
);

const rolesState = computed(() => {
  const arg = props.roleArg || props.arg;
  validateRoles(props.role, arg);

  return getRolesState(props.role, arg);
});

const permissionsState = computed(() => {
  const arg = props.permissionArg || props.arg;
  validatePermissions(props.permission, arg);

  return getPermissionsState(props.permission, arg);
});

const isVisible = computed(() => {
  return rolesState.value && permissionsState.value;
});
</script>
