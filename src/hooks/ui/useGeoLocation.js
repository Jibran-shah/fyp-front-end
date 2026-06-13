import { useEffect, useState } from "react";

export function useGeoLocation(setValue) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      setStatus("denied");
      return;
    }

    setStatus("requesting");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setValue("locationLat", lat, {
          shouldDirty: false,
          shouldTouch: false,
          shouldValidate: false,
        });

        setValue("locationLn", lng, {
          shouldDirty: false,
          shouldTouch: false,
          shouldValidate: false,
        });

        setStatus("granted");
        setError("");
      },
      () => {
        setStatus("denied");
        setError("Location access denied. You can still continue manually.");
      }
    );
  }, [setValue]);

  return { status, error };
}