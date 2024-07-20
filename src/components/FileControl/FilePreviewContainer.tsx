import React, { useEffect } from "react";
import FilePreview from "./FilePreview";

interface IProps {
    file?: File | null;
    files?: File[] | null;
    filePreviews: string[];
    setFilePreviews: (fileData: string[]) => void;
    multiple?: boolean;
    previewWidth?: string;
    previewHeight?: string;
    title?: string;
    resetFileValue: () => void;
}

function FilePreviewContainer(props: IProps) {
    const handleFilePreview = (files: File[]) => {
        const _filesData: string[] = [];
        files.forEach((file) => {
            if (file !== null) {
                const reader = new FileReader();
                reader.onload = (response) => {
                    if (response.target?.result) {
                        _filesData.push(response.target.result as string);
                    }
                    if (_filesData.length === files.length) {
                        props.setFilePreviews(_filesData);
                        props.resetFileValue();
                    }
                };
                reader.readAsDataURL(file);
            }
        })
    };

    useEffect(() => {
        if (props.multiple) {
            props.files && handleFilePreview(Array.from(props.files));
        } else if (props.file) {
            handleFilePreview([props.file]);
        }
    }, [props.file, props.files]);

    return (
        <div>
        {props.filePreviews.map((filePreview, idx) => (
                <FilePreview 
                    key={idx}
                    filePreview={filePreview}
                    previewHeight={props.previewHeight ?? "150px"}
                    previewWidth={props.previewWidth ?? "auto"}
                    title={props.title ?? ""}
                />
            ))
        }
        </div>
    );
}

export default FilePreviewContainer;
