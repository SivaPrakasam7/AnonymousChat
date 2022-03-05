import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

export const SenderBox = () => {
  return (
    <Mui.Grid
      item
      xs={8.8}
      container
      spacing={2}
      sx={{
        position: "absolute",
        width: "100%",
        bottom: 10,
      }}
    >
      <Mui.Grid item xs={11}>
        <Mui.TextField
          fullWidth
          size="small"
          placeholder="Type your message..."
          variant="outlined"
          InputProps={{
            endAdornment: (
              <Mui.InputAdornment position="end" sx={{ mr: -1 }}>
                <Mui.IconButton size="small">
                  <MuiIcons.Send
                    color="primary"
                    sx={{ transform: "rotate(-45deg)" }}
                  />
                </Mui.IconButton>
              </Mui.InputAdornment>
            ),
          }}
          sx={{
            bgcolor: "background.default",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: (theme) => theme.palette.primary.light,
              },
              "&:hover fieldset": {
                borderColor: (theme) => theme.palette.primary.light,
              },
              "&.Mui-focused fieldset": {
                borderColor: (theme) => theme.palette.primary.light,
              },
            },
          }}
        />
      </Mui.Grid>
      <Mui.Grid item xs={1}>
        <Mui.IconButton
          sx={{
            bgcolor: "primary.main",
            color: "#fff",
            "&:hover": { bgcolor: "primary.main" },
          }}
        >
          <MuiIcons.Add />
        </Mui.IconButton>
      </Mui.Grid>
    </Mui.Grid>
  );
};
