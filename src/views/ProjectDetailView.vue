<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
const projectId = computed(() => Number(route.params.id))

// Mock project data
const project = ref({
  id: 1,
  name: 'Vientiane City Urban Master Plan',
  type: 'Master Plan',
  description: 'Comprehensive urban master plan for the capital city of Vientiane',
  status: 'In Progress',
  startDate: '2024-11-15',
  lastUpdated: '2025-04-28',
  progress: 4, // Current task (out of 8)
  location: 'Vientiane Capital',
  client: 'Ministry of Public Works and Transport',
  budget: '350,000 USD',
  team: [
    'Mr. Somsack Phommavongsa (Project Manager)',
    'Ms. Bouakham Soulivong (Urban Planner)',
    'Mr. Viengxay Chanthavong (GIS Specialist)'
  ]
})

// Mock tasks data based on the 8 steps of urban planning in Laos
const tasks = ref([
  {
    id: 1,
    name: 'Identify the scope of urban planning',
    status: 'Completed',
    completedDate: '2024-12-20',
    documents: [
      { name: 'Contract Document.pdf', size: '2.3 MB', uploadedBy: 'Somsack P.', date: '2024-11-20' },
      { name: 'Preliminary Survey Report.pdf', size: '5.1 MB', uploadedBy: 'Bouakham S.', date: '2024-12-05' },
      { name: 'Local Consultation Minutes.docx', size: '1.2 MB', uploadedBy: 'Somsack P.', date: '2024-12-18' }
    ]
  },
  {
    id: 2,
    name: 'Collect and analyse data',
    status: 'Completed',
    completedDate: '2025-02-10',
    documents: [
      { name: 'Population Data Analysis.xlsx', size: '1.5 MB', uploadedBy: 'Bouakham S.', date: '2025-01-15' },
      { name: 'Land Use Survey Results.pdf', size: '8.2 MB', uploadedBy: 'Viengxay C.', date: '2025-01-28' },
      { name: 'Infrastructure Assessment.pdf', size: '6.7 MB', uploadedBy: 'Bouakham S.', date: '2025-02-05' },
      { name: 'GIS Data Package.zip', size: '45.3 MB', uploadedBy: 'Viengxay C.', date: '2025-02-08' }
    ]
  },
  {
    id: 3,
    name: 'Draft the urban master plan',
    status: 'Completed',
    completedDate: '2025-03-25',
    documents: [
      { name: 'Draft Master Plan Report.pdf', size: '12.3 MB', uploadedBy: 'Bouakham S.', date: '2025-03-10' },
      { name: 'Land Use Planning Maps.pdf', size: '18.7 MB', uploadedBy: 'Viengxay C.', date: '2025-03-15' },
      { name: 'Infrastructure Development Plan.pdf', size: '9.2 MB', uploadedBy: 'Bouakham S.', date: '2025-03-20' },
      { name: 'Priority Projects List.xlsx', size: '0.8 MB', uploadedBy: 'Somsack P.', date: '2025-03-22' }
    ]
  },
  {
    id: 4,
    name: 'Invite stakeholders to a consultation meeting',
    status: 'In Progress',
    completedDate: '',
    documents: [
      { name: 'Stakeholder Invitation List.xlsx', size: '0.5 MB', uploadedBy: 'Somsack P.', date: '2025-04-05' },
      { name: 'Consultation Presentation.pptx', size: '15.2 MB', uploadedBy: 'Bouakham S.', date: '2025-04-15' },
      { name: 'Feedback Form Template.docx', size: '0.3 MB', uploadedBy: 'Somsack P.', date: '2025-04-20' }
    ]
  },
  {
    id: 5,
    name: 'Amend the draft urban plan',
    status: 'Not Started',
    completedDate: '',
    documents: []
  },
  {
    id: 6,
    name: 'Review the draft urban plan',
    status: 'Not Started',
    completedDate: '',
    documents: []
  },
  {
    id: 7,
    name: 'Submit the draft urban plan for approval',
    status: 'Not Started',
    completedDate: '',
    documents: []
  },
  {
    id: 8,
    name: 'Formal hand-over of approved plan',
    status: 'Not Started',
    completedDate: '',
    documents: []
  }
])

