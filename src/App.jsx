import { useMemo, useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  const [countryCode, setCountryCode] = useState("us");
  const country = useMemo(() => countryCode, [countryCode]);
  return (
    <div>
      <Navbar
        category={category}
        setCategory={setCategory}
        setCountryCode={setCountryCode}
      />
      <NewsBoard category={category} countryCode={country} />
    </div>
  );
};
export default App;
