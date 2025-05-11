<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
const projectId = computed(() => Number(route.params.id))
const taskId = computed(() => Number(route.params.taskId))

// Mock project data
const project = ref({
  id: 1,
  name: 'Vientiane City Urban Master Plan',
})

// Mock task data
const task = ref({
  id: 1,
  name: 'Identify the scope of urban planning',
  description:
    'This task involves gathering existing documents, conducting preliminary surveys, holding local consultations, finalizing contracts, and handling contract signing procedures.',
  status: 'Completed',
  startDate: '2024-11-15',
  completedDate: '2024-12-20',
  documents: [
    {
      id: 1,
      name: 'Contract Document.pdf',
      size: '2.3 MB',
      uploadedBy: 'Somsack P.',
      date: '2024-11-20',
      type: 'Contract Document',
      description: 'Official contract for the Vientiane City Urban Master Plan project',
    },
    {
      id: 2,
      name: 'Preliminary Survey Report.pdf',
      size: '5.1 MB',
      uploadedBy: 'Bouakham S.',
      date: '2024-12-05',
      type: 'Survey Report',
      description: 'Results from the initial site survey and assessment',
    },
    {
      id: 3,
      name: 'Local Consultation Minutes.docx',
      size: '1.2 MB',
      uploadedBy: 'Somsack P.',
      date: '2024-12-18',
      type: 'Meeting Minutes',
      description: 'Minutes from consultation meetings with local stakeholders',
    },
  ],
  subtasks: [
    { id: 1, name: 'Gather existing documents', status: 'Completed', completedDate: '2024-11-25' },
    { id: 2, name: 'Conduct preliminary survey', status: 'Completed', completedDate: '2024-12-05' },
    { id: 3, name: 'Hold local consultations', status: 'Completed', completedDate: '2024-12-15' },
    { id: 4, name: 'Finalize contract', status: 'Completed', completedDate: '2024-12-20' },
  ],
})

