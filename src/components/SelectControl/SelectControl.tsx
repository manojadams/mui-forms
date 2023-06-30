import React, { ChangeEvent } from "react";
import { IFieldProps } from "../../common/field";
import MuiFormUtil from "../../Utils/MuiFormUtil";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TVariant } from "../../forms/ constants";

interface IProps extends IFieldProps {
    handleOpen: () => void;
    showValidation: (info?: string) => JSX.Element;
}

function SelectControl(props: IProps) {
    const options = props.form.options || [];
    const label = MuiFormUtil.getDisplayLabel(props.form);
    const wrapperClassName = "meta-form-control-" + props.field.name;
    const infoText = props.form?.validation?.infoDetail?.infoMsg;
    return (
        <FormControl
            size={props.size}
            fullWidth
            error={props.error.hasError ? true : undefined}
            variant={props.variant as TVariant}
            className={wrapperClassName}
        >
            <InputLabel className="meta-select-label">{label}</InputLabel>
            <Select
                label={props.form.displayName}
                value={props.form?.value}
                disabled={props.form.isDisabled}
                onOpen={() => {
                    if (props.form.events?.open) {
                        props.handleOpen();
                    }
                }}
                onChange={(e) => {
                    const val = e.target.value;
                    const ref = options.find((o) => o.value === val);
                    props.handleChange(e as ChangeEvent, undefined, ref);
                }}
                onBlur={props.handleValidation}
            >
                {options &&
                    options.map((option: { label: string; value: string }) => {
                        const datatype = typeof option.value;
                        return (
                            <MenuItem key={option.value} datatype={datatype} value={option.value}>
                                {option.label}
                            </MenuItem>
                        );
                    })}
            </Select>
            {props.showValidation(infoText)}
        </FormControl>
    );
}

export default SelectControl;
