# 2.3.1
- Use latest lib for validation api updates

# 2.3.0
- Exposed validation api via metaAPI.metaform.validateForm(formName)

# 2.2.0
- [Add support for react 19](https://github.com/manojadams/mui-forms/issues/128)

# 2.1.1
- [feature-115: Dynamic select fields](@manojadams/metaforms-core)
- [fix #118: fix for condition not working for string values](https://github.com/manojadams/mui-forms/issues/118)

# 2.1.0
- Add ability to add customize form footer.

# 2.0.20
- Updated dependencies and core package for latest improvements
- Documentation updates

# 2.0.14
- README updates and improvements

# 2.0.0

## Major Release - Version 2

### New Features
- New field types: File upload, Input mask, Multi select, Multitext
- Material icons support
- Preload initial data with `data` prop
- Loader support for next/submit actions
- Multiple file upload capability
- Remote data loading with POST API support
- Field spacing configuration (gapX, gapY)
- Native HTML props support in basic form controls
- Enhanced validation system
- Server-side error handling support

### Improvements
- Improved documentation and examples

### Bug Fixes
- Fixed dynamic data loading for select control
- Fixed form data passing with onChange event
- Fixed columns in wizard forms

### Deprecated
- Validation parameters: `patternDetail`, `requiredDetail`, `infoDetail`, `minDetail`, `maxDetail`
- `useNextResponse` input property removed
- Property names: Use `patternMatchUrlLoader`, `propUpdate`, `loadOptions` instead of snake_case versions

# 1.0.8
- Version bump with package improvements

# 1.0.0
- Initial release of mui-forms
- Material UI component integration
- JSON-based form schema support
- Support for custom components and controls