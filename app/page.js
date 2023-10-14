"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Replicate from "replicate";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/predictions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
      },
      body: JSON.stringify({
        //image: "https://avatars.githubusercontent.com/u/147882946?v=4"
        image: "https://replicate.delivery/mgxm/8b4d747d-feca-477d-8069-ee4d5f89ad8e/a_high_detail_shot_of_a_cat_wearing_a_suit_realism_8k_-n_9_.png"
      }),
    });
    let prediction = await response.json();
    console.log(prediction);
    if (response.status !== 201) {
      setError(prediction.detail);
      return;
    }
    setPrediction(prediction);

    while (
      prediction.status !== "succeeded" &&
      prediction.status !== "failed"
    ) {
      await sleep(1000);
      const response = await fetch("/api/predictions/" + prediction.id);
      prediction = await response.json();
      if (response.status !== 200) {
        setError(prediction.detail);
        return;
      }
      console.log({prediction})
      setPrediction(prediction);
    }
    
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Replicate + Next.js</title>
      </Head>

      <p>
        Dream something with{" "}
        <a href="https://replicate.com/stability-ai/stable-diffusion">SDXL</a>:
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" name="prompt" placeholder="Enter a prompt to display an image" />
        <button type="submit">Go!</button>
      </form>

      {error && <div>{error}</div>}

      {prediction && (
        <div>
            {prediction.output && (
              prediction.output
            )}
            <p>status: {prediction.status}</p>
        </div>
      )}
    </div>
  );
}