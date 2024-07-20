import React from "react";
import styled from "@emotion/styled";

interface IProps {
    filePreview: string;
    previewWidth: string;
    previewHeight: string;
    title: string;
}

function FilePreview(props: IProps) {
    return (
        <PreviewContainer className="meta-file-preview-container">
            <Image
                className="meta-file-preview"
                src={props.filePreview}
                alt="File preview"
                title={props.title}
                previewHeight={props.previewHeight}
                previewWidth={props.previewWidth}
            />
        </PreviewContainer>
    );
}

const PreviewContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
`;

const Image = styled.img<{ previewHeight: string; previewWidth: string }>`
    border-radius: 8px;
    width: ${(props) => props.width};
    height: ${(props) => props.previewHeight};
`;

export default FilePreview;
