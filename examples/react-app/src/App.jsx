import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Input from './components/Input';

function App() {
  return (
    <div style={{
      maxWidth: 'var(--spacing-layout-page-max-width, 1280px)',
      margin: '0 auto',
      padding: 'var(--spacing-layout-page-padding, 24px)',
    }}>
      <header style={{ marginBottom: 'var(--spacing-layout-section-gap, 48px)' }}>
        <h1>Ark Design System</h1>
        <p style={{ fontSize: 'var(--typography-body-lg-font-size, 18px)' }}>
          React integration example using semantic design tokens
        </p>
      </header>

      {/* Buttons Section */}
      <section style={{ marginBottom: 'var(--spacing-layout-section-gap, 48px)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-layout-stack-md, 24px)' }}>Buttons</h2>
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-layout-inline-sm, 16px)',
          flexWrap: 'wrap',
        }}>
          <Button variant="primary">Primary Action</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Delete</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </section>

      {/* Cards Section */}
      <section style={{ marginBottom: 'var(--spacing-layout-section-gap, 48px)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-layout-stack-md, 24px)' }}>Cards</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-layout-stack-md, 24px)',
        }}>
          <Card
            title="Getting Started"
            description="Learn how to integrate design tokens into your React application."
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

      {/* Form Section */}
      <section style={{ marginBottom: 'var(--spacing-layout-section-gap, 48px)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-layout-stack-md, 24px)' }}>Form Elements</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-layout-stack-sm, 16px)',
          maxWidth: '400px',
        }}>
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input label="Password" type="password" placeholder="Enter password" />
          <Button variant="primary" style={{ alignSelf: 'flex-start' }}>
            Sign In
          </Button>
        </div>
      </section>

      {/* Feedback Section */}
      <section>
        <h2 style={{ marginBottom: 'var(--spacing-layout-stack-md, 24px)' }}>Feedback</h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-layout-stack-sm, 16px)',
        }}>
          <Alert type="success" message="Changes saved successfully!" />
          <Alert type="warning" message="Your session will expire in 5 minutes." />
          <Alert type="error" message="Unable to save changes. Please try again." />
          <Alert type="info" message="New features are available in this version." />
        </div>
      </section>
    </div>
  );
}

function Alert({ type, message }) {
  const styles = {
    success: {
      background: 'var(--color-feedback-success-bg)',
      border: '1px solid var(--color-feedback-success-border)',
      color: 'var(--color-feedback-success-text)',
    },
    warning: {
      background: 'var(--color-feedback-warning-bg)',
      border: '1px solid var(--color-feedback-warning-border)',
      color: 'var(--color-feedback-warning-text)',
    },
    error: {
      background: 'var(--color-feedback-error-bg)',
      border: '1px solid var(--color-feedback-error-border)',
      color: 'var(--color-feedback-error-text)',
    },
    info: {
      background: 'var(--color-feedback-info-bg)',
      border: '1px solid var(--color-feedback-info-border)',
      color: 'var(--color-feedback-info-text)',
    },
  };

  return (
    <div style={{
      ...styles[type],
      padding: 'var(--spacing-component-padding-md)',
      borderRadius: 'var(--radius-component-card)',
      fontSize: 'var(--typography-body-sm-font-size)',
    }}>
      {message}
    </div>
  );
}

export default App;
