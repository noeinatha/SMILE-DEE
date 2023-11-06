import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Select your dentist", "Booking", "Finish"];

export default function StepBar({
  title,
  step,
}: {
  title: string;
  step: number;
}) {
  return (
    <div className="flex flex-col gap-2.5 p-5 justify-center">
      <div className="font-sans font-medium text-lg text-darkpurple pb-3">
        {title}
      </div>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
