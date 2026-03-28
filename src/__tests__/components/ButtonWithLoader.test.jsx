import { render } from "@testing-library/react";
import React from "react";
import ButtonWithLoader from "../../components/ButtonWithLoader/ButtonWithLoader";

describe("ButtonWithLoader", () => {
    it("should render text when not loading", () => {
        const { getByText, queryByTestId } = render(
            <ButtonWithLoader
                isLoading={false}
                isLoaderDisabled={false}
                loader={<span data-testid="loader">Loading...</span>}
                text="Submit"
            />
        );
        expect(getByText("Submit")).toBeTruthy();
        expect(queryByTestId("loader")).toBeNull();
    });

    it("should render loader when loading and loader is enabled", () => {
        const { getByTestId, queryByText } = render(
            <ButtonWithLoader
                isLoading={true}
                isLoaderDisabled={false}
                loader={<span data-testid="loader">Loading...</span>}
                text="Submit"
            />
        );
        expect(getByTestId("loader")).toBeTruthy();
        expect(queryByText("Submit")).toBeNull();
    });

    it("should render text when loading but loader is disabled", () => {
        const { getByText, queryByTestId } = render(
            <ButtonWithLoader
                isLoading={true}
                isLoaderDisabled={true}
                loader={<span data-testid="loader">Loading...</span>}
                text="Submit"
            />
        );
        expect(getByText("Submit")).toBeTruthy();
        expect(queryByTestId("loader")).toBeNull();
    });
});