// For the purpose of this prototype, we'll populate with different data based on task ID
onMounted(() => {
  // In a real app, we would fetch project and task data from an API
  if (taskId.value === 2) {
    task.value = {
      id: 2,
      name: 'Collect and analyse data',
      description:
        'This task involves undertaking surveys, using base maps (GIS recommended), collecting general information, detailed data through interviews and field surveys, and topographic surveys. Analysis includes identifying strengths/weaknesses, project impacts, and economic trends.',
      status: 'Completed',
      startDate: '2024-12-21',
      completedDate: '2025-02-10',
      documents: [
        {
          id: 4,
          name: 'Population Data Analysis.xlsx',
          size: '1.5 MB',
          uploadedBy: 'Bouakham S.',
          date: '2025-01-15',
          type: 'Data Analysis',
          description: 'Analysis of population statistics and demographic trends',
        },
        {
          id: 5,
          name: 'Land Use Survey Results.pdf',
          size: '8.2 MB',
          uploadedBy: 'Viengxay C.',
          date: '2025-01-28',
          type: 'Survey Report',
          description: 'Comprehensive survey of current land use in the project area',
        },
        {
          id: 6,
          name: 'Infrastructure Assessment.pdf',
          size: '6.7 MB',
          uploadedBy: 'Bouakham S.',
          date: '2025-02-05',
          type: 'Assessment Report',
          description: 'Evaluation of existing infrastructure and future needs',
        },
        {
          id: 7,
          name: 'GIS Data Package.zip',
          size: '45.3 MB',
          uploadedBy: 'Viengxay C.',
          date: '2025-02-08',
          type: 'GIS Data',
          description: 'Comprehensive GIS data files for spatial analysis',
        },
      ],
      subtasks: [
        {
          id: 1,
          name: 'Conduct population survey',
          status: 'Completed',
          completedDate: '2025-01-15',
        },
        { id: 2, name: 'Map current land use', status: 'Completed', completedDate: '2025-01-25' },
        {
          id: 3,
          name: 'Assess existing infrastructure',
          status: 'Completed',
          completedDate: '2025-02-05',
        },
        { id: 4, name: 'Compile GIS database', status: 'Completed', completedDate: '2025-02-08' },
      ],
    }
  } else if (taskId.value === 3) {
    task.value = {
      id: 3,
      name: 'Draft the urban master plan',
      description:
        'This task involves building a database using GIS, analyzing data, preparing a first draft report, developing planning options, preparing various plans (road network, land use, drainage, solid waste), identifying priority projects, and preparing final reports and land use regulations.',
      status: 'Completed',
      startDate: '2025-02-11',
      completedDate: '2025-03-25',
      documents: [
        {
          id: 8,
          name: 'Draft Master Plan Report.pdf',
          size: '12.3 MB',
          uploadedBy: 'Bouakham S.',
          date: '2025-03-10',
          type: 'Draft Report',
          description: 'First draft of the comprehensive master plan report',
        },
        {
          id: 9,
          name: 'Land Use Planning Maps.pdf',
          size: '18.7 MB',
          uploadedBy: 'Viengxay C.',
          date: '2025-03-15',
          type: 'Planning Maps',
          description: 'Proposed land use zoning and planning maps',
        },
        {
          id: 10,
          name: 'Infrastructure Development Plan.pdf',
          size: '9.2 MB',
          uploadedBy: 'Bouakham S.',
          date: '2025-03-20',
          type: 'Development Plan',
          description: 'Proposed infrastructure development and improvements',
        },
        {
          id: 11,
          name: 'Priority Projects List.xlsx',
          size: '0.8 MB',
          uploadedBy: 'Somsack P.',
          date: '2025-03-22',
          type: 'Projects List',
          description: 'List of priority development projects with timeline and budget',
        },
      ],
      subtasks: [
        { id: 1, name: 'Prepare draft report', status: 'Completed', completedDate: '2025-03-10' },
        { id: 2, name: 'Create land use plans', status: 'Completed', completedDate: '2025-03-15' },
        {
          id: 3,
          name: 'Develop infrastructure plan',
          status: 'Completed',
          completedDate: '2025-03-20',
        },
        {
          id: 4,
          name: 'Identify priority projects',
          status: 'Completed',
          completedDate: '2025-03-22',
        },
      ],
    }
  } else if (taskId.value === 4) {
    task.value = {
      id: 4,
      name: 'Invite stakeholders to a consultation meeting',
      description:
        'This task involves organizing consultations to raise awareness, explain plan content, and reach agreement with stakeholders including MPWT, local administrations, sectors, mass organizations, private sector, and Nai Bans (village heads).',
      status: 'In Progress',
      startDate: '2025-03-26',
      completedDate: '',
      documents: [
        {
          id: 12,
          name: 'Stakeholder Invitation List.xlsx',
          size: '0.5 MB',
          uploadedBy: 'Somsack P.',
          date: '2025-04-05',
          type: 'Invitation List',
          description: 'List of stakeholders to be invited to consultation meetings',
        },
        {
          id: 13,
          name: 'Consultation Presentation.pptx',
          size: '15.2 MB',
          uploadedBy: 'Bouakham S.',
          date: '2025-04-15',
          type: 'Presentation',
          description: 'Presentation slides for the stakeholder consultation meeting',
        },
        {
          id: 14,
          name: 'Feedback Form Template.docx',
          size: '0.3 MB',
          uploadedBy: 'Somsack P.',
          date: '2025-04-20',
          type: 'Form Template',
          description: 'Template form for collecting stakeholder feedback',
        },
      ],
      subtasks: [
        {
          id: 1,
          name: 'Prepare stakeholder list',
          status: 'Completed',
          completedDate: '2025-04-05',
        },
        {
          id: 2,
          name: 'Create presentation materials',
          status: 'Completed',
          completedDate: '2025-04-15',
        },
        {
          id: 3,
          name: 'Develop feedback collection tools',
          status: 'Completed',
          completedDate: '2025-04-20',
        },
        {
          id: 4,
          name: 'Schedule and hold consultations',
          status: 'In Progress',
          completedDate: '',
        },
      ],
    }
  }
})

// UI state
const showUploadModal = ref(false)
const selectedFile = ref(null)
const uploadProgress = ref(0)

// Methods
const handleFileSelect = (event) => {
  const files = event.target.files
  if (files.length > 0) {
    selectedFile.value = files[0]
  }
}

const startUpload = () => {
  // This would be an actual file upload in a real application
  // For prototype, we'll simulate progress
  uploadProgress.value = 0
  const interval = setInterval(() => {
    uploadProgress.value += 10
    if (uploadProgress.value >= 100) {
      clearInterval(interval)
      // Add a fake document to the list
      const newDoc = {
        id: task.value.documents.length + 1,
        name: selectedFile.value.name,
        size: Math.round(selectedFile.value.size / 1024) + ' KB',
        uploadedBy: 'Current User',
        date: new Date().toISOString().split('T')[0],
        type: 'New Document',
        description: 'Document uploaded by user',
      }
      task.value.documents.push(newDoc)
      // Reset and close modal
      selectedFile.value = null
      showUploadModal.value = false
    }
  }, 300)
}

