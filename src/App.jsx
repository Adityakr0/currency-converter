import { useState } from "react";
import InputBox from "./assets/components/InputBox";
import useCurrencyInfo from "./assets/hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
          url(https://bankpensacola.com/wp-content/uploads/2024/03/Foreign-currency.jpg)
        `,
      }}
    >
      <div className="w-full max-w-md bg-white/20 backdrop-blur-2xl 
                      rounded-3xl p-6 shadow-2xl border border-white/30">

        <h1 className="text-3xl font-extrabold text-white text-center mb-6">
          Currency Converter 💱
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-5"
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            selectCurrency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(value) => setAmount(value)}
          />

          <div className="flex justify-center">
            <button
              type="button"
              onClick={swap}
              className="bg-white text-blue-700 px-5 py-2 rounded-full 
                         font-bold shadow-lg hover:scale-110 transition"
            >
              ⇅ Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            selectCurrency={to}
            onCurrencyChange={(currency) => setTo(currency)}
            amountDisable
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 
                       text-white py-3 rounded-2xl 
                       font-bold tracking-wide transition"
          >
            Convert {from.toUpperCase()} → {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
