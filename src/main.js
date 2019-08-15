import 'minireset.css';
import 'milligram';
import App from './App.svelte';

const app = new App({
	target: document.querySelector('#app')
});

export default app;