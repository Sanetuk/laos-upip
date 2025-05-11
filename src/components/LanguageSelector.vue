<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const selectedLanguage = ref(locale.value)

// Language options
const languages = [
  { code: 'en', name: 'English' },
  { code: 'ko', name: '한국어' }
]

// Watch for changes and update locale
watch(selectedLanguage, (newLang) => {
  locale.value = newLang
  localStorage.setItem('userLanguage', newLang)
})
</script>

<template>
  <div class="language-selector">
    <select v-model="selectedLanguage" class="lang-select">
      <option v-for="lang in languages" :key="lang.code" :value="lang.code">
        {{ lang.name }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.language-selector {
  display: flex;
  align-items: center;
}

.lang-select {
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  outline: none;
}

.lang-select option {
  background-color: #1e40af;
  color: white;
}
</style>
