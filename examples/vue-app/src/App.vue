<script setup>
import Button from './components/Button.vue';
import Card from './components/Card.vue';
import Input from './components/Input.vue';
import Alert from './components/Alert.vue';
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>Ark Design System</h1>
      <p class="subtitle">Vue integration example using semantic design tokens</p>
    </header>

    <!-- Buttons Section -->
    <section class="section">
      <h2>Buttons</h2>
      <div class="button-row">
        <Button variant="primary">Primary Action</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </section>

    <!-- Cards Section -->
    <section class="section">
      <h2>Cards</h2>
      <div class="card-grid">
        <Card
          title="Getting Started"
          description="Learn how to integrate design tokens into your Vue application."
        />
        <Card
          title="Token Browser"
          description="Explore all available semantic tokens in the dashboard."
        />
        <Card
          title="Decision Helper"
          description="Use interactive guides to choose the right tokens."
        />
      </div>
    </section>

    <!-- Form Section -->
    <section class="section">
      <h2>Form Elements</h2>
      <div class="form">
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Input label="Password" type="password" placeholder="Enter password" />
        <Button variant="primary">Sign In</Button>
      </div>
    </section>

    <!-- Feedback Section -->
    <section class="section">
      <h2>Feedback</h2>
      <div class="alerts">
        <Alert type="success" message="Changes saved successfully!" />
        <Alert type="warning" message="Your session will expire in 5 minutes." />
        <Alert type="error" message="Unable to save changes. Please try again." />
        <Alert type="info" message="New features are available in this version." />
      </div>
    </section>
  </div>
</template>

<style scoped>
.app {
  max-width: var(--spacing-layout-page-max-width, 1280px);
  margin: 0 auto;
  padding: var(--spacing-layout-page-padding, 24px);
}

.header {
  margin-bottom: var(--spacing-layout-section-gap, 48px);
}

.subtitle {
  font-size: var(--typography-body-lg-font-size, 18px);
}

.section {
  margin-bottom: var(--spacing-layout-section-gap, 48px);
}

.section h2 {
  margin-bottom: var(--spacing-layout-stack-md, 24px);
}

.button-row {
  display: flex;
  gap: var(--spacing-layout-inline-sm, 16px);
  flex-wrap: wrap;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-layout-stack-md, 24px);
}

.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-layout-stack-sm, 16px);
  max-width: 400px;
}

.form .btn {
  align-self: flex-start;
}

.alerts {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-layout-stack-sm, 16px);
}
</style>
