import * as Components from "src/app/components";

export const Content = ({ disabled }: { disabled: boolean }) => (
  <>
    <Components.FormFields.ImageSelector
      disabled={disabled}
      label=""
      name="profile"
      sx={{ height: 150, width: 150 }}
    />
    <Components.FormFields.FormField
      disabled={disabled}
      name="name"
      label=""
      placeholder="Username"
      // variant="standard"
      sx={{ "& input": { textAlign: "center" } }}
    />
    <Components.FormFields.SubmitButton>
      Join
    </Components.FormFields.SubmitButton>
  </>
);
