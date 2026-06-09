import { Grid, Card, CardContent, Typography } from "@mui/material";
import {Section} from "../../common/layout/Section";

const mockProducts = [
  { id: 1, name: "iPhone 14", price: "$999" },
  { id: 2, name: "MacBook Pro", price: "$1999" },
  { id: 3, name: "AirPods", price: "$199" }
];

export default function FeaturedProducts() {
  return (
    <Section title="Featured Products" subtitle="Top products from sellers">

      <Grid container spacing={2}>
        {mockProducts.map((p) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <Card sx={{ backgroundColor: "#1e293b", color: "white" }}>
              <CardContent>
                <Typography fontWeight="bold">{p.name}</Typography>
                <Typography variant="body2" color="gray">
                  {p.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Section>
  );
}