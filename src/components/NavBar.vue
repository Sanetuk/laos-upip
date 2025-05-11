<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSelector from './LanguageSelector.vue'

const { t } = useI18n()
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="nav-logo">
        {{ t('app.title') }}
      </router-link>
      <div class="nav-links">
        <router-link to="/" class="nav-link">{{ t('nav.home') }}</router-link>
        <router-link to="/projects" class="nav-link">{{ t('nav.projects') }}</router-link>
        <a href="https://laoofficialgazette.gov.la/index.php?r=site/index" target="_blank" class="nav-link nav-link-external">
          {{ t('nav.legalDatabase') }}
          <span class="external-icon">↗</span>
        </a>
        <LanguageSelector />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #1e40af;
  color: white;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  max-width: 100%;
  margin: 0 auto;
}

.nav-logo {
  color: white;
  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-links {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 0.5rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  transition: background-color 0.2s;
}

.nav-link:hover, .router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-link-external {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.external-icon {
  font-size: 0.75rem;
  margin-top: -2px;
}

@media (min-width: 640px) {
  .navbar-container {
    padding: 0 2rem;
  }
}
</style>
