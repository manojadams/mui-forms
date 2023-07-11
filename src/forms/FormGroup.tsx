import React from "react";
import { BaseFormGroup, Sections, IField, ISchema } from "@manojadams/metaforms-core";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import { TTabVariant } from "./ constants";

export default class FormGroup extends BaseFormGroup {
    // eslint-disable-next-line no-useless-constructor
    constructor(props: ISchema) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    tabs(): JSX.Element {
        const tabVariant: TTabVariant = this.context.formConfig?.config?.tabs?.variant as TTabVariant;
        return (
            <Box
                data-pagenumber={this.state.activeIndex + 1}
                sx={{
                    maxWidth: { xs: 320, sm: "unset", md: "unset" },
                    overflowX: "auto",
                    borderBottom: 1,
                    borderColor: "divider"
                }}
            >
                <Tabs
                    variant={tabVariant}
                    allowScrollButtonsMobile
                    value={this.state.activeIndex}
                    onChange={this.handleChange}
                    aria-label="tabs"
                >
                    {this.state.tabFields.map((tabField: IField, index: number) => {
                        const displayName = tabField?.meta?.displayName ? tabField.meta.displayName : tabField.name;
                        const isDisabled = tabField?.meta?.isDisabled ? true : undefined;
                        return <Tab key={displayName + index} label={displayName} disabled={isDisabled} />;
                    })}
                </Tabs>
            </Box>
        );
    }

    panels(): JSX.Element {
        return <Sections sections={this.sectionFields} activeIndex={this.state.activeIndex} error={this.state.error} />;
    }

    handleChange(arg: React.SyntheticEvent, index: number) {
        this.setActiveIndex(index);
    }

    render(): JSX.Element {
        return super.render();
    }
}
