import { onMount } from "svelte";

export function initFeedefyWidget(projectId: string, lang = '') {
  onMount(() => {
    if (!projectId) {
      console.error('No projectId was passed to Feedefy Svelte, widget will not be initialized');
      return;
    }
  
    const script = document.createElement('script');
  
    if (lang) {
      script.lang = lang;
    }
  
    script.src = `https://app.feedefy.com/embed.js?id=${projectId}`;
    script.defer = true;
    script.addEventListener('error', () => script.remove());
  
    document.body.appendChild(script);
  });
}