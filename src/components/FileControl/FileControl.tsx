import React, { Fragment } from "react";
import { IFieldProps } from "../../common/field";
import { Button, FormControl } from "@mui/material";
import MuiFormUtil from "../../Utils/MuiFormUtil";
import styled from "@emotion/styled";

interface IProps extends IFieldProps {
    section: string;
    showValidation: () => JSX.Element;
}

function FileControl(props: IProps) {
    const meta = props.form;
    const fileUploadedIcon = props.context.getIcon("fileUploaded");
    const fileDeleteIcon = props.context.getIcon("fileDelete");
    const uploadIcon = props.context.getIcon("uploadIcon");
    const fileWidthClass = meta.value ? "w-80" : "w-100";
    const displayLabel = MuiFormUtil.getDisplayLabel(props.form);
    const handleFileChange = (e: any) => {
        let value = e.target.value;
        if (value) {
            const valParts = value.split("\\");
            if (valParts && valParts.length > 0) {
                value = valParts[valParts.length - 1];
            }
            props.handleChange(e, value);
            props.context.setFieldProp(props.section, props.field.name, "files", e.target.files);
            props.handleValidation();
        }
    };
    return (
        <FormControl
            className={props.className}
            size={props.size}
            sx={{
                position: "relative"
            }}
            fullWidth
            error={props.error.hasError ? true : undefined}
        >
            <Button
                className="meta-file-upload-btn"
                variant="outlined"
                size={props.size || "medium"}
                onClick={(e) => {
                    let target: any;
                    // eslint-disable-next-line prefer-const
                    target = e.target;
                    const fileInput = target.parentElement.querySelector("input[type=file]");
                    fileInput && fileInput.click();
                }}
                sx={{
                    padding: "1.4rem"
                }}
                fullWidth
            >
                {meta.value ? (
                    <Block>
                        {uploadIcon}
                        <span className="meta-file-value"> {meta.value}</span>
                        {fileUploadedIcon}
                        <span
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                // delete file
                                props.context.setFieldProp(props.section, props.field.name, "files", "");
                                props.handleChange(e, "");
                                props.handleValidation();
                            }}
                        >
                            {fileDeleteIcon}
                        </span>
                    </Block>
                ) : (
                    <Fragment>
                        {uploadIcon}
                        {displayLabel}
                    </Fragment>
                )}
            </Button>
            <InputControl
                accept={meta.config?.accept as string}
                className="minput-file"
                type="file"
                name={props.field.name}
                title={displayLabel}
                onChange={handleFileChange}
            />
            {props.showValidation()}
        </FormControl>
    );
}

const Block = styled.div`
    display: flex;
`;

const InputControl = styled.input`
    position: absolute;
    top: 0;
    left; 0;
    opacity: 0;
    height: 100%;
`;

export default FileControl;
