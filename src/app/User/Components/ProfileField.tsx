"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PencilIcon } from "lucide-react";

interface ProfileFieldProps {
  name: string;
  label: string;
  value: string;
  isEditable: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEdit: () => void;
  type?: string;
}

export default function ProfileField({
  name,
  label,
  value,
  isEditable,
  onChange,
  onEdit,
  type = "text",
}: ProfileFieldProps) {
  return (
    <div className="relative">
      <Label htmlFor={name}>{label}</Label>
      <div className="flex items-center">
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={`Enter your ${label.toLowerCase()}`}
          className="shadow-sm flex-grow"
          readOnly={!isEditable}
        />
        {!isEditable && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={onEdit}
          >
            <PencilIcon className="h-4 w-4" />
            <span className="sr-only">Edit {label}</span>
          </Button>
        )}
      </div>
    </div>
  );
}
