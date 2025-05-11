<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Mock data for projects
const projects = ref([
  {
    id: 1,
    name: 'Vientiane City Urban Master Plan 2030',
    type: 'Master Plan',
    description: 'Comprehensive urban master plan for the capital city of Vientiane',
    status: 'In Progress',
    lastUpdated: '2025-04-28',
    progress: 4,
    district: 'Vientiane Capital',
  },
  {
    id: 2,
    name: 'Vientiane Capital Master Plan 2030',
    type: 'Master Plan',
    description: 'Urban development plan for Vientiane Capital',
    status: 'Completed',
    lastUpdated: '2025-03-15',
    progress: 8,
    district: 'Vientiane Capital',
  },
  {
    id: 3,
    name: 'Chanthabouly District Plan',
    type: 'Detailed Plan',
    description: 'Detailed planning for new industrial zone development in Chanthabouly district',
    status: 'Completed',
    lastUpdated: '2025-04-10',
    progress: 8,
    district: 'Chanthabouly',
  },
  {
    id: 4,
    name: 'Sikhottabong District Plan',
    type: 'Detailed Plan',
    description: 'Detailed plan for industrial area development in Sikhottabong',
    status: 'In Progress',
    lastUpdated: '2025-04-22',
    progress: 3,
    district: 'Sikhottabong',
  },
  {
    id: 5,
    name: 'Xaysettha District Plan',
    type: 'Master Plan',
    description: 'Planning for new residential areas in Xaysettha district',
    status: 'Not Started',
    lastUpdated: '2025-04-15',
    progress: 0,
    district: 'Xaysettha',
  },
  {
    id: 6,
    name: 'Sisattanak District Plan',
    type: 'Detailed Plan',
    description: 'Detailed planning for tourism-focused development in Sisattanak district',
    status: 'In Progress',
    lastUpdated: '2025-04-18',
    progress: 1,
    district: 'Sisattanak',
  },
])

// Filter variables
const searchTerm = ref('')
const selectedType = ref('')
const selectedStatus = ref('')
const selecteddistrict = ref('')

// Get unique values for filter dropdowns
const projectTypes = computed(() => {
  const types = new Set(projects.value.map((project) => project.type))
  return Array.from(types)
})

const projectStatuses = computed(() => {
  const statuses = new Set(projects.value.map((project) => project.status))
  return Array.from(statuses)
})

const districts = computed(() => {
  const provs = new Set(projects.value.map((project) => project.district))
  return Array.from(provs)
})

// Filtered projects
const filteredProjects = computed(() => {
  return projects.value.filter((project) => {
    // Search term filter
    const matchesSearchTerm =
      !searchTerm.value ||
      project.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.value.toLowerCase())

    // Type filter
    const matchesType = !selectedType.value || project.type === selectedType.value

    // Status filter
    const matchesStatus = !selectedStatus.value || project.status === selectedStatus.value

    // district filter
    const matchesdistrict = !selecteddistrict.value || project.district === selecteddistrict.value

    return matchesSearchTerm && matchesType && matchesStatus && matchesdistrict
  })
})

// Clear all filters
const clearFilters = () => {
  searchTerm.value = ''
  selectedType.value = ''
  selectedStatus.value = ''
  selecteddistrict.value = ''
}

// Sort function
const sortBy = ref('lastUpdated')
const sortDirection = ref('desc')

const toggleSort = (field) => {
  if (sortBy.value === field) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortBy.value = field
    sortDirection.value = 'asc'
  }
}

const sortedProjects = computed(() => {
  return [...filteredProjects.value].sort((a, b) => {
    let aValue = a[sortBy.value]
    let bValue = b[sortBy.value]

    if (sortBy.value === 'lastUpdated') {
      aValue = new Date(aValue)
      bValue = new Date(bValue)
    }

    if (aValue < bValue) return sortDirection.value === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection.value === 'asc' ? 1 : -1
    return 0
  })
})

// Translate status
const translateStatus = (status) => {
  if (status === 'Completed') return t('projects.status.completed')
  if (status === 'In Progress') return t('projects.status.inProgress')
  if (status === 'Not Started') return t('projects.status.notStarted')
  return status
}

// Translate type
const translateType = (type) => {
  if (type === 'Master Plan') return t('projects.types.masterPlan')
  if (type === 'Detailed Plan') return t('projects.types.detailedPlan')
  return type
}
</script>

