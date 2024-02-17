
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Akila stephen Musa"
            company="Shiba holdings"
            email="shibaholdingd.com"
            vat="1235476"
          />
          <Bill
            name="Daniel musa"
            company="stone tech zone"
            email="Danielmusa-Elroy.com"
            vat="1234"
          />
          <Bill
            name="ethan iliya"
            company="Flogeth"
            email="ethan@flogeth.com"
            vat="1235476"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
