import React from "react";

export default function Footer() {
  return (
    <div className="bg-black text-white px-3 py-8">
      <div className="container mx-auto flex flex-wrap gap-3 text-nowrap">
        <div className="flex-1">
          <div className="text-xl font-semibold tracking-tight">Abstract</div>
          <div className="font-medium opacity-70 text-sm">Branches</div>
        </div>
        <div className="flex-1">
          <div className="text-xl font-semibold tracking-tight">Resources</div>
          <div className="font-medium opacity-70 text-sm">
            <p>Blog</p>
            <p>Help Center</p>
            <p>Release Notes</p>
            <p>Status</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xl font-semibold tracking-tight">Community</div>
          <div className="font-medium opacity-70 text-sm">
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Facebook</p>
            <p>Dribbles</p>
            <p>Podcast</p>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-xl font-semibold tracking-tight">Company</div>
          <div className="font-medium opacity-70 text-sm">
            <p>About Us</p>
            <p>Careers</p>
            <p>Legal</p>
          </div>
          <div className="text-xl font-semibold tracking-tight mt-2">
            Contact Us
          </div>
          <div className="font-medium opacity-70 text-sm">
            Info@abstract.com
          </div>
        </div>
        <div className="flex items-end text-sm tracking-tighter">
          <div className="flex-1">
            <p>©Copyright 2022</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
