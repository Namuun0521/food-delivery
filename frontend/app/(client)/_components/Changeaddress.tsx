"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/lib/axios";
import { useState } from "react";

export const Changeaddress = ({
  onClose,
  onSaved,
}: {
  onClose?: () => void;
  onSaved?: () => void;
}) => {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const save = async () => {
    if (!address.trim()) return;

    try {
      setLoading(true);
      await api.put("/users/address", { address: address.trim() });
      onSaved?.();
      onClose?.();
    } finally {
      setLoading(false);
    }
  };
  // console.log(address);
  return (
    <div className="flex flex-col gap-6">
      <p>Please write your delivery address!</p>

      <Input
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Please share your complete address"
        className="pb-13 pt-3"
      />

      <div className="flex gap-4 justify-end">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="button" onClick={save} disabled={loading}>
          {loading ? "Saving..." : "Deliver here"}
        </Button>
      </div>
    </div>
  );
};
