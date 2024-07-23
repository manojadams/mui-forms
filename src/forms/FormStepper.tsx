import React from "react";
import { IField, BaseFormStepper } from "@manojadams/metaforms-core";
import Stepper, { Orientation } from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Box } from "@mui/material";

export class FormStepper extends BaseFormStepper {
    orientation: Orientation | undefined;

    constructor(props: { fields: Array<IField>; theme: string }) {
        super(props);
        const stepper = this.context?.formConfig?.config as Record<string, Orientation>;
        this.orientation = stepper?.orientation ?? "horizontal";
    }

    steps() {
        const steps = this.fields.map((field) => (field?.meta?.displayName ? field.meta.displayName : field.name));
        return (
            <Box
                className="meta-form-stepper"
                data-pagenumber={this.state.activeIndex + 1}
                sx={{ width: "100%", overflowX: "auto" }}
            >
                <Stepper activeStep={this.state.activeIndex} alternativeLabel orientation={this.orientation}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        );
    }

    next(e: React.SyntheticEvent) {
        if (this.state.activeIndex < this.fields.length - 1) {
            this.setActiveIndex(this.state.activeIndex + 1);
        }
        e.preventDefault();
    }
}
