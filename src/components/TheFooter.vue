<template>
  <div flex="~ justify-center gap-8" mt-8>
    <button icon-btn @click="toggleDark()">
      <div i-carbon-sun dark:i-carbon-moon />
    </button>
    <a
      icon-btn i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/gui117/starter-vue"
      target="_blank"
      title="GitHub"
    />
  </div>
</template>
