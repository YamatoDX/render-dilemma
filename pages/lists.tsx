import { Alert, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import useSWR from "swr";
import NoteLists from "@/components/NoteLists";

const API = `/api/entries`;
const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};
const fetcher = async (url: string) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`That's an error`);
  }
  const data = await res.json();

  return data;
};

export default function Lists() {
  const { data, error } = useSWR(API, fetcher);
  console.log(`Data: `, data);

  if (error) {
    return <Alert>Loading Failed: {error.message}</Alert>;
  }

  if (!data) {
    return <Alert>Loading...</Alert>;
  }

  return (
    <Container>
      <h1>Lists</h1>
      <Grid container spacing={3}>
        {data.map((note) => (
          <Grid key={note.id} item xs={12} md={6} lg={4}>
            <NoteLists note={note}></NoteLists>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
