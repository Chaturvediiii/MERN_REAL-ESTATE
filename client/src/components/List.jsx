import React,{useState, useEffect} from "react";
import ListingItem from "./ListingItem";
import { Link } from "react-router-dom";

export default function List() {
    const [listings, setListings] = useState([]);  

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch('/api/listing/get?limit=4');
        const data = await res.json();
        setListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchListings();
  }, []);
  return (
    <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
    {listings && listings.length > 0 && (
      <div className=''>
        <div className='my-3'>
          <h2 className='text-2xl font-semibold text-slate-600'>Recent Properties</h2>
          <Link className='text-sm text-blue-800 hover:underline' to={'/properties'}>Show more properties</Link>
        </div>
        <div className='flex flex-wrap gap-3'>
          {listings.map((listing) => (
            <ListingItem listing={listing} key={listing._id} />
          ))}
        </div>
      </div>
    )}
  </div>
  )
}
