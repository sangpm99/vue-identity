<template>
  <div class="h-100 d-flex align-center justify-space-between text-medium-emphasis">
    <!-- 👉 Footer: left content -->
    <div class="d-flex align-center text-base">
      &copy;
      {{ new Date().getFullYear() }},
      Made With
      <VIcon
        icon="ri-heart-fill"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      By 2H Solutions Global Team
    </div>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
      <a
        href="#"
      >License</a>
      <a
        href="#"
      >More Themes</a>
      <a
        href="#"
      >Documentation</a>
      <a
        href="#"
      >Support</a>
    </span>
  </div>
</template>
