const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

type Config = {
  onSuccess?: (registration: ServiceWorkerRegistration) => void; 
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
}; 

export function registration(config?: Config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if(publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/serviceWorker.js`;

      if(isLocalhost) {
        checkValidServiceWorker(swUrl, config);
        navigator.serviceWorker.ready.then(() => {
          console.log('This web app is begin served cache-first by a service worker');
        });
      } else {
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl: string, config?: Config) {
  navigator
    .serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing; 
        if(installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if(installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              console.log('new content is available and will be used when all tabs for this page are closed.');
              if(config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              console.log('Content is cached for offline use.'); 
              if(config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        }
      }
    })
    .catch((error) => {
      console.log('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl: string, config?: Config) {
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script'}
  }).then((respone) => {
    const contentType = respone.headers.get('content-type');
    if(respone.status === 404 || (contentType != null && contentType.indexOf('javascript') === -1)) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      registerValidSW(swUrl, config);
    }
  })
  .catch(() => {
    console.log('No internet connection found. App is running offline mode.');
  });
}

export function unregister() {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    })
    .catch((error) => {
      console.log(error.message);
    });
  }
}