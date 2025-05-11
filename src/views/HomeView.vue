<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref, computed } from 'vue'

const { t } = useI18n()

// Demo data for dashboard
const recentProjects = ref([
  {
    id: 1,
    name: 'Vientiane Capital Master Plan 2030',
    type: 'masterPlan',
    status: 'inProgress',
    progress: 65,
    lastUpdated: '2025-04-25',
  },
  {
    id: 2,
    name: 'Chanthabouly Heritage Zone',
    type: 'detailedPlan',
    status: 'inProgress',
    progress: 30,
    lastUpdated: '2025-04-28',
  },
  {
    id: 3,
    name: 'Sikhottabong Riverside Development',
    type: 'detailedPlan',
    status: 'inProgress',
    progress: 45,
    lastUpdated: '2025-04-27',
  },
])

// Vientiane City planning data
const vientianePlans = ref({
  masterPlans: [
    { name: 'Vientiane Capital Master Plan 2030', status: 'inProgress', progress: 65 },
    { name: 'Vientiane Transportation Plan', status: 'completed', progress: 100 },
    { name: 'Vientiane Green Space Plan', status: 'notStarted', progress: 0 },
  ],
  detailedPlans: [
    { name: 'Chanthabouly District Plan', status: 'completed', progress: 100 },
    { name: 'Sikhottabong District Plan', status: 'inProgress', progress: 45 },
    { name: 'Xaysettha District Plan', status: 'inProgress', progress: 30 },
    { name: 'Sisattanak District Plan', status: 'notStarted', progress: 0 },
  ],
})

// Map regions data (Vientiane districts)
const mapRegions = ref([
  { id: 'chanthabouly', name: 'Chanthabouly', projects: 4, documents: 14 },
  { id: 'sikhottabong', name: 'Sikhottabong', projects: 3, documents: 10 },
  { id: 'xaysettha', name: 'Xaysettha', projects: 2, documents: 8 },
  { id: 'sisattanak', name: 'Sisattanak', projects: 3, documents: 7 },
  { id: 'naxaithong', name: 'Naxaithong', projects: 1, documents: 3 },
  { id: 'xaythany', name: 'Xaythany', projects: 1, documents: 3 },
  { id: 'hadxaifong', name: 'Hadxaifong', projects: 1, documents: 1 },
  { id: 'sangthong', name: 'Sangthong', projects: 0, documents: 0 },
  { id: 'pakngum', name: 'Pak Ngum', projects: 0, documents: 0 },
])

// Selected region for highlight
const selectedRegion = ref('chanthabouly')

// Total documents count
const totalDocuments = computed(() => {
  return mapRegions.value.reduce((sum, region) => sum + region.documents, 0)
})
</script>

