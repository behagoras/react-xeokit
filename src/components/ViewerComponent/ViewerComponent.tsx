// @ts-ignore
import { Viewer, WebIFCLoaderPlugin } from "https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/xeokit-sdk.es.min.js";
import React, { useEffect } from 'react';

import { ViewerConfig } from "../../types/viewer.types";

export interface ViewerProps {
  config: ViewerConfig;
  onViewerLoaded?: (viewer: Viewer) => void;
}

export default function ViewerComponent({ config, onViewerLoaded }: ViewerProps) {

  const { canvasId, transparent } = config
  useEffect(() => {
    const initViewer = async () => {
      await new Promise((resolve) => setTimeout(() => resolve(1), 100));
      const viewer = new Viewer({
        canvasId,
        transparent,
      })
      if (onViewerLoaded && viewer) {
        onViewerLoaded(viewer)
      }
      else {
        viewer.camera.eye = [-3.933, 2.855, 27.018];
        viewer.camera.look = [4.400, 3.724, 8.899];
        viewer.camera.up = [-0.018, 0.999, 0.039];
        const webIFCLoader = new WebIFCLoaderPlugin(viewer, {
          // Path to web-ifc.wasm, which does the IFC parsing for us
          wasmPath: "https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/"
        });
        webIFCLoader.load({
          src: "https://3dves-shared-files.s3.us-west-2.amazonaws.com/products/bimep/Duplex_A_20110505_IssuesAlternate.ifc",
          edges: true
        });
        console.log({ viewer });
      }
    }
    initViewer()
  }, []);
  // useEffect(() => {
  //   if (viewer && onViewerLoaded) onViewerLoaded(viewer)
  // }, [viewer]);
  return (
    <canvas id="myCanvas" />
  )
}
