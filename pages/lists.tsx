import React, { useEffect, useRef, useState } from "react";
import { Alert, Grid } from "@mui/material";
import { Container } from "@mui/system";
import useSWR from "swr";
import NoteLists from "@/components/NoteLists";

const fetcher = async (url: string) => {
  const data = await (await fetch(url)).json();
  return data;
};

export default function Lists() {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });
  const { data, error } = useSWR(`/api/entries`, fetcher);
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
        {data?.["finalData"]?.map((note) => (
          <Grid key={note.id} item xs={12} md={6} lg={4}>
            <NoteLists note={note}></NoteLists>
          </Grid>
        )) ?? "Data might be corrupted"}
      </Grid>
      <footer
        style={{
          textAlign: "center",
          color: "red",
        }}
      >{`This component has rendered ${renderCount.current} times`}</footer>
    </Container>
  );
}