<template>
  <div class="home-container">
    <div class="hero-section">
      <div class="container">
        <h1>{{ t('app.fullTitle') }}</h1>
        <p class="subtitle">{{ t('home.subtitle') }}</p>

        <div class="cta-buttons">
          <router-link to="/projects" class="btn">{{ t('home.viewProjects') }}</router-link>
        </div>
      </div>
    </div>

    <!-- Dashboard Section -->
    <div class="dashboard-section">
      <div class="container">
        <div class="dashboard-grid">
          <!-- Recent Projects Panel -->
          <div class="dashboard-panel recent-projects">
            <h3>{{ t('home.dashboard.recentProjects') }}</h3>
            <div class="project-list">
              <div v-for="project in recentProjects" :key="project.id" class="project-item">
                <div class="project-info">
                  <h4>{{ project.name }}</h4>
                  <div class="project-meta">
                    <span class="project-type">{{ t(`projects.types.${project.type}`) }}</span>
                    <span class="project-status" :class="project.status">{{
                      t(`projects.status.${project.status}`)
                    }}</span>
                  </div>
                </div>
                <div class="project-progress">
                  <div class="progress-bar">
                    <div class="progress-fill" :style="{ width: project.progress + '%' }"></div>
                  </div>
                  <span class="progress-text">{{ project.progress }}%</span>
                </div>
              </div>
            </div>
            <router-link to="/projects" class="view-all">{{
              t('home.dashboard.viewAll')
            }}</router-link>
          </div>

          <!-- Vientiane City Plans Panel -->
          <div class="dashboard-panel vientiane-plans">
            <h3>{{ t('home.dashboard.vientianePlans') }}</h3>

            <div class="plans-table-container">
              <!-- Master Plan Status Table -->
              <div class="plan-type-table">
                <div class="plan-type-header">{{ t('projects.types.masterPlan') }}</div>
                <div class="plan-status-grid">
                  <div class="status-cell status-header">{{ t('projects.status.completed') }}</div>
                  <div class="status-cell status-header">{{ t('projects.status.inProgress') }}</div>
                  <div class="status-cell status-header">{{ t('projects.status.notStarted') }}</div>

                  <div class="status-cell status-value completed">
                    {{ vientianePlans.masterPlans.filter((p) => p.status === 'completed').length }}
                  </div>
                  <div class="status-cell status-value inProgress">
                    {{ vientianePlans.masterPlans.filter((p) => p.status === 'inProgress').length }}
                  </div>
                  <div class="status-cell status-value notStarted">
                    {{ vientianePlans.masterPlans.filter((p) => p.status === 'notStarted').length }}
                  </div>
                </div>
              </div>

              <!-- Detailed Plan Status Table -->
              <div class="plan-type-table">
                <div class="plan-type-header">{{ t('projects.types.detailedPlan') }}</div>
                <div class="plan-status-grid">
                  <div class="status-cell status-header">{{ t('projects.status.completed') }}</div>
                  <div class="status-cell status-header">{{ t('projects.status.inProgress') }}</div>
                  <div class="status-cell status-header">{{ t('projects.status.notStarted') }}</div>

                  <div class="status-cell status-value completed">
                    {{
                      vientianePlans.detailedPlans.filter((p) => p.status === 'completed').length
                    }}
                  </div>
                  <div class="status-cell status-value inProgress">
                    {{
                      vientianePlans.detailedPlans.filter((p) => p.status === 'inProgress').length
                    }}
                  </div>
                  <div class="status-cell status-value notStarted">
                    {{
                      vientianePlans.detailedPlans.filter((p) => p.status === 'notStarted').length
                    }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Document Map Panel -->
          <div class="dashboard-panel document-map">
            <h3>{{ t('home.dashboard.documentMap') }}</h3>
            <div class="map-container">
              <img alt="laos map" src="../assets/Vientianemap.png" height="300" />
            </div>

            <div class="map-total-documents">
              <span class="total-value">{{ totalDocuments }}</span>
              <span class="total-label">{{ t('home.dashboard.totalDocuments') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="features-section">
      <div class="container">
        <div class="feature-cards">
          <div class="feature-card">
            <h3>{{ t('home.features.documentStorage.title') }}</h3>
            <p>{{ t('home.features.documentStorage.description') }}</p>
          </div>

          <div class="feature-card">
            <h3>{{ t('home.features.organizedWorkflow.title') }}</h3>
            <p>{{ t('home.features.organizedWorkflow.description') }}</p>
          </div>

          <div class="feature-card">
            <h3>{{ t('home.features.easyAccess.title') }}</h3>
            <p>{{ t('home.features.easyAccess.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  margin: 0;
  padding: 0;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-section {
  background-color: #f9fafb;
  padding: 3rem 0;
  text-align: center;
  width: 100%;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: #4b5563;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

/* Dashboard Styles */
.dashboard-section {
  padding: 3rem 0;
  background-color: #f3f4f6;
  width: 100%;
}

.section-title {
  font-size: 1.75rem;
  color: #1e40af;
  margin-bottom: 1.5rem;
  text-align: center;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
}

.dashboard-panel {
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
}

.dashboard-panel h3 {
  font-size: 1.25rem;
  color: #1e40af;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.5rem;
}

/* Recent Projects Panel */
.project-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
  background-color: #f9fafb;
}

.project-info h4 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.25rem 0;
}

.project-meta {
  display: flex;
  gap: 0.75rem;
  font-size: 0.875rem;
}

.project-type {
  color: #4b5563;
}

.project-status {
  font-weight: 500;
}

.project-status.completed {
  color: #16a34a;
}

.project-status.inProgress {
  color: #ea580c;
}

.project-status.notStarted {
  color: #6b7280;
}

.project-progress {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.progress-bar {
  flex: 1;
  height: 0.5rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background-color: #3b82f6;
  border-radius: 9999px;
}

.progress-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: #4b5563;
  min-width: 3rem;
  text-align: right;
}

.view-all {
  display: block;
  text-align: center;
  margin-top: 1rem;
  color: #1e40af;
  font-weight: 500;
  text-decoration: none;
}

.view-all:hover {
  text-decoration: underline;
}

/* Vientiane Plans Panel */
.plans-table-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.plan-type-table {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
}

.plan-type-header {
  background-color: #f3f4f6;
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: #1e40af;
  border-bottom: 1px solid #e5e7eb;
}

.plan-status-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
}

.status-cell {
  padding: 0.75rem;
  text-align: center;
  border-right: 1px solid #e5e7eb;
}

.status-cell:last-child {
  border-right: none;
}

.status-header {
  font-size: 0.875rem;
  color: #6b7280;
  border-bottom: 1px solid #e5e7eb;
}

.status-value {
  font-size: 1.5rem;
  font-weight: 700;
}

.status-value.completed {
  background-color: #d1fae5;
  color: #065f46;
}

.status-value.inProgress {
  background-color: #e0f2fe;
  color: #0369a1;
}

.status-value.notStarted {
  background-color: #f3f4f6;
  color: #6b7280;
}

/* Document Map Panel */
.document-map {
  display: flex;
  flex-direction: column;
}

.map-container {
  height: 300px;
  margin-bottom: 1rem;
}

.laos-map {
  width: 100%;
  height: 100%;
}

.map-outline {
  fill: #f3f4f6;
  stroke: #d1d5db;
  stroke-width: 1px;
}

.map-region {
  fill: #e0f2fe;
  stroke: #93c5fd;
  stroke-width: 1px;
  cursor: pointer;
  transition: fill 0.3s ease;
}

.map-region:hover {
  fill: #bfdbfe;
}

.region-selected {
  fill: #3b82f6;
}

.region-label {
  font-size: 8px;
  fill: #1f2937;
  text-anchor: middle;
  pointer-events: none;
}

.region-vertical {
  writing-mode: tb;
  text-orientation: upright;
  letter-spacing: -1px;
  font-size: 6px;
}

.region-selected + .region-label {
  fill: white;
}

.river-path {
  opacity: 0.7;
}

.river-label {
  font-size: 8px;
  fill: #3b82f6;
  text-anchor: start;
}

.region-info {
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
}

.region-name {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #1e40af;
}

.region-data {
  display: flex;
  justify-content: space-between;
}

.region-projects,
.region-documents {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.data-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e40af;
}

.data-label {
  font-size: 0.75rem;
  color: #6b7280;
}

.map-total-documents {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid #e5e7eb;
}

.total-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e40af;
}

.total-label {
  font-size: 0.875rem;
  color: #6b7280;
}

/* Document Map Badges */
.doc-badge {
  fill: #3b82f6;
  stroke: white;
  stroke-width: 1px;
}

.doc-badge-empty {
  fill: #e5e7eb;
}

.doc-badge-text {
  fill: white;
  font-size: 8px;
  text-anchor: middle;
  font-weight: bold;
}

.doc-badge-empty + .doc-badge-text {
  fill: #6b7280;
}

.map-legend {
  fill: rgba(255, 255, 255, 0.9);
  stroke: #d1d5db;
  stroke-width: 1px;
}

.legend-text {
  fill: #4b5563;
  font-size: 9px;
}

.legend-circle {
  fill: #3b82f6;
  font-size: 12px;
}

/* Features Section */
.features-section {
  padding: 3rem 0;
  background-color: white;
  width: 100%;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
}

.feature-card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: white;
  border: 1px solid #e5e7eb;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: #1e40af;
}

.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.375rem;
  background-color: #1e40af;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #1c3879;
}

/* Responsive Styles */
@media (min-width: 768px) {
  .feature-cards {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .dashboard-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .recent-projects {
    grid-row: span 2;
  }
}

@media (min-width: 1024px) {
  .dashboard-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .recent-projects {
    grid-column: span 1;
  }
}
</style>
