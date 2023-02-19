import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { IError } from '@manojadams/metaforms-core';
import { MetaForm } from '@manojadams/metaforms-core';
import { IConfig, IMeta, IOption } from '@manojadams/metaforms-core';
import {FormUtils} from '@manojadams/metaforms-core';

export default function Search(props: IProps) {
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState(props.form.options || []);
    const [value, setValue] = useState<IOption | null>(null);
    const inputEv = props.form.events?.input;
    const wrapperClassName = 'meta-form-control-' + props.name;

    useEffect(() => {
        if (props.form.options && props.form.options.length > 0) {
            const value = FormUtils.getSearchValue(props.form.options, props.form.value);
            setOptions(props.form.options);
            if (value) {
                setValue(value);
            }
        }
    },[props.form.options]);
    
    useEffect(() => {
        setLoading(props.loading);
    },[props.loading]);

    return (
        <Autocomplete 
            value={value}
            options={options}
            loading={loading}
            className={wrapperClassName}
            isOptionEqualToValue={(option, value) => value && value.value === option.value}
            onChange={(e, val) => {
                const actualValue = val?.value ? val.value : inputEv?.value && val && val[inputEv.value]
                    ? val[inputEv.value] : '';
                props.handleChange(e, actualValue, val);
                if (val) {
                    setValue(val);
                }
            }}
            onBlur={()=> props.handleValidation()}
            onInputChange={(e:any, val:string) => {
                const config = props.form.events?.input || props.form.config;
                if (config) {
                    setLoading(true);
                    props.context.getData(config, val, props.section, '$input')
                        .then((results: Array<IOption>) => {
                            setOptions(results);
                            setLoading(false);
                        }).catch(error => {
                            setOptions([]);
                            setLoading(false);
                            props.context.handleError(error, props.section, props.name);
                            
                        });
                }
            }}
            renderInput={(params:any) => <TextField {...params} 
                    label={props.label}
                    variant={props.variant}
                    error={props.error.hasError}
                    helperText={props.error.errorMsg}
                />}
        />
    )
}

interface IProps {
    name: string;
    form: IMeta;
    variant: string;
    config: IConfig;
    label: string;
    loading: boolean;
    handleChange: Function;
    handleValidation: Function;
    context: MetaForm;
    section: string;
    error: IError;
}