// For demonstration, we'll load the appropriate project based on ID in a real app
onMounted(() => {
  // In a real app, we would fetch project data from API
  // For this prototype, we'll just manually set the project data if ID is not 1
  if (projectId.value !== 1) {
    // Example of different project data
    if (projectId.value === 2) {
      project.value = {
        id: 2,
        name: 'Luang Prabang Development Plan',
        type: 'Master Plan',
        description: 'Urban development plan for the UNESCO World Heritage city of Luang Prabang',
        status: 'Completed',
        startDate: '2024-01-10',
        lastUpdated: '2025-03-15',
        progress: 8,
        location: 'Luang Prabang Province',
        client: 'Luang Prabang City Administration',
        budget: '280,000 USD',
        team: [
          'Mr. Khamphone Sinlavong (Project Manager)',
          'Ms. Phonesavanh Vongsa (Urban Planner)',
          'Mr. Bounnhong Xayasouk (Heritage Specialist)'
        ]
      }
      
      // Update all tasks to completed
      tasks.value = tasks.value.map(task => ({
        ...task,
        status: 'Completed',
        completedDate: task.id === 8 ? '2025-03-15' : '2025-' + (task.id < 3 ? '0' + task.id : task.id) + '-10',
        documents: task.documents || [{ name: 'Task Documentation.pdf', size: '5.2 MB', uploadedBy: 'System', date: '2025-' + (task.id < 3 ? '0' + task.id : task.id) + '-10' }]
      }))
    }
  }
})

const goToTask = (taskId) => {
  router.push(`/projects/${projectId.value}/task/${taskId}`)
}

// Translate status
const translateStatus = (status) => {
  if (status === 'Completed') return t('projectDetail.taskStatus.completed')
  if (status === 'In Progress') return t('projectDetail.taskStatus.inProgress')
  if (status === 'Not Started') return t('projectDetail.taskStatus.notStarted')
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
    <div class="project-header">
      <div class="back-link">
        <router-link to="/projects">&larr; {{ t('projectDetail.backToProjects') }}</router-link>
      </div>
      
      <div class="project-title">
        <h1>{{ project.name }}</h1>
        <div class="project-status" :class="{
          'status-completed': project.status === 'Completed',
          'status-progress': project.status === 'In Progress',
          'status-not-started': project.status === 'Not Started'
        }">
          {{ translateStatus(project.status) }}
        </div>
      </div>
      
      <div class="project-info">
        <div class="info-group">
          <div class="info-label">{{ t('projectDetail.projectInfo.type') }}:</div>
          <div class="info-value">{{ translateType(project.type) }}</div>
        </div>
        <div class="info-group">
          <div class="info-label">{{ t('projectDetail.projectInfo.location') }}:</div>
          <div class="info-value">{{ project.location }}</div>
        </div>
        <div class="info-group">
          <div class="info-label">{{ t('projectDetail.projectInfo.client') }}:</div>
          <div class="info-value">{{ project.client }}</div>
        </div>
        <div class="info-group">
          <div class="info-label">{{ t('projectDetail.projectInfo.startDate') }}:</div>
          <div class="info-value">{{ project.startDate }}</div>
        </div>
        <div class="info-group">
          <div class="info-label">{{ t('projectDetail.projectInfo.lastUpdated') }}:</div>
          <div class="info-value">{{ project.lastUpdated }}</div>
        </div>
        <div class="info-group">
          <div class="info-label">{{ t('projectDetail.projectInfo.budget') }}:</div>
          <div class="info-value">{{ project.budget }}</div>
        </div>
      </div>
      
      <div class="project-description">
        <h3>{{ t('projectDetail.description') }}</h3>
        <p>{{ project.description }}</p>
      </div>
      
      <div class="project-team">
        <h3>{{ t('projectDetail.projectTeam') }}</h3>
        <ul>
          <li v-for="(member, index) in project.team" :key="index">{{ member }}</li>
        </ul>
      </div>
    </div>
    
    <div class="project-progress">
      <h2>{{ t('projectDetail.projectProgress') }}</h2>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: `${(project.progress / 8) * 100}%` }"></div>
      </div>
      <div class="progress-text">
        {{ t('projectDetail.taskProgress', { current: project.progress, total: 8 }) }}
      </div>
    </div>
    
    <div class="project-tasks">
      <h2>{{ t('projectDetail.urbanPlanningTasks') }}</h2>
      
      <div 
        v-for="task in tasks" 
        :key="task.id" 
        class="task-card" 
        :class="{
          'task-completed': task.status === 'Completed',
          'task-in-progress': task.status === 'In Progress',
          'task-not-started': task.status === 'Not Started'
        }"
        @click="goToTask(task.id)"
      >
        <div class="task-header">
          <div class="task-number">{{ t('projectDetail.task.task') }} {{ task.id }}</div>
          <div class="task-status">{{ translateStatus(task.status) }}</div>
        </div>
        
        <div class="task-content">
          <h3>{{ task.name }}</h3>
          
          <div v-if="task.completedDate" class="task-date">
            {{ t('projectDetail.task.completed') }}: {{ task.completedDate }}
          </div>
          
          <div class="task-documents">
            <div v-if="task.documents && task.documents.length > 0">
              <div class="document-count">
                {{ t('projectDetail.task.documents', { count: task.documents.length }) }}
              </div>
            </div>
            <div v-else class="no-documents">
              {{ t('projectDetail.task.noDocuments') }}
            </div>
          </div>
        </div>
        
        <div class="task-action">
          <span class="view-details">{{ t('projectDetail.task.viewDetails') }} &rarr;</span>
        </div>
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
.project-header {
  margin-bottom: 2rem;
}

