import { Button, Classes, Dialog, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { gql } from "apollo-boost";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import * as React from "react";
import { myApolloClient } from "../../apollo";
import { AddAccountVariables } from "./grapqhl_types/AddAccount";

export interface IAddAccountDialogProps {
  isOpen: boolean;
  onClose: () => void;
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

  public render() {
    const { isOpen, onClose } = this.props;
    return (
      <Dialog
        isOpen={isOpen}
        canEscapeKeyClose={true}
        isCloseButtonShown={true}
        onClose={onClose}
        icon={IconNames.ADD}
        title="Add account"
      >
        <Formik
          initialValues={{ name: "" }}
          onSubmit={this.onSave}
          render={(formikBag: FormikProps<AddAccountVariables>) => (
            <Form>
              <div className={Classes.DIALOG_BODY}>
                <Field
                  name="name"
                  render={({
                    field,
                    form,
                  }: FieldProps<AddAccountVariables>) => (
                    <div>
                      <input type="text" {...field} placeholder="Name" />
                      {form.touched.name &&
                        form.errors.name &&
                        form.errors.name}
                    </div>
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
    });
    this.props.onClose();
  }
}
