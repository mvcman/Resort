self.addEventListener('install', (event) => {
  console.log('Service worker install!');
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activated!');
})
