import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="flex flex-row justify-center items-center mt-24">
      <SignIn />
    </div>
  ) 
   
}