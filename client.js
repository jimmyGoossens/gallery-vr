// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

/*import SurfacrTwoo from './components/SurfaceTwoo.js';*/
function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  const flat = new Surface(400, 600, Surface.SurfaceShape.Flat)
  const flat2 = new Surface(400, 600, Surface.SurfaceShape.Flat)
  const flat3 = new Surface(600, 400, Surface.SurfaceShape.Flat)
  const flat4 = new Surface(600, 400, Surface.SurfaceShape.Flat)
  const flat5 = new Surface(400, 600, Surface.SurfaceShape.Flat)
  const flat6 = new Surface(600, 400, Surface.SurfaceShape.Flat)
  const flat7 = new Surface(600, 400, Surface.SurfaceShape.Flat)
  flat3.setAngle(0, 0);
  flat.setAngle(-Math.PI / 3, 0);
  flat2.setAngle(Math.PI / 3, 0);
  flat4.setAngle(Math.PI, 0);
  flat5.setAngle(-Math.PI / 1.5, 0);
  flat6.setAngle(Math.PI/ 1.5, 0);
  flat7.setAngle(0, Math.PI/2);


  r360.renderToSurface(
    r360.createRoot('Hello360'),
    flat2
  );
  r360.renderToSurface(
    r360.createRoot('SurfaceTwoo'),
    flat
  );
  r360.renderToSurface(
    r360.createRoot('SurfaceThree'),
    flat3
  );
  r360.renderToSurface(
    r360.createRoot('SurfaceFour'),
    flat4
  );
  r360.renderToSurface(
    r360.createRoot('SurfaceFive'),
    flat5
  );
  r360.renderToSurface(
    r360.createRoot('SurfaceSix'),
    flat6
  );
  r360.renderToSurface(
    r360.createRoot('SurfaceSeven'),
    flat7
  );
  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
