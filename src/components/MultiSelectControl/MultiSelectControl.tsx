import React, { ChangeEvent } from "react";
import { IFieldProps } from "../../common/field";
import MuiFormUtil from "../../Utils/MuiFormUtil";
import { Box, Chip, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TVariant } from "../../forms/ constants";

interface IProps extends IFieldProps {
    handleOpen: () => void;
    showValidation: () => JSX.Element;
}

const renderAsCSV = (selected: Array<string>) => selected.join(", ");

const renderAsChips = (selected: Array<string>) => (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
        {selected.map((value) => (
            <Chip key={value} label={value} />
        ))}
    </Box>
);

function MultiSelectControl(props: IProps) {
    const options = props.form.options || [];
    const label = MuiFormUtil.getDisplayLabel(props.form);
    const renderValue = (props.form.config as Record<string, string>)?.variant === "chip" ? renderAsChips : renderAsCSV;
    const value = (props.form?.value as string | string[]) || [];

    return (
        <FormControl
            size={props.size}
            fullWidth
            error={props.error.hasError ? true : undefined}
            variant={props.variant as TVariant}
            className={props.className}
        >
            <InputLabel className="meta-select-label">{label}</InputLabel>
            <Select
                multiple
                label={props.form.displayName}
                disabled={props.form.isDisabled}
                renderValue={renderValue}
                value={value}
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
            {props.showValidation()}
        </FormControl>
    );
}

export default MultiSelectControl;
