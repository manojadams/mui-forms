import MuiFormUtil from "../../Utils/MuiFormUtil";

describe("MuiFormUtil", () => {
    describe("getDisplayLabel", () => {
        it("should return label with asterisk when field is required", () => {
            const form = {
                displayName: "Username",
                validation: { required: true }
            };
            expect(MuiFormUtil.getDisplayLabel(form)).toBe("Username *");
        });

        it("should return label without asterisk when field is not required", () => {
            const form = {
                displayName: "Username",
                validation: { required: false }
            };
            expect(MuiFormUtil.getDisplayLabel(form)).toBe("Username");
        });

        it("should return label without asterisk when validation is undefined", () => {
            const form = {
                displayName: "Username"
            };
            expect(MuiFormUtil.getDisplayLabel(form)).toBe("Username");
        });
    });

    describe("getCheckboxValue", () => {
        it("should return null or undefined if value is null or undefined", () => {
            expect(MuiFormUtil.getCheckboxValue(null)).toBeNull();
            expect(MuiFormUtil.getCheckboxValue(undefined)).toBeUndefined();
        });

        it("should convert boolean value to string", () => {
            expect(MuiFormUtil.getCheckboxValue(true)).toBe("true");
            expect(MuiFormUtil.getCheckboxValue(false)).toBe("false");
        });

        it("should convert number value to string", () => {
            expect(MuiFormUtil.getCheckboxValue(123)).toBe("123");
            expect(MuiFormUtil.getCheckboxValue(0)).toBe("0");
        });

        it("should return the same value if it's already a string", () => {
            expect(MuiFormUtil.getCheckboxValue("hello")).toBe("hello");
        });
    });
});
