// The single entry point (JS-7): state, then site behaviour, then components.
// This file is provided by figoya-site and checked against the manifest; put
// site behaviour in ./site.js, not here.
import './state/index.js';
import './site.js';
import './components/header.js';
import './components/footer.js';
