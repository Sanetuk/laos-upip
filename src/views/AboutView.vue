<script setup lang="ts">
import { ref } from 'vue'

const systemName = ref('Lao Urban Planning Information System (upip)')
</script>

<template>
  <div class="container">
    <div class="about-header">
      <h1>About {{ systemName }}</h1>
    </div>
    
    <div class="about-section">
      <h2>Project Overview</h2>
      <p>The Lao Urban Planning Information Platform (upip) is designed to digitize and streamline the urban planning workflow in Laos. This system aims to transition from traditional paper-based documentation to a more efficient digital platform.</p>
      
      <p>Currently in its initial phase, the upip focuses on secure document storage and organization, making it easier for urban planning professionals to save, access, and share important documents throughout the planning process.</p>
    </div>
    
    <div class="about-section">
      <h2>System Features</h2>
      <div class="features-grid">
        <div class="feature-card">
          <h3>Document Repository</h3>
          <p>Securely store and organize all urban planning documents in a centralized digital system, accessible to authorized users.</p>
        </div>
        
        <div class="feature-card">
          <h3>Process-Based Organization</h3>
          <p>Documents are organized according to the 8 tasks of the urban planning process in Laos, ensuring a logical workflow.</p>
        </div>
        
        <div class="feature-card">
          <h3>Project Management</h3>
          <p>Track progress of planning projects, with clear visibility of completed tasks and upcoming work.</p>
        </div>
        
        <div class="feature-card">
          <h3>Collaborative Access</h3>
          <p>Share documents securely with team members and stakeholders, improving collaboration across departments.</p>
        </div>
      </div>
    </div>
    
    <div class="about-section">
      <h2>Urban Planning Process in Laos</h2>
      <p>The urban planning system in Laos follows a structured process defined by the Law on Urban Planning (Revised), adopted by the National Assembly on 11 November 2017.</p>
      
      <div class="process-steps">
        <div class="process-step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3>Identify the scope of urban planning</h3>
            <p>Gather existing documents, conduct preliminary surveys, hold local consultations, and handle contract signing procedures.</p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3>Collect and analyse data</h3>
            <p>Conduct surveys, use GIS mapping, collect general and detailed information through interviews and field surveys.</p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3>Draft the urban master plan</h3>
            <p>Build database, analyze data, prepare draft report, develop planning options, and prepare various plans and regulations.</p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h3>Invite stakeholders to a consultation meeting</h3>
            <p>Organize consultations to raise awareness, explain plan content, and reach agreement with various stakeholders.</p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">5</div>
          <div class="step-content">
            <h3>Amend the draft urban plan</h3>
            <p>Incorporate feedback and make necessary revisions based on stakeholder consultations.</p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">6</div>
          <div class="step-content">
            <h3>Review the draft urban plan</h3>
            <p>Review the amended plan with the Ministry of Public Works and Transport (MPWT).</p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">7</div>
          <div class="step-content">
            <h3>Submit the draft urban plan for approval</h3>
            <p>Submit the finalized plan to the relevant approval authority based on the urban level.</p>
          </div>
        </div>
        
        <div class="process-step">
          <div class="step-number">8</div>
          <div class="step-content">
            <h3>Formal hand-over of approved plan</h3>
            <p>Submit copies to local administration and key sectors, and hold a seminar to raise awareness about the approved plan.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="about-section">
      <h2>Future Development</h2>
      <p>While the current phase focuses on document storage, future developments of the upip may include:</p>
      
      <ul class="future-list">
        <li>GIS integration for spatial data visualization and analysis</li>
        <li>Workflow management for tracking planning applications and approvals</li>
        <li>Advanced collaboration tools for real-time document editing</li>
        <li>Mobile accessibility for field surveys and inspections</li>
        <li>Integration with other government systems</li>
        <li>Advanced reporting and analytics capabilities</li>
      </ul>
      
      <div class="feedback-section">
        <h3>We Want Your Input</h3>
        <p>We are actively seeking feedback from urban planning professionals in Laos to ensure this system meets your needs. Please let us know what features would be most valuable to you!</p>
        <button class="btn">Provide Feedback</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-header {
  margin-bottom: 2rem;
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e40af;
}

.about-section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.75rem;
  font-weight: bold;
  color: #1e40af;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e5e7eb;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.feature-card {
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: white;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: #1e40af;
}

.process-steps {
  margin-top: 2rem;
}

.process-step {
  display: flex;
  margin-bottom: 1.5rem;
}

.step-number {
  background-color: #1e40af;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
  flex-shrink: 0;
  margin-right: 1rem;
}

.step-content {
  flex: 1;
}

.step-content h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1e40af;
}

.future-list {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.future-list li {
  margin-bottom: 0.5rem;
}

.feedback-section {
  background-color: #f3f4f6;
  padding: 1.5rem;
  border-radius: 0.5rem;
  text-align: center;
  margin-top: 2rem;
}

.feedback-section h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
  color: #1e40af;
}

.feedback-section p {
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
</style>
