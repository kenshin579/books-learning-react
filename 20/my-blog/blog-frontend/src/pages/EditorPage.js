import React from 'react';
import EditorTemplate from "components/editor/EditorTemplate";
import EditorHeader from "components/editor/EditorHeader";
import PreviewPane from "components/editor/PreviewPane";
import EditorPaneContainer from "containers/editor/EditorPaneContainer";

const EditorPage = () => {
    return (
        <EditorTemplate
            header={<EditorHeader/>}
            editor={<EditorPaneContainer/>}
            preview={<PreviewPane/>}/>
    );
};

export default EditorPage;
