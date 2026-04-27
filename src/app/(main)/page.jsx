import { redirect } from "next/navigation";

const defaultId = "01"
const HomePage = async () => {

  return (
    redirect(`/category/${defaultId}`)
  );

};

export default HomePage;