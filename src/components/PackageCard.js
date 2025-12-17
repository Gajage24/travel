import React from 'react'
import '../styles/packagecard.css'

 const PackageCard=({ data })=> {
return (
<div className="package-card">
<img src={data.img} alt="Package" />
<h3>{data.title}</h3>
<p>{data.summary}</p>
<div className="bottom">
<span>{data.price}</span>
<a href="/booking">Book</a>
</div>
</div>
)
}
export default PackageCard;
