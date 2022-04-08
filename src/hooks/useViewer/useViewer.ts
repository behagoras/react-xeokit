import React, { useEffect } from 'react'
// @ts-ignore
import { Viewer, WebIFCLoaderPlugin } from "https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/xeokit-sdk.es.min.js";
import { ViewerConfig } from '../../types';

export default function useViewer({ canvasId, transparent }: ViewerConfig) {
  const [viewer, setViewer] = React.useState<Viewer | null>(null);
  useEffect(() => {
    const getViewer = async () => {
      await new Promise((resolve) => setTimeout(() => resolve(1), 100));
      setViewer(new Viewer({
        canvasId,
        transparent,
      }))
    }
    getViewer();
  }, []);
  return viewer;
}
