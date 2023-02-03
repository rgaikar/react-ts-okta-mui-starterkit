import { Box, Typography } from "@mui/material";

// Layout
const Welcome = () => {
  return (
    <Box p={4}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: 1,
          width: "100%",
          alignContent: "center",
        }}
      >
        <Box gridColumn="span 12" sx={{ justifySelf: "center" }}>
          {/* Header */}
          <Typography variant="h1" component="div" gutterBottom>
            <div data-testid="heading-text">React Starterkit - Takeda</div>
          </Typography>
          <Typography variant="h2" component="div" gutterBottom>
            <div>React + TS + Okta + MUI</div>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
