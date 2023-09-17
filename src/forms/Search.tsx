import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IError, MetaForm, IConfig, IOption, FormUtils, IFormField } from "@manojadams/metaforms-core";
import { TVariant } from "./ constants";
import { TValue } from "@manojadams/metaforms-core/dist/constants/types";

interface IProps {
    name: string;
    form: IFormField;
    variant: TVariant;
    config: IConfig;
    label: string;
    loading: boolean;
    handleChange: (e: React.SyntheticEvent, val1: TValue, val2: IOption | undefined) => void;
    handleValidation: () => void;
    context: MetaForm;
    section: string;
    size?: "small" | "medium";
    error: IError;
}

export default function Search(props: IProps) {
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState(props.form.options || []);
    const [value, setValue] = useState<IOption | null>(null);
    const inputEv = props.form.events?.input;
    const wrapperClassName = "meta-form-control-" + props.name;

    useEffect(() => {
        if (props.form.options && props.form.options.length > 0) {
            const value = FormUtils.getSearchValue(props.form.options, props.form.value);
            setOptions(props.form.options);
            if (value) {
                setValue(value as IOption);
            }
        }
    }, [props.form.options]);

    useEffect(() => {
        setLoading(props.loading);
    }, [props.loading]);

    return (
        <Autocomplete
            className={wrapperClassName}
            value={value}
            options={options}
            loading={loading}
            size={props.size}
            isOptionEqualToValue={(option, value) => value && value.value === option.value}
            onChange={(e, val) => {
                const actualValue = val?.value
                    ? val.value
                    : inputEv?.value && val && val[inputEv.value]
                    ? val[inputEv.value]
                    : "";
                props.handleChange(e, actualValue, val !== null ? val : undefined);
                if (val) {
                    setValue(val);
                }
            }}
            onBlur={() => props.handleValidation()}
            onInputChange={(e, val: string) => {
                const config = props.form.events?.input || props.form.config;
                if (config) {
                    setLoading(true);
                    props.context
                        .getData(config, val, props.section, "$input")
                        .then((results: Array<IOption>) => {
                            setOptions(results);
                            setLoading(false);
                        })
                        .catch((error) => {
                            setOptions([]);
                            setLoading(false);
                            props.context.handleError(error, props.section, props.name);
                        });
                }
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={props.label}
                    variant={props.variant}
                    error={props.error.hasError}
                    helperText={props.error.errorMsg}
                />
            )}
        />
    );
}