<template>
  <div class="container">
    <div class="page-header">
      <h1>{{ t('projects.title') }}</h1>
    </div>

    <div class="filters-panel">
      <div class="search-input">
        <input
          type="text"
          v-model="searchTerm"
          :placeholder="t('projects.search')"
          class="search-field"
        />
      </div>

      <div class="filter-controls">
        <div class="filter-group">
          <label>{{ t('projects.filters.type') }}</label>
          <select v-model="selectedType" class="filter-select">
            <option value="">{{ t('projects.filters.allTypes') }}</option>
            <option v-for="type in projectTypes" :key="type" :value="type">
              {{ translateType(type) }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label>{{ t('projects.filters.status') }}</label>
          <select v-model="selectedStatus" class="filter-select">
            <option value="">{{ t('projects.filters.allStatuses') }}</option>
            <option v-for="status in projectStatuses" :key="status" :value="status">
              {{ translateStatus(status) }}
            </option>
          </select>
        </div>

        <div class="filter-group">
          <label>{{ t('projects.filters.district') }}</label>
          <select v-model="selecteddistrict" class="filter-select">
            <option value="">{{ t('projects.filters.alldistricts') }}</option>
            <option v-for="district in districts" :key="district" :value="district">
              {{ district }}
            </option>
          </select>
        </div>

        <button class="clear-filters-btn" @click="clearFilters">
          {{ t('projects.filters.clearFilters') }}
        </button>
      </div>
    </div>

    <div class="results-info">
      {{ t('projects.list.showing', { count: sortedProjects.length, total: projects.length }) }}
    </div>

    <div class="projects-list">
      <div class="list-header">
        <div class="header-project-name">{{ t('projects.list.projectName') }}</div>
        <div class="header-type">{{ t('projects.list.type') }}</div>
        <div class="header-status">{{ t('projects.list.status') }}</div>
        <div class="header-date" @click="toggleSort('lastUpdated')">
          {{ t('projects.list.lastUpdated') }}
          <span v-if="sortBy === 'lastUpdated'" class="sort-indicator">
            {{ sortDirection === 'asc' ? '↑' : '↓' }}
          </span>
        </div>
        <div class="header-progress">{{ t('projects.list.progress') }}</div>
      </div>

      <div v-for="project in sortedProjects" :key="project.id" class="project-row">
        <router-link :to="`/projects/${project.id}`" class="project-link">
          <div class="project-name-cell">
            <div class="project-name">{{ project.name }}</div>
            <div class="project-description">{{ project.description }}</div>
            <div class="project-district">{{ project.district }}</div>
          </div>

          <div class="project-type-cell">
            {{ translateType(project.type) }}
          </div>

          <div class="project-status-cell">
            <div
              class="status-badge"
              :class="{
                'status-completed': project.status === 'Completed',
                'status-progress': project.status === 'In Progress',
                'status-not-started': project.status === 'Not Started',
              }"
            >
              {{ translateStatus(project.status) }}
            </div>
          </div>

          <div class="project-date-cell">
            {{ project.lastUpdated }}
          </div>

          <div class="project-progress-cell">
            <div class="progress-bar">
              <div
                class="progress-fill"
                :style="{ width: `${(project.progress / 8) * 100}%` }"
              ></div>
            </div>
            <div class="progress-text">
              {{ t('projects.list.taskProgress', { current: project.progress, total: 8 }) }}
            </div>
          </div>
        </router-link>
      </div>

      <div v-if="sortedProjects.length === 0" class="no-projects">
        {{ t('projects.list.noProjects') }}
        <button class="btn-link" @click="clearFilters">{{ t('projects.list.clearFilters') }}</button
        >.
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  width: 100%;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 1.75rem;
  font-weight: bold;
  color: #1e40af;
}

.new-project-btn {
  background-color: #10b981;
  color: white;
  border: none;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  cursor: pointer;
}

.new-project-btn:hover {
  background-color: #059669;
}

.filters-panel {
  margin-bottom: 1.5rem;
}

.search-field {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.filter-controls {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  align-items: end;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-group label {
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

.filter-select {
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  background-color: white;
  font-size: 0.875rem;
}

.clear-filters-btn {
  background: none;
  border: none;
  color: #6b7280;
  font-size: 0.875rem;
  text-align: right;
  cursor: pointer;
  padding: 0.5rem 0;
}

.clear-filters-btn:hover {
  color: #1e40af;
  text-decoration: underline;
}

.results-info {
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.list-header {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1.5fr;
  padding: 0.75rem 1rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
  border-bottom: 1px solid #e5e7eb;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
}

.header-date {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.header-date:hover {
  color: #1e40af;
}

.project-row {
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;
}

.project-row:hover {
  background-color: #f3f4f6;
}

.project-link {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1.5fr;
  padding: 1rem;
  text-decoration: none;
  color: inherit;
}

.project-name-cell {
  padding-right: 1rem;
}

.project-name {
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 0.25rem;
}

.project-description {
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
}

.project-district {
  font-size: 0.75rem;
  color: #9ca3af;
}

.project-type-cell {
  font-size: 0.875rem;
  display: flex;
  align-items: center;
}

.project-status-cell {
  display: flex;
  align-items: center;
}

.status-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
}

.status-completed {
  background-color: #d1fae5;
  color: #065f46;
}

.status-progress {
  background-color: #e0f2fe;
  color: #0369a1;
}

.status-not-started {
  background-color: #f3f4f6;
  color: #6b7280;
}

.project-date-cell {
  font-size: 0.875rem;
  display: flex;
  align-items: center;
}

.project-progress-cell {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.progress-bar {
  height: 0.375rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.progress-fill {
  height: 100%;
  background-color: #3b82f6;
  border-radius: 9999px;
}

.progress-text {
  font-size: 0.75rem;
  color: #6b7280;
}

.no-projects {
  padding: 2rem;
  text-align: center;
  color: #6b7280;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
  margin-top: 1rem;
}

.btn-link {
  background: none;
  border: none;
  color: #2563eb;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
  font: inherit;
}

@media (max-width: 768px) {
  .filter-controls {
    grid-template-columns: 1fr;
  }

  .list-header {
    display: none;
  }

  .project-link {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .project-status-cell,
  .project-type-cell,
  .project-date-cell {
    justify-content: flex-start;
  }
}
</style>
