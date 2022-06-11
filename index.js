window.addEventListener('load', () => { registrerSW() })
async function registrerSW() {
    if ('serviceWorker' in navigator) {
        try { await navigator.serviceWorker.register('./sw.js') } catch (e) { console.log('SW falhou') }
    }

}