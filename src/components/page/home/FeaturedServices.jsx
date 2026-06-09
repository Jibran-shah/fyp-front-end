import { Grid, Card, CardContent, Typography } from "@mui/material";
import {Section} from "../../common/layout/Section"

const mockServices = [
  { id: 1, name: "Web Development", price: "$300" },
  { id: 2, name: "Graphic Design", price: "$150" },
  { id: 3, name: "SEO Optimization", price: "$200" }
];

export default function FeaturedServices() {
  return (
    <Section title="Featured Services" subtitle="Hire skilled professionals">

      <Grid container spacing={2}>
        {mockServices.map((s) => (
          <Grid item xs={12} sm={6} md={4} key={s.id}>
            <Card sx={{ backgroundColor: "#1e293b", color: "white" }}>
              <CardContent>
                <Typography fontWeight="bold">{s.name}</Typography>
                <Typography variant="body2" color="gray">
                  {s.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Section>
  );
}