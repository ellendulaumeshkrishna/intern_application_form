import React from "react";
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function mypdfViewer({ fileUrl }) {
    return (
        <div style={{ height: '600px' }}>
            <Viewer fileUrl={fileUrl} />
        </div>
    );
}

export default mypdfViewer;

