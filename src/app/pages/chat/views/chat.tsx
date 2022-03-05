import * as Mui from "@mui/material";

export const Chat = ({ index }: { index: number }) => (
  <Mui.Card
    sx={{
      position: "relative",
      borderRadius: 5,
      maxWidth: 500,
      width: "fit-content",
      height: "fit-content",
      bgcolor: (theme) =>
        theme.palette.mode === "dark"
          ? `${theme.palette.primary.main}20`
          : undefined,
      ...(index % 2
        ? { borderTopLeftRadius: 0, mr: "auto", ml: 0 }
        : { borderTopRightRadius: 0, ml: "auto", mr: 0 }),
    }}
  >
    <Mui.CardContent sx={{ height: "fit-content" }}>
      <Mui.Typography variant="body2">
        Some Content more content about anonymous chat application now growing
        well isdidus iejfd diwenc wei ciuew iuewr iuwned oiewc iuwe
      </Mui.Typography>
      <Mui.Typography
        variant="caption"
        color="text.secondary"
        sx={{
          position: "absolute",
          ...(index % 2 ? { right: 15 } : { left: 15 }),
        }}
      >
        {new Date().toLocaleTimeString()}
      </Mui.Typography>
    </Mui.CardContent>
  </Mui.Card>
);
