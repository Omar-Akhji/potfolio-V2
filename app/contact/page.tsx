"use client";

import { useState, useEffect, useRef } from "react";
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  type MapRef,
} from "@/components/ui/map";
import { Send, ChevronDown, Check } from "lucide-react";

const mapStyles = {
  default: undefined,
  openstreetmap: "https://tiles.openfreemap.org/styles/bright",
  openstreetmap3d: "https://tiles.openfreemap.org/styles/liberty",
};

type StyleKey = keyof typeof mapStyles;

const styleLabels: Record<StyleKey, string> = {
  default: "Dark Matter",
  openstreetmap: "OSM Bright",
  openstreetmap3d: "OSM 3D",
};

export default function ContactPage() {
  const mapRef = useRef<MapRef>(null);
  const [style, setStyle] = useState<StyleKey>("default");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedStyle = mapStyles[style];
  const is3D = style === "openstreetmap3d";

  useEffect(() => {
    mapRef.current?.easeTo({ pitch: is3D ? 60 : 0, duration: 800 });
  }, [is3D]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <article className="animate-fade-in border-glass-border bg-bg shadow-1 lg:shadow-5 z-1 rounded-[1.25rem] border p-4 pb-12 sm:mx-auto sm:w-130 sm:p-8 sm:pb-20 md:w-175 lg:w-237.5 xl:min-h-full xl:w-auto">
      {/* ── Page Title ── */}
      <header>
        <h2 className="text-text after:from-yellow after:to-orange relative mb-8 pb-2 text-2xl font-semibold capitalize after:absolute after:bottom-0 after:left-0 after:h-0.75 after:w-8 after:rounded-sm after:bg-linear-to-r sm:pb-4 sm:text-[2rem] sm:font-semibold sm:after:h-1.25 sm:after:w-10">
          Contact
        </h2>
      </header>

      {/* ── Map ── */}
      <section className="mb-10">
        <div className="border-glass-border relative h-62.5 w-full overflow-hidden rounded-2xl border bg-white/5 sm:h-100">
          <Map
            ref={mapRef}
            center={[-6.83255, 33.9715]}
            zoom={12}
            theme="dark"
            styles={
              selectedStyle
                ? { light: selectedStyle, dark: selectedStyle }
                : undefined
            }
          >
            <MapMarker longitude={-6.83255} latitude={33.9715}>
              <MarkerContent>
                <div className="relative flex h-5 w-5 items-center justify-center">
                  <div className="bg-orange absolute h-full w-full animate-ping rounded-full opacity-20" />
                  <div className="bg-orange ring-orange/20 h-3 w-3 rounded-full shadow-[0_0_10px_rgba(255,165,0,0.5)] ring-4" />
                </div>
              </MarkerContent>
              <MarkerPopup closeButton={false}>
                <div className="bg-bg/95 border-glass-border rounded-xl border p-3 shadow-2xl backdrop-blur-md">
                  <h3 className="text-orange text-sm font-semibold tracking-wide">
                    Rabat
                  </h3>
                  <p className="text-text-muted text-[0.75rem] font-light">
                    Morocco
                  </p>
                </div>
              </MarkerPopup>
            </MapMarker>
          </Map>

          {/* Style Selector Dropdown */}
          <div className="absolute top-4 right-4 z-10" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-bg/85 text-text border-glass-border hover:border-orange/50 flex items-center gap-2 rounded-xl border px-3 py-2 text-[0.7rem] font-medium tracking-wider uppercase backdrop-blur-xl transition-all duration-300 focus:outline-none"
            >
              <span>Map: {styleLabels[style]}</span>
              <ChevronDown
                className={`h-3 w-3 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isDropdownOpen && (
              <div className="bg-bg/95 border-glass-border animate-in fade-in zoom-in-95 absolute top-full right-0 mt-2 min-w-40 overflow-hidden rounded-xl border shadow-2xl backdrop-blur-2xl">
                {(Object.keys(mapStyles) as StyleKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setStyle(key);
                      setIsDropdownOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-[0.7rem] font-medium tracking-wide transition-colors hover:bg-white/5 ${
                      style === key
                        ? "text-orange"
                        : "text-text-muted/80 hover:text-text"
                    }`}
                  >
                    <span>{styleLabels[key]}</span>
                    {style === key && <Check className="h-3 w-3" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Contact Form (Mock matching CV aesthetic) ── */}
      <section>
        <h3 className="text-text mb-6 text-xl font-semibold capitalize sm:text-2xl">
          Contact Form
        </h3>

        <form className="space-y-6" action="#">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                name="fullname"
                className="bg-card border-glass-border text-text placeholder:text-text-muted focus:border-orange focus:ring-orange/50 w-full rounded-xl border p-4 transition-all focus:ring-1 focus:outline-none"
                placeholder="Full name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                className="bg-card border-glass-border text-text placeholder:text-text-muted focus:border-orange focus:ring-orange/50 w-full rounded-xl border p-4 transition-all focus:ring-1 focus:outline-none"
                placeholder="Email address"
                required
              />
            </div>
          </div>

          <div>
            <textarea
              name="message"
              className="bg-card border-glass-border text-text placeholder:text-text-muted focus:border-orange focus:ring-orange/50 min-h-37.5 w-full resize-y rounded-xl border p-4 transition-all focus:ring-1 focus:outline-none"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="group from-yellow to-orange text-bg ml-auto flex items-center gap-2 rounded-full bg-linear-to-r px-6 py-3 font-semibold shadow-[0_0_15px_rgba(255,165,0,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_25px_rgba(255,165,0,0.6)] focus:outline-none"
          >
            <Send className="h-5 w-5" />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}
