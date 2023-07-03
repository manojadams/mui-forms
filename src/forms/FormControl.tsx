import React, { Fragment } from "react";
import { BaseFormControl, IRenderField } from "@manojadams/metaforms-core";
import { Button, FilledInputProps, FormHelperText, InputProps, OutlinedInputProps } from "@mui/material";
import MuiSearch from "./Search";
import { TVariant } from "./ constants";

import NumberFormatter from "../components/NumberFormatter";
import Phone from "../components/Phone";
import Label from "../components/Label";
import DateControl from "../components/DateControl";
import MonthControl from "../components/MonthControl";
import InputControl from "../components/InputControl";
import RadioControl from "../components/RadioControl";
import RadioButtonControl from "../components/RadioButtonControl";
import CheckboxControl from "../components/CheckboxControl";
import SelectControl from "../components/SelectControl";
import MultiSelectControl from "../components/MultiSelectControl";
import FileControl from "../components/FileControl/FileControl";
import CustomControl from "../components/CustomControl";

export default class FormControl extends BaseFormControl {
    variant: string;
    size: any;
    constructor(props: IRenderField) {
        super(props);
        this.variant = "filled";
        this.validate = this.validate.bind(this);
        this.showValidation = this.showValidation.bind(this);
    }

    render(): JSX.Element {
        const muiVariant = this.context.getThemeProp("config", "variant");
        const muiSize = this.context.getThemeProp("config", "size");
        this.variant = muiVariant || this.variant;
        this.size = muiSize || "medium";
        return super.render();
    }

    getVariant() {
        return (this.field.meta?.themeConfig?.variant ?? this.variant) as TVariant;
    }

    getDisplayLabel() {
        return this.props.form.validation?.required ? this.props.form.displayName + " *" : this.props.form.displayName;
    }

    label() {
        return (
            <Label
                className={this.getWrapperClassName()}
                context={this.context}
                field={this.field}
                form={this.props.form}
                size={this.size}
                variant={this.getVariant()}
                error={this.state.error}
                handleChange={this.handleChange}
                handleValidation={this.handleValidation}
                setError={this.setError}
            />
        );
    }

    date(props?: IRenderField) {
        return (
            <DateControl
                className={this.getWrapperClassName()}
                context={this.context}
                field={this.field}
                form={this.props.form}
                error={this.state.error}
                variant={this.getVariant() ?? ""}
                section={this.section}
                size={this.size}
                handleChange={this.handleChange}
                handleValidation={this.handleValidation}
                setError={this.setError}
                {...props}
            />
        );
    }

    month() {
        return (
            <MonthControl
                className={this.getWrapperClassName()}
                context={this.context}
                field={this.field}
                form={this.props.form}
                error={this.state.error}
                variant={this.getVariant() ?? ""}
                size={this.size}
                handleChange={this.handleChange}
                handleValidation={this.handleValidation}
                setError={this.setError}
            />
        );
    }

    input(
        type: string,
        props?: any,
        InputProps?: Partial<FilledInputProps> | Partial<OutlinedInputProps> | Partial<InputProps>
    ) {
        return (
            <InputControl
                className={this.getWrapperClassName()}
                context={this.context}
                form={this.props.form}
                field={this.field}
                error={this.state.error}
                size={this.size}
                variant={this.getVariant()}
                InputProps={InputProps}
                type={type}
                handleChange={this.handleChange}
                handleValidation={this.handleValidation}
                setError={this.setError}
                {...props}
            />
        );
    }

    text() {
        const maxLength = this.props.form.validation?.max ?? "";
        let extraProps;
        if (maxLength) {
            extraProps = {
                maxLength: maxLength
            };
        }
        return this.input("text", extraProps);
    }

    password() {
        return this.input("password");
    }

    email() {
        return this.input("email");
    }

    number() {
        return this.input("number");
    }

    radio() {
        return (
            <RadioControl
                className={this.getWrapperClassName()}
                context={this.context}
                field={this.field}
                form={this.props.form}
                error={this.state.error}
                size={this.size}
                variant={this.getVariant()}
                handleChange={this.handleChange}
                handleValidation={this.handleValidation}
                setError={this.setError}
            />
        );
    }

    radioButton(): JSX.Element {
        return (
            <RadioButtonControl
                className={this.getWrapperClassName()}
                context={this.context}
                field={this.field}
                form={this.props.form}
                error={this.state.error}
                size={this.size}
                variant={this.getVariant()}
                handleChange={this.handleChange}
                handleValidation={this.handleValidation}
                setError={this.setError}
                showValidation={this.showValidation}
            />
        );
    }

