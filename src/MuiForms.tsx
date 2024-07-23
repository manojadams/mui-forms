import CoreFormRenderer, { IFormRenderer, metaAPI } from "@manojadams/metaforms-core";
import React from "react";
import FormControl from "./forms/FormControl";
import FormGroup from "./forms/FormGroup";
import { FormStepper } from "./forms/FormStepper";
import { Button, CircularProgress } from "@mui/material";
import FormWizard from "./forms/FormWizard";
import ButtonWithLoader from "./components/ButtonWithLoader";
import { MuiColor } from "./common";

/**
 * Dynamically render forms using `metaforms schema` and `mui components`
 */
class MuiForms extends React.Component<IFormRenderer> {
    state: {
        isLoading: boolean;
    };

    constructor(props: IFormRenderer) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    render() {
        const loaderColor = this.props.config?.loader?.color as MuiColor;
        const isLoaderEnabled = this.props.config?.loader?.enabled === true;
        const configSize = this.props.config?.size as "medium" | "small" | "large" | undefined;

        return (
            <CoreFormRenderer
                buttons={{
                    submit: (
                        <ButtonWithLoader
                            isLoading={this.state.isLoading}
                            isLoaderDisabled={!isLoaderEnabled}
                            loader={<CircularProgress color={loaderColor ?? "inherit"} size={24} />}
                            size={configSize ?? "medium"}
                            text="Submit"
                        />
                    ),
                    next: (
                        <ButtonWithLoader
                            isLoading={this.state.isLoading}
                            isLoaderDisabled={!isLoaderEnabled}
                            loader={<CircularProgress color={loaderColor ?? "inherit"} size={24} />}
                            size={configSize ?? "medium"}
                            text="Submit"
                        />
                    ),
                    previous: <Button variant="text">Previous</Button>,
                    cancel: <Button variant="text">Cancel</Button>
                }}
                {...this.props}
                config={{
                    gapX: 1,
                    gapY: 1,
                    ...this.props.config
                }}
                baseFormControl={FormControl}
                baseFormGroup={FormGroup}
                baseFormStepper={FormStepper}
                baseFormWizard={FormWizard}
                setLoading={(isLoading: boolean) => this.setState({ isLoading })}
            />
        );
    }
}

export { metaAPI };

export default MuiForms;
