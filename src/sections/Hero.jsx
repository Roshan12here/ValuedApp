"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [selectedImage, setSelectedImage] = useState(0)
  const images = ["./j1.jpg", "./j2.jpg", "./j3.jpg"]

  return (
    <div className="bg-white mt-4">
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-[#001731] sm:text-5xl xl:text-6xl">
                High Quality
                <span className="block text-[#004493]">Leather</span>
                Products
              </h1>
              <p className="max-w-[600px] text-lg text-[#002E62]/80">
                Discover High quality leather products that are made to last. Shop our collection of shoes, bags, and
                accessories.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-full bg-[#002E62] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#001731] focus:outline-none focus:ring-2 focus:ring-[#002E62] focus:ring-offset-2">
              Shop now
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-[#001731]">1k+</p>
                <p className="text-sm text-[#002E62]/70">Brands</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#001731]">500+</p>
                <p className="text-sm text-[#002E62]/70">Shops</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#001731]">250k+</p>
                <p className="text-sm text-[#002E62]/70">Customers</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative mt-6">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-gray-50 p-8 shadow-sm">
              <img
                src={images[selectedImage] || "/placeholder.svg"}
                alt="Featured product"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="mt-4 flex gap-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square w-24 overflow-hidden rounded-lg border-2 transition-all ${
                    selectedImage === index
                      ? "border-[#004493] shadow-md"
                      : "border-transparent hover:border-[#002E62]/20"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Product ${index + 1}`}
                    className="object-contain w-full h-full p-2"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
