import { useEffect, useState } from "react";
import axios from "axios";
import Title from "./Components/Title";
import { currenciesList } from "./assets/CurrencyList";
import FromCurrencyBox from "./Components/FromCurrencyBox";
import MainCard from "./Components/MainCard";
import ToCurrencyBox from "./Components/ToCurrencyBox";

const App = () => {

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const [fromCurrency, setFromCurrency] = useState([
    "USD",
    "United States Dollar",
    "United States",
    "$",
    "https://flagcdn.com/w320/us.png",
  ]);

  const [toCurrency, setToCurrency] = useState([
    "PKR",
    "Pakistani Rupee",
    "Pakistan",
    "₨",
    "https://flagcdn.com/w320/pk.png",
  ]);

  const [fromCurrencyVisible, setfromCurrencyVisible] = useState(false);
  const [toCurrencyVisible, setToCurrencyVisible] = useState(false);

  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);

  useEffect(() => {
    if(fromAmount === "" || isNaN(fromAmount) || Number(fromAmount) < 0) {
      setToAmount(0)
      return;
    }

    const fetchingAPI = async () => {
      try {
        setError(null)
        setIsLoading(true)
        const response = await axios.get(
          `https://api.frankfurter.dev/v2/rate/${fromCurrency[0]}/${toCurrency[0]}`,
        );
        const toFinalAmount = response.data.rate * Number(fromAmount)
        setToAmount(toFinalAmount.toFixed(2))
        console.log(response.data);
      } catch (error) {
        setError("Couldn't fetch rate, try again")
      } finally {
        setIsLoading(false)
      }
    };
    fetchingAPI();
  }, [fromCurrency, toCurrency, fromAmount]);

  const closeFromCurrencyBox = () => {
    setfromCurrencyVisible(false);
  };
  
  const openFromCurrencyBox = () => {
    setfromCurrencyVisible(true);
  };

  const openToCurrencyBox = () => {
    setToCurrencyVisible(true);
  };

  const closeToCurrencyBox = () => {
    setToCurrencyVisible(false);
  };

  const currencyList = currenciesList;

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-[#0d0f24] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(52,211,153,0.15),transparent),radial-gradient(ellipse_60%_50%_at_100%_100%,rgba(99,102,241,0.12),transparent)]">
      <Title />
      <div className="flex-1 flex items-center justify-center px-2 pb-10">
        <MainCard
          isLoading={isLoading}
          error={error}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          fromAmount={fromAmount}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
          setFromAmount={setFromAmount}
          openFromCurrencyBox={openFromCurrencyBox}
          openToCurrencyBox={openToCurrencyBox}
          toAmount={toAmount}
        />
      </div>
      {(fromCurrencyVisible || toCurrencyVisible) && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
      )}
      <div className="relative z-50">
        {fromCurrencyVisible && (
          <FromCurrencyBox
            closeFromCurrencyBox={closeFromCurrencyBox}
            setFromCurrencyy={setFromCurrency}
            currencyList={currencyList}
          />
        )}
        {toCurrencyVisible && (
          <ToCurrencyBox
            closeToCurrencyBox={closeToCurrencyBox}
            currencyList={currencyList}
            setToCurrency={setToCurrency}
          />
        )}
      </div>
    </div>
  );
};

export default App;