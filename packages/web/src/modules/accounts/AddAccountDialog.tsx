import {
  Button,
  Classes,
  Dialog,
  FormGroup,
  InputGroup,
  Intent,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { gql } from "apollo-boost";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import * as React from "react";
import * as yup from "yup";
import { myApolloClient } from "../../apollo";
import { AddAccountVariables } from "../../typings/graphql";
import ErrorFormGroup from "../common/forms/ErrorFormGroup";

export interface IAddAccountDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onClosed?: () => void;
}

export default class AddAccountDialog extends React.Component<
  IAddAccountDialogProps
> {
  private ADD_ACCOUNT = gql`
    mutation AddAccount($name: String!) {
      addAccount(name: $name) {
        id
        name
      }
    }
  `;

  private validationSchema = yup.object().shape({
    name: yup.string().required(),
  });

  public render() {
    const { isOpen, onClose, onClosed } = this.props;
    return (
      <Dialog
        isOpen={isOpen}
        canEscapeKeyClose={true}
        isCloseButtonShown={true}
        onClose={onClose}
        onClosed={onClosed}
        icon={IconNames.ADD}
        title="Add account"
      >
        <Formik
          initialValues={{ name: "" }}
          onSubmit={this.onSave}
          validationSchema={this.validationSchema}
          render={(formikBag: FormikProps<AddAccountVariables>) => (
            <Form>
              <div className={Classes.DIALOG_BODY}>
                <Field
                  name="name"
                  render={({
                    field,
                    form,
                  }: FieldProps<AddAccountVariables>) => (
                    <ErrorFormGroup
                      fieldProps={{ field, form }}
                      label="Name"
                      labelFor="text-input"
                      labelInfo="(required)"
                    >
                      {({ hasErrors }) => (
                        <InputGroup
                          {...field}
                          id="text-input"
                          placeholder="Give account name"
                          intent={hasErrors ? Intent.DANGER : Intent.NONE}
                        />
                      )}
                    </ErrorFormGroup>
                  )}
                />
              </div>
              <div className={Classes.DIALOG_FOOTER}>
                <div className={Classes.DIALOG_FOOTER_ACTIONS}>
                  <Button
                    type="submit"
                    intent={Intent.PRIMARY}
                    disabled={!formikBag.dirty || !formikBag.isValid}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </Form>
          )}
        />
      </Dialog>
    );
  }
  private onSave = (values: AddAccountVariables) => {
    myApolloClient.mutate({
      mutation: this.ADD_ACCOUNT,
      variables: values,
      refetchQueries: ["GetAccounts"],
    });
    this.props.onClose();
  }
}
