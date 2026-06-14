import {
  Card,
  CardContent,
  Typography,
  Button
} from "@mui/material";

import "./PostoCard.css";

export default function PostoCard({ posto }) {
  return (
    <Card className="posto-card">

      <div className="posto-header">
        📍 {posto.nome}
      </div>

      <CardContent className="posto-info">

        <div className="info">
          🏠 {posto.endereco}
        </div>

        <div className="info">
          🏙️ {posto.cidade} - {posto.uf}
        </div>

        <Button
          variant="contained"
          className="maps-btn"
          onClick={() => window.open(posto.link)}
        >
          📍 Abrir no Maps
        </Button>

      </CardContent>

    </Card>
  );
}