const downloadDocument = (doc) => {
  // This would be an actual download in a real application
  alert(`Downloading ${doc.name}...`)
}

const viewDocument = (doc) => {
  // This would open a document viewer in a real application
  alert(`Viewing ${doc.name}...`)
}

// Translate status
const translateStatus = (status) => {
  if (status === 'Completed') return t('projectDetail.taskStatus.completed')
  if (status === 'In Progress') return t('projectDetail.taskStatus.inProgress')
  if (status === 'Not Started') return t('projectDetail.taskStatus.notStarted')
  return status
}
</script>

<template>
  <div class="container">
    <div class="task-header">
      <div class="back-link">
        <router-link :to="`/projects/${projectId}`"
          >&larr; {{ t('taskDetail.backToProject') }}</router-link
        >
      </div>

      <div class="task-title">
        <h1>{{ task.name }}</h1>
        <div
          class="task-status"
          :class="{
            'status-completed': task.status === 'Completed',
            'status-progress': task.status === 'In Progress',
            'status-not-started': task.status === 'Not Started',
          }"
        >
          {{ translateStatus(task.status) }}
        </div>
      </div>

      <div class="task-info">
        <div v-if="task.startDate" class="info-group">
          <div class="info-label">{{ t('projectDetail.projectInfo.startDate') }}:</div>
          <div class="info-value">{{ task.startDate }}</div>
        </div>
        <div v-if="task.completedDate" class="info-group">
          <div class="info-label">{{ t('projectDetail.task.completed') }}:</div>
          <div class="info-value">{{ task.completedDate }}</div>
        </div>
      </div>

      <div class="task-description">
        <h3>{{ t('taskDetail.description') }}</h3>
        <p>{{ task.description }}</p>
      </div>
    </div>

    <div class="task-subtasks">
      <h2>{{ t('taskDetail.subtasks') }}</h2>
      <div class="subtasks-list">
        <div v-for="subtask in task.subtasks" :key="subtask.id" class="subtask-item">
          <div
            class="subtask-status"
            :class="{
              'status-completed': subtask.status === 'Completed',
              'status-in-progress': subtask.status === 'In Progress',
              'status-not-started': subtask.status === 'Not Started',
            }"
          >
            {{
              subtask.status === 'Completed' ? '✓' : subtask.status === 'In Progress' ? '◔' : '○'
            }}
          </div>
          <div class="subtask-content">
            <div class="subtask-name">{{ subtask.name }}</div>
            <div v-if="subtask.completedDate" class="subtask-date">
              {{ t('projectDetail.task.completed') }}: {{ subtask.completedDate }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="task-documents">
      <div class="documents-header">
        <h2>{{ t('taskDetail.documents') }}</h2>
        <button class="btn btn-success" @click="showUploadModal = true">
          {{ t('taskDetail.uploadDocument') }}
        </button>
      </div>

      <div class="documents-table">
        <div class="table-header">
          <div class="doc-name-header">{{ t('taskDetail.documentName') }}</div>
          <div class="doc-type-header">{{ t('taskDetail.documentType') }}</div>
          <div class="doc-user-header">{{ t('taskDetail.uploadedBy') }}</div>
          <div class="doc-date-header">{{ t('taskDetail.date') }}</div>
          <div class="doc-size-header">{{ t('taskDetail.size') }}</div>
          <div class="doc-actions-header">{{ t('taskDetail.actions') }}</div>
        </div>

        <div v-for="doc in task.documents" :key="doc.id" class="document-row">
          <div class="doc-name">
            <div class="doc-title">{{ doc.name }}</div>
            <div class="doc-description">{{ doc.description }}</div>
          </div>
          <div class="doc-type">{{ doc.type }}</div>
          <div class="doc-user">{{ doc.uploadedBy }}</div>
          <div class="doc-date">{{ doc.date }}</div>
          <div class="doc-size">{{ doc.size }}</div>
          <div class="doc-actions">
            <button class="btn-icon" @click="viewDocument(doc)" title="View">👁️</button>
            <button class="btn-icon" @click="downloadDocument(doc)" title="Download">⬇️</button>
          </div>
        </div>

        <div v-if="task.documents.length === 0" class="no-documents">
          {{ t('taskDetail.noDocuments') }}
        </div>
      </div>
    </div>

    <!-- Upload Document Modal -->
    <div v-if="showUploadModal" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <h3>{{ t('taskDetail.upload.title') }}</h3>
          <button class="close-button" @click="showUploadModal = false">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>{{ t('taskDetail.upload.selectDocument') }}</label>
            <input type="file" @change="handleFileSelect" class="file-input" />
            <div v-if="selectedFile" class="selected-file">
              {{ t('taskDetail.upload.selected') }}: {{ selectedFile.name }} ({{
                Math.round(selectedFile.size / 1024)
              }}
              KB)
            </div>
          </div>

          <div class="form-group">
            <label>{{ t('taskDetail.documentType') }}</label>
            <select class="form-control">
              <option value="">{{ t('taskDetail.selectDocType') }}</option>
              <option value="contract">{{ t('taskDetail.docTypes.contract') }}</option>
              <option value="survey">{{ t('taskDetail.docTypes.survey') }}</option>
              <option value="minutes">{{ t('taskDetail.docTypes.minutes') }}</option>
              <option value="plan">{{ t('taskDetail.docTypes.plan') }}</option>
              <option value="map">{{ t('taskDetail.docTypes.map') }}</option>
              <option value="other">{{ t('taskDetail.docTypes.other') }}</option>
            </select>
          </div>

          <div class="form-group">
            <label>{{ t('taskDetail.upload.description') }}</label>
            <textarea
              class="form-control"
              :placeholder="t('taskDetail.upload.enterDescription')"
            ></textarea>
          </div>

          <div v-if="uploadProgress > 0" class="upload-progress">
            <div class="progress-bar">
              <div class="progress-fill" :style="{ width: `${uploadProgress}%` }"></div>
            </div>
            <div class="progress-text">
              {{ uploadProgress }}% {{ t('taskDetail.upload.progress') }}
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="showUploadModal = false">
            {{ t('taskDetail.upload.cancel') }}
          </button>
          <button
            class="btn btn-success"
            @click="startUpload"
            :disabled="!selectedFile || uploadProgress > 0"
          >
            {{ t('taskDetail.upload.upload') }}
          </button>
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
.task-header {
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

.task-title {
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

.task-status {
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

.task-info {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
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

.task-description {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.task-description h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1e40af;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1rem;
}

.task-subtasks {
  margin-bottom: 2rem;
}

.subtasks-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.subtask-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: white;
}

.subtask-status {
  margin-right: 0.75rem;
  font-size: 1.25rem;
}

.subtask-content {
  flex: 1;
}

.subtask-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.subtask-date {
  font-size: 0.875rem;
  color: #6b7280;
}

.documents-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.documents-table {
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: white;
}

.table-header {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;
  background-color: #f3f4f6;
  padding: 0.75rem 1rem;
  font-weight: bold;
  border-bottom: 1px solid #e5e7eb;
}

.document-row {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.document-row:last-child {
  border-bottom: none;
}

.doc-title {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.doc-description {
  font-size: 0.875rem;
  color: #6b7280;
}

.doc-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
}

.no-documents {
  padding: 2rem;
  text-align: center;
  color: #6b7280;
  font-style: italic;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  background-color: white;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
}

.modal-body {
  padding: 1rem;
}

.modal-footer {
  padding: 1rem;
  border-top: 1px solid #e5e7eb;
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.25rem;
}

textarea.form-control {
  min-height: 100px;
}

.file-input {
  margin-top: 0.5rem;
}

.selected-file {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  font-size: 0.875rem;
}

.upload-progress {
  margin-top: 1rem;
}

.progress-bar {
  height: 0.5rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 0.25rem;
}

.progress-fill {
  height: 100%;
  background-color: #10b981;
  border-radius: 9999px;
}

.progress-text {
  font-size: 0.75rem;
  color: #6b7280;
  text-align: right;
}

@media (max-width: 768px) {
  .subtasks-list {
    grid-template-columns: 1fr;
  }

  .table-header,
  .document-row {
    grid-template-columns: 2fr 1fr 1fr;
  }

  .doc-user-header,
  .doc-user,
  .doc-date-header,
  .doc-date,
  .doc-size-header,
  .doc-size {
    display: none;
  }
}
</style>
