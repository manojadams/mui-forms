import React, { Fragment, useEffect, useRef, useState } from "react";
import {
    Button,
    ClickAwayListener,
    FormControl,
    Icon,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    PopperPlacementType
} from "@mui/material";
import styled from "@emotion/styled";
import { IFieldProps } from "../../common/field";
import MuiFormUtil from "../../Utils/MuiFormUtil";

interface IProps extends IFieldProps {
    section: string;
    showValidation: () => JSX.Element;
}

function FileControl(props: IProps) {
    const [isOpen, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const fileRef = useRef<HTMLInputElement | null>(null);
    const [filePreview, setFilePreview] = useState("");

    
    const meta = props.form;
    const hasFilePreview = (meta.config as Record<string, string>)?.filePreview ?? false;
    const previewHeight = (meta.config as Record<string, string>)?.previewHeight ?? "150px";
    const previewWidth = (meta.config as Record<string, string>)?.previewWidth ?? "auto";
    const dropdownPlacement = ((meta.config as Record<string, string>)?.dropdownPlacement ??
    "bottom-end") as PopperPlacementType;
    const displayLabel = MuiFormUtil.getDisplayLabel(props.form);
    
    useEffect(() => {
        if (hasFilePreview && props.form.file) {
            handleFilePreview(props.form.file);
        }
    }, [hasFilePreview, props.form.file]);

    const handleFilePreview = (file: File) => {
        if (file !== null) {
            const reader = new FileReader();
            reader.onload = (response) => {
                if (response.target?.result) {
                    setFilePreview(response.target.result as string);
                }
                if (fileRef.current?.value) {
                    fileRef.current.value = "";
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleFileChange = (e: any) => {
        let value = e.target.value;
        if (value) {
            const valParts = value.split("\\");
            if (valParts && valParts.length > 0) {
                value = valParts[valParts.length - 1];
            }
            const file = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
            props.handleChange(e, value);
            props.context.setFieldProp(props.section, props.field.name, "file", file);
            // handleFilePreview(file);
            props.handleValidation();
        }
    };

    const handleToggle = () => {
        setOpen(!isOpen);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpload = () => {
        if (fileRef.current) {
            fileRef.current.click();
        }
    };

    const handleRemove = () => {
        setFilePreview("");
        props.handleChange(null, "");
        props.context.setFieldProp(props.section, props.field.name, "file", null);
        handleClose();
    };

    return (
        <FormControl
            className={props.className}
            size={props.size}
            sx={{
                position: "relative",
                height: "100%"
            }}
            fullWidth
            error={props.error.hasError ? true : undefined}
        >
            {hasFilePreview && filePreview ? (
                <PreviewContainer className="meta-file-preview-container">
                    <Image
                        className="meta-file-preview"
                        src={filePreview}
                        alt="File preview"
                        title={displayLabel}
                        previewHeight={previewHeight}
                        previewWidth={previewWidth}
                    />
                </PreviewContainer>
            ) : (
                <Fragment />
            )}
            <Button
                className="meta-file-upload-btn"
                variant="outlined"
                size={props.size || "medium"}
                ref={anchorRef}
                onClick={handleToggle}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    height: "100%"
                }}
                fullWidth
            >
                <Icon>cloud_upload</Icon>
                <DisplayLabel className="meta-file-value" active={!!meta.value}>
                    {meta.value || displayLabel}
                </DisplayLabel>
                <Icon>arrow_downward</Icon>
            </Button>
            <InputControl
                accept={meta.config?.accept as string}
                className="minput-file"
                type="file"
                name={props.field.name}
                title={displayLabel}
                ref={fileRef}
                onChange={handleFileChange}
            />
            <Popper open={isOpen} anchorEl={anchorRef.current} placement={dropdownPlacement}>
                <Paper>
                    <ClickAwayListener
                        onClickAway={(event) => {
                            if (event.target !== anchorRef.current) {
                                handleClose();
                            }
                        }}
                    >
                        <MenuList
                            sx={{
                                width: anchorRef.current?.clientWidth ?? 150
                            }}
                        >
                            <MenuItem
                                onClick={handleUpload}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}
                            >
                                <span>Upload</span>
                                <Icon color="info">upload_2</Icon>
                            </MenuItem>
                            <MenuItem
                                onClick={handleRemove}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}
                            >
                                <span>Remove</span>
                                <Icon color="error">close</Icon>
                            </MenuItem>
                        </MenuList>
                    </ClickAwayListener>
                </Paper>
            </Popper>
            {props.showValidation()}
        </FormControl>
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

const DisplayLabel = styled.span<{ active: boolean }>`
    color: ${(props) => (props.active ? "rgb(0,0,0)" : "rgba(0,0,0,0.56)")};
`;

const InputControl = styled.input`
    display: none;
`;

export default FileControl;
