import React, { Fragment } from "react";
import { IFieldProps } from "../../common/field";
import { Button, FormControl } from "@mui/material";
import MuiFormUtil from "../../Utils/MuiFormUtil";

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
            fullWidth
            error={props.error.hasError ? true : undefined}
        >
            <Button
                className="meta-file-upload-btn"
                variant="outlined"
                size="large"
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
                    <div className="d-flex">
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
                    </div>
                ) : (
                    <Fragment>
                        {uploadIcon}
                        {displayLabel}
                    </Fragment>
                )}
            </Button>
            <input
                accept={meta.config?.accept as string}
                className={`position-absolute opacity-0 ${fileWidthClass} h-100`}
                type="file"
                name={props.field.name}
                title={displayLabel}
                onChange={handleFileChange}
            />
            {props.showValidation()}
        </FormControl>
    );
}

export default FileControl;