    checkbox(): JSX.Element {
        return (
            <CheckboxControl
                className={this.getWrapperClassName()}
                context={this.context}
                field={this.field}
                form={this.props.form}
                error={this.state.error}
                size={this.size}
                variant={this.getVariant()}
                handleChange={this.handleChange}
                handleValidation={this.handleValidation}
                setError={this.setError}
                showValidation={this.showValidation}
            />
        );
    }

    select() {
        return (
            <SelectControl
                className={this.getWrapperClassName()}
                context={this.context}
                field={this.field}
                form={this.props.form}
                error={this.state.error}
                size={this.size}
                variant={this.getVariant()}
                handleChange={this.handleChange}
                handleOpen={this.handleOpen}
                handleValidation={this.handleValidation}
                setError={this.setError}
                showValidation={this.showValidation}
            />
        );
    }

    multiselect(): JSX.Element {
        return (
            <MultiSelectControl
                className={this.getWrapperClassName()}
                context={this.context}
                field={this.field}
                form={this.props.form}
                error={this.state.error}
                size={this.size}
                variant={this.getVariant()}
                handleChange={this.handleChange}
                handleOpen={this.handleOpen}
                handleValidation={this.handleValidation}
                setError={this.setError}
                showValidation={this.showValidation}
            />
        );
    }

    button() {
        return <Button variant="contained">Contained</Button>;
    }

    search() {
        const restConfig = this.context.getRestConfig();
        return (
            <MuiSearch
                name={this.field.name}
                form={this.props.form}
                label={this.getDisplayLabel() || ""}
                variant={this.getVariant()}
                config={restConfig}
                handleChange={this.handleChange}
                handleValidation={this.handleValidation}
                context={this.context}
                section={this.section}
                error={this.state.error}
                loading={this.state.loading}
            />
        );
    }

    file() {
        return (
            <FileControl
                className={this.getWrapperClassName()}
                context={this.context}
                field={this.field}
                form={this.props.form}
                error={this.state.error}
                section={this.section}
                size={this.size}
                variant={this.getVariant()}
                handleChange={this.handleChange}
                handleValidation={this.handleValidation}
                setError={this.setError}
                showValidation={this.showValidation}
            />
        );
    }

    hint() {
        return <Fragment />;
    }

    phone() {
        const meta = this.props.meta;
        return (
            <Fragment>
                <Phone
                    className={this.getWrapperClassName()}
                    context={this.context}
                    error={this.state.error}
                    field={this.field}
                    form={this.props.form}
                    size={this.size}
                    validate={this.validate}
                    variant={this.getVariant()}
                    handleChange={this.handleChange}
                    handleValidation={this.handleValidation}
                    setError={this.setError}
                    validation={meta.validation}
                />
                {this.showValidation()}
            </Fragment>
        );
    }

    currency() {
        const InputComponent = NumberFormatter;
        const maxLength = this.props.form.validation?.max || "";
        const autoComplete = this.props.form?.config?.autocomplete || undefined;
        let htmlProps = {};
        if (maxLength || autoComplete) {
            htmlProps = {
                maxLength: maxLength,
                autoComplete
            };
        }
        const extraProps = {
            inputComponent: InputComponent
        };
        return this.input("number", htmlProps, extraProps);
    }

    templateControl(): JSX.Element {
        if (this.props.form.displayType) {
            return (
                <CustomControl
                    className={this.getWrapperClassName()}
                    context={this.context}
                    field={this.field}
                    form={this.props.form}
                    error={this.state.error}
                    size={this.size}
                    variant={this.getVariant()}
                    handleChange={this.handleChange}
                    handleValidation={this.handleValidation}
                    setError={this.setError}
                    showValidation={this.showValidation}
                />
            );
        }
        return this.text();
    }

    showValidation(infoMsg?: string) {
        let className = "";
        let icon = <Fragment />;
        if (this.state.error.hasError) {
            className = "meta-validation-error";
            icon = this.context.getIcon("error") || <Fragment />;
        } else {
            if (infoMsg) {
                className = "meta-validation-info";
                icon = this.context.getIcon("info") || <Fragment />;
            }
        }
        return (
            <FormHelperText className={className}>
                {icon}
                {this.state.error.errorMsg || infoMsg}
            </FormHelperText>
        );
    }
}
