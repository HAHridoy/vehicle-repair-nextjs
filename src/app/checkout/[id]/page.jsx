import React from 'react'

export default async function CheckOutPage({params}) {
    const p = await params;

  return (
    <div>CheckOutPage
        <h2>CheckOut Page - {p.id}</h2>
        <pre>{JSON.stringify(p, null, 2)}</pre>
    </div>
    
  )
}
