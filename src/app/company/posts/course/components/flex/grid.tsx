import { ReactNode } from "react";

export default ({ children }: {  children: ReactNode }) => <div className="grid grid-cols-3 gap-4 gap-x-10 mt-8 w-full">{children}</div>