import React from "react";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

function SubmitButton({ children, title, ...otherProps }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton title={title} onPress={handleSubmit} {...otherProps}>
      {children}
    </AppButton>
  );
}

export default SubmitButton;
