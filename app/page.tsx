'use client'
import { useState } from "react";

import { update } from "../actions";


export default function Page() {
  const [data, setData] = useState(0)
  return (
    <>
      <h1>Turso Embedded Replica Is Broken</h1>

      <button onClick={async () => {
        const newData = await update()
        setData(newData)
      }}>Update {data}</button>
    </>
  );
}
