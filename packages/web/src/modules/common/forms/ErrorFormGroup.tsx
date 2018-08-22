import { FormGroup, IFormGroupProps, Intent } from "@blueprintjs/core";
import { FieldProps } from "formik";
import * as React from "react";

export interface ErrorFormGroupProps extends IFormGroupProps {
  fieldProps: FieldProps<any>;
  children: (infos: { hasErrors: boolean }) => JSX.Element | null;
}

export default class ErrorFormGroup extends React.Component<
  ErrorFormGroupProps,
  any
> {
  public render() {
    const { fieldProps, helperText, ...formGroupProps } = this.props;
    let finalHelperText = helperText;
    let finalIntent: Intent = Intent.NONE;
    let hasErrors = false;
    const name = fieldProps.field.name;
    if (fieldProps.form.touched[fieldProps.field.name]) {
      const errorFound = fieldProps.form.errors[name];
      hasErrors = !!errorFound;
      finalIntent = Intent.DANGER;
      finalHelperText = errorFound || helperText;
    }
    return (
      <FormGroup
        {...formGroupProps}
        intent={finalIntent}
        helperText={finalHelperText}
      >
        {this.props.children({
          hasErrors,
        })}
      </FormGroup>
    );
  }
}
