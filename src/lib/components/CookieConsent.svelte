<script>
  import { onMount } from 'svelte';

  let visible = false;

  const STORAGE_KEY = 'cookieConsent';

  onMount(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      visible = consent !== 'accepted';
    } catch (_) {
      visible = true;
    }
  });

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch (_) {}
    visible = false;
  }
</script>

{#if visible}
  <div class="cookie-consent" role="dialog" aria-live="polite">
    <div class="cookie-content">
      <p>
        We use cookies to improve your experience. By using this site, you agree to our use of cookies.
        <a href="/support" class="link">Learn more</a>
      </p>
      <button class="btn-accept" on:click={accept} aria-label="Accept cookies">Accept</button>
    </div>
  </div>
{/if}

<style>
  .cookie-consent {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    padding: 0.75rem;
  }

  .cookie-content {
    max-width: 960px;
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
    background: rgba(20, 20, 32, 0.95);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  }

  .cookie-content p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.85);
  }

  .link {
    color: #a78bfa;
    text-decoration: underline;
    margin-left: 0.25rem;
  }

  .btn-accept {
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 0.9rem;
    font-weight: 600;
    cursor: pointer;
  }

  .btn-accept:hover {
    transform: translateY(-1px);
  }

  @media (max-width: 560px) {
    .cookie-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
  }
</style>