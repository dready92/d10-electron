// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import os from 'os'; // native node.js module
import { remote } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import env from './env';

//var app = remote.app;
//var appDir = jetpack.cwd(app.getAppPath());

import login from './components/login/login';
import library from './components/library/library';