.back-link {
  margin-bottom: 1rem;
}

.back-link a {
  color: #4b5563;
  text-decoration: none;
}

.back-link a:hover {
  color: #1e40af;
}

.project-title {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  color: #1e40af;
  margin-right: 1rem;
  margin-bottom: 0;
}

.project-status {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
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

.project-info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
  background-color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
}

.info-group {
  display: flex;
  flex-direction: column;
}

.info-label {
  font-weight: bold;
  color: #6b7280;
  font-size: 0.875rem;
}

.info-value {
  font-size: 1rem;
}

.project-description, .project-team {
  margin-bottom: 1.5rem;
}

.project-description h3, .project-team h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1e40af;
}

.project-team ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.project-progress {
  margin-bottom: 2rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1rem;
}

.progress-bar {
  height: 0.75rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background-color: #3b82f6;
  border-radius: 9999px;
}

.progress-text {
  font-size: 0.875rem;
  color: #6b7280;
}

.project-tasks {
  margin-bottom: 2rem;
}

.task-card {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: all 0.2s;
  cursor: pointer;
  overflow: hidden;
  background-color: white;
}

.task-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.task-completed {
  border-left: 4px solid #10b981;
}

.task-in-progress {
  border-left: 4px solid #3b82f6;
}

.task-not-started {
  border-left: 4px solid #6b7280;
}

.task-header {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
}

.task-number {
  font-weight: bold;
}

.task-content {
  padding: 1rem;
}

.task-content h3 {
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
}

.task-date {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.document-count {
  font-size: 0.875rem;
  color: #1e40af;
}

.no-documents {
  font-size: 0.875rem;
  color: #6b7280;
  font-style: italic;
}

.task-action {
  padding: 0.75rem 1rem;
  text-align: right;
  border-top: 1px solid #e5e7eb;
  background-color: #f9fafb;
}

.view-details {
  font-size: 0.875rem;
  color: #2563eb;
}

@media (max-width: 768px) {
  .project-info {
    grid-template-columns: 1fr;
  }
}
</style>
