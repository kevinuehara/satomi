import { Input } from "@/components/ui/input";
import { HTMLProps } from "react";

interface InputFileProps extends HTMLProps<HTMLInputElement> {}

export const InputFile = ({ onChange, accept }: InputFileProps) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input id="file" type="file" onChange={onChange} accept={accept} />
    </div>
  );
};
