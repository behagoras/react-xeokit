export interface ViewerConfig {
  canvasId: string;
  transparent?: boolean;
}

// @ts-ignore
import { Viewer, WebIFCLoaderPlugin } from "https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/xeokit-sdk.es.min.js";

export {WebIFCLoaderPlugin, Viewer}
