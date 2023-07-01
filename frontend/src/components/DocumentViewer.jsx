import React from "react";
import { DocumentViewer } from "react-documents";

const DoocumentViewer = ({ selectedDoc }) => {
  return (
    <DocumentViewer
      queryParams="hl=Nl"
      url={selectedDoc}
      overrideLocalhost="https://react-doc-viewer.firebaseapp.com/"
    ></DocumentViewer>
  );
};

export default DoocumentViewer;

{
  /* <DocumentViewer
      queryParams="hl=Nl"
      url={selectedDoc}
      viewerUrl={selectedViewer.viewerUrl}
      viewer={selectedViewer.name}
      overrideLocalhost="https://lider-doc-viewer/"
    ></DocumentViewer> */
}
