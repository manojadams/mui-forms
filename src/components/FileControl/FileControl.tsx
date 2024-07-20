import React, { useRef, useState } from "react";
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
import FilePreviewContainer from "./FilePreviewContainer";

interface IProps extends IFieldProps {
    section: string;
    showValidation: () => JSX.Element;
}

function FileControl(props: IProps) {
    const [isOpen, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const fileRef = useRef<HTMLInputElement | null>(null);
    const fileContainerRef = useRef<HTMLDivElement | null>(null);
    const [filePreviews, setFilePreviews] = useState<string[]>([]);

    const meta = props.form;
    const hasFilePreview = (meta.config as Record<string, string>)?.filePreview ?? false;
    const dropdownPlacement = ((meta.config as Record<string, string>)?.dropdownPlacement ??
        "bottom-end") as PopperPlacementType;
    const displayLabel = MuiFormUtil.getDisplayLabel(props.form);

    const handleFileChange = (e: any) => {
        let value = e.target.value;
        if (value) {
            const valParts = value.split("\\");
            if (valParts && valParts.length > 0) {
                value = valParts[valParts.length - 1];
            }
            props.handleChange(e, value);

            if (meta.config?.multiple) {
                const files = e.target.files && e.target.files.length > 0 ? e.target.files : null;
                if (files && files.length > 0) {
                    props.context.setFieldProp(props.section, props.field.name, "files", Array.from(files));
                }
            } else {
                const file = e.target.files && e.target.files.length > 0 ? e.target.files[0] : null;
                props.context.setFieldProp(props.section, props.field.name, "file", file);
            }
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
        setFilePreviews([]);
        props.handleChange(null, "");
        props.context.setFieldProp(props.section, props.field.name, "file", null);
        props.context.setFieldProp(props.section, props.field.name, "files", null);
        handleClose();
    };

    return (
        <FormControl
            className={props.className}
            size={props.size}
            ref={fileContainerRef}
            sx={{
                position: "relative",
                height: "100%"
            }}
            fullWidth
            error={props.error.hasError ? true : undefined}
        >
            {hasFilePreview && (
                <FilePreviewContainer
                    file={props.form.file}
                    files={props.form.files}
                    filePreviews={filePreviews}
                    setFilePreviews={setFilePreviews}
                    multiple={meta.config?.multiple as boolean | undefined}
                    previewHeight={(meta.config as Record<string, string>)?.previewHeight}
                    previewWidth={(meta.config as Record<string, string>)?.previewWidth}
                    title={displayLabel}
                    resetFileValue={() => {
                        if (fileRef.current?.value) {
                            fileRef.current.value = "";
                        }
                    }}
                />
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
                {
                    meta.config?.multiple
                        ? `${props.form?.files?.length} file(s) selected`
                        : meta.value || displayLabel
                }
                </DisplayLabel>
                <Icon>arrow_downward</Icon>
            </Button>
            <InputControl
                accept={meta.config?.accept as string}
                multiple={meta.config?.multiple as boolean | undefined}
                className="minput-file"
                type="file"
                name={props.field.name}
                title={displayLabel}
                ref={fileRef}
                onChange={handleFileChange}
            />
            <Popper
                open={isOpen}
                anchorEl={anchorRef.current}
                placement={dropdownPlacement}
                container={fileContainerRef.current}
                sx={{zIndex: 2}}
            >
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

const DisplayLabel = styled.span<{ active: boolean }>`
    color: ${(props) => (props.active ? "rgb(0,0,0)" : "rgba(0,0,0,0.56)")};
`;

const InputControl = styled.input`
    display: none;
`;

export default FileControl;
